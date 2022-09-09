const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})



const arrowDown1 = document.querySelector('#arrowDown1');
const listLink1 = document.querySelector('#listLink1');

arrowDown1.addEventListener('click', () => {
  if (listLink1.classList.contains('hidden')) {
    listLink1.classList.remove('hidden');
  }
  else {
    listLink1.classList.add('hidden');
  }
})
const arrowDown2 = document.querySelector('#arrowDown2');
const listLink2 = document.querySelector('#listLink2');

arrowDown2.addEventListener('click', () => {
  if (listLink2.classList.contains('hidden')) {
    listLink2.classList.remove('hidden');
  }
  else {
    listLink2.classList.add('hidden');
  }
})
const arrowDown3 = document.querySelector('#arrowDown3');
const listLink3 = document.querySelector('#listLink3');

arrowDown3.addEventListener('click', () => {
  if (listLink3.classList.contains('hidden')) {
    listLink3.classList.remove('hidden');
  }
  else {
    listLink3.classList.add('hidden');
  }
})
const arrowDown4 = document.querySelector('#arrowDown4');
const listLink4 = document.querySelector('#listLink4');

arrowDown4.addEventListener('click', () => {
  if (listLink4.classList.contains('hidden')) {
    listLink4.classList.remove('hidden');
  }
  else {
    listLink4.classList.add('hidden');
  }
})
const arrowDown5 = document.querySelector('#arrowDown5');
const listLink5 = document.querySelector('#listLink5');

arrowDown5.addEventListener('click', () => {
  if (listLink5.classList.contains('hidden')) {
    listLink5.classList.remove('hidden');
  }
  else {
    listLink5.classList.add('hidden');
  }
})