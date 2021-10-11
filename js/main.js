let burger = document.querySelector('.burger');
let burgerActive = document.querySelector('.burger-active');
let item1 = document.querySelector('.header__item-1');
let item3 = document.querySelector('.header__item-3');


burger.addEventListener('click', f1);
burger.addEventListener('click', f2);

function f1() {
   if (item1.style.display === 'block') {
      item1.style.display = 'none';
  } else {
      item1.style.display = 'block';
  }
}

function f2() {
   if (item3.style.display === 'block') {
      item3.style.display = 'none';
  } else {
      item3.style.display = 'block';
  }
}


// добавление и удоление класса 

burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})
