// CARDS

let cosmoTitan = {
    nome: "Cosmo Titan",
    tipo: "normal",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 7,
    texto: "An invasion weapon controlled by five rings. When it arrives, it crushes entire civilizations underfoot. Dyugyaai Bu Zuwaai!",
    arquetipo: 0,
    atk: 2300,
    def: 1800,
    imagem: "imagens/cards/CosmoTitan-RDSD01-JP-C.png"
}

let galacticaOblivion = {
    nome: "Galactica Oblivion",
    tipo: "normal",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 7,
    texto: "War To Zen! Awesome True Goodnight!",
    arquetipo: "Galactica",
    atk: 2500,
    def: 2500,
    imagem: "imagens/cards/GalacticaOblivion-RDORP1-JP-ORR.png"
}



let heavenGancel = {
    nome: "Heaven Gancel",
    tipo: "normal",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 6,
    texto: "A spirit dragon entrusted with the feelings and dreams of the unsullied stars. It attacks by resonating with a pure heart. N'gorudu Guai!",
    arquetipo: "",
    atk: 2100,
    def: 400,
    imagem: "imagens/cards/HeavenGancel-RDSD01-JP-C.png"
}

let transamuRainac = {
    nome: "Transamu Rainac",
    tipo: "normal",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 4,
    texto: "War To Zen! Maniac You Die!",
    arquetipo: "Transamu",
    atk: 1600,
    def: 0,
    imagem: "imagens/cards/TransamuRainac-RDSD01-JP-C.png"
}

let galacticaAmnesia = {
    nome: "Galactica Amnesia",
    tipo: "efeito",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 6,
    texto: "[REQUIREMENT] Place 1 card from your hand on the bottom of the Deck. [EFFECT] Special Summon 2 Level 6 or lower Galaxy Type Normal Monsters from your Graveyard face-up to your field. This turn, you can only attack with Galaxy Type monsters.",
    arquetipo: "Galactica",
    atk: 1600,
    def: 1500,
    imagem: "imagens/cards/GalacticaAmnesia-RDGRD1-JP-C.png"
}

let strangeTraveler = {
    nome: "Strange Traveler",
    tipo: "efeito",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 4,
    texto: "[REQUIREMENT] If you have a face-up Galaxy Type Normal Monster on your field, send the top card of your Deck to the Graveyard. [EFFECT] 1 face-up monster on your opponent's field loses 500 ATK until the end of this turn.",
    arquetipo: "",
    atk: 1100,
    def: 200,
    imagem: "imagens/cards/StrangeTraveler-RDGRD1-JP-C.png"
}

let satellitePegasus = {
    nome: "Satellite Pegasus",
    tipo: "efeito",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 4,
    texto: "[REQUIREMENT] During the turn you Normal Summoned this card. [EFFECT] Send the top card of your Deck to the Graveyard. Then, if you have 1 or less monsters in your Graveyard, you can destroy 1 face-up Level 8 or lower monster on your opponent's field.",
    arquetipo: 0,
    atk: 1300,
    def: 600,
    imagem: "imagens/cards/SatellitePegasus-RDKP09-JP-UR.png"
    
}

let transamuCraione = {
    nome: "Transamu Craione",
    tipo: "efeito",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 2,
    texto: "[REQUIREMENT] You have no other monsters on your field. [EFFECT] Add 1 LIGHT Attribute Galaxy Type Normal Monster from your Graveyard to your hand. This turn, you can only attack with Galaxy Type monsters.",
    arquetipo: "Transamu",
    atk: 500,
    def: 500,
    imagem: "imagens/cards/TransamuCraione-RDGRD1-JP-C.png"
}

let transamuEphyrai = {
    nome: "Transamu Ephyrai",
    tipo: "efeito",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 4,
    texto: "[REQUIREMENT] If your opponent has a monster on their field, send the top card of your Deck to the Graveyard. [EFFECT] 1 face-up 'Transamu Rainac' on your field gains 1000 ATK until the end of this turn.",
    arquetipo: "Transamu",
    atk: 1200,
    def: 500,
    imagem: "imagens/cards/TransamuEphyrai-RDSD01-JP-C.png"
}

