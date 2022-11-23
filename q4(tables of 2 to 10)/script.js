const mainEl = document.getElementById('main');

var i = 2;
var j = 1;
var t = 1;

var colors = ['#E74C3C', '#3498DB', '#27AE60', '#8E44AD', '#000000'];

setInterval(() => {

  if (i > 10) return;

  const child = document.createElement('p');

    child.innerHTML = `${i} * 1 = ${i * 1} ${i} * 2 = ${i * 2} ${i} * 3 = ${i * 3} ${i} * 4 = ${i * 4} ${i} * 5 = ${i * 5} ${i} * 6 = ${i * 6} ${i} * 7 = ${i * 7} ${i} * 8 = ${i * 8} ${i} * 9 = ${i * 9} ${i} * 10 = ${i * 10} `;
    child.style.color = colors[(j - 1) % 5];
    child.style.fontSize = `${t}rem`;
    mainEl.appendChild(child);

  i++;
  j++;
  t += 0.05;
}, 5000);