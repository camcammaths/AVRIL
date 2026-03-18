<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brevet Amérique du Nord — 29 mai 2024</title>
<style>
:root {
  --blue:#0021BC;--blue-lt:#BDD4E7;--orange:#EE6E34;--rose:#D0A6C6;
  --bg:#EDEEF0;--white:#FFFFFF;--ink:rgb(25,8,6);--muted:#8A8DAA;
  --fd:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
  --fb:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--ink);font-family:var(--fb);-webkit-font-smoothing:antialiased}
.nav{display:flex;justify-content:space-between;align-items:flex-start;padding:28px 48px 0;z-index:10;position:relative}
.logo{cursor:pointer;text-decoration:none;color:inherit}
.logo-top{font-size:13px;color:var(--ink);display:block}
.logo-bot{font-family:var(--fd);font-size:36px;font-weight:800;letter-spacing:-.04em;line-height:.9;text-transform:uppercase;display:block}
.logo-bot span{color:var(--blue)}
.nav-r{display:flex;align-items:center;gap:32px}
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links li{font-size:14px;opacity:.6;cursor:pointer;transition:opacity .15s}
.nav-links li:hover{opacity:1}
.cta{font-family:var(--fd);font-size:13px;font-weight:600;background:var(--blue);color:#fff;padding:11px 24px;border-radius:100px;border:none;cursor:pointer;transition:opacity .15s;text-decoration:none;display:inline-block}
.cta:hover{opacity:.85}
.divider{height:1px;background:rgba(0,0,0,.1);margin:0 48px}
.eyebrow{font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--orange);display:flex;align-items:center;gap:10px}
.eyebrow::before{content:'';width:20px;height:2px;background:var(--orange);border-radius:2px;display:inline-block}
.btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--fd);font-size:13px;font-weight:600;padding:13px 28px;border-radius:100px;cursor:pointer;border:none;text-transform:lowercase;transition:opacity .15s;text-decoration:none}
.btn:hover{opacity:.85}
.btn-blue{background:var(--blue);color:#fff}
.btn-ghost{background:transparent;color:var(--ink);border:1.5px solid rgba(0,0,0,.15);padding:12px 26px}
.ctag{font-size:10px;font-weight:500;padding:4px 12px;border-radius:100px;border:1.5px solid rgba(0,0,0,.1);color:var(--muted);background:transparent}
.ctag.b{background:#EEF2FF;border-color:var(--blue);color:var(--blue)}
.ctag.o{background:#FFF0E8;border-color:var(--orange);color:var(--orange)}
.brevet-ex{background:var(--white);border-radius:18px;padding:32px;margin-bottom:14px}
.brevet-ex-num{font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:4px}
.brevet-ex-titre{font-family:var(--fd);font-size:20px;font-weight:500;text-transform:lowercase;letter-spacing:-.02em;display:block}
.brevet-enonce{font-size:14px;line-height:1.75;color:#3A3D6B;background:rgba(0,33,188,.03);border-left:3px solid var(--blue-lt);padding:14px 18px;border-radius:0 10px 10px 0;margin:18px 0 22px}
.brevet-q{margin-bottom:20px}
.brevet-q-row{display:flex;align-items:baseline;gap:10px;margin-bottom:8px;flex-wrap:wrap}
.brevet-q-id{font-family:var(--fd);font-size:13px;font-weight:700;color:var(--blue);flex-shrink:0}
.brevet-q-text{font-size:14px;color:var(--ink);line-height:1.5;flex:1}
.brevet-q-pts{font-size:11px;font-weight:700;color:var(--orange);background:#FFF0E8;padding:3px 10px;border-radius:100px;white-space:nowrap}
.brevet-answer{width:100%;font-family:var(--fb);font-size:14px;color:var(--ink);background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-radius:10px;padding:12px 14px;resize:vertical;transition:border-color .15s;line-height:1.6}
.brevet-answer:focus{outline:none;border-color:var(--blue);background:var(--white)}
.brevet-answer::placeholder{color:var(--muted)}
.lbl{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:6px;display:block}
.aff-block{background:#FAFAFA;border:1.5px solid rgba(0,0,0,.07);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.partie-label{display:block;margin:18px 0 10px;padding:8px 14px;background:rgba(0,33,188,.06);border-radius:8px;border-left:3px solid var(--blue);font-weight:700;font-size:13px;color:var(--blue);letter-spacing:.03em;text-transform:uppercase}
.partie-label.orange{background:rgba(238,110,52,.06);border-color:var(--orange);color:var(--orange)}
.brevet-table{width:100%;border-collapse:collapse;font-size:13px;background:var(--white);border-radius:10px;overflow:hidden;border:1.5px solid rgba(0,0,0,.08);margin:12px 0}
.brevet-table th{background:#EEF2FF;padding:10px 14px;text-align:center;font-weight:700;color:var(--blue);border-right:1px solid rgba(0,33,188,.1);font-size:12px}
.brevet-table th:last-child{border-right:none}
.brevet-table td{padding:11px 14px;text-align:center;border-right:1px solid rgba(0,0,0,.06);font-family:'Courier New',monospace;font-size:12px}
.brevet-table td:last-child{border-right:none}
.brevet-figure{display:flex;justify-content:center;margin:16px 0;background:#FAFAFA;border-radius:14px;padding:20px;border:1.5px solid rgba(0,0,0,.06)}
.script-block{background:#1a1a2e;border-radius:12px;padding:18px 22px;font-family:'Courier New',monospace;font-size:13px;line-height:2.1;margin:12px 0}
.footer-bar{background:var(--blue);padding:16px 48px;display:flex;justify-content:space-between;align-items:center;margin-top:0}
.footer-bar-links{display:flex;gap:40px}
.footer-bar-links a{font-size:13px;font-weight:500;color:rgba(255,255,255,.7);text-decoration:none;cursor:pointer}
.footer-bar-copy{font-size:12px;color:rgba(255,255,255,.35)}
</style>
</head>
<body>

<nav class="nav">
  <a href="index.html" class="logo">
    <span class="logo-top">prépa</span>
    <span class="logo-bot">bre<span>.</span>vet</span>
  </a>
  <div class="nav-r">
    <ul class="nav-links">
      <li onclick="window.location='index.html'">accueil</li>
      <li onclick="window.location='index.html'">mon parcours</li>
      <li onclick="window.location='index.html'">ressources</li>
      <li onclick="window.location='index.html'" style="color:var(--orange);opacity:1;font-weight:600">s'inscrire ✦</li>
    </ul>
    <a href="index.html" class="cta">← retour</a>
  </div>
</nav>

<div class="divider" style="margin-top:16px"></div>

<div style="padding:36px 48px 28px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px">
  <div>
    <p class="eyebrow" style="margin-bottom:10px">Brevet 2024 · Mathématiques</p>
    <h1 style="font-family:var(--fd);font-size:clamp(32px,3.8vw,56px);font-weight:500;line-height:1;letter-spacing:-.04em;text-transform:lowercase;margin-bottom:8px">sujets<br><span style="color:var(--blue)">complets.</span></h1>
    <p style="font-size:13px;color:var(--muted);font-weight:300">4 exercices · 80 points · Durée : <strong style="color:var(--ink)">2h</strong></p>
  </div>
  <div style="background:var(--white);border-radius:18px;padding:20px 28px;text-align:center;min-width:180px">
    <div style="font-size:10px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:6px">temps restant</div>
    <div id="timer-display" style="font-family:var(--fd);font-size:42px;font-weight:700;letter-spacing:-.04em;line-height:1;color:var(--blue);font-variant-numeric:tabular-nums">02:00:00</div>
    <div style="margin-top:12px;display:flex;gap:6px;justify-content:center">
      <button id="timer-btn" onclick="toggleTimer()" style="font-size:11px;font-weight:600;padding:5px 14px;border-radius:100px;border:1.5px solid rgba(0,0,0,.1);background:transparent;color:var(--ink);cursor:pointer">⏵ démarrer</button>
      <button onclick="resetTimer()" style="font-size:11px;font-weight:600;padding:5px 14px;border-radius:100px;border:1.5px solid rgba(0,0,0,.1);background:transparent;color:var(--muted);cursor:pointer">↺</button>
    </div>
  </div>
</div>

<div class="divider"></div>

<div style="padding:36px 48px 72px;max-width:880px">

<!-- ══════════ SÉPARATEUR SUJET ══════════ -->
<div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">
  <div style="flex:1;height:1px;background:rgba(0,0,0,.1)"></div>
  <span style="font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);white-space:nowrap">Brevet Centres étrangers · 10 juin 2024</span>
  <div style="flex:1;height:1px;background:rgba(0,0,0,.1)"></div>
</div>

<!-- ══════════ EXERCICE QCM — Centres étrangers ══════════ -->
<div class="brevet-ex">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
    <div>
      <span class="brevet-ex-num">Exercice 1</span>
      <span class="brevet-ex-titre">QCM — questionnaire à choix multiples</span>
      <span style="font-size:11px;font-weight:400;color:var(--muted);display:block;margin-top:4px">Brevet Centres étrangers · 10 juin 2024</span>
    </div>
    <div style="display:flex;gap:6px;align-items:center">
      <span class="ctag b">Puissances · Vitesse · Probabilités · Statistiques · Fractions</span>
      <span class="ctag">20 pts</span>
    </div>
  </div>
  <div class="brevet-enonce">
    Questionnaire à choix multiples. <strong>Aucune justification n'est demandée.</strong><br>
    Pour chaque question, quatre réponses sont proposées, <strong>une seule réponse est exacte</strong>.<br>
    Recopier le numéro de la question <strong>et</strong> la réponse choisie.
  </div>

  <!-- Q1 : écriture scientifique -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">1.</span>
      <span class="brevet-q-text">Donner l'écriture scientifique de <strong>0,193 × 10<sup>−100</sup></strong>.</span>
      <span class="brevet-q-pts">4 pts</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:10px">
      <div id="q1a" onclick="selectQCM('q1','a')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-radius:8px 0 0 8px;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">1,93 × 10<sup>−99</sup></div>
      <div id="q1b" onclick="selectQCM('q1','b')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">1,93 × 10<sup>−101</sup></div>
      <div id="q1c" onclick="selectQCM('q1','c')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">193 × 10<sup>−103</sup></div>
      <div id="q1d" onclick="selectQCM('q1','d')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;border-radius:0 8px 8px 0;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">193 × 10<sup>−97</sup></div>
    </div>
  </div>

  <!-- Q2 : vitesse -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">2.</span>
      <span class="brevet-q-text">Lili part en vacances, elle parcourt <strong>480 km en 5 h 42 min</strong>. Quelle est sa vitesse moyenne en km/h, arrondie au dixième ?</span>
      <span class="brevet-q-pts">4 pts</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:10px">
      <div id="q2a" onclick="selectQCM('q2','a')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-radius:8px 0 0 8px;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px;font-weight:500">88,6</div>
      <div id="q2b" onclick="selectQCM('q2','b')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px;font-weight:500">84,2</div>
      <div id="q2c" onclick="selectQCM('q2','c')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px;font-weight:500">1,4</div>
      <div id="q2d" onclick="selectQCM('q2','d')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;border-radius:0 8px 8px 0;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px;font-weight:500">23,4</div>
    </div>
  </div>

  <!-- Q3 : roue probabilité -->
  <div class="brevet-q">
    <div style="display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:240px">
        <div class="brevet-q-row">
          <span class="brevet-q-id">3.</span>
          <span class="brevet-q-text">Sam fait tourner la roue ci-contre et regarde le nombre désigné par la flèche, qui peut être 1 ou 2. On admet que chaque secteur a autant de chance d'être désigné.<br><br>
          Le nombre écrit dans un des secteurs a été effacé. Est-il possible d'écrire un nombre dans ce secteur de sorte que la probabilité que la flèche désigne le nombre 2 soit égale à <strong>3/5</strong> ?</span>
          <span class="brevet-q-pts">4 pts</span>
        </div>
      </div>
      <!-- Roue SVG -->
      <div style="flex-shrink:0">
        <svg viewBox="0 0 200 210" width="180" height="190" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif">
          <!-- flèche en haut -->
          <polygon points="100,8 94,22 106,22" fill="#333"/>
          <line x1="100" y1="22" x2="100" y2="38" stroke="#333" stroke-width="2"/>
          <!-- roue : 12 secteurs, rayon 80, centre (100,118) -->
          <!-- secteurs à 30° chacun, angles : 0=haut=-90° -->
          <!-- Secteurs numérotés dans le sens horaire depuis le haut -->
          <!-- On colorie alternativement blanc/gris clair -->
          <g transform="translate(100,118)">
            <!-- 12 secteurs de 30° chacun -->
            <!-- Secteur 0 : -90° à -60° -->
            <path d="M0,0 L0,-80 A80,80 0 0,1 69.28,-40 Z" fill="#fff" stroke="#555" stroke-width="1.2"/>
            <text x="28" y="-55" text-anchor="middle" font-size="13" font-weight="700" fill="#333">2</text>
            <!-- Secteur 1 : -60° à -30° -->
            <path d="M0,0 L69.28,-40 A80,80 0 0,1 80,0 Z" fill="#f0f0f0" stroke="#555" stroke-width="1.2"/>
            <text x="64" y="-18" text-anchor="middle" font-size="13" font-weight="700" fill="#333">2</text>
            <!-- Secteur 2 : -30° à 0° -->
            <path d="M0,0 L80,0 A80,80 0 0,1 69.28,40 Z" fill="#fff" stroke="#555" stroke-width="1.2"/>
            <text x="64" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#333">2</text>
            <!-- Secteur 3 : 0° à 30° -->
            <path d="M0,0 L69.28,40 A80,80 0 0,1 40,69.28 Z" fill="#f0f0f0" stroke="#555" stroke-width="1.2"/>
            <text x="46" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#333">1</text>
            <!-- Secteur 4 : 30° à 60° -->
            <path d="M0,0 L40,69.28 A80,80 0 0,1 0,80 Z" fill="#fff" stroke="#555" stroke-width="1.2"/>
            <text x="16" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#333">2</text>
            <!-- Secteur 5 : 60° à 90° -->
            <path d="M0,0 L0,80 A80,80 0 0,1 -40,69.28 Z" fill="#f0f0f0" stroke="#555" stroke-width="1.2"/>
            <text x="-16" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#333">1</text>
            <!-- Secteur 6 : 90° à 120° -->
            <path d="M0,0 L-40,69.28 A80,80 0 0,1 -69.28,40 Z" fill="#fff" stroke="#555" stroke-width="1.2"/>
            <text x="-46" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#333">1</text>
            <!-- Secteur 7 : 120° à 150° -->
            <path d="M0,0 L-69.28,40 A80,80 0 0,1 -80,0 Z" fill="#f0f0f0" stroke="#555" stroke-width="1.2"/>
            <text x="-64" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#333">2</text>
            <!-- Secteur 8 : 150° à 180° -->
            <path d="M0,0 L-80,0 A80,80 0 0,1 -69.28,-40 Z" fill="#fff" stroke="#555" stroke-width="1.2"/>
            <text x="-64" y="-18" text-anchor="middle" font-size="13" font-weight="700" fill="#333">1</text>
            <!-- Secteur 9 : 180° à 210° -->
            <path d="M0,0 L-69.28,-40 A80,80 0 0,1 -40,-69.28 Z" fill="#f0f0f0" stroke="#555" stroke-width="1.2"/>
            <text x="-46" y="-55" text-anchor="middle" font-size="13" font-weight="700" fill="#333">1</text>
            <!-- Secteur 10 : 210° à 240° — case EFFACÉE -->
            <path d="M0,0 L-40,-69.28 A80,80 0 0,1 0,-80 Z" fill="#EEF2FF" stroke="#0021BC" stroke-width="1.8" stroke-dasharray="3,2"/>
            <text x="-16" y="-66" text-anchor="middle" font-size="13" font-weight="700" fill="#0021BC">?</text>
            <!-- Secteur 11 : 240° à 270° -->
            <path d="M0,0 L0,-80 A80,80 0 0,0 -40,-69.28 Z" fill="#f0f0f0" stroke="#555" stroke-width="1.2"/>
            <!-- correction arc : secteur 11 = de 270° en sens anti-horaire vers 240° soit de -90° à -120° -->
          </g>
          <!-- centre -->
          <circle cx="100" cy="118" r="5" fill="#333"/>
        </svg>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:10px">
      <div id="q3a" onclick="selectQCM('q3','a')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-radius:8px 0 0 8px;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">Oui, en écrivant le nombre 1</div>
      <div id="q3b" onclick="selectQCM('q3','b')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">Oui, en écrivant le nombre 2</div>
      <div id="q3c" onclick="selectQCM('q3','c')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">Ce n'est pas possible</div>
      <div id="q3d" onclick="selectQCM('q3','d')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;border-radius:0 8px 8px 0;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">Oui, en laissant le secteur vide</div>
    </div>
  </div>

  <!-- Q4 : statistiques -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">4.</span>
      <span class="brevet-q-text">On considère la liste de nombres suivante : <strong style="font-family:'Courier New',monospace">5 ; 1 ; 3 ; 10 ; 17 ; 11 ; 10</strong>.<br>Pour cette liste de nombres, que représente le nombre <strong>5</strong> ?</span>
      <span class="brevet-q-pts">4 pts</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:10px">
      <div id="q4a" onclick="selectQCM('q4','a')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-radius:8px 0 0 8px;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">La médiane</div>
      <div id="q4b" onclick="selectQCM('q4','b')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">L'étendue</div>
      <div id="q4c" onclick="selectQCM('q4','c')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">La moyenne</div>
      <div id="q4d" onclick="selectQCM('q4','d')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;border-radius:0 8px 8px 0;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:13px">Rien de particulier</div>
    </div>
  </div>

  <!-- Q5 : fractions -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">5.</span>
      <span class="brevet-q-text">Léa achète un vélo électrique. Pour le réserver, elle paye <strong>1/5</strong> du prix au magasin. Le magasin lui propose de payer le reste en trois paiements d'un même montant.<br>Quelle fraction du prix du vélo représente l'un de ces trois paiements ?</span>
      <span class="brevet-q-pts">4 pts</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-bottom:10px">
      <div id="q5a" onclick="selectQCM('q5','a')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-radius:8px 0 0 8px;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px">12/5</div>
      <div id="q5b" onclick="selectQCM('q5','b')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px">1/15</div>
      <div id="q5c" onclick="selectQCM('q5','c')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px">4/15</div>
      <div id="q5d" onclick="selectQCM('q5','d')" style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.08);border-left:none;border-radius:0 8px 8px 0;padding:12px;text-align:center;cursor:pointer;transition:all .15s;font-size:14px">3/5</div>
    </div>
  </div>
</div>


<!-- ══════════ EXERCICE 2 — Centres étrangers ══════════ -->
<div class="brevet-ex">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
    <div>
      <span class="brevet-ex-num">Exercice 2</span>
      <span class="brevet-ex-titre">circuits d'entraînement</span>
      <span style="font-size:11px;font-weight:400;color:var(--muted);display:block;margin-top:4px">Brevet Centres étrangers · 10 juin 2024</span>
    </div>
    <div style="display:flex;gap:6px;align-items:center">
      <span class="ctag b">Arithmétique · PGCD · Multiples</span>
      <span class="ctag">20 pts</span>
    </div>
  </div>

  <div class="brevet-enonce">
    Un entraîneur de sport prépare deux circuits d'entraînement :<br><br>
    • <strong>Circuit 1</strong> : 5 exercices. Chaque exercice dure <strong>40 s</strong>, suivi de <strong>16 s</strong> de repos.<br>
    • <strong>Circuit 2</strong> : 10 exercices. Chaque exercice dure <strong>30 s</strong>, suivi de <strong>5 s</strong> de repos.<br><br>
    Chaque circuit commence à l'exercice 1 et se termine en y revenant.
  </div>

  <!-- Schémas des deux circuits -->
  <div class="brevet-figure" style="gap:40px;flex-wrap:wrap">

    <!-- Circuit 1 : pentagone -->
    <div style="text-align:center">
      <div style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Circuit 1</div>
      <svg viewBox="-110 -110 220 250" width="190" height="220" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif">
        <!-- Pentagone régulier, 5 nœuds. Angles depuis le haut : -90°, -18°, 54°, 126°, 198° -->
        <!-- r=80 -->
        <!-- P1(top): (0,-80), P2: (76,-25), P3: (47,65), P4:(-47,65), P5:(-76,-25) -->
        <defs><marker id="arr-c1" markerWidth="7" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0021BC"/></marker></defs>
        <!-- arêtes -->
        <line x1="0" y1="-80" x2="76" y2="-25" stroke="#0021BC" stroke-width="1.5" marker-end="url(#arr-c1)"/>
        <line x1="76" y1="-25" x2="47" y2="65" stroke="#0021BC" stroke-width="1.5" marker-end="url(#arr-c1)"/>
        <line x1="47" y1="65" x2="-47" y2="65" stroke="#0021BC" stroke-width="1.5" marker-end="url(#arr-c1)"/>
        <line x1="-47" y1="65" x2="-76" y2="-25" stroke="#0021BC" stroke-width="1.5" marker-end="url(#arr-c1)"/>
        <line x1="-76" y1="-25" x2="0" y2="-80" stroke="#0021BC" stroke-width="1.5" marker-end="url(#arr-c1)"/>
        <!-- nœuds -->
        <circle cx="0" cy="-80" r="14" fill="white" stroke="#0021BC" stroke-width="1.5"/>
        <circle cx="76" cy="-25" r="14" fill="white" stroke="#0021BC" stroke-width="1.5"/>
        <circle cx="47" cy="65" r="14" fill="white" stroke="#0021BC" stroke-width="1.5"/>
        <circle cx="-47" cy="65" r="14" fill="white" stroke="#0021BC" stroke-width="1.5"/>
        <circle cx="-76" cy="-25" r="14" fill="white" stroke="#0021BC" stroke-width="1.5"/>
        <!-- labels -->
        <text x="0" y="-75" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="#0021BC">Ex 1</text>
        <text x="76" y="-25" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="#0021BC">Ex 2</text>
        <text x="47" y="65" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="#0021BC">Ex 3</text>
        <text x="-47" y="65" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="#0021BC">Ex 4</text>
        <text x="-76" y="-25" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="#0021BC">Ex 5</text>
        <!-- Départ/Arrivée -->
        <text x="0" y="-100" text-anchor="middle" font-size="10" font-weight="600" fill="var(--muted)">Départ / Arrivée</text>
        <line x1="0" y1="-95" x2="0" y2="-88" stroke="var(--muted)" stroke-width="1.2" marker-end="url(#arr-c1)"/>
        <!-- label centre -->
        <text x="0" y="10" text-anchor="middle" font-size="11" fill="var(--muted)" font-style="italic">Circuit 1</text>
      </svg>
    </div>

    <!-- Circuit 2 : décagone -->
    <div style="text-align:center">
      <div style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:10px">Circuit 2</div>
      <svg viewBox="-110 -110 220 250" width="190" height="220" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif">
        <defs><marker id="arr-c2" markerWidth="7" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#EE6E34"/></marker></defs>
        <!-- 10 nœuds, r=80, angles depuis le haut (-90°) par pas de 36° -->
        <!-- P1(top):(0,-80), P2:(47,-65), P3:(76,-25), P4:(76,25), P5:(47,65) -->
        <!-- P6:(0,80), P7:(-47,65), P8:(-76,25), P9:(-76,-25), P10:(-47,-65) -->
        <line x1="0" y1="-80" x2="47" y2="-65" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="47" y1="-65" x2="76" y2="-25" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="76" y1="-25" x2="76" y2="25" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="76" y1="25" x2="47" y2="65" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="47" y1="65" x2="0" y2="80" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="0" y1="80" x2="-47" y2="65" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="-47" y1="65" x2="-76" y2="25" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="-76" y1="25" x2="-76" y2="-25" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="-76" y1="-25" x2="-47" y2="-65" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <line x1="-47" y1="-65" x2="0" y2="-80" stroke="#EE6E34" stroke-width="1.5" marker-end="url(#arr-c2)"/>
        <!-- nœuds -->
        <circle cx="0" cy="-80" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="47" cy="-65" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="76" cy="-25" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="76" cy="25" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="47" cy="65" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="0" cy="80" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="-47" cy="65" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="-76" cy="25" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="-76" cy="-25" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <circle cx="-47" cy="-65" r="13" fill="white" stroke="#EE6E34" stroke-width="1.5"/>
        <!-- labels -->
        <text x="0" y="-80" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 1</text>
        <text x="47" y="-65" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 2</text>
        <text x="76" y="-25" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 3</text>
        <text x="76" y="25" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 4</text>
        <text x="47" y="65" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 5</text>
        <text x="0" y="80" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 6</text>
        <text x="-47" y="65" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 7</text>
        <text x="-76" y="25" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 8</text>
        <text x="-76" y="-25" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 9</text>
        <text x="-47" y="-65" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="600" fill="#EE6E34">Ex 10</text>
        <!-- Départ/Arrivée -->
        <text x="0" y="-100" text-anchor="middle" font-size="10" font-weight="600" fill="var(--muted)">Départ / Arrivée</text>
        <line x1="0" y1="-95" x2="0" y2="-87" stroke="var(--muted)" stroke-width="1.2" marker-end="url(#arr-c2)"/>
        <text x="0" y="10" text-anchor="middle" font-size="11" fill="var(--muted)" font-style="italic">Circuit 2</text>
      </svg>
    </div>
  </div>

  <!-- Q1 -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">1.</span>
      <span class="brevet-q-text">Montrer que le circuit 1 s'effectue en <strong>280 secondes</strong> et que le circuit 2 s'effectue en <strong>350 secondes</strong>.</span>
      <span class="brevet-q-pts">4 pts</span>
    </div>
    <span class="lbl">Ta réponse</span>
    <textarea class="brevet-answer" placeholder="Circuit 1 : 5 × (40 + 16) = … s&#10;Circuit 2 : 10 × (30 + 5) = … s" rows="3"></textarea>
  </div>

  <!-- Q2 -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">2.</span>
      <span class="brevet-q-text">Donner la décomposition en produit de facteurs premiers de <strong>280</strong> et de <strong>350</strong>.</span>
      <span class="brevet-q-pts">4 pts</span>
    </div>
    <span class="lbl">Ta réponse</span>
    <textarea class="brevet-answer" placeholder="280 = … × … × …&#10;350 = … × … × …" rows="3"></textarea>
  </div>

  <!-- Q3 -->
  <div class="brevet-q">
    <div class="brevet-q-row">
      <span class="brevet-q-id">3.</span>
      <span class="brevet-q-text">Une séance est constituée de plusieurs tours du même circuit. Au coup de sifflet, <strong>Camille</strong> commence sur le circuit 1 et <strong>Dominique</strong> sur le circuit 2.</span>
    </div>

    <div style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.07);border-radius:12px;padding:16px 20px;margin-bottom:10px">
      <div class="brevet-q-row">
        <span class="brevet-q-id">3.a.</span>
        <span class="brevet-q-text">Expliquer pourquoi, lorsque <strong>2 800 secondes</strong> se sont écoulées, Camille se trouve de nouveau au départ du circuit 1. Préciser où se trouve Dominique sur le circuit 2 à ce moment.</span>
        <span class="brevet-q-pts">6 pts</span>
      </div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="2 800 ÷ 280 = … tours pour Camille → elle est au départ.&#10;2 800 ÷ 350 = … → Dominique se trouve à …" rows="4"></textarea>
    </div>

    <div style="background:#FAFAFA;border:1.5px solid rgba(0,0,0,.07);border-radius:12px;padding:16px 20px">
      <div class="brevet-q-row">
        <span class="brevet-q-id">3.b.</span>
        <span class="brevet-q-text">Après le coup de sifflet, combien de temps faut-il à Camille et Dominique pour se retrouver <strong>en même temps pour la première fois</strong> au départ de leur circuit ? Exprimer cette durée en minutes et secondes.</span>
        <span class="brevet-q-pts">6 pts</span>
      </div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="On cherche le PPCM de 280 et 350…&#10;PPCM = … s = … min … s" rows="4"></textarea>
    </div>
  </div>
</div>

<!-- séparateur -->
<div style="display:flex;align-items:center;gap:16px;margin:8px 0 20px">
  <div style="flex:1;height:1px;background:rgba(0,0,0,.1)"></div>
  <span style="font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);white-space:nowrap">Brevet Amérique du Nord · 29 mai 2024</span>
  <div style="flex:1;height:1px;background:rgba(0,0,0,.1)"></div>
</div>

<!-- ══════════ EXERCICE 1 ══════════ -->
<div class="brevet-ex">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
    <div>
      <span class="brevet-ex-num">Exercice 1</span>
      <span class="brevet-ex-titre">affirmations — vrai ou faux justifié</span>
      <span style="font-size:11px;font-weight:400;color:var(--muted);display:block;margin-top:4px">Brevet Amérique du Nord · 29 mai 2024</span>
    </div>
    <div style="display:flex;gap:6px;align-items:center">
      <span class="ctag b">Statistiques · Probabilités · Géométrie</span>
      <span class="ctag">20 pts</span>
    </div>
  </div>
  <div class="brevet-enonce">Voici cinq affirmations. Pour chacune d'entre elles, dire si elle est <strong>vraie ou fausse</strong>. On rappelle que chaque réponse doit être <strong>justifiée</strong>.</div>

  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">1.</span><span class="brevet-q-text">Voici les prix en euros d'un vêtement relevés dans différents magasins.</span></div>
    <div style="font-family:'Courier New',monospace;font-size:15px;font-weight:700;color:var(--blue);text-align:center;padding:14px;background:#EEF2FF;border-radius:10px;margin-bottom:16px;letter-spacing:.1em">12 &nbsp;;&nbsp; 15 &nbsp;;&nbsp; 10 &nbsp;;&nbsp; 7 &nbsp;;&nbsp; 13</div>
    <div class="aff-block">
      <div class="brevet-q-row"><span class="brevet-q-id">Affirmation A</span><span class="brevet-q-text">La moyenne des prix est <strong>11,40 €</strong>.</span><span class="brevet-q-pts">4 pts</span></div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="Vraie ou fausse ? Justifie par le calcul…" rows="3"></textarea>
    </div>
    <div class="aff-block" style="margin-bottom:0">
      <div class="brevet-q-row"><span class="brevet-q-id">Affirmation B</span><span class="brevet-q-text">La médiane des prix est <strong>10 €</strong>.</span><span class="brevet-q-pts">4 pts</span></div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="Vraie ou fausse ? Range les valeurs et justifie…" rows="3"></textarea>
    </div>
  </div>

  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">2.</span><span class="brevet-q-text">Lors d'un entraînement, une élève court <strong>20 m en 6 secondes</strong>.</span></div>
    <div class="aff-block" style="margin-bottom:0">
      <div class="brevet-q-row"><span class="brevet-q-id">Affirmation C</span><span class="brevet-q-text">Sa vitesse moyenne était de <strong>14 km/h</strong>.</span><span class="brevet-q-pts">4 pts</span></div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="Vraie ou fausse ? Convertis les unités et calcule…" rows="3"></textarea>
    </div>
  </div>

  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">3.</span><span class="brevet-q-text">Une urne contient <strong>15 boules</strong> indiscernables numérotées de 1 à 15.</span></div>
    <div class="aff-block" style="margin-bottom:0">
      <div class="brevet-q-row"><span class="brevet-q-id">Affirmation D</span><span class="brevet-q-text">La probabilité de tirer un nombre premier est <strong>7/15</strong>.</span><span class="brevet-q-pts">4 pts</span></div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="Vraie ou fausse ? Liste les nombres premiers de 1 à 15…" rows="3"></textarea>
    </div>
  </div>

  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">4.</span><span class="brevet-q-text">Le triangle A'B'C' est l'image du triangle ABC par l'<strong>homothétie de centre O et de rapport (−3)</strong>.</span></div>
    <div class="brevet-figure">
      <svg viewBox="0 0 360 298" width="330" height="270" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif">
        <defs><marker id="arr" markerWidth="7" markerHeight="7" refX="3.5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#ccc"/></marker></defs>
        <polygon points="82,180 108,235 90,160" fill="rgba(0,33,188,.06)" stroke="#0021BC" stroke-width="1.8" stroke-linejoin="round"/>
        <polygon points="174,252 96,104 150,314" fill="rgba(238,110,52,.06)" stroke="#EE6E34" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="105" cy="202" r="3.5" fill="#0021BC"/>
        <text x="113" y="199" fill="#0021BC" font-weight="700" font-size="13">O</text>
        <text x="66" y="182" fill="#0021BC" font-weight="600" font-size="13">A</text>
        <text x="111" y="247" fill="#0021BC" font-weight="600" font-size="13">B</text>
        <text x="76" y="156" fill="#0021BC" font-weight="600" font-size="13">C</text>
        <text x="178" y="258" fill="#EE6E34" font-weight="600" font-size="13">A'</text>
        <text x="78" y="100" fill="#EE6E34" font-weight="600" font-size="13">B'</text>
        <text x="138" y="292" fill="#EE6E34" font-weight="600" font-size="13">C'</text>
        <line x1="50" y1="170" x2="195" y2="266" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="96" y1="104" x2="120" y2="254" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="68" y1="130" x2="162" y2="296" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <rect x="218" y="14" width="126" height="52" rx="8" fill="white" stroke="rgba(0,0,0,.08)" stroke-width="1"/>
        <line x1="228" y1="30" x2="248" y2="30" stroke="#0021BC" stroke-width="2"/><text x="254" y="34" fill="#0021BC" font-size="11">Triangle ABC</text>
        <line x1="228" y1="52" x2="248" y2="52" stroke="#EE6E34" stroke-width="2"/><text x="254" y="56" fill="#EE6E34" font-size="11">Triangle A'B'C'</text>
      </svg>
    </div>
    <div class="aff-block" style="margin-bottom:0">
      <div class="brevet-q-row"><span class="brevet-q-id">Affirmation E</span><span class="brevet-q-text">L'aire du triangle A'B'C' est égale à <strong>3 fois</strong> l'aire du triangle ABC.</span><span class="brevet-q-pts">4 pts</span></div>
      <span class="lbl">Ta réponse</span>
      <textarea class="brevet-answer" placeholder="Vraie ou fausse ? Utilise la propriété des homothéties sur les aires…" rows="3"></textarea>
    </div>
  </div>
</div>

<!-- ══════════ EXERCICE 2 ══════════ -->
<div class="brevet-ex">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
    <div>
      <span class="brevet-ex-num">Exercice 2</span>
      <span class="brevet-ex-titre">programme de calcul</span>
      <span style="font-size:11px;font-weight:400;color:var(--muted);display:block;margin-top:4px">Brevet Amérique du Nord · 29 mai 2024</span>
    </div>
    <div style="display:flex;gap:6px;align-items:center"><span class="ctag b">Algèbre et Fonctions</span><span class="ctag">20 pts</span></div>
  </div>

  <div class="brevet-figure">
    <svg viewBox="0 0 400 288" width="380" height="268" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif">
      <defs><marker id="a2" markerWidth="7" markerHeight="7" refX="3.5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#8A8DAA"/></marker></defs>
      <rect x="125" y="6" width="150" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/>
      <text x="200" y="27" text-anchor="middle" fill="#0021BC" font-weight="600" font-size="12">Nombre choisi au départ</text>
      <line x1="175" y1="40" x2="96" y2="82" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <line x1="225" y1="40" x2="304" y2="82" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <rect x="26" y="82" width="120" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/><text x="86" y="103" text-anchor="middle" fill="var(--ink)" font-size="12">Ajouter 2</text>
      <rect x="254" y="82" width="120" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/><text x="314" y="103" text-anchor="middle" fill="var(--ink)" font-size="12">Multiplier par 5</text>
      <line x1="86" y1="116" x2="86" y2="154" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <rect x="26" y="154" width="120" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/><text x="86" y="175" text-anchor="middle" fill="var(--ink)" font-size="12">Multiplier par 4</text>
      <line x1="314" y1="116" x2="314" y2="154" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <rect x="254" y="154" width="120" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/><text x="314" y="175" text-anchor="middle" fill="var(--ink)" font-size="12">Soustraire 3</text>
      <line x1="86" y1="188" x2="168" y2="222" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <line x1="314" y1="188" x2="232" y2="222" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <rect x="100" y="222" width="200" height="34" rx="6" fill="#EEF2FF" stroke="#0021BC" stroke-width="1.8"/><text x="200" y="243" text-anchor="middle" fill="#0021BC" font-weight="600" font-size="12">Multiplier les deux nombres</text>
      <line x1="200" y1="256" x2="200" y2="272" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a2)"/>
      <text x="200" y="284" text-anchor="middle" fill="var(--muted)" font-size="11" font-style="italic">Résultat obtenu à l'arrivée</text>
    </svg>
  </div>

  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">1.</span><span class="brevet-q-text">Montrer que si on choisit <strong>2</strong> comme nombre de départ, le résultat est <strong>112</strong>.</span><span class="brevet-q-pts">3 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Détaille le calcul étape par étape…" rows="3"></textarea></div>
  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">2.</span><span class="brevet-q-text">Quel résultat obtient-on avec <strong>−3</strong> comme nombre de départ ?</span><span class="brevet-q-pts">3 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Détaille le calcul…" rows="3"></textarea></div>
  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">3.</span><span class="brevet-q-text">On choisit <em>x</em> comme nombre de départ. Lesquelles de ces expressions donnent le résultat ? <em style="color:var(--muted)">(Aucune justification.)</em></span><span class="brevet-q-pts">4 pts</span></div>
    <table class="brevet-table"><thead><tr><th>Expression A</th><th>Expression B</th><th>Expression C</th><th>Expression D</th></tr></thead><tbody><tr><td>(x+2×4)(x×5−3)</td><td>(4x+2)(5x−3)</td><td>(4x+8)(5x−3)</td><td>(x+2)×4×(5x−3)</td></tr></tbody></table>
    <span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Les expressions correctes sont…" rows="2"></textarea>
  </div>
  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">4.</span><span class="brevet-q-text">Trouver les <strong>deux nombres de départ</strong> qui donnent 0 à l'arrivée. Expliquer la démarche.</span><span class="brevet-q-pts">5 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Pour obtenir 0, un produit est nul si… donc…" rows="4"></textarea></div>
  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">5.</span><span class="brevet-q-text">Développer et réduire l'expression B : <span style="font-family:'Courier New',monospace;background:#EEF2FF;padding:2px 8px;border-radius:4px;color:var(--blue)">(4x+2)(5x−3)</span></span><span class="brevet-q-pts">5 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Développe étape par étape…" rows="4"></textarea></div>
</div>

<!-- ══════════ EXERCICE 3 ══════════ -->
<div class="brevet-ex">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
    <div>
      <span class="brevet-ex-num">Exercice 3</span>
      <span class="brevet-ex-titre">programme de calcul & fonction g</span>
      <span style="font-size:11px;font-weight:400;color:var(--muted);display:block;margin-top:4px">Brevet Centres étrangers · 10 juin 2024</span>
    </div>
    <div style="display:flex;gap:6px;align-items:center"><span class="ctag b">Algèbre et Fonctions</span><span class="ctag">20 pts</span></div>
  </div>
  <div class="brevet-enonce">On considère le programme de calcul suivant :</div>

  <div class="brevet-figure">
    <svg viewBox="0 0 360 318" width="330" height="292" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,sans-serif">
      <defs><marker id="a3" markerWidth="7" markerHeight="7" refX="3.5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#8A8DAA"/></marker></defs>
      <rect x="110" y="6" width="140" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/>
      <text x="180" y="27" text-anchor="middle" fill="#0021BC" font-weight="600" font-size="12">Choisir un nombre</text>
      <line x1="180" y1="40" x2="180" y2="74" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a3)"/>
      <rect x="130" y="74" width="100" height="34" rx="6" fill="white" stroke="#8A8DAA" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="180" y="95" text-anchor="middle" fill="var(--muted)" font-size="11" font-style="italic">x</text>
      <line x1="130" y1="91" x2="72" y2="134" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a3)"/>
      <line x1="230" y1="91" x2="288" y2="134" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a3)"/>
      <text x="54" y="122" text-anchor="middle" fill="var(--muted)" font-size="10">Soustraire 2</text>
      <rect x="10" y="134" width="120" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/><text x="70" y="155" text-anchor="middle" fill="var(--ink)" font-size="12">x − 2</text>
      <text x="306" y="122" text-anchor="middle" fill="var(--muted)" font-size="10">Ajouter 1</text>
      <rect x="230" y="134" width="120" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/><text x="290" y="155" text-anchor="middle" fill="var(--ink)" font-size="12">x + 1</text>
      <line x1="70" y1="168" x2="142" y2="208" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a3)"/>
      <line x1="290" y1="168" x2="218" y2="208" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a3)"/>
      <rect x="80" y="208" width="200" height="38" rx="6" fill="#EEF2FF" stroke="#0021BC" stroke-width="1.8"/>
      <text x="180" y="224" text-anchor="middle" fill="#0021BC" font-weight="600" font-size="11">Multiplier les</text>
      <text x="180" y="239" text-anchor="middle" fill="#0021BC" font-weight="600" font-size="11">deux résultats</text>
      <line x1="180" y1="246" x2="180" y2="272" stroke="#8A8DAA" stroke-width="1.5" marker-end="url(#a3)"/>
      <rect x="110" y="272" width="140" height="34" rx="6" fill="white" stroke="#0021BC" stroke-width="1.5"/>
      <text x="180" y="293" text-anchor="middle" fill="#0021BC" font-weight="600" font-size="12">Résultat final</text>
    </svg>
  </div>

  <span class="partie-label">Partie A</span>

  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">A.1.</span><span class="brevet-q-text">Justifier qu'en choisissant <strong>5</strong> comme nombre de départ, le résultat final est <strong>18</strong>.</span><span class="brevet-q-pts">3 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Détaille le calcul étape par étape…" rows="3"></textarea></div>
  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">A.2.</span><span class="brevet-q-text">Calculer le résultat final lorsque le nombre de départ est <strong>−3/2</strong>.</span><span class="brevet-q-pts">3 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Calcule (−3/2 − 2) × (−3/2 + 1) = …" rows="3"></textarea></div>

  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">A.3.</span><span class="brevet-q-text">Le script ci-dessous correspond au programme. Compléter les <strong>lignes 3, 4 et 5</strong>. <em style="color:var(--muted)">(Aucune justification.)</em></span><span class="brevet-q-pts">4 pts</span></div>
    <!-- Blocs Scratch visuels -->
    <div style="background:#e8e8e8;border-radius:14px;padding:24px 28px;margin:14px 0;display:inline-flex;flex-direction:column;gap:3px;font-family:'Helvetica Neue',Arial,sans-serif;min-width:420px">

      <!-- LIGNE 1 : Quand drapeau est cliqué — bloc chapeau orange/jaune -->
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:12px;font-weight:700;color:#666;width:16px;text-align:right;flex-shrink:0">1</span>
        <div style="position:relative;display:inline-flex;flex-direction:column">
          <!-- bosse du chapeau -->
          <div style="margin-left:14px;width:36px;height:14px;background:#FFAB19;border-radius:8px 8px 0 0"></div>
          <!-- corps du bloc -->
          <div style="background:#FFAB19;border-radius:0 6px 6px 6px;padding:9px 16px;display:inline-flex;align-items:center;gap:8px">
            <span style="font-size:14px;font-weight:700;color:#fff">Quand</span>
            <!-- drapeau vert SVG -->
            <svg width="18" height="18" viewBox="0 0 18 18" style="flex-shrink:0">
              <rect width="18" height="18" rx="4" fill="#3a993a"/>
              <polygon points="5,3 14,8 5,13" fill="#fff"/>
            </svg>
            <span style="font-size:14px;font-weight:700;color:#fff">est cliqué</span>
          </div>
        </div>
      </div>

      <!-- LIGNE 2 : demander [choisir un nombre] et attendre — bloc bleu/teal -->
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:12px;font-weight:700;color:#666;width:16px;text-align:right;flex-shrink:0">2</span>
        <div style="background:#5CB1D6;border-radius:6px;padding:9px 16px;display:inline-flex;align-items:center;gap:8px">
          <span style="font-size:14px;font-weight:700;color:#fff">demander</span>
          <span style="background:#fff;border-radius:100px;padding:4px 12px;font-size:13px;color:#222;font-weight:500;border:1.5px solid #ccc">choisir un nombre</span>
          <span style="font-size:14px;font-weight:700;color:#fff">et attendre</span>
        </div>
      </div>

      <!-- LIGNE 3 : mettre [a ▾] à ( réponse - (...) ) — bloc orange, À COMPLÉTER -->
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:12px;font-weight:700;color:#666;width:16px;text-align:right;flex-shrink:0">3</span>
        <div style="background:#FF8C1A;border-radius:6px;padding:9px 16px;display:inline-flex;align-items:center;gap:8px;outline:3px dashed rgba(0,33,188,.5);outline-offset:2px">
          <span style="font-size:14px;font-weight:700;color:#fff">mettre</span>
          <!-- variable a -->
          <div style="background:rgba(0,0,0,.25);border-radius:4px;padding:3px 10px;display:inline-flex;align-items:center;gap:4px">
            <span style="font-size:13px;font-weight:700;color:#fff">a</span>
            <span style="font-size:10px;color:rgba(255,255,255,.8)">▾</span>
          </div>
          <span style="font-size:14px;font-weight:700;color:#fff">à</span>
          <!-- opération réponse - ... -->
          <div style="background:#5CB1D6;border-radius:100px;padding:4px 10px;display:inline-flex;align-items:center;gap:6px">
            <span style="background:#4a9a20;border-radius:100px;padding:3px 10px;font-size:12px;font-weight:700;color:#fff">réponse</span>
            <span style="font-size:14px;font-weight:700;color:#fff">-</span>
            <span style="background:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#555">…</span>
          </div>
        </div>
        <span style="font-size:11px;color:#0021BC;font-weight:700;font-style:italic;white-space:nowrap">← à compléter</span>
      </div>

      <!-- LIGNE 4 : mettre [b ▾] à ( réponse + (...) ) — bloc orange, À COMPLÉTER -->
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:12px;font-weight:700;color:#666;width:16px;text-align:right;flex-shrink:0">4</span>
        <div style="background:#FF8C1A;border-radius:6px;padding:9px 16px;display:inline-flex;align-items:center;gap:8px;outline:3px dashed rgba(0,33,188,.5);outline-offset:2px">
          <span style="font-size:14px;font-weight:700;color:#fff">mettre</span>
          <div style="background:rgba(0,0,0,.25);border-radius:4px;padding:3px 10px;display:inline-flex;align-items:center;gap:4px">
            <span style="font-size:13px;font-weight:700;color:#fff">b</span>
            <span style="font-size:10px;color:rgba(255,255,255,.8)">▾</span>
          </div>
          <span style="font-size:14px;font-weight:700;color:#fff">à</span>
          <div style="background:#5CB1D6;border-radius:100px;padding:4px 10px;display:inline-flex;align-items:center;gap:6px">
            <span style="background:#4a9a20;border-radius:100px;padding:3px 10px;font-size:12px;font-weight:700;color:#fff">réponse</span>
            <span style="font-size:14px;font-weight:700;color:#fff">+</span>
            <span style="background:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#555">…</span>
          </div>
        </div>
        <span style="font-size:11px;color:#0021BC;font-weight:700;font-style:italic;white-space:nowrap">← à compléter</span>
      </div>

      <!-- LIGNE 5 : dire (...)*(...) pendant (2) secondes — bloc violet, À COMPLÉTER -->
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:12px;font-weight:700;color:#666;width:16px;text-align:right;flex-shrink:0">5</span>
        <div style="background:#9966FF;border-radius:6px;padding:9px 16px;display:inline-flex;align-items:center;gap:6px;outline:3px dashed rgba(0,33,188,.5);outline-offset:2px">
          <span style="font-size:14px;font-weight:700;color:#fff">dire</span>
          <span style="background:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#555">…</span>
          <span style="font-size:14px;font-weight:700;color:#fff">*</span>
          <span style="background:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#555">…</span>
          <span style="font-size:14px;font-weight:700;color:#fff">pendant</span>
          <span style="background:#fff;border-radius:100px;padding:3px 10px;font-size:13px;font-weight:700;color:#222">2</span>
          <span style="font-size:14px;font-weight:700;color:#fff">secondes</span>
        </div>
        <span style="font-size:11px;color:#0021BC;font-weight:700;font-style:italic;white-space:nowrap">← à compléter</span>
      </div>
    </div>
    <span class="lbl">Complète les lignes 3, 4 et 5</span>
    <textarea class="brevet-answer" style="font-family:'Courier New',monospace" placeholder="Ligne 3 : b = …&#10;Ligne 4 : resultat = …&#10;Ligne 5 : print(…)" rows="4"></textarea>
  </div>

  <span class="partie-label orange">Partie B</span>
  <div style="font-size:14px;color:var(--ink);line-height:1.6;margin:14px 0 20px;padding:12px 16px;background:#FAFAFA;border-radius:10px;border:1.5px solid rgba(0,0,0,.07)">Soit la fonction <em>g</em> définie, pour un nombre <em>x</em> donné, par <strong>g(x) = x² − x − 2</strong>.</div>

  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">B.1.</span><span class="brevet-q-text">Prouver que <strong>(x − 2)(x + 1) = x² − x − 2</strong>.</span><span class="brevet-q-pts">3 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Développe le membre gauche et montre qu'on obtient x² − x − 2…" rows="4"></textarea></div>
  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">B.2.a.</span><span class="brevet-q-text">Résoudre l'équation <strong>(x − 2)(x + 1) = 0</strong>.</span><span class="brevet-q-pts">2 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Un produit est nul si… donc x = … ou x = …" rows="3"></textarea></div>
  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">B.2.b.</span><span class="brevet-q-text">En déduire les antécédents de 0 par la fonction <em>g</em>. <em style="color:var(--muted)">(Aucune justification.)</em></span><span class="brevet-q-pts">1 pt</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Les antécédents de 0 par g sont…" rows="2"></textarea></div>

  <div class="brevet-q">
    <div class="brevet-q-row"><span class="brevet-q-id">B.3.</span><span class="brevet-q-text">Parmi les trois graphiques ci-dessous, lequel correspond à la représentation graphique de <em>g</em> ? <em style="color:var(--muted)">(Aucune justification.)</em></span><span class="brevet-q-pts">2 pts</span></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
      <div id="graph-1" onclick="selectGraph(1)" style="background:#fff;border:2px solid rgba(0,0,0,.08);border-radius:12px;padding:10px;cursor:pointer;transition:all .2s;text-align:center">
        <div style="font-size:11px;font-weight:700;color:#555;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">Graphique 1</div>
        <svg viewBox="-2.8 -4.2 5.6 9" width="100%" style="max-height:160px" xmlns="http://www.w3.org/2000/svg">
          <!-- Grille fine -->
          <g stroke="#ddd" stroke-width=".04">
            <line x1="-2" y1="-3.5" x2="-2" y2="4.5"/><line x1="-1" y1="-3.5" x2="-1" y2="4.5"/>
            <line x1="1" y1="-3.5" x2="1" y2="4.5"/><line x1="2" y1="-3.5" x2="2" y2="4.5"/>
            <line x1="-2.5" y1="-3" x2="2.5" y2="-3"/><line x1="-2.5" y1="-2" x2="2.5" y2="-2"/>
            <line x1="-2.5" y1="-1" x2="2.5" y2="-1"/><line x1="-2.5" y1="1" x2="2.5" y2="1"/>
            <line x1="-2.5" y1="2" x2="2.5" y2="2"/><line x1="-2.5" y1="3" x2="2.5" y2="3"/>
            <line x1="-2.5" y1="4" x2="2.5" y2="4"/>
          </g>
          <!-- Axes épais -->
          <line x1="-2.5" y1="0" x2="2.6" y2="0" stroke="#111" stroke-width=".1"/>
          <line x1="0" y1="-4" x2="0" y2="4.6" stroke="#111" stroke-width=".1"/>
          <polygon points="2.6,-0.1 2.8,0 2.6,0.1" fill="#111"/>
          <polygon points="-0.1,-4 0,-4.2 0.1,-4" fill="#111"/>
          <!-- Graduations -->
          <g font-size=".32" fill="#444">
            <text x="-2" y="0.4" text-anchor="middle">-2</text>
            <text x="-1" y="0.4" text-anchor="middle">-1</text>
            <text x="0.2" y="0.08">0</text>
            <text x="1" y="0.4" text-anchor="middle">1</text>
            <text x="2" y="0.4" text-anchor="middle">2</text>
            <text x="-0.3" y="-0.95" text-anchor="end">1</text>
            <text x="-0.3" y="-1.95" text-anchor="end">2</text>
            <text x="-0.3" y="-2.95" text-anchor="end">3</text>
            <text x="-0.3" y="-3.95" text-anchor="end">4</text>
            <text x="-0.3" y="1.05" text-anchor="end">-1</text>
            <text x="-0.3" y="2.05" text-anchor="end">-2</text>
            <text x="-0.3" y="3.05" text-anchor="end">-3</text>
          </g>
          <!-- Courbe rouge -->
          <line x1="-2.3" y1="-4.3" x2="2.3" y2="0.3" stroke="#EE6E34" stroke-width=".16"/>
        </svg>
      </div>

      <div id="graph-2" onclick="selectGraph(2)" style="background:#fff;border:2px solid rgba(0,0,0,.08);border-radius:12px;padding:10px;cursor:pointer;transition:all .2s;text-align:center">
        <div style="font-size:11px;font-weight:700;color:#555;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">Graphique 2</div>
        <svg viewBox="-2.8 -4.2 5.6 9" width="100%" style="max-height:160px" xmlns="http://www.w3.org/2000/svg">
          <!-- Grille fine -->
          <g stroke="#ddd" stroke-width=".04">
            <line x1="-2" y1="-3.5" x2="-2" y2="4.5"/><line x1="-1" y1="-3.5" x2="-1" y2="4.5"/>
            <line x1="1" y1="-3.5" x2="1" y2="4.5"/><line x1="2" y1="-3.5" x2="2" y2="4.5"/>
            <line x1="-2.5" y1="-3" x2="2.5" y2="-3"/><line x1="-2.5" y1="-2" x2="2.5" y2="-2"/>
            <line x1="-2.5" y1="-1" x2="2.5" y2="-1"/><line x1="-2.5" y1="1" x2="2.5" y2="1"/>
            <line x1="-2.5" y1="2" x2="2.5" y2="2"/><line x1="-2.5" y1="3" x2="2.5" y2="3"/>
            <line x1="-2.5" y1="4" x2="2.5" y2="4"/>
          </g>
          <!-- Axes épais -->
          <line x1="-2.5" y1="0" x2="2.6" y2="0" stroke="#111" stroke-width=".1"/>
          <line x1="0" y1="-4" x2="0" y2="4.6" stroke="#111" stroke-width=".1"/>
          <polygon points="2.6,-0.1 2.8,0 2.6,0.1" fill="#111"/>
          <polygon points="-0.1,-4 0,-4.2 0.1,-4" fill="#111"/>
          <!-- Graduations -->
          <g font-size=".32" fill="#444">
            <text x="-2" y="0.4" text-anchor="middle">-2</text>
            <text x="-1" y="0.4" text-anchor="middle">-1</text>
            <text x="0.2" y="0.08">0</text>
            <text x="1" y="0.4" text-anchor="middle">1</text>
            <text x="2" y="0.4" text-anchor="middle">2</text>
            <text x="-0.3" y="-0.95" text-anchor="end">1</text>
            <text x="-0.3" y="-1.95" text-anchor="end">2</text>
            <text x="-0.3" y="-2.95" text-anchor="end">3</text>
            <text x="-0.3" y="-3.95" text-anchor="end">4</text>
            <text x="-0.3" y="1.05" text-anchor="end">-1</text>
            <text x="-0.3" y="2.05" text-anchor="end">-2</text>
            <text x="-0.3" y="3.05" text-anchor="end">-3</text>
          </g>
          <!-- Courbe rouge -->
          <line x1="-2.3" y1="3.25" x2="0.82" y2="-4.55" stroke="#EE6E34" stroke-width=".16"/>
        </svg>
      </div>

      <div id="graph-3" onclick="selectGraph(3)" style="background:#fff;border:2px solid rgba(0,0,0,.08);border-radius:12px;padding:10px;cursor:pointer;transition:all .2s;text-align:center">
        <div style="font-size:11px;font-weight:700;color:#555;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">Graphique 3</div>
        <svg viewBox="-2.8 -4.2 5.6 9" width="100%" style="max-height:160px" xmlns="http://www.w3.org/2000/svg">
          <!-- Grille fine -->
          <g stroke="#ddd" stroke-width=".04">
            <line x1="-2" y1="-3.5" x2="-2" y2="4.5"/><line x1="-1" y1="-3.5" x2="-1" y2="4.5"/>
            <line x1="1" y1="-3.5" x2="1" y2="4.5"/><line x1="2" y1="-3.5" x2="2" y2="4.5"/>
            <line x1="-2.5" y1="-3" x2="2.5" y2="-3"/><line x1="-2.5" y1="-2" x2="2.5" y2="-2"/>
            <line x1="-2.5" y1="-1" x2="2.5" y2="-1"/><line x1="-2.5" y1="1" x2="2.5" y2="1"/>
            <line x1="-2.5" y1="2" x2="2.5" y2="2"/><line x1="-2.5" y1="3" x2="2.5" y2="3"/>
            <line x1="-2.5" y1="4" x2="2.5" y2="4"/>
          </g>
          <!-- Axes épais -->
          <line x1="-2.5" y1="0" x2="2.6" y2="0" stroke="#111" stroke-width=".1"/>
          <line x1="0" y1="-4" x2="0" y2="4.6" stroke="#111" stroke-width=".1"/>
          <polygon points="2.6,-0.1 2.8,0 2.6,0.1" fill="#111"/>
          <polygon points="-0.1,-4 0,-4.2 0.1,-4" fill="#111"/>
          <!-- Graduations -->
          <g font-size=".32" fill="#444">
            <text x="-2" y="0.4" text-anchor="middle">-2</text>
            <text x="-1" y="0.4" text-anchor="middle">-1</text>
            <text x="0.2" y="0.08">0</text>
            <text x="1" y="0.4" text-anchor="middle">1</text>
            <text x="2" y="0.4" text-anchor="middle">2</text>
            <text x="-0.3" y="-0.95" text-anchor="end">1</text>
            <text x="-0.3" y="-1.95" text-anchor="end">2</text>
            <text x="-0.3" y="-2.95" text-anchor="end">3</text>
            <text x="-0.3" y="-3.95" text-anchor="end">4</text>
            <text x="-0.3" y="1.05" text-anchor="end">-1</text>
            <text x="-0.3" y="2.05" text-anchor="end">-2</text>
            <text x="-0.3" y="3.05" text-anchor="end">-3</text>
          </g>
          <!-- Courbe rouge -->
          <polyline points="-1.8,-3.040 -1.7,-2.590 -1.6,-2.160 -1.5,-1.750 -1.4,-1.360 -1.3,-0.990 -1.2,-0.640 -1.1,-0.310 -1.0,0.000 -0.9,0.290 -0.8,0.560 -0.7,0.810 -0.6,1.040 -0.5,1.250 -0.4,1.440 -0.3,1.610 -0.2,1.760 -0.1,1.890 0.0,2.000 0.1,2.090 0.2,2.160 0.3,2.210 0.4,2.240 0.5,2.250 0.6,2.240 0.7,2.210 0.8,2.160 0.9,2.090 1.0,2.000 1.1,1.890 1.2,1.760 1.3,1.610 1.4,1.440 1.5,1.250 1.6,1.040 1.7,0.810 1.8,0.560 1.9,0.290 2.0,0.000 2.1,-0.310 2.2,-0.640 2.3,-0.990 2.4,-1.360" fill="none" stroke="#EE6E34" stroke-width=".16" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <span class="lbl">Ta réponse — clique sur le graphique ou écris ici</span>
    <textarea id="b3-answer" class="brevet-answer" placeholder="Le graphique n°… correspond à g car…" rows="2"></textarea>
  </div>

  <div class="brevet-q"><div class="brevet-q-row"><span class="brevet-q-id">B.4.</span><span class="brevet-q-text">Quel(s) nombre(s) doit-on choisir comme nombre de départ pour que le programme donne <strong>0</strong> comme résultat final ?</span><span class="brevet-q-pts">2 pts</span></div><span class="lbl">Ta réponse</span><textarea class="brevet-answer" placeholder="Les nombres de départ sont…" rows="2"></textarea></div>
</div>

<div style="margin-top:24px;display:flex;gap:12px;align-items:center">
  <a href="index.html" class="btn btn-blue">← Retour au site</a>
  <button class="btn btn-ghost" onclick="window.print()">Imprimer</button>
</div>

</div>

<div class="footer-bar">
  <div class="footer-bar-links"><a>Instagram</a><a>Newsletter</a><a>LinkedIn</a></div>
  <span class="footer-bar-copy">© 2026 Prépa Brevet</span>
</div>

<script>
var _sec=7200,_tot=7200,_iv=null,_paused=true;
function updateTimer(){
  var s=Math.max(0,_sec),h=Math.floor(s/3600),m=Math.floor(s%3600/60),ss=s%60;
  var el=document.getElementById('timer-display');
  el.textContent=(h<10?'0':'')+h+':'+(m<10?'0':'')+m+':'+(ss<10?'0':'')+ss;
  var r=_tot>0?_sec/_tot:1;
  el.style.color=r<=.1||_sec<=300?'#EF4444':r<=.25?'var(--orange)':'var(--blue)';
}
function toggleTimer(){
  var btn=document.getElementById('timer-btn');
  if(_paused){
    _paused=false;btn.textContent='⏸ pause';
    _iv=setInterval(function(){if(!_paused){_sec--;updateTimer();}if(_sec<=0){clearInterval(_iv);btn.textContent='Temps écoulé !';}},1000);
  }else{_paused=true;clearInterval(_iv);btn.textContent='▶ reprendre';}
}
function resetTimer(){
  clearInterval(_iv);_sec=_tot;_paused=true;
  document.getElementById('timer-btn').textContent='⏵ démarrer';
  updateTimer();
}
function selectQCM(q, opt) {
  ['a','b','c','d'].forEach(function(o) {
    var el = document.getElementById(q+o);
    if (!el) return;
    el.style.background = '#FAFAFA';
    el.style.borderColor = 'rgba(0,0,0,.08)';
    el.style.color = 'var(--ink)';
    el.style.fontWeight = '';
  });
  var sel = document.getElementById(q+opt);
  if (sel) {
    sel.style.background = '#EEF2FF';
    sel.style.borderColor = 'var(--blue)';
    sel.style.color = 'var(--blue)';
    sel.style.fontWeight = '600';
  }
}
function selectGraph(n){
  [1,2,3].forEach(function(i){
    var el=document.getElementById('graph-'+i);
    el.style.borderColor='rgba(0,0,0,.08)';el.style.background='#FAFAFA';
    el.querySelector('div').style.color='var(--muted)';
  });
  var s=document.getElementById('graph-'+n);
  s.style.borderColor='var(--blue)';s.style.background='#EEF2FF';
  s.querySelector('div').style.color='var(--blue)';
  var ta=document.getElementById('b3-answer');if(ta)ta.value='Graphique '+n;
}
</script>
</body>
</html>
