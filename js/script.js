// let menuBtn = document.querySelector('.header__burger');
// let menu = document.querySelector('.header__burger-container');
// menuBtn.addEventListener('click', function(){
// 	menu.classList.toggle('active');
// })

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__burger-container').toggleClass('active');
    $('body').toggleClass('lock')
  })
})