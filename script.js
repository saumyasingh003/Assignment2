const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});


const percentageSlider = document.getElementById('percentageSlider');
const percentageValue = document.getElementById('percentageValue');
percentageValue.textContent = percentageSlider.value + '%';
percentageSlider.addEventListener('input', () => {
  percentageValue.textContent = percentageSlider.value + '%';
});

const ageSlider = document.getElementById('ageSlider');
const ageValue = document.getElementById('ageValue');
ageValue.textContent = ageSlider.value;
ageSlider.addEventListener('input', () => {
  ageValue.textContent = ageSlider.value;
});
