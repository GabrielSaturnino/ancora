let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  const number = 10;

  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';

  if (value <= 700) hill1.style.top = value * 1 + 'px';
  else hill1.style.top = '0px';

  if (value <= 600) text.style.marginTop = value * 2.5 + 'px';
  else text.style.marginTop = '0px';

  if (value <= 600) hill5.style.left = value * 1.5 + 'px';
  else hill5.style.left = '0px';

  if (value <= 600) hill4.style.left = value * -1.5 + 'px';
  else hill4.style.left = '0px';
});