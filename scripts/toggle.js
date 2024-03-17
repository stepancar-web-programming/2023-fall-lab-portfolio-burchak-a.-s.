// eslint-disable-next-line
function toggleContainer(id, arrow) {
  var container = document.getElementById(id);
  var arrowDown = arrow.querySelector('.arrow-down');
  var arrowUp = arrow.querySelector('.arrow-up');

  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block';
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'inline-block';
  } else {
    container.style.display = 'none';
    arrowDown.style.display = 'inline-block';
    arrowUp.style.display = 'none';
  }
}
