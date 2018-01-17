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

var headBtns = document.querySelectorAll(".normal");

/* Функция дла очистки классов */
function clearClasses(arr, cls) {
	for (var i = 0; i < arr.length; i++) {
		arr[i].classList = cls;
	}
}

function showMeList(argument) {
	var p = document.createElement("p");

	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");
		var span = document.querySelectorAll(".mark");
		
		if (words[i].isDone == true) {
			main.appendChild(p);

			p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i>" +
						   "<a href='#' onclick='openPop(event.target)' class='open' >" + words[i].eng + "</a>" + 
						   " - " + words[i].rus + "<span class='mark'></span>";
		}
	}
} showMeList();


function refresh() {
	main.innerHTML = "";
}

function showMeNew() {
	clearClasses(headBtns, "normal");
	refresh();

	new_w.classList.add("active");

	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");
		var span = document.querySelectorAll(".mark");
		
		if (words[i].isDone !== true) {

			main.appendChild(p);

			p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i>" +
						   "<a href='#' onclick='openPop(event.target)' class='open'>" + words[i].eng + "</a>" + 
						   " - " + words[i].rus + "<span class='mark'></span>";
		}
	}

	var mic = document.querySelectorAll(".fa-microphone");

	for (var i = 0; i < mic.length; i++) {
		mic[i].onclick = function() {
			voice(this.nextElementSibling.textContent)
		}
	}
}

function showMeDone() {
	clearClasses(headBtns, "normal");
	refresh();

	done_w.classList.add("active");

	for (var i = 0; i < words.length; i++) {
		var p = document.createElement("p");
		var span = document.querySelectorAll(".mark");
		
		if (words[i].isDone == true) {

			main.appendChild(p);

			p.innerHTML = "<i class='fa fa-microphone' aria-hidden='true'></i>" +
						   "<a href='#' onclick='openPop(event.target)' class='open'>" + words[i].eng + "</a>" + 
						   " - " + words[i].rus + "<span class='mark'></span>";
		}
	}

	var mic = document.querySelectorAll(".fa-microphone");

	for (var i = 0; i < mic.length; i++) {
		mic[i].onclick = function() {
			voice(this.nextElementSibling.textContent)
		}
	}
	
}

var eng = document.querySelector(".eng");
var rus = document.querySelector(".rus");

function openPop() {
	pop.style.display = "block";
	wrap.style.display = "block";
	var target = event.target;

	voice(target.textContent)

	for (var i = 0; i < words.length; i++) {
		if (words[i].eng == target.textContent) {
			eng.textContent = words[i].eng;
			rus.textContent = words[i].rus;
		}
	}
}

/* Меняем статус слова */
function changeStatus(argument) {
	var target = event.target;
	
	if (pop_stat.classList == "done") {
		pop_stat.classList.remove("done")
		pop_stat.innerHTML = "<i class='fa fa-circle-o' aria-hidden='true'></i>";

	} else {
		pop_stat.classList.add("done");
		pop_stat.innerHTML = "<i class='fa fa-check-circle' aria-hidden='true'></i>"
	}
}

/* Озвучиваем слово при нажатии на маленькую кнопку в списке */
var mic = document.querySelectorAll(".fa-microphone");

for (var i = 0; i < mic.length; i++) {
	mic[i].onclick = function (argument) {
		voice(this.nextElementSibling.textContent);
	}
}

/* Озвучиваем слово при нажатии кнопки в popUp */
big_mic.onclick = function () {
	var eng = document.querySelector(".eng");
	voice(eng.textContent);
}

/* Закрываем окно при клике на крестик */
cls.onclick = function (e) {
	pop.style.display = "none";            
	wrap.style.display = "none"; 
}

/* Удаляем элемент из массива и закрываем окно */
pop_del.onclick = function (e) {
	pop.style.display = "none";            
	wrap.style.display = "none"; 
	//Дописать удаление
}

/* Закрываем окно при клике на боди */
wrap.onclick = function (e) {
	pop.style.display = "none";            
	wrap.style.display = "none"; 
}

/* Переворачиваем карточку */
var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('flip').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);

