let upButton = document.querySelector('.fixed-btn ');
let fixedMenu = document.querySelector('.header');
let Users = document.querySelector('.Model-users');
let button =document.querySelector('.Start');
let Exit =document.querySelector('.exit');
let ChatBtn = document.querySelector('.Chat-btn');
let Chat = document.querySelector('.CHAT');
let exitChat = document.querySelector('.exit-chat');


window.onscroll = function () {
  if (window.pageYOffset > 800) {
    upButton.classList.add('hidden');
    fixedMenu.classList.add('fixed');
  }else {
    upButton.classList.remove('hidden');
    fixedMenu.classList.remove('fixed');
  }

};



button.addEventListener('click', function(){
    Users.classList.remove('visability');
})
Exit.addEventListener('click', function(){
    Users.classList.add('visability');
})
ChatBtn.addEventListener('click', function(){
    Chat.classList.remove('visability');
})
exitChat.addEventListener('click', function(){
    Chat.classList.add('visability');
})