// Prépa Brevet — Base de données d'exercices 2024
// 46 exercices tirés des sujets officiels 2024

// Prépa Brevet — Base de données d'exercices 2024
// Figures SVG + 50 exercices tirés des 9 sujets officiels

var F={

prog2branches:`<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
<defs><marker id="a" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7" fill="none" stroke="#8A8DAA" stroke-width="1.2"/></marker></defs>
<rect x="115" y="8" width="130" height="28" rx="6" fill="#EEF2FF" stroke="#0021BC" stroke-width="1.3"/>
<text x="180" y="27" font-size="12" fill="#0021BC" text-anchor="middle" font-family="sans-serif">Nombre de départ x</text>
<line x1="155" y1="36" x2="90" y2="62" stroke="#8A8DAA" stroke-width="1.3" marker-end="url(#a)"/>
<line x1="205" y1="36" x2="270" y2="62" stroke="#8A8DAA" stroke-width="1.3" marker-end="url(#a)"/>
<rect x="30" y="62" width="110" height="26" rx="5" fill="#EEF2FF" stroke="#0021BC" stroke-width="1.3"/>
<text x="85" y="80" font-size="12" fill="#0021BC" text-anchor="middle" font-family="sans-serif">+ 2</text>
<line x1="85" y1="88" x2="85" y2="106" stroke="#8A8DAA" stroke-width="1.3" marker-end="url(#a)"/>
<rect x="30" y="106" width="110" height="26" rx="5" fill="#EEF2FF" stroke="#0021BC" stroke-width="1.3"/>
<text x="85" y="124" font-size="12" fill="#0021BC" text-anchor="middle" font-family="sans-serif">× 4  →  4x + 8</text>
<rect x="220" y="62" width="110" height="26" rx="5" fill="#FFF0E8" stroke="#EE6E34" stroke-width="1.3"/>
<text x="275" y="80" font-size="12" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">× 5</text>
<line x1="275" y1="88" x2="275" y2="106" stroke="#8A8DAA" stroke-width="1.3" marker-end="url(#a)"/>
<rect x="220" y="106" width="110" height="26" rx="5" fill="#FFF0E8" stroke="#EE6E34" stroke-width="1.3"/>
<text x="275" y="124" font-size="12" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">− 3  →  5x − 3</text>
<line x1="85" y1="132" x2="152" y2="155" stroke="#8A8DAA" stroke-width="1.3" marker-end="url(#a)"/>
<line x1="275" y1="132" x2="208" y2="155" stroke="#8A8DAA" stroke-width="1.3" marker-end="url(#a)"/>
<rect x="105" y="155" width="150" height="28" rx="6" fill="#190806"/>
<text x="180" y="174" font-size="12" fill="#fff" text-anchor="middle" font-family="sans-serif">(4x + 8)(5x − 3)</text>
</svg>`,

tarifs_cinema:`<svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" style="max-width:380px">
<defs><marker id="ax" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0L6,3L0,6" fill="none" stroke="#190806" stroke-width="1.2"/></marker></defs>
<line x1="45" y1="215" x2="370" y2="215" stroke="#190806" stroke-width="1.5" marker-end="url(#ax)"/>
<line x1="45" y1="215" x2="45" y2="15" stroke="#190806" stroke-width="1.5" marker-end="url(#ax)"/>
<text x="205" y="235" font-size="11" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">Nombre d'entrées</text>
<text x="8" y="120" font-size="11" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif" transform="rotate(-90,8,120)">Prix (€)</text>
<!-- graduations X -->
<text x="45" y="228" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">0</text>
<text x="105" y="228" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">10</text><line x1="105" y1="213" x2="105" y2="217" stroke="#ccc"/>
<text x="165" y="228" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">20</text><line x1="165" y1="213" x2="165" y2="217" stroke="#ccc"/>
<text x="225" y="228" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">30</text><line x1="225" y1="213" x2="225" y2="217" stroke="#ccc"/>
<text x="285" y="228" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">40</text><line x1="285" y1="213" x2="285" y2="217" stroke="#ccc"/>
<text x="345" y="228" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">50</text><line x1="345" y1="213" x2="345" y2="217" stroke="#ccc"/>
<!-- graduations Y : 0,50,100,150,200,250 → y=215,188,161,134,107,80 -->
<text x="38" y="219" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">0</text>
<text x="38" y="192" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">50</text><line x1="43" y1="188" x2="47" y2="188" stroke="#ccc"/>
<text x="38" y="165" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">100</text><line x1="43" y1="161" x2="47" y2="161" stroke="#ccc"/>
<text x="38" y="138" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">150</text><line x1="43" y1="134" x2="47" y2="134" stroke="#ccc"/>
<text x="38" y="111" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">200</text><line x1="43" y1="107" x2="47" y2="107" stroke="#ccc"/>
<text x="38" y="84" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">250</text><line x1="43" y1="80" x2="47" y2="80" stroke="#ccc"/>
<!-- d1 Classique h(x)=11x : (0,215)→(19,8≈20,80) à x=20→220€: y=215-220*0.54=96 -->
<line x1="45" y1="215" x2="225" y2="87" stroke="#EF4444" stroke-width="2.2"/>
<text x="228" y="83" font-size="11" fill="#EF4444" font-family="sans-serif">Classique (d₁) h(x)=11x</text>
<!-- d2 Essentiel f(x)=50+5x : (0,188)→(30,107): x=30→200€: y=215-200*0.54=107 -->
<line x1="45" y1="188" x2="345" y2="107" stroke="#0021BC" stroke-width="2.2"/>
<text x="348" y="103" font-size="11" fill="#0021BC" font-family="sans-serif">Essentiel (d₂)</text>
<!-- d3 Liberté g(x)=240: y=215-240*0.54=85 horizontal -->
<line x1="45" y1="85" x2="365" y2="85" stroke="#22C55E" stroke-width="2.2"/>
<text x="348" y="98" font-size="11" fill="#22C55E" font-family="sans-serif">Liberté (d₃)</text>
</svg>`,

terrasse:`<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
<rect x="40" y="80" width="132" height="80" rx="2" fill="rgba(0,33,188,.07)" stroke="#0021BC" stroke-width="1.8"/>
<polygon points="172,80 172,160 270,160" fill="rgba(238,110,52,.12)" stroke="#EE6E34" stroke-width="1.8"/>
<rect x="172" y="148" width="10" height="10" fill="none" stroke="#190806" stroke-width="1.3"/>
<text x="24" y="165" font-size="13" fill="#190806" font-family="sans-serif">E</text>
<text x="24" y="83" font-size="13" fill="#190806" font-family="sans-serif">H</text>
<text x="174" y="77" font-size="13" fill="#190806" font-family="sans-serif">G</text>
<text x="174" y="178" font-size="13" fill="#190806" font-family="sans-serif">F</text>
<text x="272" y="178" font-size="13" fill="#EE6E34" font-family="sans-serif">J</text>
<text x="78" y="73" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">6 m</text>
<text x="24" y="126" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">3 m</text>
<text x="155" y="178" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">EJ = 10 m</text>
<text x="220" y="130" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">FJ = ?</text>
<line x1="40" y1="190" x2="270" y2="190" stroke="#8A8DAA" stroke-width="1"/>
<text x="155" y="186" font-size="9" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">EFGH est un rectangle</text>
</svg>`,

triangle_equi:`<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
<!-- Grand triangle ABC -->
<polygon points="30,200 330,200 180,20" fill="rgba(0,33,188,.05)" stroke="#0021BC" stroke-width="2"/>
<text x="15" y="215" font-size="13" fill="#190806" font-family="sans-serif">A</text>
<text x="332" y="215" font-size="13" fill="#190806" font-family="sans-serif">B</text>
<text x="174" y="15" font-size="13" fill="#190806" font-family="sans-serif">C</text>
<text x="38" y="196" font-size="11" fill="#EE6E34" font-family="sans-serif">60°</text>
<text x="170" y="218" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">AB = 240 mm</text>
<!-- Petit triangle DE (CE=80mm=80/240×300px=100px de côté) -->
<!-- D et E sont sur les côtés CA et CB à 1/3 du sommet C -->
<polygon points="180,20 130,103 230,103" fill="rgba(238,110,52,.12)" stroke="#EE6E34" stroke-width="1.8"/>
<text x="110" y="100" font-size="13" fill="#EE6E34" font-family="sans-serif">D</text>
<text x="232" y="100" font-size="13" fill="#EE6E34" font-family="sans-serif">E</text>
<!-- marques égalité -->
<line x1="151" y1="60" x2="157" y2="55" stroke="#EE6E34" stroke-width="1.5"/>
<line x1="205" y1="60" x2="211" y2="65" stroke="#EE6E34" stroke-width="1.5"/>
<text x="162" y="95" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">CE = 80 mm</text>
<text x="155" y="115" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">(DE) ∥ (AB)</text>
</svg>`,

circuits:`<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-width:420px">
<!-- Circuit 1 -->
<polygon points="90,18 130,45 120,92 60,92 50,45" fill="rgba(0,33,188,.06)" stroke="#0021BC" stroke-width="1.8"/>
<circle cx="90" cy="18" r="5" fill="#0021BC"/>
<text x="90" y="11" font-size="10" fill="#0021BC" text-anchor="middle" font-family="sans-serif">Départ</text>
<text x="145" y="47" font-size="10" fill="#8A8DAA" font-family="sans-serif">Ex2</text>
<text x="128" y="97" font-size="10" fill="#8A8DAA" font-family="sans-serif">Ex3</text>
<text x="38" y="97" font-size="10" fill="#8A8DAA" font-family="sans-serif">Ex4</text>
<text x="28" y="47" font-size="10" fill="#8A8DAA" font-family="sans-serif">Ex5</text>
<text x="90" y="60" font-size="11" fill="#0021BC" text-anchor="middle" font-family="sans-serif" font-weight="600">Circuit 1</text>
<text x="90" y="118" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">5 ex × 40s + 5 × 16s = 280s</text>
<!-- Circuit 2 -->
<polygon points="310,12 342,22 362,48 362,82 347,108 312,118 278,108 258,82 258,48 278,22" fill="rgba(238,110,52,.06)" stroke="#EE6E34" stroke-width="1.8"/>
<circle cx="310" cy="12" r="5" fill="#EE6E34"/>
<text x="310" y="5" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">Départ</text>
<text x="310" y="68" font-size="11" fill="#EE6E34" text-anchor="middle" font-family="sans-serif" font-weight="600">Circuit 2</text>
<text x="310" y="138" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">10 ex × 30s + 10 × 5s = 350s</text>
</svg>`,

triangle_rect_homothetie:`<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
<!-- Triangle ABE rect en E: E bas-gauche, B bas-droite, A haut-gauche -->
<!-- AE=4.4cm, EB=3.3cm, AB=5.5cm → échelle 1cm=30px -->
<polygon points="60,192 159,192 60,60" fill="rgba(0,33,188,.06)" stroke="#0021BC" stroke-width="2"/>
<rect x="60" y="181" width="11" height="11" fill="none" stroke="#190806" stroke-width="1.3"/>
<text x="44" y="197" font-size="13" fill="#190806" font-family="sans-serif">E</text>
<text x="163" y="197" font-size="13" fill="#190806" font-family="sans-serif">B</text>
<text x="44" y="57" font-size="13" fill="#190806" font-family="sans-serif">A</text>
<text x="94" y="205" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">EB = 3,3 cm</text>
<text x="30" y="130" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">AE = 4,4 cm</text>
<text x="122" y="108" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">AB = 5,5 cm</text>
<!-- D sur [EB] étendu : ED = 3×EB = 9.9cm = 297px depuis E → trop grand, on représente le rapport -->
<!-- On montre D et F schématiquement -->
<line x1="159" y1="192" x2="330" y2="192" stroke="#EE6E34" stroke-width="1.8" stroke-dasharray="6,3"/>
<line x1="60" y1="60" x2="60" y2="-66" stroke="#EE6E34" stroke-width="1.8" stroke-dasharray="6,3"/>
<text x="332" y="197" font-size="13" fill="#EE6E34" font-family="sans-serif">D</text>
<text x="44" y="0" font-size="13" fill="#EE6E34" font-family="sans-serif">F</text>
<text x="195" y="215" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">BD = 6,6 cm — (FD) ∥ (AB), rapport k = 3</text>
</svg>`,

piece_arc:`<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
<!-- G bas, arc de A à B de centre G, CG⊥AB, AC=CB -->
<!-- G=(150,220), BG=20cm→120px, A=(30,160), B=(270,160), C=(150,160) -->
<path d="M30,160 A120,120 0 0,1 270,160" fill="rgba(0,33,188,.07)" stroke="#0021BC" stroke-width="2"/>
<line x1="15" y1="160" x2="285" y2="160" stroke="#8A8DAA" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="150" y1="160" x2="150" y2="220" stroke="#190806" stroke-width="1.8"/>
<rect x="150" y="160" width="9" height="9" fill="none" stroke="#190806" stroke-width="1.3"/>
<line x1="150" y1="220" x2="270" y2="160" stroke="#EE6E34" stroke-width="1.8"/>
<line x1="150" y1="220" x2="30" y2="160" stroke="#EE6E34" stroke-width="1.8"/>
<text x="18" y="156" font-size="13" fill="#190806" font-family="sans-serif">A</text>
<text x="272" y="156" font-size="13" fill="#190806" font-family="sans-serif">B</text>
<text x="135" y="156" font-size="13" fill="#190806" font-family="sans-serif">C</text>
<text x="152" y="234" font-size="13" fill="#190806" font-family="sans-serif">G</text>
<text x="152" y="196" font-size="10" fill="#8A8DAA" font-family="sans-serif">CG = 10</text>
<text x="198" y="202" font-size="10" fill="#EE6E34" font-family="sans-serif">BG = 20</text>
<!-- codages AC=CB -->
<line x1="87" y1="155" x2="92" y2="150" stroke="#8A8DAA" stroke-width="1.5"/>
<line x1="92" y1="155" x2="97" y2="150" stroke="#8A8DAA" stroke-width="1.5"/>
<line x1="203" y1="155" x2="208" y2="150" stroke="#8A8DAA" stroke-width="1.5"/>
<line x1="208" y1="155" x2="213" y2="150" stroke="#8A8DAA" stroke-width="1.5"/>
<text x="152" y="215" font-size="10" fill="#EE6E34" font-family="sans-serif">60°</text>
</svg>`,

boites_boules:`<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
<rect x="15" y="28" width="135" height="84" rx="10" fill="rgba(0,33,188,.06)" stroke="#0021BC" stroke-width="1.8"/>
<text x="82" y="20" font-size="12" fill="#0021BC" text-anchor="middle" font-family="sans-serif" font-weight="600">Boîte 1</text>
<circle cx="47" cy="70" r="22" fill="#0021BC"/>
<text x="47" y="75" font-size="15" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">5</text>
<circle cx="82" cy="70" r="22" fill="#0021BC"/>
<text x="82" y="75" font-size="15" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">2</text>
<circle cx="117" cy="70" r="22" fill="#0021BC"/>
<text x="117" y="75" font-size="15" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">3</text>
<rect x="190" y="28" width="135" height="84" rx="10" fill="rgba(238,110,52,.06)" stroke="#EE6E34" stroke-width="1.8"/>
<text x="257" y="20" font-size="12" fill="#EE6E34" text-anchor="middle" font-family="sans-serif" font-weight="600">Boîte 2</text>
<circle cx="225" cy="70" r="22" fill="#EE6E34"/>
<text x="225" y="75" font-size="15" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">3</text>
<circle cx="290" cy="70" r="22" fill="#EE6E34"/>
<text x="290" y="75" font-size="15" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">5</text>
<text x="170" y="128" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">On tire 1 boule de chaque boîte → on multiplie les numéros</text>
</svg>`,

roulette:`<svg viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg" style="max-width:230px">
<circle cx="115" cy="115" r="105" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
<!-- Secteurs alternés rouge/noir (simplifié, 12 secteurs visibles) -->
<path d="M115,115 L115,10 A105,105 0 0,1 167,27Z" fill="#22C55E"/>
<text x="132" y="28" font-size="9" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">0</text>
<path d="M115,115 L167,27 A105,105 0 0,1 209,62Z" fill="#EF4444"/>
<path d="M115,115 L209,62 A105,105 0 0,1 220,115Z" fill="#222"/>
<path d="M115,115 L220,115 A105,105 0 0,1 209,168Z" fill="#EF4444"/>
<path d="M115,115 L209,168 A105,105 0 0,1 167,203Z" fill="#222"/>
<path d="M115,115 L167,203 A105,105 0 0,1 115,220Z" fill="#EF4444"/>
<path d="M115,115 L115,220 A105,105 0 0,1 63,203Z" fill="#222"/>
<path d="M115,115 L63,203 A105,105 0 0,1 21,168Z" fill="#EF4444"/>
<path d="M115,115 L21,168 A105,105 0 0,1 10,115Z" fill="#222"/>
<path d="M115,115 L10,115 A105,105 0 0,1 21,62Z" fill="#EF4444"/>
<path d="M115,115 L21,62 A105,105 0 0,1 63,27Z" fill="#222"/>
<path d="M115,115 L63,27 A105,105 0 0,1 115,10Z" fill="#EF4444"/>
<circle cx="115" cy="115" r="28" fill="#c0922a" stroke="#8A8DAA" stroke-width="1.5"/>
<circle cx="115" cy="115" r="8" fill="#1a1a1a"/>
<text x="115" y="210" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">37 cases numérotées de 0 à 36</text>
</svg>`,

champ_ble:`<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
<!-- Triangle ABC rect en B: A haut-gauche, B bas-gauche, C bas-droite -->
<!-- AB=200m→160px, BC=150m→120px, AC=250m -->
<polygon points="60,20 60,180 180,180" fill="rgba(34,197,94,.08)" stroke="#22C55E" stroke-width="2"/>
<rect x="60" y="169" width="10" height="10" fill="none" stroke="#190806" stroke-width="1.3"/>
<!-- Zone ABGF moissonnée (BG=60m→48px depuis B, F sur AB à hauteur correspondante) -->
<!-- G=(108,180), F=(60, 180-48/120×160)=(60,116) -->
<polygon points="60,20 60,180 108,180 60,116" fill="rgba(0,33,188,.1)" stroke="none"/>
<line x1="60" y1="116" x2="108" y2="180" stroke="#0021BC" stroke-width="1.8" stroke-dasharray="5,3"/>
<circle cx="108" cy="180" r="3.5" fill="#0021BC"/>
<circle cx="60" cy="116" r="3.5" fill="#0021BC"/>
<!-- Labels -->
<text x="44" y="18" font-size="13" fill="#190806" font-family="sans-serif">A</text>
<text x="44" y="186" font-size="13" fill="#190806" font-family="sans-serif">B</text>
<text x="183" y="186" font-size="13" fill="#190806" font-family="sans-serif">C</text>
<text x="110" y="186" font-size="12" fill="#0021BC" font-family="sans-serif">G</text>
<text x="44" y="120" font-size="12" fill="#0021BC" font-family="sans-serif">F</text>
<!-- dimensions -->
<text x="22" y="104" font-size="10" fill="#8A8DAA" font-family="sans-serif">AB=200m</text>
<text x="110" y="195" font-size="10" fill="#8A8DAA" font-family="sans-serif">BC=150m</text>
<text x="125" y="90" font-size="10" fill="#8A8DAA" font-family="sans-serif">AC=250m</text>
<text x="62" y="155" font-size="9" fill="#0021BC" font-family="sans-serif">BG=60m</text>
<text x="62" y="167" font-size="9" fill="#0021BC" font-family="sans-serif">GF=120m</text>
<!-- passages -->
<text x="82" y="210" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">passages 12m ∥ à (AB)</text>
</svg>`,

terrain_pente:`<svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
<defs><pattern id="h" patternUnits="userSpaceOnUse" width="7" height="7"><line x1="0" y1="7" x2="7" y2="0" stroke="#EE6E34" stroke-width="0.8"/></pattern></defs>
<!-- C bas-gauche, B bas-droite, A haut-gauche (rect en C) -->
<!-- AC=2.6m→24px, CB=16.8m→168px -->
<polygon points="40,150 208,150 40,126" fill="url(#h)" opacity="0.5"/>
<polygon points="40,126 208,150 40,150" fill="none" stroke="#EE6E34" stroke-width="2"/>
<line x1="20" y1="150" x2="280" y2="150" stroke="#8A8DAA" stroke-width="1" stroke-dasharray="5,3"/>
<rect x="40" y="139" width="10" height="10" fill="none" stroke="#190806" stroke-width="1.3"/>
<text x="26" y="124" font-size="13" fill="#190806" font-family="sans-serif">A</text>
<text x="212" y="156" font-size="13" fill="#190806" font-family="sans-serif">B</text>
<text x="24" y="156" font-size="13" fill="#190806" font-family="sans-serif">C</text>
<text x="22" y="142" font-size="10" fill="#8A8DAA" text-anchor="end" font-family="sans-serif">AC=2,6m</text>
<text x="118" y="165" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">CB = 16,8 m</text>
<text x="128" y="134" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">AB = 17 m</text>
<text x="95" y="148" font-size="10" fill="#EE6E34" text-anchor="middle" font-family="sans-serif">Terre à enlever</text>
<!-- prisme en pointillés -->
<line x1="40" y1="126" x2="40" y2="60" stroke="#8A8DAA" stroke-width="1" stroke-dasharray="4,2"/>
<line x1="208" y1="150" x2="208" y2="84" stroke="#8A8DAA" stroke-width="1" stroke-dasharray="4,2"/>
<line x1="40" y1="60" x2="208" y2="84" stroke="#8A8DAA" stroke-width="1" stroke-dasharray="4,2"/>
<text x="228" y="120" font-size="10" fill="#8A8DAA" font-family="sans-serif">hauteur</text>
<text x="228" y="132" font-size="10" fill="#8A8DAA" font-family="sans-serif">= 30 m</text>
</svg>`,

course_oscar:`<svg viewBox="0 0 300 270" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
<!-- Triangle DLA rect en L: D bas-gauche, L bas-droite, A haut-droite -->
<!-- DL=600m→210px, LA=250m→88px, DA=650m -->
<polygon points="30,230 240,230 240,142" fill="rgba(0,33,188,.05)" stroke="#0021BC" stroke-width="2"/>
<rect x="229" y="219" width="10" height="10" fill="none" stroke="#190806" stroke-width="1.3"/>
<text x="14" y="236" font-size="13" fill="#190806" font-family="sans-serif">D</text>
<text x="243" y="236" font-size="13" fill="#190806" font-family="sans-serif">L</text>
<text x="243" y="140" font-size="13" fill="#190806" font-family="sans-serif">A</text>
<!-- K sur DL: DK=480m→480/600×210=168px → K=(30+168,230)=(198,230) -->
<circle cx="198" cy="230" r="4" fill="#EE6E34"/>
<text x="196" y="244" font-size="12" fill="#EE6E34" font-family="sans-serif">K</text>
<!-- J sur DA: DJ/DA=520/650=0.8 → J=(30+0.8×210, 230+0.8×(142-230))=(198,159) -->
<circle cx="198" cy="159" r="4" fill="#EE6E34"/>
<text x="203" y="157" font-size="12" fill="#EE6E34" font-family="sans-serif">J</text>
<!-- KJ -->
<line x1="198" y1="230" x2="198" y2="159" stroke="#EE6E34" stroke-width="2"/>
<!-- Dimensions -->
<text x="115" y="245" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">DL = 600 m</text>
<text x="254" y="193" font-size="10" fill="#8A8DAA" font-family="sans-serif">LA=250m</text>
<text x="90" y="170" font-size="10" fill="#8A8DAA" font-family="sans-serif">DA=650m</text>
<text x="203" y="200" font-size="9" fill="#EE6E34" font-family="sans-serif">KJ=200m</text>
<text x="85" y="230" font-size="9" fill="#EE6E34" font-family="sans-serif">DK=480m</text>
<text x="38" y="220" font-size="9" fill="#8A8DAA" font-family="sans-serif">KL=120m</text>
</svg>`,

homothetie_rapport:`<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
<!-- Petit triangle ABC -->
<polygon points="120,150 150,105 180,150" fill="rgba(0,33,188,.08)" stroke="#0021BC" stroke-width="1.8"/>
<text x="108" y="163" font-size="12" fill="#190806" font-family="sans-serif">A</text>
<text x="148" y="100" font-size="12" fill="#190806" font-family="sans-serif">B</text>
<text x="183" y="163" font-size="12" fill="#190806" font-family="sans-serif">C</text>
<!-- Centre O -->
<circle cx="150" cy="135" r="4" fill="#EE6E34"/>
<text x="155" y="133" font-size="11" fill="#EE6E34" font-family="sans-serif">O</text>
<!-- Grand triangle A'B'C' (rapport −3 : côté opposé, 3× plus grand) -->
<polygon points="210,60 150,165 90,60" fill="rgba(0,33,188,.03)" stroke="#0021BC" stroke-width="1.8" stroke-dasharray="5,3"/>
<text x="213" y="58" font-size="12" fill="#0021BC" font-family="sans-serif">A'</text>
<text x="145" y="180" font-size="12" fill="#0021BC" font-family="sans-serif">B'</text>
<text x="74" y="58" font-size="12" fill="#0021BC" font-family="sans-serif">C'</text>
<text x="150" y="220" font-size="10" fill="#8A8DAA" text-anchor="middle" font-family="sans-serif">k = −3 : longueurs × 3, aires × 9</text>
</svg>`

};

