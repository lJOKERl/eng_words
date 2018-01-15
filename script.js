"use strict";

/* Фильтр слов по первой букве */
var letter;

search.oninput = function () {
	letter = this.value;
	
	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");
		if (words[i].eng[0] === letter) {
			p.innerHTML = "<a href='#' class='open'>" + words[i].eng + "</a>" + " - " + words[i].rus;
			main.appendChild(p);
		} else if (!letter) {
			main.innerHTML = "";
		}
	}

	/* Отрываем pop-up по клику на слове */
	var wlink = document.querySelectorAll('.open');

	for (var i = 0; i < wlink.length; i++) {
		wlink[i].onclick = function (e) {
			pop.style.display = "block";            
    		wrap.style.display = "block";

    		var p = document.createElement("p");

    		pop.innerHTML = "";

    		pop.appendChild(p);
    		p.classList = "title";
    		p.textContent = this.innerText;
		}
	}

	wrap.onclick = function (e) {
		pop.style.display = "none";            
    	wrap.style.display = "none"; 
	}

	cls.onclick = function (e) {
		pop.style.display = "none";            
    	wrap.style.display = "none"; 
	}
};









