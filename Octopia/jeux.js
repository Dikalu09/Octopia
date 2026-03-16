<html>
  <head>
    <title>
      Octopia
    </title>
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <div id="titre" >
    <h1><img id="logo" src="./images/image_2026-03-16_104117100-removebg-preview.png">
      Octopia
    </h1>
    </div>
    <div id="lien" >
      <ul>
        <li>
          <a href="./index.htmL" >Accueil</a>
          <a href="./jeux.html" >Jeux</a>
          <a href="./">Credits</a>
        </li>
      </ul>
    </div>
<body>

    <div class="container">
        <h1>Mathématiques</h1>
        <div class="ligne">5 + 7 = <input type="number" id="m0"> <b id="rsm0" class="symbole"></b></div>
        <div class="ligne">10 - 4 = <input type="number" id="m1"> <b id="rsm1" class="symbole"></b></div>
        <div class="ligne">3 X 3 = <input type="number" id="m2"> <b id="rsm2" class="symbole"></b></div>
        <div class="ligne">8 + 8 = <input type="number" id="m3"> <b id="rsm3" class="symbole"></b></div>
        <div class="ligne">15 - 5 = <input type="number" id="m4"> <b id="rsm4" class="symbole"></b></div>
        <div class="ligne">2 X 9 = <input type="number" id="m5"> <b id="rsm5" class="symbole"></b></div>
        <div class="ligne">20 + 30 = <input type="number" id="m6"> <b id="rsm6" class="symbole"></b></div>
        <div class="ligne">12 - 7 = <input type="number" id="m7"> <b id="rsm7" class="symbole"></b></div>
        <div class="ligne">4 X 4 = <input type="number" id="m8"> <b id="rsm8" class="symbole"></b></div>
        <div class="ligne">25 + 25 = <input type="number" id="m9"> <b id="rsm9" class="symbole"></b></div>
        <button onclick="verifierMath()">Vérifier les Maths</button>
        <br>
        <br>
        <h1>Conjugaison</h1>
        <div class="ligne">Je (manger) : <input type="text" id="c0"> <b id="rsc0" class="symbole"></b></div>
        <div class="ligne">Tu (finir) : <input type="text" id="c1"> <b id="rsc1" class="symbole"></b></div>
        <div class="ligne">Il (parler) : <input type="text" id="c2"> <b id="rsc2" class="symbole"></b></div>
        <div class="ligne">Nous (être) : <input type="text" id="c3"> <b id="rsc3" class="symbole"></b></div>
        <div class="ligne">Vous (avoir) : <input type="text" id="c4"> <b id="rsc4" class="symbole"></b></div>
        <div class="ligne">Ils (chanter) : <input type="text" id="c5"> <b id="rsc5" class="symbole"></b></div>
        <div class="ligne">Elle (jouer) : <input type="text" id="c6"> <b id="rsc6" class="symbole"></b></div>
        <div class="ligne">Nous (aller) : <input type="text" id="c7"> <b id="rsc7" class="symbole"></b></div>
        <div class="ligne">Tu (être) : <input type="text" id="c8"> <b id="rsc8" class="symbole"></b></div>
        <div class="ligne">Ils (finir) : <input type="text" id="c9"> <b id="rsc9" class="symbole"></b></div>
        <button onclick="verifierConju()">Vérifier la Conjugaison</button>
    </div>

    <script src="jeux.js"></script>
</body>
</html>
