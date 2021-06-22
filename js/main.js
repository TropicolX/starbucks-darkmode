const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

themeSwitch.onclick = function () {
	themeSwitch.classList.toggle("active");
	body.classList.toggle("dark");
};

menuToggle.onclick = function () {
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
    header.classList.toggle("active");
};
