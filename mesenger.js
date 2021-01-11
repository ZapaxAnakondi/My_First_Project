let template = document.querySelector('#message-template').content;
let newText = document.querySelector('.chat-content');
let inputText = document.querySelector('.chat-form-input');
let submit = document.querySelector('.chat-form');


submit.addEventListener('submit', function(evt){
  evt.preventDefault();
  let cloneEd =  template.cloneNode(true);
  let cloneText = cloneEd.querySelector('.chat-message-text');
  let button = cloneEd.querySelector('.chat-message-button');
  
  deleteMaassge(button)
  cloneText.textContent = inputText.value;   
   newText.appendChild(cloneEd);
   inputText.value = ''
  })
  
  
let deleteMaassge = function(button) {
  button.addEventListener('click', function() {
    button.closest('.chat-message').remove(); 
    })
  }
