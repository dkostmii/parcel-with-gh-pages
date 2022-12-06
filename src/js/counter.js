let counter = 0;

function incrementCounter () {
  counter++;
  updateCounter()
}

function updateCounter () {
  const counterEl = document.getElementsByClassName('counter')[0];

  if (counterEl) {
    const label = counterEl.querySelector('label')

    if (label) {
      label.innerHTML = counter.toString()
    }
  }
}

function initCounter () {
  const counterEl = document.getElementsByClassName('counter')[0];

  if (counterEl) {
    const label = counterEl.querySelector('label')

    if (label) {
      label.innerHTML = counter.toString()
    }

    const button = counterEl.querySelector('button')

    if (button) {
      button.addEventListener('click', incrementCounter)
    }
  }
}

initCounter()