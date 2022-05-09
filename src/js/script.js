const keys = [
  [
    { key: { ru: 'ё', en: '`' }, shiftPressed: { ru: 'Ё', en: '~' }, code: 'Backquote' },
    { key: { ru: '1', en: '1' }, shiftPressed: { ru: '!', en: '!' }, code: 'Digit1' },
    { key: { ru: '2', en: '2' }, shiftPressed: { ru: '"', en: '@' }, code: 'Digit2' },
    { key: { ru: '3', en: '3' }, shiftPressed: { ru: '№', en: '#' }, code: 'Digit3' },
    { key: { ru: '4', en: '4' }, shiftPressed: { ru: ';', en: '$' }, code: 'Digit4' },
    { key: { ru: '5', en: '5' }, shiftPressed: { ru: '%', en: '%' }, code: 'Digit5' },
    { key: { ru: '6', en: '6' }, shiftPressed: { ru: ':', en: '^' }, code: 'Digit6' },
    { key: { ru: '7', en: '7' }, shiftPressed: { ru: '?', en: '&' }, code: 'Digit7' },
    { key: { ru: '8', en: '8' }, shiftPressed: { ru: '*', en: '*' }, code: 'Digit8' },
    { key: { ru: '9', en: '9' }, shiftPressed: { ru: '(', en: '(' }, code: 'Digit9' },
    { key: { ru: '0', en: '0' }, shiftPressed: { ru: ')', en: ')' }, code: 'Digit0' },
    { key: { ru: '-', en: '-' }, shiftPressed: { ru: '_', en: '_' }, code: 'Minus' },
    { key: { ru: '=', en: '=' }, shiftPressed: { ru: '+', en: '+' }, code: 'Equal' },
    {
      key: 'backspace', code: 'Backspace', class: 'backspace', noType: true,
    },
  ],
  [
    {
      key: 'tab', code: 'Tab', class: 'tab', noType: true,
    },
    { key: { ru: 'й', en: 'q' }, shiftPressed: { ru: 'Й', en: 'Q' }, code: 'KeyQ' },
    { key: { ru: 'ц', en: 'w' }, shiftPressed: { ru: 'Ц', en: 'W' }, code: 'KeyW' },
    { key: { ru: 'у', en: 'e' }, shiftPressed: { ru: 'У', en: 'E' }, code: 'KeyE' },
    { key: { ru: 'к', en: 'r' }, shiftPressed: { ru: 'К', en: 'R' }, code: 'KeyR' },
    { key: { ru: 'е', en: 't' }, shiftPressed: { ru: 'Е', en: 'T' }, code: 'KeyT' },
    { key: { ru: 'н', en: 'y' }, shiftPressed: { ru: 'Н', en: 'Y' }, code: 'KeyY' },
    { key: { ru: 'г', en: 'u' }, shiftPressed: { ru: 'Г', en: 'U' }, code: 'KeyU' },
    { key: { ru: 'ш', en: 'i' }, shiftPressed: { ru: 'Ш', en: 'I' }, code: 'KeyI' },
    { key: { ru: 'щ', en: 'o' }, shiftPressed: { ru: 'Щ', en: 'O' }, code: 'KeyO' },
    { key: { ru: 'з', en: 'p' }, shiftPressed: { ru: 'З', en: 'P' }, code: 'KeyP' },
    { key: { ru: 'х', en: '[' }, shiftPressed: { ru: 'Х', en: '{' }, code: 'BracketLeft' },
    { key: { ru: 'ъ', en: ']' }, shiftPressed: { ru: 'Ъ', en: '}' }, code: 'BracketRight' },
    {
      key: { ru: '\\', en: '\\' }, shiftPressed: { ru: '|', en: '|' }, code: 'Backslash', class: 'backslash',
    },
    { key: 'del', code: 'Delete', noType: true },
  ],
  [
    {
      key: 'caps lock', code: 'CapsLock', class: 'capslock', noType: true,
    },
    { key: { ru: 'ф', en: 'a' }, shiftPressed: { ru: 'Ф', en: 'A' }, code: 'KeyA' },
    { key: { ru: 'ы', en: 's' }, shiftPressed: { ru: 'Ы', en: 'S' }, code: 'KeyS' },
    { key: { ru: 'в', en: 'd' }, shiftPressed: { ru: 'В', en: 'D' }, code: 'KeyD' },
    { key: { ru: 'а', en: 'f' }, shiftPressed: { ru: 'А', en: 'F' }, code: 'KeyF' },
    { key: { ru: 'п', en: 'g' }, shiftPressed: { ru: 'П', en: 'G' }, code: 'KeyG' },
    { key: { ru: 'р', en: 'h' }, shiftPressed: { ru: 'Р', en: 'H' }, code: 'KeyH' },
    { key: { ru: 'о', en: 'j' }, shiftPressed: { ru: 'О', en: 'J' }, code: 'KeyJ' },
    { key: { ru: 'л', en: 'k' }, shiftPressed: { ru: 'Л', en: 'K' }, code: 'KeyK' },
    { key: { ru: 'д', en: 'l' }, shiftPressed: { ru: 'Д', en: 'L' }, code: 'KeyL' },
    { key: { ru: 'ж', en: ';' }, shiftPressed: { ru: 'Ж', en: ':' }, code: 'Semicolon' },
    { key: { ru: 'э', en: '\'' }, shiftPressed: { ru: 'Э', en: '"' }, code: 'Quote' },
    {
      key: 'enter', code: 'Enter', class: 'enter', noType: true,
    },
  ],
  [
    {
      key: 'shift', code: 'ShiftLeft', class: 'shift', noType: true,
    },
    { key: { ru: 'я', en: 'z' }, shiftPressed: { ru: 'Я', en: 'Z' }, code: 'KeyZ' },
    { key: { ru: 'ч', en: 'x' }, shiftPressed: { ru: 'Ч', en: 'X' }, code: 'KeyX' },
    { key: { ru: 'с', en: 'c' }, shiftPressed: { ru: 'С', en: 'C' }, code: 'KeyC' },
    { key: { ru: 'м', en: 'v' }, shiftPressed: { ru: 'М', en: 'V' }, code: 'KeyV' },
    { key: { ru: 'и', en: 'b' }, shiftPressed: { ru: 'И', en: 'B' }, code: 'KeyB' },
    { key: { ru: 'т', en: 'n' }, shiftPressed: { ru: 'Т', en: 'N' }, code: 'KeyN' },
    { key: { ru: 'ь', en: 'm' }, shiftPressed: { ru: 'Ь', en: 'M' }, code: 'KeyM' },
    { key: { ru: 'б', en: ',' }, shiftPressed: { ru: 'Б', en: '<' }, code: 'Comma' },
    { key: { ru: 'ю', en: '.' }, shiftPressed: { ru: 'Ю', en: '>' }, code: 'Period' },
    { key: { ru: '.', en: '/' }, shiftPressed: { ru: ',', en: '?' }, code: 'Slash' },
    { key: '▲', noType: true },
    {
      key: 'shift', code: 'ShiftRight', class: 'shift', noType: true,
    },
  ],
  [
    {
      key: 'ctrl', code: 'ControlLeft', class: 'leftctrl', noType: true,
    },
    {
      key: '⊞', code: 'win', class: 'win', noType: true,
    },
    {
      key: 'alt', code: 'AltLeft', class: 'leftalt', noType: true,
    },
    { key: ' ', code: 'Space', class: 'space' },
    {
      key: 'alt', code: 'AltRight', class: 'rightalt', noType: true,
    },
    { key: '◄', code: 'ArrLeft', noType: true },
    { key: '▼', noType: true },
    { key: '►', noType: true },
    {
      key: 'ctrl', code: 'ControlRight', class: 'rightctrl', noType: true,
    },
  ],
];

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
