console.log("Running!");
var cards = ["Queen","Queen","King","King"];
var cardsInPlay = [];
var flipCard = function(cardId)
{
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}
var checkForMatch = function()
{
	if(cardsInPlay.length === 2)
	{
		if(cardsInPlay[0] === cardsInPlay[1])
			alert("You found a match!");
		else
			alert("Try again");
	}
}
flipCard(0);
flipCard(2);
checkForMatch();