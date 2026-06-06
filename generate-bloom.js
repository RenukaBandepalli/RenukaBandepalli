const { createCanvas } = require('canvas');
const fs = require('fs');
const GIFEncoder = require('gifencoder');

// Grid config
const WEEKS = 52, ROWS = 7;
const DOT = 11, GAP = 3, STEP = DOT + GAP;
const PADDING_TOP = 30, PADDING_LEFT = 4, PADDING_BOTTOM = 10;
const W = WEEKS * STEP + PADDING_LEFT;
const H = ROWS * STEP + PADDING_TOP + PADDING_BOTTOM;

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// GitHub API to get real contributions
async function getContributions(username, token) {
  const query = `query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }`;
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { username } })
  });
  const data = await res.json();
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  const grid = Array.from({length: ROWS}, () => Array(WEEKS).fill(0));
  weeks.forEach((week, w) => {
    if (w >= WEEKS) return;
    week.contributionDays.forEach(day => {
      const r = day.weekday;
      const count = day.contributionCount;
      grid[r][w] = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 9 ? 3 : 4;
    });
  });
  return grid;
}

function seeded(seed) {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return [r,g,b];
}

const GH_BASE = ['#161b22','#2d0a1e','#5c1a3a','#8c2857','#c2386e'];
const PETAL_COLORS = [
  null,
  ['#ffe0ee','#ffb3d1','#ff85b8'],
  ['#ffb6d4','#ff7aae','#f54d94'],
  ['#ff85c2','#ff3d8f','#e0006b'],
  ['#ff5fa8','#ff0066','#c20050'],
];
const CENTER_COLORS = [null,'#ff4d8f','#d4006b','#aa0055','#7a0040'];
const STEM_COLORS   = [null,'#c06080','#a04870','#884060','#703050'];

