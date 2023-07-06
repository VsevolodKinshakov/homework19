const keys = document.querySelectorAll('.key');
const inputField = document.getElementById('inputField');
let shiftPressed = false;
let capsLockOn = false;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;
    if (keyValue === 'Backspace') {
      inputField.value = inputField.value.slice(0, -1);
    } else if (keyValue === 'Enter') {
      inputField.value += '\n';
    } else if (keyValue === 'Shift') {
      handleShift();
    } else if (keyValue === 'CapsLock') {
      handleCapsLock();
    } else {
      let valueToAdd = shiftPressed || capsLockOn ? keyValue.toUpperCase() : keyValue.toLowerCase();
      inputField.value += valueToAdd;
    }
  });
});

function handleShift() {
  shiftPressed = !shiftPressed;
  keys.forEach(key => {
    if (shiftPressed) {
      key.classList.add('active');
    } else {
      key.classList.remove('active');
    }
  });
}

function handleCapsLock() {
  capsLockOn = !capsLockOn;
  keys.forEach(key => {
    if (capsLockOn) {
      key.classList.toggle('active');
    } else {
      key.classList.remove('active');
    }
  });
}

document.addEventListener('keydown', event => {
    const keyPressed = event.key;
    handleKeyPress(keyPressed);
  });
  
  function handleKeyPress(keyValue) {
    if (keyValue === 'Backspace') {
      inputField.value = inputField.value.slice(0, -1);
    } else if (keyValue === 'Enter') {
      inputField.value += '\n';
    } else {
      inputField.value += keyValue;
    }
  }
