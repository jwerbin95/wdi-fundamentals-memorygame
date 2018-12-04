var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var score = 0;
var cardsInPlay = [];
var cardElement = [];
var flipCard = function()
{
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	this.removeEventListener('click', flipCard);
	checkForMatch();
}
var checkForMatch = function()
{
	if(cardsInPlay.length === 2)
	{
		if(cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
			document.getElementById('score').textContent = "";
			score++;
			document.getElementById('score').textContent = score;
		}
		else
		{
			alert("Try again");
		}
		cardsInPlay.pop();
		cardsInPlay.pop();
	}
}

var createBoard = function() {
	for(var i = 0; i<cards.length;i++)
	{
		var randomNumber = shuffle([0, 1, 2, 3]);
		cardElement[i] = document.createElement('img');
		cardElement[i].setAttribute('src','images/back.png');
		cardElement[i].setAttribute('data-id', randomNumber[i]);
		cardElement[i].addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement[i]);
	}
}

var newBoard = function() {
	while(document.getElementById('game-board').hasChildNodes())
	{
		document.getElementById('game-board').removeChild(document.getElementById('game-board').lastChild);
	}
	createBoard();
}

var shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
document.getElementById('difficulty').addEventListener('click', createBoard);
document.getElementById('reset').addEventListener('click', newBoard);
createBoard();
