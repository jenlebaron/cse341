const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

const pwdButton = document.querySelector('#password');
const showPassword = document.querySelector('#showPassword')

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

showPassword.addEventListener('click', ()=>{
  if(pwdButton.type === 'password'){
      pwdButton.type = 'text';
  }else{
      pwdButton.type ='password';
  }
});

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);
