"use strict";

/* Настройка Яндекс API */
var voice = function (text) {
	var url = "https://tts.voicetech.yandex.net/generate?"+ 
	"key=35614106-41f0-40c2-9160-7ac384125935" +
	"&text=" + text +
	"&format=wav" +
	"&lang=en-US" +
	"&emotion=neutral" +
	"&speed=0.9" +
	"&speaker=jane";

	audio.src = url;
	audio.load();
	audio.onloadeddata = function (argument) {
		audio.play();
	}
}

new_w.onmousedown = function (argument) {
	main.innerHTML = "";
}

done_w.onmousedown = function (argument) {
	main.innerHTML = "";
}

/* Фильтры по статусу слова */
function showMeDone() {
	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");

		if (words[i].isDone) {
			p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i> <a href='#' class='open'>" + words[i].eng + "</a>" + " - " + words[i].rus;
			main.appendChild(p);
		}

		search.oninput = function (argument) {
			var letter = this.value;

			for (var i = 0; i < words.length; i++) {
				if (words[i].eng[0] === letter) {
					main.innerHTML = "";
					p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i> <a href='#' class='open'>" + words[i].eng + "</a>" + " - " + words[i].rus;
					main.appendChild(p);
				} 
			}
		}
	}
}

function showMeNew() {
	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");
		
		if (!words[i].isDone) {
			p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i> <a href='#' class='open'>" + words[i].eng + "</a>" + " - " + words[i].rus;
			main.appendChild(p);
		}

		search.oninput = function (argument) {
			var letter = this.value;

			if (words[i].eng[0] === letter) {
				main.innerHTML = "";
				console.log(words[i].eng )
				p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i> <a href='#' class='open'>" + words[i].eng + "</a>" + " - " + words[i].rus;
				main.appendChild(p);
			} else if (!letter) {
				main.innerHTML = "";
			}
		}
	}
}

/* Фильтр слов по первой букве */
var letter,
	mic = document.getElementsByTagName("i");

search.focus();

var filterList = search.oninput = function () {
	letter = this.value;

	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");
		if (words[i].eng[0] === letter) {
			p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i> <a href='#' class='open'>" + words[i].eng + "</a>" + " - " + words[i].rus;
			main.appendChild(p);
		} else if (!letter) {
			main.innerHTML = "";
		}
	}

	for (var i = 0; i < mic.length; i++) {
		mic[i].onclick = function (e) {
			voice(this.nextElementSibling.textContent)
		}
	}

	/* Отрываем pop-up по клику на слове */
	var wlink = document.querySelectorAll('.open');

	for (var i = 0; i < wlink.length; i++) {
		wlink[i].onclick = function (e) {
    		for (var i = 0; i < words.length; i++) {

    			/* Закрываем окно при клике на крестик */
    			cls.onclick = function (e) {
					pop.style.display = "none";            
			    	wrap.style.display = "none"; 
				}

				/* Закрываем окно при клике на боди */
				wrap.onclick = function (e) {
					pop.style.display = "none";            
			    	wrap.style.display = "none"; 
				}
				
				/* Отображаем окно и выводим в него информацию */
				if (words[i].eng === this.innerText) {
					pop.style.display = "block";            
		    		wrap.style.display = "block";

		    		/* Генерируем DOM */
		    		var eng = document.createElement("p");
		    		var rus = document.createElement("p");
		    		var mic = document.createElement("p");
		    		var del = document.createElement("span");
		    		var span = document.createElement("span");
		    		var status = document.createElement("span")

		    		pop.innerHTML = "";
		    		span.innerHTML = "<i class='fa fa-times' aria-hidden='true'></i>";
		    		mic.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i>";
		    		del.innerHTML = "<i class='fa fa-trash-o' aria-hidden='true'></i>";
		    		status.innerHTML = "<i class='fa fa-circle-o' aria-hidden='true'></i>";

		    		pop.appendChild(eng);
		    		pop.appendChild(rus);
		    		pop.appendChild(span);
		    		pop.appendChild(mic);
		    		pop.appendChild(del);
		    		pop.appendChild(status);

		    		eng.classList = "eng";
		    		rus.classList = "rus";
		    		mic.id = "big_mic";
		    		del.id = "pop_del";
		    		span.id = "cls";
		    		status.id = "pop_stat";

		    		if (words[i].isDone == true) {
		    			status.classList.add("done");
		    			status.innerHTML = "<i class='fa fa-check-circle' aria-hidden='true'></i>"
		    		} else {
		    			status.classList.remove("done")
		    			status.innerHTML = "<i class='fa fa-circle-o' aria-hidden='true'></i>";
		    		}

		    		var pop_word = words[i];
		    		var k = i;

		    		status.onclick = function () {
		    			if (pop_word.isDone) {
		    				pop_word.isDone = false;
		    				console.log(pop_word.isDone);
		    				status.classList.remove("done")
		    				status.innerHTML = "<i class='fa fa-circle-o' aria-hidden='true'></i>";

		    			} else {
		    				pop_word.isDone = true;
		    				console.log(pop_word.isDone)
		    				status.classList.add("done");
		    				status.innerHTML = "<i class='fa fa-check-circle' aria-hidden='true'></i>"
		    			}
		    		}

		    		del.onclick = function () {
		    			words.splice([k], 1);
		    			pop.style.display = "none";            
			    		wrap.style.display = "none"; 
		    		}	    		

		    		eng.textContent = words[i].eng;
		    		rus.textContent = words[i].rus;

		    		big_mic.onclick = function (e) {
		    			voice(eng.textContent);
		    		}
				}
			}
		}
	}
};









