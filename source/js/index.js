'use strict';

// Переключене меню на мобильном
(function () {
  var navigation = document.querySelector('.main-navigation');
  var toggle = navigation.querySelector('.main-navigation__button');
  var menu = navigation.querySelector('.main-navigation__list');

  var isOpened = false;

  function close() {
    toggle.classList.remove('main-navigation__button--close');
    menu.classList.add('main-navigation__list--collapsed');
  }

  function open() {
    toggle.classList.add('main-navigation__button--close');
    menu.classList.remove('main-navigation__list--collapsed');
  }

  function init() {
    toggle.classList.remove('visually-hidden');
    close();
  }

  function remove() {
    toggle.removeEventListener('click', handleClick);
  }

  function handleClick() {
    if (isOpened) {
      close();
      isOpened = false;
    } else {
      open();
      isOpened = true;
    }
  }

  if (navigation) {
    init();
    toggle.addEventListener('click', handleClick);
  }
})();