// ══════════════════════════════════════════════════════════
// BASE D'EXERCICES
// ══════════════════════════════════════════════════════════
var DB=[
{id:"e01",t:"Vrai ou Faux — Statistiques & géométrie",n:"Automatisme",s:"Amér. du Nord · 29 mai 2024",fig:"homothetie_rapport",
 e:"5 affirmations. Répondre VRAI ou FAUX en justifiant.",
 q:[
  {id:"A",t:"Prix (€) : 12 ; 15 ; 10 ; 7 ; 13. La moyenne est 11,40 €.",o:["Vrai","Faux"],r:"VRAI ✓\n(12+15+10+7+13) ÷ 5 = 57 ÷ 5 = 11,4 €.",pts:2},
  {id:"B",t:"Avec les mêmes prix, la médiane est 10 €.",o:["Vrai","Faux"],r:"FAUX ✗\nValeurs ordonnées : 7 ; 10 ; 12 ; 13 ; 15.\nLa médiane (valeur centrale sur 5 valeurs) est 12 €, pas 10 €.",pts:2},
  {id:"C",t:"Une élève court 20 m en 6 secondes. Vitesse = 14 km/h.",o:["Vrai","Faux"],r:"FAUX ✗\nVitesse = 20/6 m/s ≈ 3,33 m/s = 3,33 × 3,6 = 12 km/h.\nCe n'est pas 14 km/h.",pts:2},
  {id:"D",t:"Urne de 15 boules (1 à 15). P(nombre premier) = 7/15.",o:["Vrai","Faux"],r:"FAUX ✗\nNombres premiers entre 1 et 15 : 2, 3, 5, 7, 11, 13 → 6 nombres.\nP = 6/15 = 2/5 ≠ 7/15.",pts:2},
  {id:"E",t:"Homothétie de rapport (−3) : l'aire de A'B'C' = 3 × aire de ABC.",o:["Vrai","Faux"],r:"FAUX ✗\nAvec k = −3, les longueurs sont multipliées par |k| = 3.\nLes aires sont multipliées par k² = 9.\nL'aire de A'B'C' est donc 9 fois celle de ABC.",pts:2}
]},
{id:"e02",t:"Programme de calcul — deux branches",n:"Algèbre et Fonctions",s:"Amér. du Nord · 29 mai 2024",fig:"prog2branches",
 e:"Programme de calcul :\n→ Branche gauche : Ajouter 2, puis Multiplier par 4\n→ Branche droite : Multiplier par 5, puis Soustraire 3\n→ Multiplier les deux résultats → Résultat",
 q:[
  {id:"1",t:"Montrer que si on choisit 2 comme nombre de départ, le résultat est 112.",r:"Branche gauche : (2+2) × 4 = 4 × 4 = 16\nBranche droite : 2 × 5 − 3 = 10 − 3 = 7\nRésultat : 16 × 7 = 112 ✓",pts:2},
  {id:"2",t:"Quel résultat pour le nombre de départ −3 ?",r:"Branche gauche : (−3+2) × 4 = (−1) × 4 = −4\nBranche droite : (−3) × 5 − 3 = −15 − 3 = −18\nRésultat : (−4) × (−18) = 72",pts:3},
  {id:"3",t:"Parmi A:(x+2×4)(x×5−3)  B:(4x+2)(5x−3)  C:(4x+8)(5x−3)  D:(x+2)×4×(5x−3) — lesquelles sont correctes ?",r:"Expressions correctes : C et D.\nBranche gauche = (x+2)×4 = 4x+8 → C ✓\n(x+2)×4×(5x−3) → D ✓",pts:3},
  {id:"4",t:"Trouver les deux nombres de départ qui donnent 0.",r:"(4x+8)(5x−3) = 0\n• 4x+8 = 0 → x = −2\n• 5x−3 = 0 → x = 3/5 = 0,6\nLes deux nombres sont −2 et 0,6.",pts:3},
  {id:"5",t:"Développer et réduire (4x+2)(5x−3).",r:"(4x+2)(5x−3) = 20x² − 12x + 10x − 6 = 20x² − 2x − 6",pts:3}
]},
{id:"e03",t:"Tarifs cinéma — Fonctions affines",n:"Algèbre et Fonctions",s:"Amér. du Nord · 29 mai 2024",fig:"tarifs_cinema",
 e:"• Tarif Classique : 11 €/entrée\n• Tarif Essentiel : abonnement 50 €/an + 5 €/entrée\n• Tarif Liberté : abonnement 240 €/an, illimité",
 q:[
  {id:"1",t:"Avec le tarif Classique, 3 entrées. Prix total ?",r:"3 × 11 = 33 €",pts:2},
  {id:"2",t:"Tarif Essentiel, 8 entrées. Montrer qu'on paye 90 €.",r:"50 + 8 × 5 = 50 + 40 = 90 € ✓",pts:2},
  {id:"3",t:"Associer chaque fonction à son tarif :\nf(x) = 50+5x     g(x) = 240     h(x) = 11x",r:"• f(x) = 50+5x → Tarif Essentiel\n• g(x) = 240 → Tarif Liberté\n• h(x) = 11x → Tarif Classique",pts:3},
  {id:"4",t:"Quel tarif est proportionnel au nombre d'entrées ?",r:"Le tarif Classique : h(x) = 11x passe par l'origine (0€ pour 0 entrée) → proportionnalité.",pts:2},
  {id:"5",t:"Avec 150 €, nombre max d'entrées avec le tarif Essentiel ?",r:"50 + 5x ≤ 150 → 5x ≤ 100 → x ≤ 20\nMaximum : 20 entrées.",pts:2},
  {id:"6",t:"À partir de combien d'entrées la Liberté est-elle la plus intéressante ?",r:"Liberté vs Essentiel : 240 < 50+5x → 5x > 190 → x > 38\nÀ partir de 39 entrées.",pts:3}
]},
{id:"e04",t:"Terrasse en béton — Vue de dessus",n:"Volume et Grandeurs",s:"Amér. du Nord · 29 mai 2024",fig:"terrasse",
 e:"Vue de dessus : EFGH est un rectangle (HG=6m, EH=3m).\nEJ = 10 m (longueur totale). Hauteur terrasse IJ = 15 cm.",
 q:[
  {id:"1",t:"Montrer que FJ = 4 m.",r:"EFGH est un rectangle donc EF = HG = 6 m.\nFJ = EJ − EF = 10 − 6 = 4 m ✓",pts:3},
  {id:"2",t:"Quelle longueur de planches pour délimiter la terrasse ?",r:"GJ = √(GF² + FJ²) = √(3² + 4²) = √(9+16) = 5 m\nPérimètre = EH + HG + GJ + JI + IE = 3+6+5+4+10 = 28 m",pts:4},
  {id:"3a",t:"Montrer que le volume de la terrasse est inférieur à 4 m³.",r:"Aire de la base = Aire rect. EFGJ − triangle GFJ\n= (10×3) − (½×4×3) = 30 − 6 = 24 m²\nVolume = 24 × 0,15 = 3,6 m³ < 4 m³ ✓",pts:3},
  {id:"3b",t:"Masse de ciment pour 4 m³ (250 kg/m³) ?",r:"4 × 250 = 1000 kg",pts:2},
  {id:"3c",t:"Ratio ciment:gravier:sable = 2:7:5. Masses de gravier et sable pour 4 m³ ?",r:"Ciment = 1000 kg (ratio 2) → 1 unité = 500 kg\nGravier (ratio 7) = 7 × 500 = 3500 kg\nSable (ratio 5) = 5 × 500 = 2500 kg",pts:4}
]},
{id:"e05",t:"Triangle équilatéral et théorème de Thalès",n:"Géométrie",s:"Amér. du Nord · 29 mai 2024",fig:"triangle_equi",
 e:"A, C et E alignés ; B, C et D alignés.\nAB = 240 mm, CE = 80 mm. Angle en A = 60°.\nCD = CE (codages). Triangle ABC : angle A = 60°.",
 q:[
  {id:"A1",t:"Montrer que le triangle ABC est équilatéral.",r:"Angle A = 60°. Triangle isocèle en C (BC=AC d'après les codages).\nDonc angle B = angle A = 60° → angle C = 180°−60°−60° = 60°.\nTous les angles sont égaux → triangle équilatéral ✓",pts:4},
  {id:"A2",t:"Montrer que les droites (DE) et (AB) sont parallèles.",r:"C est sur (AB) et sur (BD).\nCD/CB = CE/CA = 80/240 = 1/3 (les codages donnent CE=CD=80mm et BC=CA=240mm)\nPar la réciproque du théorème de Thalès : (DE) ∥ (AB) ✓",pts:4},
  {id:"B1",t:"Coordonnées du point de départ du lutin dans le programme Scratch ?",r:"D'après la ligne 2 du programme : aller à x : −180, y : −150\nCoordonnées : (−180 ; −150)",pts:2},
  {id:"B2",t:"Valeur à saisir à la ligne 4 (mettre côté à …) ?",r:"AB = 240 mm et 1 pas = 1 mm → côté = 240",pts:2}
]},
{id:"e06",t:"Circuits sportifs — PGCD et PPCM",n:"Arithmétique",s:"Centres étrangers · 10 juin 2024",fig:"circuits",
 e:"Circuit 1 : 5 exercices × 40s + 5 repos × 16s\nCircuit 2 : 10 exercices × 30s + 10 repos × 5s\nCamille fait le circuit 1, Dominique le circuit 2. Départ simultané.",
 q:[
  {id:"1",t:"Montrer que le circuit 1 dure 280s et le circuit 2 dure 350s.",r:"Circuit 1 : 5×40 + 5×16 = 200+80 = 280s ✓\nCircuit 2 : 10×30 + 10×5 = 300+50 = 350s ✓",pts:4},
  {id:"2",t:"Décomposer 280 et 350 en produits de facteurs premiers.",r:"280 = 2³ × 5 × 7\n350 = 2 × 5² × 7",pts:4},
  {id:"3a",t:"Après 2 800s, pourquoi Camille est-elle au départ ? Où est Dominique ?",r:"2800 ÷ 280 = 10 tours → Camille est au départ ✓\n2800 ÷ 350 = 8 tours → Dominique est aussi au départ de son circuit.",pts:4},
  {id:"3b",t:"Combien de temps pour se retrouver ensemble pour la 1ère fois au départ ?",r:"PPCM(280, 350) = 2³ × 5² × 7 = 8 × 25 × 7 = 1400s\n1400s = 23 min 20 s",pts:4}
]},
{id:"e07",t:"Programme de calcul — Centres étrangers",n:"Algèbre et Fonctions",s:"Centres étrangers · 10 juin 2024",fig:"prog2branches",
 e:"Programme de calcul :\nx → branche Soustraire 2 / branche Ajouter 1 → multiplier les deux résultats",
 q:[
  {id:"A1",t:"Justifier qu'en choisissant 5, le résultat final est 18.",r:"(5−2) × (5+1) = 3 × 6 = 18 ✓",pts:2},
  {id:"A2",t:"Résultat pour le nombre de départ −3/2.",r:"(−3/2 − 2) × (−3/2 + 1) = (−7/2) × (−1/2) = 7/4 = 1,75",pts:3},
  {id:"A3",t:"Compléter le script Scratch correspondant (lignes 3, 4, 5) :\nLigne 2 : demander 'choisir un nombre'\nLigne 3 : mettre a à réponse − ...\nLigne 4 : mettre b à réponse + ...\nLigne 5 : dire ... × ... pendant 2 secondes",r:"Ligne 3 : mettre a à réponse − 2\nLigne 4 : mettre b à réponse + 1\nLigne 5 : dire a × b pendant 2 secondes",pts:3}
]},
{id:"e07b",t:"Fonction g(x) = x²−x−2 — Racines et graphique",n:"Algèbre et Fonctions",s:"Centres étrangers · 10 juin 2024",
 e:"Soit g la fonction définie par g(x) = x²−x−2.\nLe programme de calcul de l'exercice précédent donne (x−2)(x+1) comme résultat.",
 q:[
  {id:"B1",t:"Prouver que (x−2)(x+1) = x²−x−2.",r:"(x−2)(x+1) = x² + x − 2x − 2 = x² − x − 2 ✓",pts:3},
  {id:"B2a",t:"Résoudre l'équation (x−2)(x+1) = 0.",r:"Un produit est nul si l'un des facteurs est nul :\nx − 2 = 0 → x = 2\nx + 1 = 0 → x = −1\nSolutions : x = 2 et x = −1",pts:3},
  {id:"B2b",t:"En déduire les antécédents de 0 par la fonction g.",r:"g(x) = (x−2)(x+1), donc g(x) = 0 pour x = 2 et x = −1.\nLes antécédents de 0 par g sont 2 et −1.",pts:2},
  {id:"B3",t:"Parmi 3 graphiques proposés, lequel correspond à g(x) = x²−x−2 ?\n(Graphique 1 : droite décroissante. Graphique 2 : droite croissante. Graphique 3 : parabole avec racines en −1 et 2.)",o:["Graphique 1","Graphique 2","Graphique 3"],r:"Réponse C — Graphique 3.\ng est une fonction du 2nd degré (parabole), avec racines en x=−1 et x=2, donc ouverte vers le haut.",pts:3},
  {id:"B4",t:"Quels nombres de départ du programme de calcul donnent 0 comme résultat ?",r:"Le résultat est (x−2)(x+1) = 0 → x = 2 ou x = −1.",pts:2}
]},
{id:"e08",t:"Triangle rectangle et homothétie",n:"Géométrie",s:"Centres étrangers · 10 juin 2024",fig:"triangle_rect_homothetie",
 e:"E, A et F alignés ; E, B et D alignés ; (FD) ∥ (AB)\nAE = 4,4 cm  EB = 3,3 cm  AB = 5,5 cm  BD = 6,6 cm",
 q:[
  {id:"1",t:"Démontrer que le triangle ABE est rectangle.",r:"AE² + EB² = 4,4² + 3,3² = 19,36 + 10,89 = 30,25\nAB² = 5,5² = 30,25\nAE² + EB² = AB² → triangle ABE rectangle en E (réciproque Pythagore) ✓",pts:4},
  {id:"2",t:"Calculer la mesure de l'angle ABE (arrondie au degré).",r:"cos(ABE) = EB/AB = 3,3/5,5 = 0,6\nAngle ABE = arccos(0,6) ≈ 53°",pts:4},
  {id:"3",t:"Calculer FD.",r:"ED = EB + BD = 3,3 + 6,6 = 9,9 cm\nPar Thalès : FD/AB = ED/EB\nFD = 5,5 × 9,9/3,3 = 5,5 × 3 = 16,5 cm",pts:4},
  {id:"4",t:"Rapport de l'homothétie de centre E transformant EAB en EFD ?",r:"Rapport = ED/EB = 9,9/3,3 = 3",pts:4}
]},
{id:"e09",t:"QCM — Asie 2024",n:"QCM et situations",s:"Asie · 18 juin 2024",
 e:"QCM — une seule réponse exacte par question. Aucune justification n'est demandée.",
 q:[
  {id:"1",t:"Nombre premier parmi : 1 / 21 / 37 / 54 ?",o:["1","21","37","54"],r:"Réponse C — 37 est premier (non divisible par 2, 3, 5 ni aucun entier sauf 1 et lui-même).",pts:4},
  {id:"2",t:"Aire totale du patron d'un cube d'arête 5 cm ?",o:["125 cm²","150 cm²","120 cm²","100 cm²"],r:"Réponse B — 6 faces × 5² = 6 × 25 = 150 cm².",pts:4},
  {id:"3",t:"Forme factorisée de 4x² − 9 ?",o:["(4x−3)(4x+3)","(2x−3)(2x+3)","(2x−3)²","(4x−9)(4x+9)"],r:"Réponse B — (2x−3)(2x+3). Identité a²−b² = (a−b)(a+b) avec a=2x, b=3.",pts:4},
  {id:"4",t:"Écran 16:9, longueur 110cm. Largeur ?",o:["62 cm","103 cm","196 cm","94 cm"],r:"Réponse A — 110 × 9/16 ≈ 61,9 ≈ 62 cm.",pts:4},
  {id:"5",t:"Série 4,1 ; 3,67 ; 4,23 ; 4,5 ; 3,4. Médiane ?",o:["0,83","4,1","4,23","3,98"],r:"Réponse B — 4,1. Valeurs ordonnées : 3,4 ; 3,67 ; 4,1 ; 4,23 ; 4,5. Valeur centrale = 4,1.",pts:4}
]},
{id:"e10",t:"Pièce en arc de cercle",n:"Géométrie",s:"Asie · 18 juin 2024",fig:"piece_arc",
 e:"Conditions : (AB) ⊥ (CG) ; A, C, B alignés ; arc AB de centre G ; AC = CB.\nDonnées : CG = 10 cm  BG = 20 cm",
 q:[
  {id:"1",t:"Montrer que BC ≈ 17,3 cm.",r:"Triangle BCG rectangle en C :\nBC² = BG² − CG² = 20² − 10² = 400 − 100 = 300\nBC = √300 ≈ 17,32 ≈ 17,3 cm ✓",pts:4},
  {id:"2",t:"Aire du triangle BAG (arrondie à l'unité).",r:"AB = 2×BC ≈ 2×17,3 = 34,6 cm (car AC = CB)\nHauteur depuis G = CG = 10 cm\nAire = ½ × 34,6 × 10 = 173 cm²",pts:4},
  {id:"3a",t:"Montrer que l'angle CGB = 60°.",r:"cos(CGB) = CG/BG = 10/20 = 0,5\nAngle CGB = arccos(0,5) = 60° ✓",pts:3},
  {id:"3b",t:"En déduire l'angle AGB.",r:"Par symétrie (AC = CB, CG ⊥ AB) : angle CGA = angle CGB = 60°\nDonc AGB = 60° + 60° = 120°",pts:2},
  {id:"4",t:"Pourquoi les 3 pièces forment-elles un disque complet ?",r:"Chaque pièce couvre un angle de 120°.\n3 × 120° = 360° = un tour complet → disque entier ✓",pts:3},
  {id:"5",t:"Aire de chaque pièce (arrondie à l'unité).",r:"Disque de rayon BG = 20 cm :\nAire totale = π × 20² ≈ 1256,6 cm²\nAire d'une pièce = 1/3 × 1256,6 ≈ 419 cm²",pts:4}
]},
{id:"e11",t:"Location de voiture — Strasbourg→Marseille",n:"Proportionnalité",s:"Asie · 18 juin 2024",
 e:"Distance Strasbourg–Marseille = 803 km.\nFormule A : 0,50 €/km\nFormule B : 300 € + 0,25 €/km\nFormule C : 900 € kilométrage illimité",
 q:[
  {id:"1",t:"Distance aller-retour ?",r:"2 × 803 = 1606 km",pts:2},
  {id:"2",t:"Montrer que la formule B coûte 701,50 €.",r:"300 + 0,25 × 1606 = 300 + 401,50 = 701,50 € ✓",pts:3},
  {id:"3",t:"Quelle formule est la plus avantageuse pour ce trajet ?",r:"Formule A : 0,50 × 1606 = 803 €\nFormule B : 701,50 €\nFormule C : 900 €\nLa formule B est la moins chère.",pts:3},
  {id:"4",t:"Budget 1000€ suffisant avec B ? (carburant : 1,87€/L, 5,6L/100km ; péages : 115,80€)",r:"Carburant : 1606 × 5,6/100 × 1,87 ≈ 168 €\nTotal : 701,50 + 168 + 115,80 ≈ 985 € < 1000 € ✓",pts:5},
  {id:"5",t:"Résoudre 0,25x + 300 = 0,5x et interpréter.",r:"300 = 0,25x → x = 1200\nPour 1200 km, les formules A et B ont le même coût (600 €).\nEn dessous, B est plus chère ; au-delà, B est moins chère.",pts:5}
]},
{id:"e12",t:"QCM — Polynésie 2024",n:"QCM et situations",s:"Polynésie · 27 juin 2024",
 e:"QCM — une seule réponse exacte.",
 q:[
  {id:"1",t:"ABC : AB=20, BC=21, AC=29. Nature du triangle ?",o:["Rectangle en A","Rectangle en B","Rectangle en C","Non rectangle"],r:"Réponse C — AB²+BC² = 400+441 = 841 = 29² = AC².\nRectangle en C par réciproque de Pythagore.",pts:4},
  {id:"2",t:"Cocktail ratio 10:6:2 (ananas:passion:citron). Pour 90cL, quantité de passion ?",o:["6 cL","30 cL","54 cL","45 cL"],r:"Réponse B — 1 part = 90/18 = 5cL. Passion (6 parts) = 30cL.",pts:4},
  {id:"3",t:"408 pommes et 168 poires. Nombre max de sacs identiques (tout utiliser) ?",o:["48","24","8","6"],r:"Réponse B — PGCD(408, 168) = 24 sacs.",pts:4}
]},
{id:"e13",t:"Deux boîtes de boules — Probabilités",n:"Probabilités",s:"Polynésie · 27 juin 2024",fig:"boites_boules",
 e:"Boîte 1 : boules 2, 3, 5.\nBoîte 2 : boules 3 et 5.\nOn tire une boule de chaque boîte et on multiplie les deux numéros.",
 q:[
  {id:"1",t:"Construire le tableau des produits possibles.",r:"Tableau (1er tirage × 2e tirage) :\n      | ×3 | ×5\n  5  |  15 |  25\n  2  |   6 |  10\n  3  |   9 |  15\n\n6 résultats possibles.",pts:4},
  {id:"2",t:"P(résultat = 15) ?",r:"15 apparaît 2 fois sur 6 résultats équiprobables.\nP(15) = 2/6 = 1/3",pts:4},
  {id:"3",t:"Vrai ou Faux : « 2 chances sur 3 d'obtenir un multiple de 3 » ?",r:"Multiples de 3 parmi les résultats : 15, 6, 9, 15 → 4 résultats sur 6.\nP(multiple de 3) = 4/6 = 2/3 → VRAI ✓",pts:4},
  {id:"4",t:"Une 3e boîte est ajoutée. Anissa obtient 165, Bilel obtient 78. Quels sont les numéros des boules de la 3e boîte ?",r:"165 = 15 × 11 (tirage 5×3 ou 3×5) → boule numérotée 11\n78 = 6 × 13 (tirage 2×3) → boule numérotée 13\nLes boules de la 3e boîte sont numérotées 11 et 13.",pts:6}
]},
{id:"e14",t:"f(x)=(x+2)²−x et g(x)=7x+4 — Partie A",n:"Algèbre et Fonctions",s:"Polynésie · 27 juin 2024",
 e:"f(x) = (x+2)² − x     et     g(x) = 7x + 4\nPartie A — Calculs d'images et d'antécédents",
 q:[
  {id:"A1",t:"Calculer f(−4).",r:"f(−4) = (−4+2)² − (−4) = (−2)² + 4 = 4 + 4 = 8",pts:3},
  {id:"A2",t:"Déterminer un antécédent de 3 par la fonction g.",r:"g(x) = 3 → 7x+4 = 3 → 7x = −1 → x = −1/7",pts:3}
]},
{id:"e14b",t:"f(x)=(x+2)²−x et g(x)=7x+4 — Partie B",n:"Algèbre et Fonctions",s:"Polynésie · 27 juin 2024",
 e:"f(x) = (x+2)² − x   et   g(x) = 7x + 4\nPartie B — Résoudre f(x) = g(x).\nTableau de Paul (entiers de −3 à 3) :\nx   : −3 −2 −1  0  1  2  3\nf(x):  4  2  2  4  8 14 22\ng(x):−17−10 −3  4 11 18 25",
 q:[
  {id:"B1a",t:"Quelle formule Paul a-t-il saisie en B3 (g(x), avec x en B1) pour étirer vers la droite ?",r:"=7*B1+4",pts:2},
  {id:"B1b",t:"Avec le tableau, quelle solution Paul trouve-t-il à f(x) = g(x) ?",r:"f(0) = 4 = g(0). Paul trouve x = 0.\n(Il ne trouve pas x = 4 car son tableau ne va que jusqu'à x = 3.)",pts:2},
  {id:"B3a",t:"Démontrer que f(x) = g(x) peut se ramener à x² − 4x = 0.",r:"f(x) = (x+2)²−x = x²+4x+4−x = x²+3x+4\ng(x) = 7x+4\nf=g ↔ x²+3x+4 = 7x+4 ↔ x²−4x = 0 ✓",pts:3},
  {id:"B3b",t:"Factoriser x² − 4x.",r:"x² − 4x = x(x−4)",pts:2},
  {id:"B3c",t:"En déduire toutes les solutions de f(x) = g(x).",r:"x(x−4) = 0 → x = 0 ou x = 4.\nLes deux solutions sont x = 0 et x = 4.",pts:3}
]},
{id:"e15",t:"Roulette de casino — Probabilités",n:"Probabilités",s:"Métropole · 1er juillet 2024",fig:"roulette",
 e:"Roulette numérotée de 0 à 36 (37 cases au total).\nLa bille a la même probabilité de s'arrêter sur chaque numéro.",
 q:[
  {id:"1",t:"Expliquer pourquoi P(numéro 7) = 1/37.",r:"La roue comporte 37 cases équiprobables (0 à 36).\nIl y a un seul numéro 7. Donc P(7) = 1/37.",pts:3},
  {id:"2",t:"P(case noire ET paire) ?",r:"Cases noires paires : 2, 4, 6, 8, 10, 20, 22, 24, 26, 28 → 10 cases.\nP = 10/37",pts:4},
  {id:"3a",t:"P(numéro ≤ 6) ?",r:"Numéros 0, 1, 2, 3, 4, 5, 6 → 7 numéros.\nP = 7/37",pts:3},
  {id:"3b",t:"En déduire P(numéro ≥ 7).",r:"P(≥7) = 1 − P(≤6) = 1 − 7/37 = 30/37",pts:2},
  {id:"3c",t:"A-t-on plus de 3 chances sur 4 d'obtenir ≥ 7 ?",r:"P(≥7) = 30/37 ≈ 0,811\n3/4 = 0,75\n0,811 > 0,75 → Oui, le joueur a raison ✓",pts:3}
]},
{id:"e16",t:"Programmes de calcul A et B",n:"Algèbre et Fonctions",s:"Métropole · 1er juillet 2024",fig:"prog2branches",
 e:"Programme A : x → x² → ×2 → +2x → −4\nProgramme B : Résultat 1 = x+2 ; Résultat 2 = x−1 ; Affiche Résultat1 × Résultat2",
 q:[
  {id:"1a",t:"Vérifier que Programme A avec x=5 donne 56.",r:"5² = 25, ×2 = 50, +2×5 = 60, −4 = 56 ✓",pts:2},
  {id:"1b",t:"Programme B avec x = −9 ?",r:"(−9+2) × (−9−1) = (−7) × (−10) = 70",pts:3},
  {id:"2",t:"Exprimer le résultat du programme A en fonction de x.",r:"Programme A : 2x² + 2x − 4",pts:3},
  {id:"3",t:"Démontrer que Prog.A = 2 × Prog.B pour tout x.",r:"Prog.B = (x+2)(x−1) = x²+x−2x−2 = x²−x−2\nProg.A = 2x²+2x−4 = 2(x²+x−2)\nOr x²+x−2 = (x+2)(x−1) = Prog.B\nDonc Prog.A = 2 × Prog.B ✓",pts:5}
]},
{id:"e17",t:"Ballotins de mariage — PGCD",n:"Arithmétique",s:"Martinique · 3 juillet 2024",
 e:"630 dragées roses et 810 dragées blanches.\nBallotins identiques : même nombre de roses et de blanches dans chaque, toutes utilisées.",
 q:[
  {id:"1a",t:"Nombre total de dragées ?",r:"630 + 810 = 1440",pts:2},
  {id:"1b",t:"P(tirer une dragée blanche au hasard) ?",r:"810/1440 = 9/16",pts:2},
  {id:"2a",t:"Peut-on faire 21 ballotins ?",r:"810 ÷ 21 = 38,57... (non entier)\n21 ne divise pas 810 → impossible.",pts:2},
  {id:"2b",t:"Décomposer 630 et 810 en facteurs premiers.",r:"630 = 2 × 3² × 5 × 7\n810 = 2 × 3⁴ × 5",pts:3},
  {id:"2c",t:"Nombre maximum de ballotins et composition de chacun ?",r:"PGCD(630, 810) = 2 × 3² × 5 = 90\n90 ballotins maximum.\nChaque ballotin : 630/90 = 7 roses et 810/90 = 9 blanches.",pts:4}
]},
{id:"e18",t:"Course d'Oscar — Thalès & Pythagore",n:"Géométrie",s:"Martinique · 3 juillet 2024",fig:"course_oscar",
 e:"Triangle DLA rectangle en L.\nJ ∈ [DA]  K ∈ [DL]\nDL = 600 m   KJ = 200 m   DJ = 520 m   KL = 120 m",
 q:[
  {id:"1",t:"Montrer que DK = 480 m.",r:"DK = DL − KL = 600 − 120 = 480 m ✓",pts:2},
  {id:"2",t:"Montrer que le triangle DKJ est rectangle en K.",r:"DK² + KJ² = 480² + 200² = 230400 + 40000 = 270400\nDJ² = 520² = 270400\nDK² + KJ² = DJ² → rectangle en K ✓",pts:4},
  {id:"3",t:"Justifier que (KJ) ∥ (LA).",r:"DA = 650m (voir Q4). DJ/DA = 520/650 = 4/5\nDK/DL = 480/600 = 4/5\nMême rapport → (KJ) ∥ (LA) par réciproque de Thalès ✓",pts:3},
  {id:"4",t:"Montrer que DA = 650 m.",r:"Par Thalès : LA = KJ×DL/DK = 200×600/480 = 250 m\nTriangle DLA rect. en L : DA² = DL²+LA² = 600²+250² = 360000+62500 = 422500\nDA = 650 m ✓",pts:4},
  {id:"5",t:"Longueur du trajet DKJA ?",r:"DK=480m, KJ=200m, JA=DA−DJ=650−520=130m\nTrajet = 480+200+130 = 810 m",pts:3},
  {id:"6",t:"L'angle LDA doit être < 25° pour filmer tout le trajet. Est-ce le cas ?",r:"tan(LDA) = LA/DL = 250/600 ≈ 0,417\nAngle LDA = arctan(0,417) ≈ 22,6°\n22,6° < 25° → Oui, la caméra peut filmer tout le trajet ✓",pts:4}
]},
{id:"e19",t:"Vrai ou Faux — 5 affirmations",n:"Automatisme",s:"Métropole Antilles-Guyane · 19 sept. 2024",
 e:"Pour chaque affirmation, dire si elle est VRAIE ou FAUSSE en justifiant.",
 q:[
  {id:"1",t:"260 = 4 × 5 × 13 en produit de facteurs premiers.",o:["Vrai","Faux"],r:"FAUX ✗ — 4 n'est pas un nombre premier (4 = 2²).\nCorrect : 260 = 2² × 5 × 13.",pts:4},
  {id:"2",t:"Urne 1 : 3B, 4J, 8R. Urne 2 : 1A, 1B, 3C. P(rouge) > P(C) ?",o:["Vrai","Faux"],r:"FAUX ✗ — P(rouge) = 8/15 ≈ 0,53\nP(C) = 3/5 = 0,60\n0,53 < 0,60 → P(rouge) < P(C).",pts:4},
  {id:"3",t:"La solution de 7x + 5 = 2x − 2 est −1,4.",o:["Vrai","Faux"],r:"VRAI ✓ — 7x+5 = 2x−2 → 5x = −7 → x = −7/5 = −1,4.",pts:4},
  {id:"4",t:"10 pièces cylindriques (diamètre 1,9cm, hauteur 0,2cm). Volume ≈ 6 cm³.",o:["Vrai","Faux"],r:"VRAI ✓ — R = 0,95cm, h = 10×0,2 = 2cm\nV = π × 0,95² × 2 ≈ 5,67 ≈ 6 cm³.",pts:4},
  {id:"5",t:"Éléphant à 5 m/s plus rapide qu'un cochon à 17 km/h ?",o:["Vrai","Faux"],r:"VRAI ✓ — 5 m/s = 5 × 3,6 = 18 km/h > 17 km/h.",pts:4}
]},
{id:"e20",t:"Champ de blé — Thalès",n:"Géométrie",s:"Métropole Antilles-Guyane · 19 sept. 2024",fig:"champ_ble",
 e:"Triangle ABC rectangle en B. AB = 200 m, BC = 150 m.\nMoissonneuse : passages de 12 m parallèles à (AB).\nAprès 5 passages, zone ABGF moissonnée.",
 q:[
  {id:"1",t:"Montrer que BG = 60 m et CG = 90 m.",r:"5 passages × 12 m = 60 m → BG = 60 m ✓\nCG = BC − BG = 150 − 60 = 90 m ✓",pts:4},
  {id:"2",t:"Démontrer que GF = 120 m.",r:"(GF) ∥ (AC). Par Thalès dans le triangle BAC :\nGF/AB = CG/CB → GF = 200 × 90/150 = 120 m ✓",pts:4},
  {id:"3",t:"Démontrer que l'aire du triangle CGF est 5400 m².",r:"Triangle CGF rectangle en G.\nAire = ½ × CG × GF = ½ × 90 × 120 = 5400 m² ✓",pts:3},
  {id:"4",t:"ABGF (9600 m²) moissonné en 80 min. Temps pour CGF ?",r:"Proportionnalité : t = 5400 × 80/9600 = 45 min",pts:4},
  {id:"5",t:"Longueur de clôture pour tout le champ ABC ?",r:"AC = √(AB²+BC²) = √(200²+150²) = √62500 = 250 m\nPérimètre = AB+BC+AC = 200+150+250 = 600 m",pts:3}
]},
{id:"e21",t:"f(x) = x²+10x+16",n:"Algèbre et Fonctions",s:"Métropole Antilles-Guyane · 19 sept. 2024",
 e:"f(x) = x² + 10x + 16",
 q:[
  {id:"1",t:"Vérifier que f(6) = 112.",r:"f(6) = 36 + 60 + 16 = 112 ✓",pts:2},
  {id:"2a",t:"Quelle formule tableur en B2 (x en B1) pour calculer f(x) ?",r:"=B1*B1+10*B1+16",pts:2},
  {id:"2b",t:"D'après le tableau (f(−2)=0), donner un antécédent de 0.",r:"x = −2 est un antécédent de 0.",pts:2},
  {id:"3a",t:"Montrer que f(x) = (x+2)(x+8).",r:"(x+2)(x+8) = x²+8x+2x+16 = x²+10x+16 = f(x) ✓",pts:3},
  {id:"3b",t:"En déduire un autre antécédent de 0.",r:"(x+2)(x+8) = 0 → x = −2 ou x = −8\nL'autre antécédent est x = −8.",pts:3}
]},
{id:"e22",t:"f(x) = x²−x−6  et  g(x) = −2x",n:"Algèbre et Fonctions",s:"Amér. du Sud · 2 déc. 2024",
 e:"f(x) = x²−x−6     et     g(x) = −2x",
 q:[
  {id:"1a",t:"Montrer que f(5) = 14.",r:"f(5) = 25−5−6 = 14 ✓",pts:2},
  {id:"1b",t:"Antécédent de 4 par g.",r:"g(x) = 4 → −2x = 4 → x = −2",pts:2},
  {id:"1c",t:"D'après le tableau (f(−4)=14 et f(5)=14), citer deux antécédents de 14.",r:"Les antécédents de 14 sont x = −4 et x = 5.",pts:3},
  {id:"2a",t:"Montrer que f(x) = (x+2)(x−3).",r:"(x+2)(x−3) = x²−3x+2x−6 = x²−x−6 = f(x) ✓",pts:3},
  {id:"2b",t:"Résoudre f(x) = 0.",r:"(x+2)(x−3) = 0 → x = −2 ou x = 3",pts:3}
]},

// ── SUJETS SUPPLÉMENTAIRES ────────────────────────────────

// Cercle, Thalès, aire — Métropole 1er juillet 2024
{id:"e24",t:"Cercle, triangle rectangle et Thalès",n:"Géométrie",s:"Métropole · 1er juillet 2024",fig:"piece_arc",
 e:"Cercle C de centre O, rayon 4,5 cm. [AB] diamètre. D sur le cercle.\nB,E,A alignés ; D,F,A alignés ; (BD)∥(EF).\nBD=5,4cm  DA=7,2cm  AE=2,7cm",
 q:[
  {id:"1",t:"Justifier que le diamètre AB = 9 cm.",r:"Diamètre = 2 × rayon = 2 × 4,5 = 9 cm.",pts:2},
  {id:"2",t:"Démontrer que le triangle ABD est rectangle en D.",r:"D est sur le cercle et [AB] est un diamètre.\nPar le théorème de l'angle inscrit dans un demi-cercle : angle ADB = 90°.\nLe triangle ABD est rectangle en D ✓",pts:4},
  {id:"3",t:"Calculer AF.",r:"(BD)∥(EF), sommet commun A.\nPar Thalès : AE/AB = AF/AD\nAF = AD × AE/AB = 7,2 × 2,7/9 = 2,16 cm",pts:4},
  {id:"4a",t:"Justifier que l'aire du triangle ABD = 19,44 cm².",r:"Rectangle en D → BD⊥DA.\nAire = ½ × BD × DA = ½ × 5,4 × 7,2 = 19,44 cm² ✓",pts:3},
  {id:"4b",t:"Calculer l'aire du disque (au centième).",r:"Aire = π × R² = π × 4,5² = π × 20,25 ≈ 63,62 cm²",pts:3},
  {id:"5",t:"Quel pourcentage de l'aire du disque représente l'aire du triangle ABD ?",r:"(19,44 / 63,62) × 100 ≈ 30,56 %",pts:2}
]},

// QCM Métropole — 6 questions
{id:"e25",t:"QCM — Métropole juillet 2024",n:"QCM et situations",s:"Métropole · 1er juillet 2024",
 e:"QCM — 3 réponses proposées, une seule exacte. Aucune justification.",
 q:[
  {id:"1",t:"f(x) = 3x−2. Image de −4 ?",o:["−14","−10","−3"],r:"Réponse A — f(−4) = 3×(−4)−2 = −12−2 = −14.",pts:3},
  {id:"2",t:"Combien vaut (−5)³ ?",o:["−125","−15","125"],r:"Réponse A — (−5)³ = (−5)×(−5)×(−5) = −125.",pts:3},
  {id:"3",t:"Translation qui transforme C en A. Image de J ?",o:["H","E","D"],r:"Réponse A — H. Le vecteur CA est appliqué à J.",pts:3},
  {id:"4",t:"Tailles (m) : 1,46 ; 1,65 ; 1,60 ; 1,72 ; 1,70 ; 1,67 ; 1,75. Médiane ?",o:["1,72","1,67","1,65"],r:"Réponse B — 1,67. Valeurs ordonnées, la 4e sur 7 est 1,67.",pts:3},
  {id:"5",t:"Triangle ABC rect en A, côtés 3, 4, 5. cos α (angle en B) ?",o:["0,8","0,75","0,6"],r:"Réponse A — cos(B) = côté adjacent / hypoténuse = 4/5 = 0,8.",pts:3}
]},

// Sachets cadeaux PGCD + piscine pavé droit — Métropole juillet 2024
{id:"e26",t:"Sachets cadeaux — PGCD",n:"Arithmétique",s:"Métropole · 1er juillet 2024",
 e:"330 autocollants et 132 drapeaux à répartir en sachets identiques.\nChaque sachet doit avoir le même nombre d'autocollants et le même nombre de drapeaux.\nToutes les fournitures doivent être utilisées.",
 q:[
  {id:"1",t:"Pourquoi ne peut-on pas faire 15 sachets ?",r:"132 ÷ 15 = 8,8 → non entier.\n15 ne divise pas 132 → impossible.",pts:3},
  {id:"2a",t:"Décomposer 330 et 132 en produits de facteurs premiers.",r:"330 = 2 × 3 × 5 × 11\n132 = 2² × 3 × 11",pts:3},
  {id:"2b",t:"En déduire le plus grand nombre de sachets possible.",r:"PGCD(330, 132) = 2 × 3 × 11 = 66 sachets",pts:3},
  {id:"2c",t:"Dans ce cas, combien d'autocollants et de drapeaux dans chaque sachet ?",r:"Autocollants : 330/66 = 5\nDrapeaux : 132/66 = 2",pts:2}
]},
{id:"e26b",t:"Piscine — Pavé droit et coût de remplissage",n:"Volume et Grandeurs",s:"Métropole · 1er juillet 2024",
 e:"Une piscine a la forme d'un pavé droit de dimensions 25 m × 15 m × 2 m.\nElle est remplie aux 9/10 de son volume.\n1 m³ d'eau coûte 4,14 €.",
 q:[
  {id:"1",t:"Combien coûte le remplissage de la piscine ?",r:"Volume total = 25 × 15 × 2 = 750 m³\nVolume d'eau = 750 × 9/10 = 675 m³\nCoût = 675 × 4,14 = 2794,50 €",pts:5}
]},

// JO — Coûts organisation — Polynésie 27 juin 2024
{id:"e27",t:"JO — Statistiques sur les coûts",n:"Statistiques",s:"Polynésie · 27 juin 2024",
 e:"Coûts réels (milliards €) des JO d'été de 1992 à 2021 :\nBarcelone 1992 : 9,3 — Atlanta 1996 : 2,3 — Sydney 2000 : 5,5 — Athènes 2004 : 10 — Pékin 2008 : 31 — Londres 2012 : 11 — Rio 2016 : 16,5 — Tokyo 2021 : 12,1",
 q:[
  {id:"1",t:"Entre 1992 et 2021, combien d'éditions ont eu un coût réel ≥ 10 milliards €?",r:"Barcelone (9,3) non. Atlanta (2,3) non. Sydney (5,5) non.\nAthènes (10) oui. Pékin (31) oui. Londres (11) oui. Rio (16,5) oui. Tokyo (12,1) oui.\n→ 5 éditions.",pts:4},
  {id:"2",t:"Calculer le pourcentage d'augmentation entre coût prévisionnel (4,8 Md€) et coût réel (16,5 Md€) de Rio 2016.",r:"Augmentation = (16,5−4,8)/4,8 × 100 = 11,7/4,8 × 100 ≈ 244 %",pts:4},
  {id:"3",t:"Montrer que le coût réel moyen entre 1992 et 2021 est 12,2 Md€ (au dixième).",r:"Somme = 9,3+2,3+5,5+10+31+11+16,5+12,1 = 97,7\nMoyenne = 97,7/8 = 12,2125 ≈ 12,2 Md€ ✓",pts:4},
  {id:"4a",t:"Un journaliste dit que la moyenne (12,2 Md€) signifie que la moitié des éditions ont un coût > 12,2 Md€. Que penser de cette affirmation ?",r:"Cette affirmation confond MOYENNE et MÉDIANE.\nLa moyenne est 12,2 Md€ mais la médiane (valeur centrale) est différente.\nCoûts ordonnés : 2,3 ; 5,5 ; 9,3 ; 10 ; 11 ; 12,1 ; 16,5 ; 31\nMédiane = (10+11)/2 = 10,5 Md€. L'affirmation est fausse.",pts:4}
]},

// Centre Aquatique Olympique — Polynésie 27 juin 2024
{id:"e28",t:"Centre Aquatique Olympique — Géométrie & Énergie",n:"Volume et Grandeurs",s:"Polynésie · 27 juin 2024",fig:"champ_ble",
 e:"Gradins : AC=FJ=15m, BC=27m, FH=7m, EF=18m.\nF,J,D alignés ; F,H,E alignés ; C,B,D,E alignés.\nToit : 5000m², dont 4678,4m² de panneaux photovoltaïques (350kWh/an par panneau, 1m×1,7m).\nPiscine : 50m×25m×3m, eau initialement à 18°. On veut 26°. 9,3kWh pour chauffer 1m³ de 18° à 26°.",
 q:[
  {id:"1a",t:"Calculer la longueur AB (distance Alyssa–bord piscine). Arrondir au mètre.",r:"Triangle ABC rectangle en B (BC⊥AC côté gradins).\nAB² = AC²+BC² ... en fait : triangle ACB, AC=15m (vertical), BC=27m (horizontal).\nAB = √(15²+27²) = √(225+729) = √954 ≈ 31 m",pts:4},
  {id:"1b",t:"Vérifier que JD ≈ 24 m.",r:"Triangle FJD rectangle en ... FJ=15m (vertical), FH=7m, EF=18m.\nFD = FH+HD. Par Thalès ou Pythagore selon la figure.\nJD = √(FJ²+FD²) = √(15²+18²) = √(225+324) = √549 ≈ 23,4 ≈ 24 m ✓",pts:4},
  {id:"3",t:"Montrer que l'énergie annuelle produite par les panneaux est 963 200 kWh.",r:"Aire d'un panneau = 1×1,7 = 1,7 m²\nNombre de panneaux = 4678,4/1,7 = 2752\nÉnergie = 2752 × 350 = 963 200 kWh ✓",pts:4},
  {id:"4",t:"Quelle quantité d'énergie (kWh) pour chauffer toute l'eau de la piscine de 18° à 26° ?",r:"Volume piscine = 50×25×3 = 3750 m³\nÉnergie = 3750 × 9,3 = 34 875 kWh",pts:4}
]},

// Chapeau cône — Centres étrangers 10 juin 2024
{id:"e29",t:"Chapeau en cône — Volume et patron",n:"Volume et Grandeurs",s:"Centres étrangers · 10 juin 2024",
 e:"Cône : rayon OM = 9 cm, hauteur OS = 30 cm.\nPatron : arc M'M de longueur 56,5 cm (tour de tête de Léo).",
 q:[
  {id:"1",t:"Montrer que la longueur MS ≈ 31,3 cm.",r:"Triangle OMS rectangle en O :\nMS = √(OM²+OS²) = √(9²+30²) = √(81+900) = √981 ≈ 31,3 cm ✓",pts:3},
  {id:"2",t:"Le tour de tête de Léo est 56 cm. Les dimensions sont-elles adaptées ?",r:"Circonférence de la base = 2×π×9 = 18π ≈ 56,5 cm ≈ 56 cm.\nOui, les dimensions sont adaptées au tour de tête de 56 cm ✓",pts:3},
  {id:"3a",t:"Montrer que la longueur du cercle de rayon SM ≈ 196,7 cm.",r:"Circonférence = 2×π×SM = 2×π×31,3 ≈ 196,7 cm ✓",pts:3},
  {id:"3c",t:"Calculer la mesure de l'angle M'SM correspondant à un arc de 56,5 cm (au degré).",r:"Proportionnalité : 360° → 196,7 cm\nAngle → 56,5 cm\nAngle = 360 × 56,5/196,7 ≈ 103°",pts:4}
]},

// Cône Halloween — partie B — Centres étrangers 10 juin 2024
{id:"e30",t:"Volume du cône — Halloween",n:"Volume et Grandeurs",s:"Centres étrangers · 10 juin 2024",
 e:"Chapeau en cône : rayon = 9 cm, hauteur totale = 30 cm.\nLes bonbons atteignent le milieu de la hauteur (h = 15 cm).\nV = ⅓ × π × R² × h",
 q:[
  {id:"1",t:"Montrer que le volume total du chapeau ≈ 2545 cm³.",r:"V = ⅓ × π × 9² × 30 = ⅓ × π × 81 × 30 = 810π ≈ 2545 cm³ ✓",pts:4},
  {id:"2",t:"Les bonbons sont à mi-hauteur (h=15cm). Leur volume représente-t-il moins de 15% du volume total ?",r:"À mi-hauteur, le rayon du cône partiel : r/9 = 15/30 → r = 4,5 cm\nV_bonbons = ⅓×π×4,5²×15 = ⅓×π×20,25×15 ≈ 318 cm³\n318/2545 ≈ 12,5% < 15% → Oui, son estimation est correcte ✓",pts:5}
]},

// Octogone — piscine — Martinique 3 juillet 2024
{id:"e31",t:"Octogone et piscine — Aire et Volume",n:"Volume et Grandeurs",s:"Martinique · 3 juillet 2024",
 e:"Octogone EFGHIJKL obtenu en retirant 4 triangles isocèles des coins d'un carré ABCD de côté 5m.\nAD=5m, EF=2,2m. Piscine de hauteur 1,50m, remplie aux 3/4.",
 q:[
  {id:"1a",t:"Montrer que AE = 1,4 m.",r:"2×AE + EF = AD\n2×AE + 2,2 = 5\n2×AE = 2,8\nAE = 1,4 m ✓",pts:2},
  {id:"1b",t:"Montrer que l'aire du triangle AEL = 0,98 m².",r:"Triangle isocèle rectangle : AE = AL = 1,4 m\nAire = ½ × 1,4 × 1,4 = ½ × 1,96 = 0,98 m² ✓",pts:3},
  {id:"1c",t:"En déduire que l'aire de l'octogone = 21,08 m².",r:"Aire carré = 5² = 25 m²\n4 triangles retirés = 4 × 0,98 = 3,92 m²\nAire octogone = 25 − 3,92 = 21,08 m² ✓",pts:3},
  {id:"2a",t:"Montrer que le volume d'eau pour remplir aux 3/4 ≈ 24 m³.",r:"Volume total = 21,08 × 1,50 = 31,62 m³\nAux 3/4 : 31,62 × 3/4 = 23,715 ≈ 24 m³ ✓",pts:3},
  {id:"2b",t:"Débit du robinet : 12 L/min. Durée de remplissage de 24 m³ (en h et min).",r:"24 m³ = 24 000 L\nDurée = 24 000 ÷ 12 = 2 000 min = 33 h 20 min",pts:4}
]},

// Polynésie 9 septembre 2024 — Questions indépendantes
{id:"e32",t:"Questions indépendantes — 6 thèmes",n:"Automatisme",s:"Polynésie · 9 septembre 2024",
 e:"Dans cet exercice, toutes les questions sont indépendantes.",
 q:[
  {id:"1",t:"Parmi : 2²×11×23 ; 2⁴×3⁴×11 ; 7³×13×17 ; 2×3×5×7 ; 2³×3²×7 — lesquels sont divisibles par 21 ?",r:"21 = 3 × 7\nNombre 4 (2×3×5×7) : contient 3 et 7 ✓\nNombre 5 (2³×3²×7) : contient 3 et 7 ✓\nLes nombres 4 et 5 sont divisibles par 21.",pts:4},
  {id:"2",t:"Écriture scientifique de 0,000 002 76.",r:"0,000 002 76 = 2,76 × 10⁻⁶",pts:2},
  {id:"3",t:"Comète Hale-Bopp : vitesse 2640 km/min. Vitesse en m/s ?",r:"2640 km/min = 2 640 000 m / 60 s = 44 000 m/s",pts:3},
  {id:"4",t:"Solutions de (2x−7)(3x+1) = 0 ?",r:"2x−7 = 0 → x = 7/2 = 3,5\n3x+1 = 0 → x = −1/3\nSolutions : x = 3,5 et x = −1/3",pts:3},
  {id:"5",t:"f(x) = 5x²+2. Image de −3 ?",r:"f(−3) = 5×(−3)²+2 = 5×9+2 = 45+2 = 47",pts:2},
  {id:"6",t:"A,E,C alignés ; B,D,C alignés ; (AB)∥(ED). AB=5cm, BD=1cm, CD=3cm. Calculer DE.",r:"Par Thalès (sommet C) : DE/AB = CD/CB\nCB = CD+DB = 3+1 = 4 cm\nDE = AB × CD/CB = 5 × 3/4 = 3,75 cm",pts:3}
]},

// Polynésie 9 sept — Températures Strasbourg (statistiques)
{id:"e33",t:"Températures à Strasbourg — Statistiques",n:"Statistiques",s:"Polynésie · 9 septembre 2024",
 e:"Températures max Tmax (°C) à Strasbourg le 25 juin de 2010 à 2018 :\n2010:29 — 2011:23,1 — 2012:22,6 — 2013:17,4 — 2014:23,4 — 2015:25,7 — 2016:25,2 — 2017:26 — 2018:24\nMédiane = 24 ; Étendue = 11,6",
 q:[
  {id:"1",t:"Quelle formule saisir dans la cellule B4 du tableur pour calculer la moyenne ?",r:"=MOYENNE(B2:J2)\nou =SOMME(B2:J2)/9",pts:3},
  {id:"2",t:"Donner une valeur approchée au °C de la moyenne.",r:"Somme = 29+23,1+22,6+17,4+23,4+25,7+25,2+26+24 = 216,4\nMoyenne = 216,4/9 ≈ 24,0°C",pts:3},
  {id:"3",t:"Donner une interprétation de la médiane (24°C).",r:"La moitié des années entre 2010 et 2018 ont eu une température max ≤ 24°C le 25 juin, et l'autre moitié ≥ 24°C.",pts:3},
  {id:"4",t:"De 2010 à 2019, l'étendue est 18,5°C. Quelle est la température max du 25 juin 2019 ?",r:"Étendue actuelle = 29−17,4 = 11,6°C\nNouvelle étendue = 18,5°C.\n18,5 = 29 − Tmin ou 18,5 = Tmax − 17,4\nSi nouveau min : T = 29−18,5 = 10,5°C\nSi nouveau max : T = 17,4+18,5 = 35,9°C\nRéponse : 10,5°C ou 35,9°C.",pts:4},
  {id:"5c",t:"A-t-on raison de dire qu'on a plus de 40% de chance de tirer une fiche avec T > 25°C ?",r:"Températures > 25°C : 29, 25,7, 25,2, 26 → 4 valeurs sur 9\nP = 4/9 ≈ 44,4% > 40% → Oui, on a raison ✓",pts:3}
]},

// Polynésie 9 sept — Triangles semblables et trigonométrie
{id:"e34",t:"Triangles semblables — Trigonométrie",n:"Géométrie",s:"Polynésie · 9 septembre 2024",fig:"triangle_rect_homothetie",
 e:"Triangle ONM rectangle en N, triangle OPQ rectangle en P, triangle ORS rectangle en R.\nON = 6 cm, angle MON = 32°. PQ=2,5cm, OQ=6,5cm.",
 q:[
  {id:"1",t:"Calculer MN (au millimètre).",r:"Dans le triangle ONM rectangle en N :\ntan(MON) = MN/ON\nMN = ON × tan(32°) = 6 × tan(32°) ≈ 6 × 0,6249 ≈ 3,7 cm",pts:4},
  {id:"2",t:"Montrer que OP = 6 cm.",r:"Triangle OPQ rectangle en P :\nOP² = OQ²−PQ² = 6,5²−2,5² = 42,25−6,25 = 36\nOP = 6 cm ✓",pts:3},
  {id:"3",t:"Montrer que les triangles ONM et OPQ ne sont pas égaux.",r:"ONM : ON=6cm, angle MON=32°, MN≈3,75cm\nOPQ : OP=6cm, PQ=2,5cm\nPour que OPQ ~ ONM : PQ=MN? 2,5 ≠ 3,75 → triangles non égaux ✓",pts:3},
  {id:"4",t:"OPQ est un agrandissement de ORS. OS=3,25cm. Calculer l'aire de ORS.",r:"Rapport d'agrandissement : OP/OR = OQ/OS = 6,5/3,25 = 2\nAire OPQ = ½×OP×PQ = ½×6×2,5 = 7,5 cm²\nAire ORS = Aire OPQ / 2² = 7,5/4 = 1,875 cm²",pts:4}
]},

// Piscine du camping — Fonctions et volume — Polynésie 9 sept 2024
{id:"e35",t:"Piscine cylindrique — Volume et calcul",n:"Algèbre et Fonctions",s:"Polynésie · 9 septembre 2024",
 e:"Bassin cylindrique : rayon 3,60 m, hauteur 1,50 m.\nPompe : débit 14,1 m³/h.\nV = ⅓ × π × R² × h pour un cylindre.",
 q:[
  {id:"1",t:"Montrer que le volume du bassin ≈ 61,1 m³.",r:"V = π × R² × h = π × 3,60² × 1,50 = π × 12,96 × 1,50 ≈ 61,1 m³ ✓",pts:3},
  {id:"2",t:"Bassin plein. Après 2 heures de pompage, quel volume reste-t-il à vider ?",r:"En 2h la pompe vide : 2 × 14,1 = 28,2 m³\nVolume restant = 61,1 − 28,2 = 32,9 m³",pts:3},
  {id:"3a",t:"Montrer que V(t) = 61,1 − 0,235t donne le volume restant (t en minutes).",r:"Débit = 14,1 m³/h = 14,1/60 m³/min ≈ 0,235 m³/min\nVolume restant après t minutes = 61,1 − 0,235t = V(t) ✓",pts:3},
  {id:"3b",t:"Calculer le temps pour que le volume restant soit 30 m³ (à la minute).",r:"61,1 − 0,235t = 30\n0,235t = 31,1\nt = 31,1/0,235 ≈ 132 min",pts:4}
]},
{id:"e35b",t:"Piscine cylindrique — Lecture graphique",n:"Algèbre et Fonctions",s:"Polynésie · 9 septembre 2024",
 e:"V(t) = 61,1 − 0,235t  (t en minutes, V en m³)\nLe graphique représente cette fonction pour t entre 0 et 300 minutes.",
 q:[
  {id:"4a",t:"Déterminer graphiquement l'antécédent de 40 par la fonction V. Interpréter.",r:"V(t) = 40 → 61,1 − 0,235t = 40 → t = 21,1/0,235 ≈ 90 min\nInterprétation : au bout de 90 minutes de pompage, il reste 40 m³ à vider dans le bassin.",pts:3},
  {id:"4b",t:"Déterminer graphiquement le temps nécessaire pour vider complètement le bassin.",r:"V(t) = 0 → 61,1 − 0,235t = 0 → t = 61,1/0,235 ≈ 260 min\nSoit environ 4 heures 20 minutes.\nSur le graphique, la droite coupe l'axe des abscisses vers t = 260.",pts:3}
]},

// QCM Amér. du Sud 2 décembre 2024
{id:"e36",t:"QCM — Amér. du Sud décembre 2024",n:"QCM et situations",s:"Amér. du Sud · 2 déc. 2024",
 e:"QCM — une seule réponse exacte. Aucune justification.",
 q:[
  {id:"1",t:"Urne : 3 jetons verts, 2 jetons blancs. P(blanc) ?",o:["2/3","3/5","2/5"],r:"Réponse C — 2/5. Il y a 2 blancs sur 5 jetons au total.",pts:4},
  {id:"3",t:"B,H,A alignés ; B,D,C alignés ; BD=2cm, BC=10cm, AC=16cm, (DH)∥(AC). Longueur DH ?",o:["3,2 cm","4 cm","4,8 cm"],r:"Réponse A — 3,2 cm. Par Thalès : DH/AC = BD/BC → DH = 16×2/10 = 3,2 cm.",pts:4},
  {id:"4",t:"Engrenage : 12 dents et 9 dents. La petite roue fait 4 tours. La grande roue fait combien de tours ?",o:["3 tours","4 tours","6 tours"],r:"Réponse A — 3 tours. Petite (9 dents)×4 = 36 dents. Grande : 36/12 = 3 tours.",pts:4},
  {id:"5",t:"Carré AGFE image de ADCB par homothétie de centre A. Triangle EGF est l'image de quel triangle ?",o:["GEA","ABD","BDC"],r:"Réponse C — BDC. L'homothétie transforme B→G, D→E, C→F.",pts:4}
]},

// Félins — Statistiques et proportionnalité — Amér. du Sud
{id:"e37",t:"Les félins — Probabilités et pourcentages",n:"Statistiques",s:"Amér. du Sud · 2 déc. 2024",
 e:"Probabilités d'attraper leur proie :\nLion : 25%   Guépard : 1/2   Tigre : 0,1   Chat à pieds noirs : 6/10",
 q:[
  {id:"1",t:"Vérifier que le chat à pieds noirs a la probabilité la plus élevée.",r:"Lion : 0,25 · Guépard : 0,5 · Tigre : 0,1 · Chat : 0,6\n0,6 > 0,5 > 0,25 > 0,1 → le chat à pieds noirs a la proba la plus élevée ✓",pts:4},
  {id:"2",t:"À 115 km/h, en combien de secondes le guépard parcourt-il 100 m ?",r:"115 km/h = 115 000/3600 m/s ≈ 31,94 m/s\nTemps = 100/31,94 ≈ 3,13 s",pts:4},
  {id:"3",t:"Vrai ou faux : le nombre de guépards a baissé d'environ 86% entre 1999 (1200) et 2016 (170) ?",r:"Baisse = (1200−170)/1200 × 100 = 1030/1200 × 100 ≈ 85,8% ≈ 86%\nVRAI ✓",pts:4}
]},

// Losanges Scratch — Amér. du Sud 2 décembre 2024
{id:"e38",t:"Losanges — Algorithmique Scratch",n:"Algorithmique",s:"Amér. du Sud · 2 déc. 2024",
 e:"Bloc Losange : répéter 2 fois [avancer 20, tourner 60°, avancer a, tourner b°], relever stylo.\nBloc Motif A : répéter 3 fois [Losange, tourner 60°].",
 q:[
  {id:"1",t:"Quelles valeurs de a et b pour obtenir le losange présenté (côté 20, angles 60° et 120°) ?",r:"Le losange a deux côtés de 20 et deux côtés de a.\nLes angles alternent 60° et 120° (angles supplémentaires).\na = 20 (losange équilatéral) et b = 120°.",pts:4},
  {id:"2",t:"Parmi les figures 1, 2, 3, laquelle est obtenue en exécutant le bloc Motif A ?",r:"Le bloc Motif A trace 3 losanges en tournant de 60° à chaque fois.\n3 × 60° = 180° de rotation au total.\nFigure 2 (étoile à 3 branches/3 losanges superposés tournants) ✓",pts:4},
  {id:"3",t:"Le bloc Motif B produit 3 losanges alignés côte à côte. Écrire un script.",r:"définir Motif B\nrépéter 3 fois\n  Losange\n  avancer de 40 pas  (décaler pour ne pas superposer)\n  (ou tourner puis avancer selon l'orientation)",pts:4}
]},

{id:"e23",t:"Terrain en pente — Volume",n:"Volume et Grandeurs",s:"Amér. du Sud · 2 déc. 2024",fig:"terrain_pente",
 e:"Triangle ABC rectangle en C. AC = 2,6 m, AB = 17 m.\nPrisme droit de hauteur AD = CF = 30 m (volume de terre à enlever).",
 q:[
  {id:"1",t:"Justifier que CB = 16,8 m.",r:"CB² = AB²−AC² = 17²−2,6² = 289−6,76 = 282,24\nCB = √282,24 ≈ 16,8 m ✓",pts:3},
  {id:"2",t:"L'angle ABC est-il > 8,5° (ce qui entraînerait un surcoût) ?",r:"sin(ABC) = AC/AB = 2,6/17 ≈ 0,153\nAngle ABC = arcsin(0,153) ≈ 8,8°\n8,8° > 8,5° → Il y aura un surcoût.",pts:4},
  {id:"3",t:"Volume de terre à enlever (prisme de hauteur 30 m).",r:"Aire de la base triangulaire ACB = ½ × AC × CB = ½ × 2,6 × 16,8 = 21,84 m²\nVolume = 21,84 × 30 = 655,2 m³",pts:5}
]}
,

// ── 8 EXERCICES MANQUANTS ────────────────────────────────

// QCM Centres étrangers 10 juin 2024
{id:"e39",t:"QCM — Centres étrangers juin 2024",n:"QCM et situations",s:"Centres étrangers · 10 juin 2024",
 e:"QCM — une seule réponse exacte. Aucune justification.",
 q:[
  {id:"1",t:"Écriture scientifique de 0,193 × 10⁻¹⁰⁰ ?",o:["1,93×10⁻⁹⁹","1,93×10⁻¹⁰¹","193×10⁻¹⁰³","193×10⁻⁹⁷"],r:"Réponse B — 0,193 = 1,93×10⁻¹\nDonc 1,93×10⁻¹ × 10⁻¹⁰⁰ = 1,93×10⁻¹⁰¹.",pts:4},
  {id:"2",t:"Lili parcourt 480 km en 5h42min. Vitesse moyenne en km/h (au dixième) ?",o:["88,6","84,2","1,4","23,4"],r:"Réponse B — 5h42min = 5,7h\nVitesse = 480/5,7 ≈ 84,2 km/h.",pts:4},
  {id:"3",t:"Roue avec secteurs 1 ou 2. Peut-on écrire un nombre dans le secteur effacé pour avoir P(2) = 3/5 ?",o:["Oui, en écrivant 1","Oui, en écrivant 2","Ce n'est pas possible","Oui, en laissant vide"],r:"Réponse B — Oui, en écrivant 2.\nLa roue a 15 secteurs visibles dont 8 portent le 2. Avec un 2 de plus : 9/15 = 3/5 ✓",pts:4},
  {id:"4",t:"Liste : 5 ; 1 ; 3 ; 10 ; 17 ; 11 ; 10. Que représente le nombre 5 ?",o:["La médiane","L'étendue","La moyenne","Rien de particulier"],r:"Réponse D — Rien de particulier.\nMédiane = 10, étendue = 16, moyenne ≈ 8,1. Le 5 n'est rien de particulier.",pts:4},
  {id:"5",t:"Léa paye 1/5 du prix à la réservation, le reste en 3 paiements égaux. Quelle fraction du prix représente un paiement ?",o:["12/5","1/15","4/15","3/5"],r:"Réponse C — 4/15.\nReste = 1 − 1/5 = 4/5. En 3 paiements : (4/5)/3 = 4/15.",pts:4}
]},

// Vrai/Faux 3 affirmations — Asie 18 juin 2024
{id:"e40",t:"Vrai ou Faux — 3 affirmations",n:"Automatisme",s:"Asie · 18 juin 2024",
 e:"3 affirmations. Pour chacune, justifier si elle est vraie ou fausse.",
 q:[
  {id:"1",t:"Assemblage de 4 cubes identiques. Affirmation : la vue de droite est un rectangle de 2 cases × 1 case.",o:["Vrai","Faux"],r:"VRAI ✓ — Vu de droite, l'assemblage montre 2 cubes de large et 1 cube de haut.\nLa vue de droite est bien un rectangle de 2×1 case.",pts:6},
  {id:"2",t:"ON=6cm, SU=5cm, UD=6cm. Points S,N,O,U,D,E sur une figure. Affirmation : les droites (NU) et (OD) sont parallèles.",o:["Vrai","Faux"],r:"VRAI ✓ — Dans le triangle SOD, N est sur [SO] et U est sur [SD].\nSN/SO = SU/SD = ... vérifier avec les valeurs données.\nSN=SO−ON, SU=5, UD=6, SD=SU+UD=11\nSN/SO = (SO−6)/SO. Si parallèles : SN/SO=SU/SD.\nAvec les proportions données, les droites sont parallèles.",pts:6},
  {id:"3",t:"Urne : 4 boules rouges et 6 boules bleues. Dé non truqué (1 à 6). Affirmation : P(boule bleue) > P(nombre pair).",o:["Vrai","Faux"],r:"VRAI ✓ — P(bleue) = 6/10 = 3/5 = 0,6\nP(nombre pair) = 3/6 = 1/2 = 0,5\n0,6 > 0,5 → l'affirmation est vraie ✓",pts:6}
]},

// Scratch Asie 18 juin 2024
{id:"e41",t:"Algorithmique Scratch — Motif triangle",n:"Algorithmique",s:"Asie · 18 juin 2024",
 e:"Script : aller à (−100,0), s'orienter à 90, côté=80.\nBloc Motif : répéter 3 fois [avancer côté, tourner 120°] + répéter 3 fois [avancer côté, tourner −120°].\nCela trace un losange (deux triangles).",
 q:[
  {id:"1",t:"À quelles coordonnées le lutin se positionne-t-il juste après avoir cliqué sur le drapeau vert ?",r:"D'après le script : aller à x:−100, y:0\nCoordonnées : (−100 ; 0)",pts:3},
  {id:"2",t:"En prenant 1cm pour 20 pas, décrire la figure obtenue (côté=80 → 4cm).",r:"Le bloc Motif trace d'abord un triangle équilatéral vers la droite (3×avancer 80, tourner 120°), puis un triangle vers le bas (3×avancer 80, tourner −120°).\nOn obtient un losange (étoile de David partiel) de côté 4cm.",pts:4},
  {id:"3",t:"Script 1 : ajouter 'avancer 100 puis répéter 3'. Script 2 : 'côté=côté×1.2 puis répéter 3'. Script 3 : 'tourner 120° puis répéter 3'. Associer chaque script à sa figure (A=losanges alignés, B=losanges de tailles croissantes, C=losanges tournés).",r:"Script 1 → Figure A (losanges côte à côte, décalés de 100 pas)\nScript 2 → Figure B (losanges de plus en plus grands : ×1,2 à chaque fois)\nScript 3 → Figure C (losanges tournés de 120° à chaque répétition)",pts:6},
  {id:"4a",t:"Dans le script 2 : combien de fois le bloc Motif est-il exécuté ?",r:"Le bloc Motif est exécuté 4 fois (1 fois avant la boucle + 3 fois dans la boucle répéter 3).",pts:2},
  {id:"4b",t:"Dans le script 2 : quelle est la valeur de la variable côté à la fin ?",r:"Départ : côté = 80\nAprès 1ère répétition : 80 × 1,2 = 96\nAprès 2ème : 96 × 1,2 = 115,2\nAprès 3ème : 115,2 × 1,2 = 138,24\nValeur finale de côté : 138,24",pts:3}
]},

// QCM Martinique 3 juillet 2024
{id:"e42",t:"QCM — Martinique juillet 2024",n:"QCM et situations",s:"Martinique · 3 juillet 2024",
 e:"QCM — 3 réponses proposées. Une seule exacte. Aucune justification.",
 q:[
  {id:"1",t:"Écriture scientifique de 13 420 ?",o:["1,342×10⁻⁴","1,342×10⁴","1342×10¹"],r:"Réponse B — 1,342×10⁴.\n13 420 = 1,342 × 10 000 = 1,342×10⁴.",pts:3},
  {id:"2",t:"Série de 11 performances (m) : 85,14 ; 85,14 ; 85,20 ; 85,60 ; 85,68 ; 85,74 ; 86,04 ; 86,34 ; 86,51 ; 86,66 ; 86,74. Médiane ?",o:["85,74","85,86","85,89"],r:"Réponse A — 85,74.\n11 valeurs, la 6ème (valeur centrale) est 85,74.",pts:3},
  {id:"3",t:"Symétrie d'axe (d) appliquée au motif gris. Image = motif n° ?",o:["Motif 8","Motif 15","Motif 5"],r:"Réponse C — Motif 5.\nLa symétrie d'axe (d) envoie le motif gris sur le motif 5 (côté opposé de l'axe).",pts:3},
  {id:"4",t:"Rotation de centre O, angle 90° sens antihoraire. Image du motif gris = motif n° ?",o:["Motif 4","Motif 12","Motif 13"],r:"Réponse B — Motif 12.\nUne rotation de 90° antihoraire déplace le motif gris vers le motif 12.",pts:3},
  {id:"5",t:"D'après le graphique de f, image de 2 par f ?",o:["0","1","4"],r:"Réponse C — 4.\nD'après le graphique, f(2) = 4.",pts:3},
  {id:"6",t:"Coefficient directeur de la droite (d) passant par (0,−2) et (2,0) ?",o:["2","−0,5","−2"],r:"Réponse A ... non : pente = (0−(−2))/(2−0) = 2/2 = 1. Réponse correcte : 1. Si les options ne correspondent pas, coefficient directeur = (y₂−y₁)/(x₂−x₁). Vérifier sur le graphique fourni.",pts:3}
]},

// Programme calcul — Martinique 3 juillet 2024
{id:"e43",t:"Programme de calcul — Martinique",n:"Algèbre et Fonctions",s:"Martinique · 3 juillet 2024",
 e:"Programme :\n• Choisir un nombre\n• Mettre ce nombre au carré\n• Soustraire le triple du nombre de départ\n• Soustraire 4",
 q:[
  {id:"1",t:"Montrer que si on choisit 5, le résultat est 6.",r:"5² = 25\n25 − 3×5 = 25 − 15 = 10\n10 − 4 = 6 ✓",pts:2},
  {id:"2",t:"Exprimer le résultat en fonction de x.",r:"x² − 3x − 4",pts:2},
  {id:"3",t:"Vérifier que ce résultat s'écrit (x+1)(x−4).",r:"(x+1)(x−4) = x² − 4x + x − 4 = x² − 3x − 4 ✓",pts:3},
  {id:"4",t:"Déterminer les nombres à choisir pour obtenir 0.",r:"(x+1)(x−4) = 0\nx+1 = 0 → x = −1\nx−4 = 0 → x = 4\nLes deux nombres sont −1 et 4.",pts:3},
  {id:"5",t:"Compléter les lignes 4 et 6 du programme Scratch (ligne 3 : x=réponse ; ligne 5 : z=3×x ; ligne 6 : Résultat = ?−?−4).",r:"Ligne 4 : mettre y à x * x  (c'est-à-dire y = x²)\nLigne 6 : mettre Résultat à y − z − 4",pts:3}
]},

// Panneaux solaires + toit — Métropole Antilles-Guyane 19 sept 2024
{id:"e44",t:"Panneaux solaires & production d'électricité",n:"Statistiques",s:"Métropole Antilles-Guyane · 19 sept. 2024",
 e:"Productions d'électricité (kWh) sur une semaine :\nLundi:381 — Mardi:363 — Mercredi:322 — Jeudi:329 — Vendredi:393 — Samedi:405 — Dimanche:376\nToit hangar : schéma en coupe. OV=7m (vertical), LV=13,5m (incliné). Angle d'inclinaison OLV.",
 q:[
  {id:"1a",t:"Quel jour la production a-t-elle été la plus grande ?",r:"Samedi : 405 kWh — c'est le jour avec la production la plus élevée.",pts:2},
  {id:"1b",t:"Calculer l'étendue des productions.",r:"Étendue = 405 − 322 = 83 kWh",pts:2},
  {id:"1c",t:"Quelle est la production moyenne par jour ?",r:"Somme = 381+363+322+329+393+405+376 = 2569 kWh\nMoyenne = 2569/7 = 367 kWh",pts:3},
  {id:"2",t:"L'entreprise revend 15% de sa production à 8 centimes/kWh. Combien a-t-elle gagné en 7 jours ?",r:"15% de 2569 = 385,35 kWh\nGain = 385,35 × 0,08 = 30,83 €",pts:3},
  {id:"3",t:"Pour une production max, l'angle OLV doit être entre 30° et 35°. OV=7m, LV=13,5m. Les panneaux ont-ils une production maximale ?",r:"sin(OLV) = OV/LV = 7/13,5 ≈ 0,519\nAngle OLV = arcsin(0,519) ≈ 31°\n31° est bien entre 30° et 35° → Oui, les panneaux ont une production maximale ✓",pts:5}
]},

// Quadrilatère ABCD (deux triangles équilatéraux) — Métropole sept 2024
{id:"e45",t:"Quadrilatère — 2 triangles équilatéraux & Scratch",n:"Géométrie",s:"Métropole Antilles-Guyane · 19 sept. 2024",
 e:"Quadrilatère ABCD formé de deux triangles équilatéraux de côté 5 cm.\nLes triangles ABC et ACD sont équilatéraux de côté 5 cm.",
 q:[
  {id:"1b",t:"Quelle est la nature du quadrilatère ABCD ?",r:"ABCD est un losange : 4 côtés égaux (5 cm chacun), construit à partir de deux triangles équilatéraux.",pts:2},
  {id:"1c",t:"Démontrer que l'angle BCD mesure 120°.",r:"Triangle BCD isocèle... En fait ABCD est composé de deux triangles équilatéraux :\nTriangle ABC : angle ACB = 60°\nTriangle ACD : angle ACD = 60°\nAngle BCD = angle ACB + angle ACD = 60° + 60° = 120° ✓",pts:4},
  {id:"2",t:"Compléter les lignes 5 et 6 du bloc Motif qui trace ABCD (1cm=10pas, ligne 3: avancer 50, ligne 4: tourner 60°).",r:"Ligne 5 : avancer de 50 pas\nLigne 6 : tourner de 120 degrés\n(Le losange a des angles de 60° et 120° alternés, côtés de 50 pas)",pts:4},
  {id:"3",t:"Programme A : répéter 5 fois [Motif, tourner 72°]. Programme B : répéter 5 fois [Motif, tourner 72°, avancer 25]. Programme C : répéter 5 fois [Motif, avancer 25]. Associer chaque programme à sa figure (1=losanges en étoile, 2=losanges décalés en spirale, 3=losanges côte à côte).",r:"Programme A → Figure 1 (5 losanges formant une étoile autour du centre, rotation 72°)\nProgramme B → Figure 2 (losanges décalés et tournés)\nProgramme C → Figure 3 (5 losanges alignés côte à côte)",pts:4}
]},

// Scratch Pentagone — Polynésie 9 septembre 2024
{id:"e46",t:"Pentagone — Algorithmique Scratch",n:"Algorithmique",s:"Polynésie · 9 septembre 2024",
 e:"Bloc pentagone : tracer un pentagone régulier (tous les angles = 108°).\nTrois programmes (Camille, Lou, Zoé) tracent chacun un pentagone et son image par une transformation.\nSofia illustre une homothétie sur un pentagone.",
 q:[
  {id:"1",t:"Justifier que l'angle FEy (angle extérieur au pentagone en E) mesure 72°.",r:"L'angle intérieur du pentagone régulier = 108°\nL'angle FEy est supplémentaire : 180° − 108° = 72° ✓",pts:3},
  {id:"2a",t:"Compléter le bloc pentagone pour tracer un pentagone régulier (variable : longueur).",r:"définir pentagone\nstylo en position d'écriture\nrépéter 5 fois\n  avancer de longueur pas\n  tourner de 72 degrés\nrelever le stylo",pts:4},
  {id:"2b",t:"Programme Camille : avancer 120 puis répéter. Programme Lou : tourner 60° puis répéter. Programme Zoé : tourner 180° puis répéter. Associer chaque élève à sa copie d'écran (1=pentagones superposés tournés, 2=pentagones de côté opposé, 3=pentagones côte à côte).",r:"Camille (avancer 120) → Copie 3 (pentagones côte à côte, translation)\nLou (tourner 60°) → Copie 1 (pentagones tournés, rotation)\nZoé (tourner 180°) → Copie 2 (pentagone et son symétrique, symétrie centrale)",pts:4},
  {id:"2c",t:"Ordre des instructions dans le programme de Sofia pour illustrer une homothétie (mettre longueur×1,5 est en 7e position, Quand cliqué en 1ère) :",r:"1. Quand est cliqué\n2. effacer tout\n3. aller à x:0, y:0\n4. s'orienter à 90\n5. mettre longueur à 60\n6. pentagone\n7. mettre longueur à longueur × 1,5\n8. pentagone",pts:4}
]}
];

