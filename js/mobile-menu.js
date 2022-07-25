// (() => {
// 	const refs = {
// 	  openMenuBtn: document.querySelector("[data-menu-open]"),
// 	  closeMenuBtn: document.querySelector("[data-menu-close]"),
// 		modal: document.querySelector("[data-menu]"),
// 		body: document.querySelector("#page"),
// 	};
 
// 	refs.openMenuBtn.addEventListener("click", toggleModal);
// 	refs.closeMenuBtn.addEventListener("click", toggleModal);
 
// 	function toggleModal() {
// 		refs.modal.classList.toggle("is-open");
// 		refs.body.classList.toggle("no-scroll");
// 	}
// })();
 
(() => {
	const menuBtnOpen = document.querySelector('[data-menu-open]');
	const menuBtnClose = document.querySelector('[data-menu-close]');
	const mobileMenuRef = document.querySelector('[data-menu]');
 
	// змінна body для блокування скролу
	const body = document.querySelector('body');
 
	menuBtnOpen.addEventListener('click', openMenu);
	menuBtnClose.addEventListener('click', openMenu);
 
	function openMenu() {
	  const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
	  menuBtnOpen.setAttribute('aria-expanded', !expanded);
 
	  // відкриття-закриття мобільного меню
	  mobileMenuRef.classList.toggle('is-open');
 
	  // блокування скролу на body
	  body.classList.toggle('no-scroll');
	}
 })();