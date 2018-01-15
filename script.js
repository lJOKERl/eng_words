"use strict";

/* Фильтр слов по первой букве */
var letter;

search.focus();

search.oninput = function filterList () {
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
    		for (var i = 0; i < words.length; i++) {

    			cls.onclick = function (e) {
					pop.style.display = "none";            
			    	wrap.style.display = "none"; 
				}
				
				if (words[i].eng === this.innerText) {
					console.log(words[i].eng + " - " + words[i].rus)
					pop.style.display = "block";            
		    		wrap.style.display = "block";

		    		var eng = document.createElement("p");
		    		var rus = document.createElement("p");
		    		var span = document.createElement("span");

		    		pop.innerHTML = "";

		    		span.textContent = "X";

		    		pop.appendChild(eng);
		    		pop.appendChild(rus);
		    		pop.appendChild(span);
		    		eng.classList = "eng";
		    		rus.classList = "rus";
		    		span.id = "cls";
		    		eng.textContent = words[i].eng;
		    		rus.textContent = words[i].rus;
				}
			}
		}


	}

	wrap.onclick = function (e) {
		pop.style.display = "none";            
    	wrap.style.display = "none"; 
	}

	



};

function openPop(argument) {
	console.log(this)
}