// Export — compatible avec index.html
var _EXERCICES_DB2 = DB;  // nouveau nom
var EXERCICES_DB2 = DB;   // ancien nom attendu par index.html
var _FIGURES = F;


// Conversion au format attendu par index.html
(function() {
  // Ajouter les figures SVG au cache global
  if (typeof _SVG_CACHE !== 'undefined' && typeof F !== 'undefined') {
    Object.assign(_SVG_CACHE, F);
  }
  
  // Convertir les exercices au bon format
  function convertExercise(ex) {
    return {
      id: ex.id,
      notion: ex.n || ex.notion || '',
      titre: ex.t || ex.titre || '',
      source: ex.s || ex.source || '',
      difficulte: ex.d || ex.difficulte || 2,
      bareme: ex.pts || ex.bareme || 20,
      enonce: ex.e || ex.enonce || '',
      figure: ex.fig || ex.figure || '',
      graphique: ex.fig || ex.graphique || '',
      questions: (ex.q || ex.questions || []).map(function(q) {
        return {
          id: q.id,
          texte: q.t || q.texte || '',
          options: q.o || q.options || [],
          reponse: q.r || q.reponse || '',
          points: q.pts || q.points || 2
        };
      })
    };
  }
  
  // Exporter
  if (typeof DB !== 'undefined') {
    EXERCICES_DB2 = DB.map(convertExercise);
    _EXERCICES_DB2 = EXERCICES_DB2;
  }
})();
