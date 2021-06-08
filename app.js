document.addEventListener('DOMContentLoaded', function () {
  let navigation = document.querySelector('.navigation');
  let navigationIcon = document.querySelector('.navigation > img');
  let menu = document.querySelector('nav');
  let menuItems = document.querySelectorAll('.menu-item');
  let innerMenus = document.querySelectorAll('.inner-menu');

  let companyIcon = document.querySelector(`#company > img`);
  let productIcon = document.querySelector(`#product > img`);
  let connectIcon = document.querySelector(`#connect > img`);
  menuItems.forEach(function (item) {
    item.onclick = function (item) {
      let currentClicked = null;

      if (item.target.id === 'company') {
        companyIcon.classList.add('rotated');
        connectIcon.classList.remove('rotated');
        productIcon.classList.remove('rotated');
        innerMenus[0].style.display = 'none';
        innerMenus[1].style.display = 'flex';
        innerMenus[2].style.display = 'none';
      } else if (item.target.id === 'connect') {
        connectIcon.classList.add('rotated');
        companyIcon.classList.remove('rotated');
        productIcon.classList.remove('rotated');
        innerMenus[0].style.display = 'none';
        innerMenus[1].style.display = 'none';
        innerMenus[2].style.display = 'flex';
      } else if (item.target.id === 'product') {
        companyIcon.classList.remove('rotated');
        connectIcon.classList.remove('rotated');
        productIcon.classList.add('rotated');
        innerMenus[0].style.display = 'flex';
        innerMenus[1].style.display = 'none';
        innerMenus[2].style.display = 'none';
      } else if (item.target.id === currentClicked) {
        innerMenus[0].style.display = 'none';
        innerMenus[1].style.display = 'none';
        innerMenus[2].style.display = 'none';
      }
    };
  });

  navigation.onclick = function () {
    let currentImage = navigationIcon.src.split('/')[4];

    if (currentImage === 'icon-close.svg') {
      menu.style.display = 'none';
      navigationIcon.src = './images/icon-hamburger.svg';
    } else {
      menu.style.display = 'flex';
      navigationIcon.src = './images/icon-close.svg';
    }
  };
});
