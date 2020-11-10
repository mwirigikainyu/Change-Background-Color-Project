const body = document.querySelector('.main-page');
const colors = [
  'pink',
  'red',
  'black',
  'darkgreen',
  'fuschia',
  'orange',
  'darksalmon',
];

body.addEventListener('click', () => {
  const colorIndex = parseInt(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorIndex];
  console.log(colorIndex);
});
