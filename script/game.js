let game = {

    lockMode: false,
    firstCard: null,
    scondCard: null,

    setCard: function(id){

        let card = this.cards.filter(card => card.id === id)[0];
        console.log(card)
        if (card.flipped || this.lockMode){
            return false;
        }

        if (!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        }else{
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }


    },

    techs :[
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
    ],
   
   cards: null,

checkMatch: function(){
    if (!this.firstCard || !this.secondCard){
        return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
},

unflipCard(){
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
},

clearCards: function(){
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
},

// cria carta e coloca dentro de um array.
    createCardsFromTechs: function(){

        this.cards = [];

        this.techs.forEach(tech => {
            
            this.cards.push(this.createPairFromTech(tech));
        })

        //flatMap desmebra todos os arrays dentro do array principal
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        
    },
    



    checkGameOver(){
        
        return this.cards.filter(card => !card.flipped).length == 0;
      
    },

    // cria o par das cartas
    createPairFromTech: function (tech){

        return [{
            id: this.createId(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createId(tech),
            icon: tech,
            flipped: false
        }]
    },


    createId: function(tech){
        return tech + parseInt(Math.random() *1000);
    },


    //emparalha as cartas.
    shuffleCards:function (cards){

    let currentIndex = this.cards.length;
    let randomIndex = 0;
    
    for (let i = 0; i < 3; i++){
        
        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    
    }
}



}