function drawFlower(ctx, x, y, level, progress, angleOffset) {
  const p = Math.min(1, Math.max(0, progress));
  if (p <= 0) return;
  const cx = x + DOT/2, cy = y + DOT/2;
  const petals = PETAL_COLORS[level];
  const nPetals = level === 1 ? 5 : level === 2 ? 6 : level === 3 ? 7 : 8;
  const maxR = DOT * 0.52 * p;
  const petalLen = maxR * 1.15;
  const petalW = maxR * 0.58;

  if (p > 0.3) {
    const stemH = DOT * 0.45 * Math.min(1, (p - 0.3) / 0.5);
    const [sr,sg,sb] = hexToRgb(STEM_COLORS[level]);
    ctx.strokeStyle = `rgb(${sr},${sg},${sb})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(cx, cy + maxR * 0.4);
    ctx.lineTo(cx, cy + maxR * 0.4 + stemH);
    ctx.stroke();
  }

  for (let i = 0; i < nPetals; i++) {
    const angle = (i / nPetals) * Math.PI * 2 + angleOffset;
    const px = cx + Math.cos(angle) * petalLen;
    const py = cy + Math.sin(angle) * petalLen;
    const lx = cx + Math.cos(angle + Math.PI/2) * petalW;
    const ly = cy + Math.sin(angle + Math.PI/2) * petalW;
    const rx = cx + Math.cos(angle - Math.PI/2) * petalW;
    const ry = cy + Math.sin(angle - Math.PI/2) * petalW;
    const [pr,pg,pb] = hexToRgb(i%2===0 ? petals[0] : petals[1]);
    ctx.fillStyle = `rgba(${pr},${pg},${pb},${0.9*p})`;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.quadraticCurveTo(lx, ly, px, py);
    ctx.quadraticCurveTo(rx, ry, cx, cy);
    ctx.fill();
  }

  const cr = maxR * 0.34;
  const [cr2,cg2,cb2] = hexToRgb(CENTER_COLORS[level]);
  ctx.fillStyle = `rgb(${cr2},${cg2},${cb2})`;
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(0.5, cr), 0, Math.PI*2);
  ctx.fill();
}

function drawFrame(canvas, grid, bloomState, offsets) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0d1117';
  ctx.fillRect(0, 0, W, H);

  // Month labels
  ctx.fillStyle = '#8b949e';
  ctx.font = '9px sans-serif';
  let dayCount = 0;
  for (let m = 0; m < 12; m++) {
    const wo = Math.floor((dayCount+1)/7);
    if (wo < WEEKS) ctx.fillText(MONTHS[m], PADDING_LEFT + wo*STEP, 10);
    dayCount += [31,28,31,30,31,30,31,31,30,31,30,31][m];
  }

  for (let r = 0; r < ROWS; r++) {
    for (let w = 0; w < WEEKS; w++) {
      const x = PADDING_LEFT + w*STEP, y = PADDING_TOP + r*STEP;
      const level = grid[r][w];
      ctx.fillStyle = GH_BASE[level];
      ctx.beginPath();
      ctx.roundRect(x, y, DOT, DOT, 2);
      ctx.fill();

      if (level > 0 && bloomState[r][w] > 0) {
        drawFlower(ctx, x, y, level, bloomState[r][w], offsets[r][w]);
      }
    }
  }
}

async function generate(username, token) {
  console.log('Fetching contributions for', username);
  let grid;
  try {
    grid = await getContributions(username, token);
    console.log('Got real contribution data');
  } catch(e) {
    console.log('Falling back to sample data:', e.message);
    const rng = seeded(2025);
    grid = Array.from({length: ROWS}, () =>
      Array.from({length: WEEKS}, () => {
        const v = rng();
        return v < 0.48 ? 0 : v < 0.65 ? 1 : v < 0.80 ? 2 : v < 0.93 ? 3 : 4;
      })
    );
  }

  const rng2 = seeded(99);
  const offsets = Array.from({length: ROWS}, () =>
    Array.from({length: WEEKS}, () => rng2() * Math.PI * 2)
  );

  const canvas = createCanvas(W, H);
  const encoder = new GIFEncoder(W, H);
  encoder.createReadStream().pipe(fs.createWriteStream('bloom.gif'));
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(50);
  encoder.setQuality(10);

  const TOTAL_FRAMES = 160;
  const BLOOM_DUR = 40;
  const bloomState = Array.from({length: ROWS}, () => Array(WEEKS).fill(0));
  const bloomTriggered = Array.from({length: ROWS}, () => Array(WEEKS).fill(false));
  const bloomStart = Array.from({length: ROWS}, () => Array(WEEKS).fill(-1));

  for (let f = 0; f < TOTAL_FRAMES; f++) {
    const waveCol = Math.floor((f / TOTAL_FRAMES) * (WEEKS + 4)) - 2;
    for (let r = 0; r < ROWS; r++) {
      for (let w = Math.max(0,waveCol-1); w <= Math.min(WEEKS-1,waveCol+1); w++) {
        if (!bloomTriggered[r][w] && grid[r][w] > 0) {
          bloomTriggered[r][w] = true;
          bloomStart[r][w] = f + r;
        }
      }
    }
    for (let r = 0; r < ROWS; r++) {
      for (let w = 0; w < WEEKS; w++) {
        if (bloomStart[r][w] >= 0) {
          const elapsed = f - bloomStart[r][w];
          const progress = elapsed / BLOOM_DUR;
          bloomState[r][w] = progress < 1 ? progress : Math.max(0, 1-(progress-1)*1.5);
        }
      }
    }
    drawFrame(canvas, grid, bloomState, offsets);
    encoder.addFrame(canvas.getContext('2d'));
  }

  encoder.finish();
  console.log('bloom.gif generated!');
}

const username = process.argv[2] || 'RenukaBandepalli';
const token = process.argv[3] || process.env.GITHUB_TOKEN || '';
generate(username, token);