let vanishingHeliacalRiser = {
    nome: "Vanishing Heliacal Riser",
    tipo: "efeito",
    tipo2: "galaxy",
    atributo: "LIGHT",
    nivel: 7,
    texto: "[REQUIREMENT] If you have 2 or less cards in your hand, shuffle 1 monster from your Graveyard into the Deck. [EFFECT] This card gains 200 ATK until the end of this turn. Then, if a face-up Spell Card is on the field, you can draw 1 card.",
    arquetipo: "",
    atk: 2400,
    def: 1500,
    imagem: "imagens/cards/VanishingHeliacalRiser-RDSD01-JP-C.png"
}

let meteorCharge = {
    nome: "Meteor Charge",
    tipo: "spell",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "REQUIREMENT] None [EFFECT] Choose 1 face-up Galaxy Type monster on your field. If it attacks a Defense Position monster this turn, inflict piercing battle damage (if the ATK of the attacking monster exceeds the DEF of the attack target, inflict the difference). Also, if the chosen monster is a Normal Monster, you can change the battle position of 1 monster on your opponent's field (Attack Position becomes face-up Defense Position, Defense Position becomes face-up Attack Position).",
    arquetipo: "",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/300px-MeteorCharge-RDSD05-JP-C.png"
}

let galacticaForce = {
    nome: "Galactica Force",
    tipo: "spell",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] Shuffle 3 Galaxy Type monsters from your Graveyard into the Deck. [EFFECT] All face-up Galaxy Type Normal Monsters on your field gain ATK equal to [the number of face-up Normal Monsters on the field] x 300 until the end of this turn.",
    arquetipo: "Galactica",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/GalacticaForce-RDGRD1-JP-C.png"
}

let secretOrder = {
    nome: "Secret Order",
    tipo: "spell",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] None [EFFECT] Special Summon 1 Level 7 Normal Monster from your hand or Graveyard face-up to your field. This turn, the monster Special Summoned by this effect gains 700 ATK, and cannot be destroyed by an opponent's Trap Card effects.",
    arquetipo: "",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/SecretOrder-RDLGP1-JP-ScR.png"
}

let shipOfSevenTreasures= {
    nome: "Ship of Seven Treasures",
    tipo: "spell",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] Send 1 monster from your hand to the Graveyard. [EFFECT] Draw 1 card. Then, if you sent a Level 7 monster to the Graveyard to meet the requirement, you can draw 1 additional card.",
    arquetipo: "nenhum",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/ShipofSevenTreasures-RDLGP1-JP-ScR.png"
}

let universtorm = {
    nome: "Universtorm",
    tipo: "spell",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] You have a face-up Galaxy Type monster on your field. [EFFECT] Destroy 1 Spell/Trap Card on your opponent's field.",
    arquetipo: "nenhum",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/Universtorm-RDSD05-JP-C.png"
}

let crisisAtTheSacredTower = {
    nome: "Crisis at the Sacred Tower",
    tipo: "trap",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] When your opponent Normal Summons a Level 7 or higher monster. [EFFECT] Change 1 face-up Level 8 or lower Effect Monster on your opponent's field to face-down Defense Position.",
    arquetipo: "nenhum",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/300px-CrisisattheSacredTower-RDKP09-JP-UR.png"
}

let hardefenseMission = {
    nome: "Hardefense Mission",
    tipo: "trap",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] When an opponent's Level 8 or lower monster with 2500 or more original ATK declares an attack. [EFFECT] Destroy the attacking monster.",
    arquetipo: "nenhum",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/300px-HardefenseMission-RDKP07-JP-SR.png"
}

