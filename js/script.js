/*меню*/
var burger = document.getElementsByClassName("nav-open");
var n_close = document.getElementsByClassName("nav-close");
var navig = document.getElementsByTagName("nav");


burger[0].onclick = function() {
	navig[0].setAttribute("class", "nav");
}

n_close[0].onclick = function() {
	navig[0].setAttribute("class", "nav-cl");
}


/*modal video*/
var play = document.getElementsByClassName("video-btn");
var m_close = document.getElementsByClassName("modal-close");
var m_video = document.getElementById("video");

play[0].onclick = function() {
	m_video.setAttribute("class", "modal-show");
}

m_close[0].onclick = function() {
	m_video.setAttribute("class", "modal-fade");
}


/*modal form*/
var f_btn = document.getElementsByClassName("form-btn");
var mf_cl = document.getElementsByClassName("modal-form_close");
var m_form = document.getElementById("form");
var form_next = document.getElementsByClassName("form_next");
var mail = document.getElementsByClassName("email");
var form_next1 = document.getElementsByClassName("form_next1");
var form_download = document.getElementsByClassName("form_download");
var tel = document.getElementsByClassName("tel");
var spa = document.getElementsByClassName("modal-form_content")[0].getElementsByTagName("span");
var text_2 = document.getElementsByClassName("form-text_2");

f_btn[0].onclick = function() {
	m_form.setAttribute("class", "modal-show");
}

mf_cl[0].onclick = function() {
	m_form.setAttribute("class", "modal-fade");
}


form_next[0].addEventListener("click", my_func2, false);
form_next[0].addEventListener("click", my_func3, false);
form_next[0].addEventListener("click", my_func6, false);
form_next[0].addEventListener("click", my_func7, false);

function my_func2() {
	mail[0].setAttribute("class", "email zindex");
}

function my_func3() {
	form_next1[0].setAttribute("class", "form_but form_next1 zindex");
}

function my_func6 () {
	spa[0].setAttribute("class", "opacity_0");
}

function my_func7 () {
	spa[1].setAttribute("class", "opacity_1");
}

form_next1[0].addEventListener("click", my_func4, false);
form_next1[0].addEventListener("click", my_func5, false);
form_next1[0].addEventListener("click", my_func8, false);
form_next1[0].addEventListener("click", my_func9, false);

function my_func4() {
	tel[0].setAttribute("class", "tel zindex");
}

function my_func5() {
	form_download[0].setAttribute("class", "form_but form_download zindex");
}

function my_func8() {
	spa[1].setAttribute("class", "opacity_0");
}

function my_func9() {
	spa[2].setAttribute("class", "opacity_1");
}

