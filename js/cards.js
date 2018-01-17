var cardNum = 12;

function createCard(argument) {
	var container = document.createElement("div"),
		card = document.createElement("div"),
		front = document.createElement("figure"),
		back = document.createElement("figure"),
		span_back = document.createElement("span"),
		span_front = document.createElement("span");

		container.classList = "container";
		card.id = "card";
		front.classList = "front";
		back.classList = "back";

		cont.appendChild(container);
		container.appendChild(card);
		card.appendChild(front);
		card.appendChild(back);
		back.appendChild(span_back);
		front.appendChild(span_front);

		var num = getRandomInt(1, 1000)

		span_front.innerHTML = words[num].eng;
		span_back.innerHTML = words[num].rus;
}

/* Генерируем случайное число */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/* Переворачиваем карточку */
// var init = function() {
//   var card = document.querySelectorAll("#card");
  
//   for (var i = 0; i < card.length; i++) {
//   	card[i].addEventListener( 'click', function() {
// 	    this.classList.toggle('flipped');
// 	}, false);
//   }
// };

// var card = document.querySelectorAll("#card");

// for (var i = 0; i < card.length; i++) {
//   	card[i].addEventListener( 'click', function() {
// 	    this.classList.toggle('flipped');
// 	})
//   }

//window.addEventListener('DOMContentLoaded', init, false);

/* Выводим карточки на экран */
function printCards() {
	for (var i = 0; i <= cardNum - 1; i++) {
		createCard();
	}
} printCards();

refresh.onclick = function() {
 	cont.innerHTML = "";
	printCards();

	 var card = document.querySelectorAll("#card");


	for (var i = 0; i < card.length; i++) {
	  	card[i].addEventListener( 'click', function() {
		    this.classList.toggle('flipped');
		})
	  }
 } 

var card = document.querySelectorAll("#card");

for (var i = 0; i < card.length; i++) {
	card[i].addEventListener( 'click', function() {
    this.classList.toggle('flipped');
	})
}