let transamuArrive = {
    nome: "Transamu Arrive",
    tipo: "trap",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] When a face-up Galaxy Type monster on your field is destroyed by an opponent's attack or their card effect while you have no other monsters on your field. [EFFECT] Special Summon 1 Galaxy Type Normal Monster with 1600 or more ATK from your hand or your Graveyard to your field in face-up Attack Position.",
    arquetipo: "Transamu",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/TransamuArrive-RDGRD1-JP-C.png"
}

let vacuaAnnihilation = {
    nome: "Vacua Annihilation",
    tipo: "trap",
    tipo2: "normal",
    atributo: "nenhum",
    nivel: "nenhum",
    texto: "[REQUIREMENT] When an opponent's monster declares an attack while you have a face-up Level 7 or higher Galaxy Type Normal Monster on your field. [EFFECT] Destroy Attack Position monsters on your opponent's field, up to [the number of face-up Galaxy Type Normal Monsters on your field].",
    arquetipo: "nenhum",
    atk: "nenhum",
    def: "nenhum",
    imagem: "imagens/cards/TransamuArrive-RDGRD1-JP-C.png"
}

// DECKS

var deckYudias = [];
deckYudias.push(cosmoTitan)
deckYudias.push(cosmoTitan)
deckYudias.push(cosmoTitan)
deckYudias.push(galacticaOblivion)
deckYudias.push(galacticaOblivion)
deckYudias.push(galacticaOblivion)
deckYudias.push(heavenGancel)
deckYudias.push(heavenGancel)
deckYudias.push(transamuRainac)
deckYudias.push(transamuRainac)
deckYudias.push(transamuRainac)
deckYudias.push(galacticaAmnesia)
deckYudias.push(satellitePegasus)
deckYudias.push(satellitePegasus)
deckYudias.push(satellitePegasus)
deckYudias.push(strangeTraveler)
deckYudias.push(transamuCraione)
deckYudias.push(transamuCraione)
deckYudias.push(transamuEphyrai)
deckYudias.push(transamuEphyrai)
deckYudias.push(transamuEphyrai)
deckYudias.push(vanishingHeliacalRiser)
deckYudias.push(vanishingHeliacalRiser)
deckYudias.push(vanishingHeliacalRiser)
deckYudias.push(galacticaForce)
deckYudias.push(galacticaForce)
deckYudias.push(meteorCharge)
deckYudias.push(meteorCharge)
deckYudias.push(meteorCharge)
deckYudias.push(secretOrder)
deckYudias.push(secretOrder)
deckYudias.push(secretOrder)
deckYudias.push(shipOfSevenTreasures)
deckYudias.push(shipOfSevenTreasures)
deckYudias.push(shipOfSevenTreasures)
deckYudias.push(universtorm)
deckYudias.push(universtorm)
deckYudias.push(universtorm)
deckYudias.push(crisisAtTheSacredTower)
deckYudias.push(crisisAtTheSacredTower)
deckYudias.push(crisisAtTheSacredTower)
deckYudias.push(hardefenseMission)
deckYudias.push(transamuArrive)
deckYudias.push(vacuaAnnihilation)

var cliqueBotaoIniciar = document.querySelector(".botaoIniciar")

var cliqueBotaoOpcoes = document.querySelector(".botaoOpcoes")

var gameboard = document.querySelector(".gameboard")

var selecaoDecks = document.querySelector(".selecaoDecks")

var yudiasDeck = document.querySelector(".yudiasDeck")

var yugaDeck = document.querySelector(".yugaDeck")

var painelEscolherVerVoltar = document.querySelector(".painelEscolherVerVoltar")

var escolhaOSeuDeck = document.querySelector(".escolhaOSeuDeck")

var escolherDeck = document.querySelector(".escolherDeck")

var verDeck = document.querySelector(".verDeck")

var painelDecks = document.querySelector(".painelDecks")

var voltarParaSelecaoDeck = document.querySelector(".voltarParaSelecaoDeck")

var painelVerCardsDeck = document.querySelector(".painelVerCardsDeck")

