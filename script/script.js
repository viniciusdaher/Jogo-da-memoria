const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

const techs = [
     "angular",
     "django",
     "flutter",
     "github",
     "html",
     "java",
     "mariadb",
     "nodejs",
     "python",
     "react"
 ] ;

let cards = null;
 
startGame();


function startGame(){
        cards = createCardsFromTechs(techs);
        shuffleCards(cards);
        
        initializeCards(cards)
        
    }


 function initializeCards(cards){
     let gameBoard = document.getElementById("gameBoard");
     
     cards.forEach(card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement)


        cardElement.addEventListener("click", clickCard);
        gameBoard.appendChild(cardElement);


     })
}   


function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}


function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face);

    if (face == FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./img/" + card.icon + ".svg";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function shuffleCards(cards){

    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    }
}


 function createCardsFromTechs(techs){

    let cards = [];

    techs.forEach(tech => {
        
        cards.push(createPairFromTech(tech))
    })

    //flatMap desmebra todos os arrays dentro do array principal
    return cards.flatMap(pair => pair)
 }


 function createPairFromTech(tech){

    return [{
        id: createId(tech),
        icon: tech,
        flipped: false
    }, {
        id: createId(tech),
        icon: tech,
        flipped: false
    }]
 }


 function createId(tech){
     return tech + parseInt(Math.random() *1000);
 }

 function clickCard(){

 }