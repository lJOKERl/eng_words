var menuArr = [
	"<a href='index.html'>Главная</a>", 
	"<a href='cards.html'>Карточки</a>",
	"<a href='bom.html'>БОМ</a>"
];

var menu = document.querySelector(".menu");

for (var i = 0; i < menuArr.length; i++) {
	var li = document.createElement("li");

	li.innerHTML = menuArr[i];
	menu.appendChild(li);
}	



