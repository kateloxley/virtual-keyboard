import keys from './keys.js';

class Keyboard {
  constructor() {
    this.lang = 'en';
    this.isCaps = 'off';
    this.shiftPressed = false;
  }

  switchlanguage() {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
  }

  switchCaps(event) {
    if (this.isCaps === 'on') {
      this.isCaps = 'off';
    } else {
      this.isCaps = 'on';
    }
    this.keyboardChangeEvents(event);
  }

  keyboardChangeEvents(event) {
    if (event.shiftKey || this.shiftPressed) {
      document.querySelectorAll('.keyboard__key').forEach((e) => {
        if (e.dataset[`${this.lang}` + 'Shift'] && this.isCaps === 'on') {
          e.innerHTML = e.dataset[`${this.lang}` + 'Shift'].toLowerCase();
        } else if (e.dataset[`${this.lang}` + 'Shift'] && this.isCaps === 'off') {
          e.innerHTML = e.dataset[`${this.lang}` + 'Shift'];
        } else if (e.dataset[this.lang]) {
          e.innerHTML = e.dataset[this.lang];
        }
      });
    } else {
      document.querySelectorAll('.keyboard__key').forEach((e) => {
        if (e.dataset[this.lang] && this.isCaps === 'on' && !(event.shiftKey || this.shiftPressed)) {
          e.innerHTML = e.dataset[this.lang].toUpperCase();
        } else if (e.dataset[this.lang]) {
          e.innerHTML = e.dataset[this.lang];
        }
      });
    }
  }

  shiftUnactive(event) {
    if (this.shiftPressed) {
      document.querySelector('.shift').classList.remove('active');
      this.keyboardChangeEvents(event);
    }
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard__wrapper');

    for (let i = 0; i < keys.length; i++) {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');
      keys[i].forEach((e) => {
        const key = document.createElement('div');
        key.classList.add('keyboard__key');
        key.textContent = e.key[this.lang] || e.key;
        if (e.class) {
          key.classList.add(e.class);
        }
        key.dataset.code = e.code;
        if (e.key.ru) {
          key.dataset.ru = e.key.ru;
          key.dataset.en = e.key.en;
        }
        if (e.shiftPressed) {
          key.dataset.ruShift = e.shiftPressed.ru;
          key.dataset.enShift = e.shiftPressed.en;
        }
        if (e.noType) {
          key.dataset.noType = true;
        }
        row.append(key);
      });
      keyboardContainer.append(row);
    }
    keyboard.append(keyboardContainer);
    return keyboard;
  }
}

const keyboard = new Keyboard();
const textarea = document.createElement('textarea');

const pushBtn = (event, key, code) => {
  let input = '';
  let left = textarea.value.slice(0, textarea.selectionStart);
  let right = textarea.value.slice(textarea.selectionEnd);
  textarea.focus();
  event.preventDefault();
  if (code === 'CapsLock') {
    keyboard.switchCaps(event);
  }
  if ((code === 'AltLeft' && (event.shiftKey || keyboard.shiftPressed))
    || (code === 'AltRight' && (event.shiftKey || keyboard.shiftPressed))
    || (code === 'ShiftLeft' && event.altKey)
    || (code === 'ShiftRight' && event.altKey)) {
    keyboard.switchlanguage(event);
    keyboard.shiftUnactive(event);
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    keyboard.keyboardChangeEvents(event);
  }

  if (code === 'Tab') input = '\t';

  if (code === 'Enter') {
    input = '\n';
  }

  if (code === 'Backspace') input = 'Backspace';
  if (input === 'Backspace') {
    input = '';
    left = left.slice(0, -1);
  }

  if (!key.dataset.noType) {
    input = key.textContent;
  }

  if (code === 'Delete') {
    right = right.slice(1);
  }

  textarea.value = left + input + right;
};

window.onload = () => {
  textarea.classList.add('textarea');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = 'Keyboard for Windows operating system <br\/> Switch language on click: shift + alt';
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = 'Virtual Keyboard';
  document.body.append(header);
  document.body.append(textarea);
  document.body.append(keyboard.createKeyboard());
  document.body.append(footer);
  textarea.autofocus = true;

  document.addEventListener('keydown', (event) => {
    const key = document.querySelector(`[data-code=${event.code}]`);
    if (key) {
      key.classList.add('active');
      pushBtn(event, key, event.code);
    }
  });

  document.addEventListener('keyup', (event) => {
    const key = document.querySelector(`[data-code=${event.code}]`);
    if (key) {
      key.classList.remove('active');
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboard.shiftUnactive(event);
        keyboard.keyboardChangeEvents(event);
      }
    }
  });

  document.querySelector('.keyboard').addEventListener('click', (event) => {
    if (event.target.closest('.keyboard__key')) {
      const key = event.target.closest('.keyboard__key');
      if (key.dataset.code === 'ShiftLeft'
      || key.dataset.code === 'ShiftRight') {
        keyboard.shiftPressed = !keyboard.shiftPressed;
        key.classList.toggle('active');
      }
      pushBtn(event, key, key.dataset.code);
    }
  });
};
