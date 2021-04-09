var ride = document.querySelector('img');

window.addEventListener('keydown', function turn(key) {

  if (event.key === 'ArrowDown') {
    ride.className = 'car-south';
  } else if (event.key === 'ArrowUp') {
    ride.className = 'car-up';
  } else if (event.key === 'ArrowRight') {
    ride.className = 'car-right';
  } else if (event.key === 'ArrowLeft') {
    ride.className = 'car-left';
  }
});
