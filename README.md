cat > /mnt/user-data/outputs/banner.svg << 'SVGEOF'
<svg width="100%" viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Renuka GitHub banner</title>

  <defs>
    <pattern id="bg_dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="#080810"/>
      <rect x="9" y="9" width="2" height="2" fill="#ffffff" opacity="0.06"/>
    </pattern>
    <pattern id="scan" x="0" y="0" width="1" height="3" patternUnits="userSpaceOnUse">
      <rect width="1" height="1" fill="#000000" opacity="0.2"/>
    </pattern>
    <pattern id="floor_checker" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <rect width="16" height="16" fill="#220a18"/>
      <rect x="0" y="0" width="8" height="8" fill="#1a0612"/>
      <rect x="8" y="8" width="8" height="8" fill="#1a0612"/>
    </pattern>
    <filter id="led_glow">
      <feGaussianBlur stdDeviation="1.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="name_glow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="680" height="420" fill="url(#bg_dots)"/>
  <rect x="60"  y="25" width="3" height="3" fill="#fff" opacity="0.1"/>
  <rect x="200" y="12" width="2" height="2" fill="#fff" opacity="0.08"/>
  <rect x="480" y="20" width="3" height="3" fill="#fff" opacity="0.09"/>
  <rect x="610" y="40" width="2" height="2" fill="#fff" opacity="0.11"/>

  <rect x="102" y="32" width="490" height="342" rx="18" fill="#000000" opacity="0.45"/>
  <rect x="92"  y="22"  width="490" height="342" rx="16" fill="#cec2a8"/>
  <rect x="96"  y="24"  width="482" height="10"  rx="5"  fill="#e2d6bc" opacity="0.9"/>
  <rect x="92"  y="22"  width="20"  height="342" rx="8"  fill="#b8ac92" opacity="0.6"/>
  <rect x="552" y="22"  width="30"  height="342" rx="8"  fill="#a89e84" opacity="0.7"/>
  <rect x="92"  y="328" width="490" height="36"  rx="8"  fill="#a89e84" opacity="0.8"/>
  <rect x="120" y="42"  width="432" height="276" rx="12" fill="#1a0a18"/>
  <rect x="130" y="52"  width="412" height="256" rx="6"  fill="#120410"/>
  <rect x="130" y="52"  width="412" height="256" rx="6"  fill="#ff50a0" opacity="0.04"/>
  <rect x="130" y="52"  width="412" height="256" rx="6"  fill="url(#scan)"/>
  <rect x="136" y="56"  width="90"  height="5"   rx="2"  fill="#ffffff" opacity="0.04"/>
  <rect x="136" y="56"  width="5"   height="60"  rx="2"  fill="#ffffff" opacity="0.03"/>
  <rect x="292" y="362" width="88"  height="16"  rx="4"  fill="#b8ac92"/>
  <rect x="222" y="376" width="228" height="22"  rx="6"  fill="#c8bc9e"/>
  <rect x="226" y="378" width="220" height="10"  rx="3"  fill="#ddd2b4" opacity="0.6"/>
  <rect x="222" y="392" width="228" height="6"   rx="3"  fill="#b0a488"/>
  <rect x="112" y="338" width="38" height="4" rx="1" fill="#9a9078"/>
  <rect x="112" y="344" width="38" height="4" rx="1" fill="#9a9078"/>
  <rect x="112" y="350" width="38" height="4" rx="1" fill="#9a9078"/>
  <rect x="538" y="340" width="22" height="22" rx="11" fill="#c8aa50"/>
  <rect x="542" y="344" width="14" height="14" rx="7"  fill="#e8c464"/>
  <rect x="338" y="340" width="62" height="9"  rx="2"  fill="#9a9078"/>
  <rect x="340" y="342" width="58" height="5"  rx="1"  fill="#847a62"/>
  <rect x="172" y="346" width="7" height="7" rx="3" fill="#ff3080" opacity="0.95"/>
  <rect x="184" y="346" width="7" height="7" rx="3" fill="#3a1a38" opacity="0.7"/>

  <rect x="130" y="258" width="412" height="50" fill="url(#floor_checker)"/>
  <rect x="130" y="258" width="412" height="3"  fill="#ff60a0" opacity="0.4"/>
  <rect x="130" y="274" width="30"  height="34" fill="#2e0a20"/>
  <rect x="160" y="266" width="30"  height="42" fill="#240618"/>
  <rect x="190" y="274" width="30"  height="34" fill="#2e0a20"/>
  <rect x="220" y="260" width="30"  height="48" fill="#240618"/>
  <rect x="130" y="274" width="120" height="3"  fill="#ff60a0" opacity="0.5"/>
  <rect x="356" y="270" width="30"  height="38" fill="#2e0a20"/>
  <rect x="386" y="262" width="30"  height="46" fill="#240618"/>
  <rect x="416" y="270" width="30"  height="38" fill="#2e0a20"/>
  <rect x="446" y="274" width="30"  height="34" fill="#240618"/>
  <rect x="476" y="266" width="30"  height="42" fill="#2e0a20"/>
  <rect x="506" y="274" width="36"  height="34" fill="#240618"/>
  <rect x="356" y="270" width="186" height="3"  fill="#ff60a0" opacity="0.5"/>

  <g transform="translate(140,218)"><rect x="4" y="0" width="14" height="2" fill="#ff88cc"/><rect x="2" y="2" width="18" height="2" fill="#ff88cc"/><rect x="0" y="4" width="22" height="18" fill="#ff88cc"/><rect x="2" y="22" width="18" height="4" fill="#ff88cc"/><rect x="0" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="8" width="4" height="5" fill="#220066"/><rect x="14" y="8" width="4" height="5" fill="#220066"/><rect x="5" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#ff88cc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#ff88cc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#ff88cc"/></g>
  <g transform="translate(180,226)"><rect x="4" y="0" width="14" height="2" fill="#e870bc"/><rect x="2" y="2" width="18" height="2" fill="#e870bc"/><rect x="0" y="4" width="22" height="18" fill="#e870bc"/><rect x="2" y="22" width="18" height="4" fill="#e870bc"/><rect x="0" y="8" width="2" height="6" fill="#f090cc" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#f090cc" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="8" width="4" height="5" fill="#220066"/><rect x="14" y="8" width="4" height="5" fill="#220066"/><rect x="5" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#cc40a0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#cc40a0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#e870bc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#e870bc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#e870bc"/></g>
  <g transform="translate(220,210)"><rect x="4" y="0" width="14" height="2" fill="#ff88cc"/><rect x="2" y="2" width="18" height="2" fill="#ff88cc"/><rect x="0" y="4" width="22" height="18" fill="#ff88cc"/><rect x="2" y="22" width="18" height="4" fill="#ff88cc"/><rect x="0" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="9" width="4" height="4" fill="#440088"/><rect x="14" y="9" width="4" height="4" fill="#440088"/><rect x="5" y="9" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="9" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#ff88cc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#ff88cc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#ff88cc"/></g>
  <g transform="translate(368,218)"><rect x="4" y="0" width="14" height="2" fill="#ff88cc"/><rect x="2" y="2" width="18" height="2" fill="#ff88cc"/><rect x="0" y="4" width="22" height="18" fill="#ff88cc"/><rect x="2" y="22" width="18" height="4" fill="#ff88cc"/><rect x="0" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="8" width="4" height="5" fill="#220066"/><rect x="14" y="8" width="4" height="5" fill="#220066"/><rect x="5" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#ff88cc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#ff88cc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#ff88cc"/></g>
  <g transform="translate(408,212)"><rect x="4" y="0" width="14" height="2" fill="#e870bc"/><rect x="2" y="2" width="18" height="2" fill="#e870bc"/><rect x="0" y="4" width="22" height="18" fill="#e870bc"/><rect x="2" y="22" width="18" height="4" fill="#e870bc"/><rect x="0" y="8" width="2" height="6" fill="#f090cc" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#f090cc" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="8" width="4" height="5" fill="#440088"/><rect x="14" y="8" width="4" height="5" fill="#440088"/><rect x="5" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#cc40a0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#cc40a0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#e870bc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#e870bc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#e870bc"/></g>
  <g transform="translate(452,220)"><rect x="4" y="0" width="14" height="2" fill="#ff88cc"/><rect x="2" y="2" width="18" height="2" fill="#ff88cc"/><rect x="0" y="4" width="22" height="18" fill="#ff88cc"/><rect x="2" y="22" width="18" height="4" fill="#ff88cc"/><rect x="0" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#ffaad8" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="9" width="4" height="4" fill="#220066"/><rect x="14" y="9" width="4" height="4" fill="#220066"/><rect x="5" y="9" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="9" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#ff60b0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#ff88cc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#ff88cc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#ff88cc"/></g>
  <g transform="translate(496,214)"><rect x="4" y="0" width="14" height="2" fill="#e870bc"/><rect x="2" y="2" width="18" height="2" fill="#e870bc"/><rect x="0" y="4" width="22" height="18" fill="#e870bc"/><rect x="2" y="22" width="18" height="4" fill="#e870bc"/><rect x="0" y="8" width="2" height="6" fill="#f090cc" opacity="0.6"/><rect x="20" y="8" width="2" height="6" fill="#f090cc" opacity="0.6"/><rect x="3" y="6" width="7" height="8" fill="#ffffff"/><rect x="12" y="6" width="7" height="8" fill="#ffffff"/><rect x="5" y="8" width="4" height="5" fill="#220066"/><rect x="14" y="8" width="4" height="5" fill="#220066"/><rect x="5" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="14" y="8" width="2" height="2" fill="#ffffff" opacity="0.8"/><rect x="2" y="14" width="4" height="2" fill="#cc40a0" opacity="0.55"/><rect x="16" y="14" width="4" height="2" fill="#cc40a0" opacity="0.55"/><rect x="2" y="26" width="4" height="6" fill="#e870bc"/><rect x="8" y="26" width="2" height="4" fill="#120410"/><rect x="10" y="26" width="4" height="6" fill="#e870bc"/><rect x="16" y="26" width="2" height="4" fill="#120410"/><rect x="18" y="26" width="4" height="6" fill="#e870bc"/></g>

  <rect x="162" y="196" width="6" height="6" rx="3" fill="#ffcc44" opacity="0.75"/>
  <rect x="200" y="188" width="6" height="6" rx="3" fill="#ffcc44" opacity="0.6"/>
  <rect x="392" y="192" width="6" height="6" rx="3" fill="#ffcc44" opacity="0.75"/>
  <rect x="432" y="184" width="6" height="6" rx="3" fill="#ffcc44" opacity="0.6"/>
  <rect x="472" y="192" width="6" height="6" rx="3" fill="#ffcc44" opacity="0.7"/>
  <rect x="512" y="188" width="6" height="6" rx="3" fill="#ffcc44" opacity="0.65"/>

  <rect x="162" y="68" width="348" height="76" rx="6" fill="#ff30a0" opacity="0.08" filter="url(#name_glow)"/>
  <rect x="162" y="68" width="348" height="76" rx="6" fill="none" stroke="#ff79c6" stroke-width="1.5" opacity="0.35"/>

  <g fill="#ff79c6" filter="url(#led_glow)">
    <rect x="179" y="74" width="7" height="7"/><rect x="188" y="74" width="7" height="7"/><rect x="197" y="74" width="7" height="7"/><rect x="206" y="74" width="7" height="7"/><rect x="215" y="74" width="7" height="7"/>
    <rect x="179" y="83" width="7" height="7"/><rect x="215" y="83" width="7" height="7"/>
    <rect x="179" y="92" width="7" height="7"/><rect x="188" y="92" width="7" height="7"/><rect x="197" y="92" width="7" height="7"/><rect x="206" y="92" width="7" height="7"/>
    <rect x="179" y="101" width="7" height="7"/><rect x="197" y="101" width="7" height="7"/>
    <rect x="179" y="110" width="7" height="7"/><rect x="206" y="110" width="7" height="7"/>
    <rect x="179" y="119" width="7" height="7"/><rect x="215" y="119" width="7" height="7"/>
  </g>
  <g fill="#ff79c6" filter="url(#led_glow)">
    <rect x="233" y="74" width="7" height="7"/><rect x="242" y="74" width="7" height="7"/><rect x="251" y="74" width="7" height="7"/><rect x="260" y="74" width="7" height="7"/><rect x="269" y="74" width="7" height="7"/>
    <rect x="233" y="83" width="7" height="7"/>
    <rect x="233" y="92" width="7" height="7"/><rect x="242" y="92" width="7" height="7"/><rect x="251" y="92" width="7" height="7"/><rect x="260" y="92" width="7" height="7"/>
    <rect x="233" y="101" width="7" height="7"/>
    <rect x="233" y="110" width="7" height="7"/>
    <rect x="233" y="119" width="7" height="7"/><rect x="242" y="119" width="7" height="7"/><rect x="251" y="119" width="7" height="7"/><rect x="260" y="119" width="7" height="7"/><rect x="269" y="119" width="7" height="7"/>
  </g>
  <g fill="#ff79c6" filter="url(#led_glow)">
    <rect x="287" y="74" width="7" height="7"/><rect x="331" y="74" width="7" height="7"/>
    <rect x="287" y="83" width="7" height="7"/><rect x="296" y="83" width="7" height="7"/><rect x="331" y="83" width="7" height="7"/>
    <rect x="287" y="92" width="7" height="7"/><rect x="305" y="92" width="7" height="7"/><rect x="331" y="92" width="7" height="7"/>
    <rect x="287" y="101" width="7" height="7"/><rect x="314" y="101" width="7" height="7"/><rect x="331" y="101" width="7" height="7"/>
    <rect x="287" y="110" width="7" height="7"/><rect x="322" y="110" width="7" height="7"/><rect x="331" y="110" width="7" height="7"/>
    <rect x="287" y="119" width="7" height="7"/><rect x="331" y="119" width="7" height="7"/>
  </g>
  <g fill="#ff79c6" filter="url(#led_glow)">
    <rect x="349" y="74" width="7" height="7"/><rect x="393" y="74" width="7" height="7"/>
    <rect x="349" y="83" width="7" height="7"/><rect x="393" y="83" width="7" height="7"/>
    <rect x="349" y="92" width="7" height="7"/><rect x="393" y="92" width="7" height="7"/>
    <rect x="349" y="101" width="7" height="7"/><rect x="393" y="101" width="7" height="7"/>
    <rect x="349" y="110" width="7" height="7"/><rect x="393" y="110" width="7" height="7"/>
    <rect x="349" y="119" width="7" height="7"/><rect x="358" y="119" width="7" height="7"/><rect x="367" y="119" width="7" height="7"/><rect x="376" y="119" width="7" height="7"/><rect x="385" y="119" width="7" height="7"/><rect x="393" y="119" width="7" height="7"/>
  </g>
  <g fill="#ff79c6" filter="url(#led_glow)">
    <rect x="411" y="74" width="7" height="7"/><rect x="449" y="74" width="7" height="7"/>
    <rect x="411" y="83" width="7" height="7"/><rect x="440" y="83" width="7" height="7"/>
    <rect x="411" y="92" width="7" height="7"/><rect x="431" y="92" width="7" height="7"/>
    <rect x="411" y="101" width="7" height="7"/><rect x="420" y="101" width="7" height="7"/>
    <rect x="411" y="110" width="7" height="7"/><rect x="431" y="110" width="7" height="7"/>
    <rect x="411" y="119" width="7" height="7"/><rect x="440" y="119" width="7" height="7"/>
  </g>
  <g fill="#ff79c6" filter="url(#led_glow)">
    <rect x="476" y="74" width="7" height="7"/><rect x="485" y="74" width="7" height="7"/>
    <rect x="467" y="83" width="7" height="7"/><rect x="494" y="83" width="7" height="7"/>
    <rect x="467" y="92" width="7" height="7"/><rect x="476" y="92" width="7" height="7"/><rect x="485" y="92" width="7" height="7"/><rect x="494" y="92" width="7" height="7"/>
    <rect x="467" y="101" width="7" height="7"/><rect x="494" y="101" width="7" height="7"/>
    <rect x="467" y="110" width="7" height="7"/><rect x="494" y="110" width="7" height="7"/>
    <rect x="467" y="119" width="7" height="7"/><rect x="494" y="119" width="7" height="7"/>
  </g>

  <text x="334" y="296" font-family="'Press Start 2P','Courier New',monospace" font-size="7" fill="#ff79c6" opacity="0.5" text-anchor="middle" letter-spacing="2">INSERT COIN TO CONTINUE</text>

  <rect x="130" y="52"  width="412" height="14" rx="4" fill="#000" opacity="0.2"/>
  <rect x="130" y="294" width="412" height="14" rx="4" fill="#000" opacity="0.25"/>
</svg>
SVGEOF
echo "done"


<!-- Social links -->
<p align="center">
  <a href="https://www.linkedin.com/in/renuka-bandepalli-bb93ba327/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  &nbsp;
  <a href="mailto:renukabandepai@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>

<br/>

---

## 🧰 Tech Stack

**Languages**

<p align="left">
  <img src="https://skillicons.dev/icons?i=java,python,c,cpp,html,css,js" />
</p>

**Tools & Platforms**

<p align="left">
  <img src="https://skillicons.dev/icons?i=github,vscode,arduino,figma" />
</p>

<br/>

---

## 🧠 Currently

```text
🎓  3rd year CS student 

```

<br/>

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=RenukaBandepalli&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true&count_private=true" height="160"/>
  &nbsp;&nbsp;
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RenukaBandepalli&layout=compact&theme=github_dark&hide_border=true" height="160"/>
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=RenukaBandepalli&theme=github-dark-blue&hide_border=true" />
</p>

<br/>

---




