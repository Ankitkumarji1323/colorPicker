const changeBgColor = (selector, r, g, b) => {
  selector.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

window.addEventListener('load', () => {
  let redInput = document.getElementById('red');
  let greenInput = document.getElementById('green');
  let blueInput = document.getElementById('blue');

  let redValueInput = document.getElementById('redValue');
  let greenValueInput = document.getElementById('greenValue');
  let blueValueInput = document.getElementById('blueValue');

  redInput.addEventListener('change', (event) => {
    changeBgColor(
      document.querySelector('body'),
      redInput.value,
      greenInput.value,
      blueInput.value
    );
    redValueInput.value = event.target.value;
  });

  greenInput.addEventListener('change', (event) => {
    changeBgColor(
      document.querySelector('body'),
      redInput.value,
      greenInput.value,
      blueInput.value
    );
    greenValueInput.value = event.target.value;
  });

  blueInput.addEventListener('change', (event) => {
    changeBgColor(
      document.querySelector('body'),
      redInput.value,
      greenInput.value,
      blueInput.value
    );
    blueValueInput.value = event.target.value;
  });
});
