/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import keys from './keys';
import '../css/style.css';
import '../css/normalize.css';

export const createElement = (tag, cssClasses, innerHTML) => {
  const newElement = document.createElement(tag);
  if (cssClasses) {
    newElement.className = cssClasses;
  }
  if (innerHTML) {
    newElement.innerHTML = innerHTML;
  }
  return newElement;
};

export class Keyboard {
  constructor() {
    this.lang = 'en';
    this.capsLock = false;
    this.shiftPressed = false;
    this.changeLang = ['AltLeft', 'ShiftLeft', 'ShiftRight'];
    this.pressed = new Set();
    this.components = {
      keyboard: null,
      wrapper: null,
      header: null,
      textarea: null,
      footer: null,
      keys: [keys],
    };
  }

  init() {
    this.keyboard = createElement('div', 'keyboard');
    this.wrapper = this.keyboard.appendChild(
      createElement('div', 'keyboard__wrapper')
    );
    this.header = createElement('div', 'header', 'Virtual Keyboard');
    this.textarea = createElement('textarea', 'textarea');
    this.footer = createElement(
      'footer',
      'footer',
      'Keyboard for Windows operating system <br/> Switch language on click: shift + alt'
    );
    document.body.append(
      this.header,
      this.textarea,
      this.keyboard,
      this.footer
    );

    this.textarea.focus();

    for (let i = 0; i < keys.length; i += 1) {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');
      keys[i].forEach((el) => {
        const key = createElement(
          'div',
          'keyboard__key',
          el.key[this.lang] || el.key
        );
        if (el.class) {
          key.classList.add(el.class);
        }
        key.dataset.code = el.code;
        if (el.key.ru) {
          key.dataset.ru = el.key.ru;
          key.dataset.en = el.key.en;
        }
        if (el.shiftPressed) {
          key.dataset.ruShift = el.shiftPressed.ru;
          key.dataset.enShift = el.shiftPressed.en;
        }
        if (el.type) {
          key.dataset.type = true;
        }
        row.append(key);
      });
      this.wrapper.append(row);
    }
    return this.keyboard;
  }

  changeLanguage() {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
    this.pressed.clear();
    this.shiftUnactive();
    this.updateKeydoard();
  }

  checkLanguage() {
    if (this.pressed.has('AltLeft') && this.pressed.has('ShiftLeft')) {
      this.changeLanguage();
    }
  }

  shiftUnactive() {
    if (this.shiftPressed) {
      this.shiftPressed = !this.shiftPressed;
      this.keyboard.querySelector('.shift').classList.remove('caps_active');
    }
    this.updateKeydoard();
  }

  updateKeydoard() {
    this.keyboard.querySelectorAll('.keyboard__key').forEach((e) => {
      if (this.capsLock && !e.dataset.type) {
        e.innerHTML = e.dataset[`${this.lang}Shift`];
        if (this.shiftPressed || e.shiftKey) {
          e.innerHTML = e.dataset[`${this.lang}`];
        }
      } else if (!this.capsLock && !e.dataset.type) {
        e.innerHTML = e.dataset[`${this.lang}`];
        if (this.shiftPressed || e.code === 'ShiftLeft') {
          e.innerHTML = e.dataset[`${this.lang}Shift`];
        }
      } else if (!e.dataset.type) {
        e.innerHTML = e.dataset[`${this.lang}`];
      }
    });
  }

  switchCaps() {
    this.capsLock = this.capsLock ? 0 : 1;
    if (this.capsLock) {
      this.keyboard.querySelector('.capslock').classList.add('caps_active');
    } else {
      this.keyboard.querySelector('.capslock').classList.remove('caps_active');
    }

    this.updateKeydoard();
  }

  noTypeKeysHandler(event) {
    switch (event) {
      case 'ArrowUp':
        this.textarea.value += '▲';
        break;
      case 'ArrowDown':
        this.textarea.textField.value += '▼';
        break;
      case 'ArrowLeft':
        this.textarea.value += '◄';
        break;
      case 'ArrowRight':
        this.textarea.value += '►';
        break;
      case 'Enter':
        this.textarea.value += '\n';
        break;
      case 'Tab':
        this.textarea.value += '\t';
        break;
      case 'Backspace':
        this.textarea.value = this.textarea.value.toString().slice(0, -1);
        break;
      case 'Space':
        this.textarea.value += ' ';
        break;
      default:
    }
  }

  eventListeners() {
    document.addEventListener('keydown', (event) => {
      this.noTypeKeysHandler(event.code);
      const key = this.keyboard.querySelector(`[data-code=${event.code}]`);
      if (key.dataset.code === 'CapsLock') {
        event.stopPropagation();
        this.switchCaps(event);
      }
      if (key.dataset.code === 'Tab') {
        event.preventDefault();
      }
      if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'AltLeft') {
        this.pressed.add(key.dataset.code);
      }
      if (
        key.dataset.code === 'ShiftLeft' ||
        key.dataset.code === 'ShiftRight'
      ) {
        this.shiftPressed = true;
      }
      this.checkLanguage();
      this.updateKeydoard();
      key.classList.add('active');
      this.textarea.focus();
    });

    document.addEventListener('keyup', (event) => {
      this.shiftPressed = false;
      const key = this.keyboard.querySelector(`[data-code=${event.code}]`);
      if (key) {
        key.classList.remove('active');
      }
      this.updateKeydoard();
      this.textarea.focus();
    });

    this.keyboard.addEventListener('mousedown', (event) => {
      this.textarea.focus();
      this.noTypeKeysHandler(event.target.dataset.code);
      if (!event.target.dataset.type && event.target.dataset.code) {
        this.textarea.value += event.target.innerText;
      } else if (event.target.dataset.code) {
        event.target.classList.add('active');
      }
      if (event.target.dataset.code === 'Delete') {
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        this.textarea.value = `${this.textarea.value.substring(
          0,
          start
        )}${this.textarea.value.substring(end + 1)}`;
        this.textarea.selectionEnd = start;
      }
      if (event.target.dataset.code === 'AltLeft') {
        this.pressed.add(event.target.dataset.code);
      }
      if (
        event.target.dataset.code === 'ShiftLeft' ||
        event.target.dataset.code === 'ShiftRight'
      ) {
        if (!this.shiftPressed) {
          this.shiftPressed = true;
          this.keyboard.querySelector('.shift').classList.add('caps_active');
        } else {
          this.shiftPressed = false;
          this.keyboard.querySelector('.shift').classList.remove('caps_active');
        }
        this.pressed.add(event.target.dataset.code);
      } else if (event.target.dataset.code === 'CapsLock') {
        this.switchCaps(event);
      }
      this.updateKeydoard();
    });

    this.keyboard.addEventListener('mouseup', (event) => {
      this.checkLanguage();
      this.textarea.focus();
      event.target.classList.remove('active');
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
  keyboard.eventListeners();
});
