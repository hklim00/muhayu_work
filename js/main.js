'use strict';

// header scroll
const header = document.querySelector('.header');
const headerH = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	if (window.scrollY > headerH) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});

// nav
const menu = header.querySelector('.header__menu');
const menuDep1 = menu.querySelectorAll('.header__depth1 > li');
const depthBg = header.querySelector('.header__depth--bg');

menuDep1.forEach((dep1, idx) => {
	dep1.addEventListener('mouseover', function () {
		for (let el of menuDep1) {
			el.classList.remove('on');
		}
		menuDep1[idx].classList.add('on');
		depthBg.classList.add('show');
	});
	dep1.addEventListener('mouseleave', function () {
		for (let el of menuDep1) {
			el.classList.remove('on');
		}
		depthBg.classList.remove('show');
	});
});

// dropdown
const dropdown = document.querySelector('.dropdown');
const dropdownVal = dropdown.querySelector('.dropdown__val');
const dropdownBtn = dropdown.querySelector('.dropdown__top');
const dropdownCon = dropdown.querySelector('.dropdown__con');
const options = dropdownCon.querySelectorAll('li');

dropdownBtn.addEventListener('click', function () {
	dropdownCon.classList.toggle('open');
});

options.forEach(function (opt) {
	opt.addEventListener('click', function (e) {
		e.preventDefault();
		const selectVal = e.currentTarget.textContent.trim();
		dropdownVal.value = selectVal;
		dropdownCon.classList.remove('open');
	});
});

// filter
const filterBtns = document.querySelector('.filter__btns');
const imgItems = document.querySelectorAll('.images__list img');

filterBtns.addEventListener('click', (e) => {
	const itemData = e.target.dataset.img || e.target.parentNode.dataset.img;

	if (itemData == null) {
		return;
	}

	const active = document.querySelector('.filter__btns button.active');
	const target =
		e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	active.classList.remove('active');
	target.classList.add('active');

	imgItems.forEach((imgData) => {
		const imgItem = imgData.dataset.img;
		if (itemData === 'all' || itemData === imgItem) {
			imgData.classList.remove('is-hidden');
		} else {
			imgData.classList.add('is-hidden');
		}
	});
});