var voltarParaSelecaoDeDecks = document.querySelector(".voltarParaSelecaoDeDecks")

function BotaoMouseOver(){   
    this.style.backgroundColor = "rgb(109, 60, 0, 90%)";
    this.style.borderColor = "rgb(255, 132, 0)"
    this.style.color = "white"
}

function BotaoMouseOut(){ 
    this.style.backgroundColor = "rgb(255, 132, 0, 90%)";
    this.style.borderColor = "rgb(109, 60, 0)"
    this.style.color = "black"
}

function BotaoMouseClick(){

    gameboard.style.display = "none";
    selecaoDecks.style.display = "inline";
}

function ClickSelecaoDeck(){

    escolhaOSeuDeck.style.display = "none";

    painelEscolherVerVoltar.style.display = "inline";
}

function BotaoVerDeckClick(){
    gameboard.style.display = "inline";
    selecaoDecks.style.display = "none";
    painelVerCardsDeck.style.display = "inline";
    cliqueBotaoIniciar.style.display = "none";
    cliqueBotaoOpcoes.style.display = "none";

}

cliqueBotaoIniciar.addEventListener("mouseover", BotaoMouseOver)

cliqueBotaoIniciar.addEventListener("mouseout", BotaoMouseOut)

cliqueBotaoIniciar.addEventListener("click", BotaoMouseClick)

cliqueBotaoOpcoes.addEventListener("mouseover", BotaoMouseOver)

cliqueBotaoOpcoes.addEventListener("mouseout", BotaoMouseOut)

escolherDeck.addEventListener("mouseover", BotaoMouseOver)

escolherDeck.addEventListener("mouseout", BotaoMouseOut)

verDeck.addEventListener("mouseover", BotaoMouseOver)

verDeck.addEventListener("mouseout", BotaoMouseOut)

verDeck.addEventListener("click", BotaoVerDeckClick)

voltarParaSelecaoDeck.addEventListener("mouseover", BotaoMouseOver)

voltarParaSelecaoDeck.addEventListener("mouseout", BotaoMouseOut)

yudiasDeck.addEventListener("mouseover", BotaoMouseOver)

yudiasDeck.addEventListener("mouseout", BotaoMouseOut)

yudiasDeck.addEventListener("click", ClickSelecaoDeck )

yugaDeck.addEventListener("mouseover", BotaoMouseOver)

yugaDeck.addEventListener("mouseout", BotaoMouseOut)

yugaDeck.addEventListener("click", ClickSelecaoDeck )

voltarParaSelecaoDeDecks.addEventListener("mouseover", BotaoMouseOver)

voltarParaSelecaoDeDecks.addEventListener("mouseout", BotaoMouseOut)

voltarParaSelecaoDeDecks.addEventListener("click", BotaoMouseClick)

function verImagemCard(){


    for (var i = 1; i < deckYudias.length; i++) {
        console.log(deckYudias[i]);

        var verImagemCard = document.querySelector(".espacoCard"+i)
        verImagemCard.style.backgroundImage = 'url('+deckYudias[i].imagem+')'
        verImagemCard.style.backgroundSize = "2.9cm"
      }


    

}

verImagemCard()




// APARECER TELA CARREGANDO ATÉ A PAGINA ESTIVER 100% CARREGADA

window.onload = function() {
    var loadingElement = document.getElementById('loading');
  
    function hideLoading() {
      loadingElement.style.display = 'none';
    }
  
    hideLoading(); // Esconder a mensagem de carregamento inicialmente
  
    // Mostrar a mensagem de carregamento até que a página esteja totalmente carregada
    var isPageLoaded = false;
    setTimeout(function() {
      if (!isPageLoaded) {
        loadingElement.style.display = 'block';
      }
    }, 500); // Exibir a mensagem após 500ms
  
    // Evento disparado quando a página estiver completamente carregada
    window.addEventListener('load', function() {
      isPageLoaded = true;
      hideLoading();
    });
  };
  




