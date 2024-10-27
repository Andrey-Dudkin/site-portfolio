const body = document.querySelector("body");

// *theme site
let themeMode = localStorage.getItem("themeMode");
const buttonTheme = document.querySelector(".button_toggle_theme");
const iconSun = document.querySelector(".icon_sun");
const iconMoon = document.querySelector(".icon_moon");
function onThemeMode(){
  	body.classList.add("change_theme");
  	localStorage.setItem("themeMode","dark");
	iconMoon.classList.remove("hidden");
	iconSun.classList.add("hidden");
};
function offThemeMode(){
	body.classList.remove("change_theme");
	localStorage.setItem("themeMode", "");
	iconMoon.classList.add("hidden");
	iconSun.classList.remove("hidden");

};

buttonTheme.addEventListener("click", () => {
	themeMode = localStorage.getItem("themeMode");
	if(themeMode != "dark"){
		onThemeMode();
	}else{
		offThemeMode();
	}
});

if(themeMode === "dark"){
  	onThemeMode();
}else{
  	offThemeMode();
};

// *Burger menu
const burgerBtn = document.querySelector(".burger_menu_btn");
const burgerIcon = document.querySelector(".burger_menu_icon");
const menuList = document.querySelector(".menu_list")
const menuLinks = document.querySelectorAll(".menu_link");
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger_menu_icon_active");
	menuList.classList.toggle("open_menu");
	body.classList.toggle("no_scroll")
});

menuLinks.forEach((link)=> {
	link.addEventListener("click", function(){
		burgerIcon.classList.remove("burger_menu_icon_active");
		menuList.classList.remove("open_menu");
		body.classList.remove("no_scroll")
	});
})

// *tabs
const tabBtns = document.querySelectorAll(".tabs_btn");
const tabContent = document.querySelectorAll(".tabs_content");

tabBtns.forEach((btn) => {
	btn.addEventListener("click", function(){
		let currentBtn = btn;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId)
		tabBtns.forEach((btn) =>{
			btn.classList.remove("active_btn");
		});
		tabContent.forEach((tab) =>{
			tab.classList.remove("tabs_content_active");
		});
		currentBtn.classList.add("active_btn");
        currentTab.classList.add("tabs_content_active");
	});
});

// *popup
const projectImages = document.querySelectorAll(".project_img");
const overlay = document.querySelector(".popup_images");
projectImages.forEach((image) => {
	image.addEventListener("click", () => {
		body.classList.add("no_scroll");
		document.querySelector(".popup_images").style.display = "block";
		document.querySelector(".popup_image").src = image.getAttribute("src")
	});
});
overlay.addEventListener("click", () => {
	body.classList.remove("no_scroll");
	document.querySelector(".popup_images").style.display = "none";
});
document.addEventListener("keydown", (event) => {
	if(event.key === "Escape"){
		body.classList.remove("no_scroll");
		document.querySelector(".popup_images").style.display = "none";
	};
});

// *Копировать почту
const btnCopyEmail = document.querySelector(".btn_copy_email");
const copyEmail = document.querySelector(".email_text");
btnCopyEmail.addEventListener("click", () => {
	navigator.clipboard.writeText(copyEmail.innerText).then(function (){
		setTimeout(() => {
			document.querySelector(".tooltip").style.display = "block"
		},100)
		setTimeout(() => {
			document.querySelector(".tooltip").style.display = "none"
		},2000)
	})
})

// *slider swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });