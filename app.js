//strores all 12 cards in array
const cardArray = [
    {
        name: 'fries',
        image: 'images/fries.png',
    },
    {
        name: 'pizza',
        image: 'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png',
    },
    {
        name: 'fries',
        image: 'images/fries.png',
    },
    {
        name: 'pizza',
        image: 'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png',
    },
    {
       name: 'milkshake',
       image: 'images/milkshake.png',
    }
];
//sorts cards in random order
cardArray.sort(()=>0.5-Math.random());
console.log(cardArray);
//selects id grid
const grid = document.querySelector('#grid')
const result = document.querySelector('#result');
const chosenCard = [];
const cardChosenId = [];
const cardsWon = [];
//function that creates cards
function createCard (){
    for(let i=0;i<cardArray.length;i++){
        //for each card create a new element card that displays the blank card
        //const card = img
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        //is the card iteration
        card.setAttribute('data-id',i);
        //adds an event to the card for when the card is clicked
        card.addEventListener('click',flipCard)
        //appends the card to the div
        grid.appendChild(card)
    }
}
createCard()
function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    console.log('Checking')

    if (chosenCard[0] === chosenCard[1]){
        alert('Match found')
        cards[cardChosenId[0]].setAttribute('src', 'images/white.png');
        cards[cardChosenId[1]].setAttribute('src', 'images/white.png');
        cards[cardChosenId[0]].removeEventListener('click', flipCard);
        cards[cardChosenId[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardChosenId)
    }else{
        cards[cardChosenId[0]].setAttribute('src', 'images/blank.png');
        cards[cardChosenId[1]].setAttribute('src', 'images/blank.png');
        alert('Please try again');
    }
    result.innerHTML = cardsWon.length
    chosenCard = [];
    cardChosenId = [];

    if(cardsWon.length==(cardsArray.length/2)){
        result.innerHTML = 'Congratulations you won!';
    }
}
function flipCard () {
    //getz the iteration of each card
    const cardId = this.getAttribute('data-id')
    chosenCard.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    console.log(cardArray[cardId].name)
    console.log('flipping card');
    console.log(chosenCard)
    //when the card is selected thd image changes
    this.setAttribute('src',cardArray[cardId].image)
    if (chosenCard.length === 2){
        setTimeout(checkMatch, 500)
    }
}