/* eslint-disable linebreak-style */
const keys = [
  [
    {
      key: { ru: 'ё', en: '`' },
      shiftPressed: { ru: 'Ё', en: '~' },
      code: 'Backquote',
    },
    {
      key: { ru: '1', en: '1' },
      shiftPressed: { ru: '!', en: '!' },
      code: 'Digit1',
    },
    {
      key: { ru: '2', en: '2' },
      shiftPressed: { ru: '"', en: '@' },
      code: 'Digit2',
    },
    {
      key: { ru: '3', en: '3' },
      shiftPressed: { ru: '№', en: '#' },
      code: 'Digit3',
    },
    {
      key: { ru: '4', en: '4' },
      shiftPressed: { ru: ';', en: '$' },
      code: 'Digit4',
    },
    {
      key: { ru: '5', en: '5' },
      shiftPressed: { ru: '%', en: '%' },
      code: 'Digit5',
    },
    {
      key: { ru: '6', en: '6' },
      shiftPressed: { ru: ':', en: '^' },
      code: 'Digit6',
    },
    {
      key: { ru: '7', en: '7' },
      shiftPressed: { ru: '?', en: '&' },
      code: 'Digit7',
    },
    {
      key: { ru: '8', en: '8' },
      shiftPressed: { ru: '*', en: '*' },
      code: 'Digit8',
    },
    {
      key: { ru: '9', en: '9' },
      shiftPressed: { ru: '(', en: '(' },
      code: 'Digit9',
    },
    {
      key: { ru: '0', en: '0' },
      shiftPressed: { ru: ')', en: ')' },
      code: 'Digit0',
    },
    {
      key: { ru: '-', en: '-' },
      shiftPressed: { ru: '_', en: '_' },
      code: 'Minus',
    },
    {
      key: { ru: '=', en: '=' },
      shiftPressed: { ru: '+', en: '+' },
      code: 'Equal',
    },
    {
      key: 'backspace',
      code: 'Backspace',
      class: 'backspace',
      type: true,
    },
  ],
  [
    {
      key: 'tab',
      code: 'Tab',
      class: 'tab',
      type: true,
    },
    {
      key: { ru: 'й', en: 'q' },
      shiftPressed: { ru: 'Й', en: 'Q' },
      code: 'KeyQ',
    },
    {
      key: { ru: 'ц', en: 'w' },
      shiftPressed: { ru: 'Ц', en: 'W' },
      code: 'KeyW',
    },
    {
      key: { ru: 'у', en: 'e' },
      shiftPressed: { ru: 'У', en: 'E' },
      code: 'KeyE',
    },
    {
      key: { ru: 'к', en: 'r' },
      shiftPressed: { ru: 'К', en: 'R' },
      code: 'KeyR',
    },
    {
      key: { ru: 'е', en: 't' },
      shiftPressed: { ru: 'Е', en: 'T' },
      code: 'KeyT',
    },
    {
      key: { ru: 'н', en: 'y' },
      shiftPressed: { ru: 'Н', en: 'Y' },
      code: 'KeyY',
    },
    {
      key: { ru: 'г', en: 'u' },
      shiftPressed: { ru: 'Г', en: 'U' },
      code: 'KeyU',
    },
    {
      key: { ru: 'ш', en: 'i' },
      shiftPressed: { ru: 'Ш', en: 'I' },
      code: 'KeyI',
    },
    {
      key: { ru: 'щ', en: 'o' },
      shiftPressed: { ru: 'Щ', en: 'O' },
      code: 'KeyO',
    },
    {
      key: { ru: 'з', en: 'p' },
      shiftPressed: { ru: 'З', en: 'P' },
      code: 'KeyP',
    },
    {
      key: { ru: 'х', en: '[' },
      shiftPressed: { ru: 'Х', en: '{' },
      code: 'BracketLeft',
    },
    {
      key: { ru: 'ъ', en: ']' },
      shiftPressed: { ru: 'Ъ', en: '}' },
      code: 'BracketRight',
    },
    {
      key: { ru: '\\', en: '\\' },
      shiftPressed: { ru: '|', en: '|' },
      code: 'Backslash',
      class: 'backslash',
    },
    { key: 'del', code: 'Delete', type: true },
  ],
  [
    {
      key: 'caps lock',
      code: 'CapsLock',
      class: 'capslock',
      type: true,
    },
    {
      key: { ru: 'ф', en: 'a' },
      shiftPressed: { ru: 'Ф', en: 'A' },
      code: 'KeyA',
    },
    {
      key: { ru: 'ы', en: 's' },
      shiftPressed: { ru: 'Ы', en: 'S' },
      code: 'KeyS',
    },
    {
      key: { ru: 'в', en: 'd' },
      shiftPressed: { ru: 'В', en: 'D' },
      code: 'KeyD',
    },
    {
      key: { ru: 'а', en: 'f' },
      shiftPressed: { ru: 'А', en: 'F' },
      code: 'KeyF',
    },
    {
      key: { ru: 'п', en: 'g' },
      shiftPressed: { ru: 'П', en: 'G' },
      code: 'KeyG',
    },
    {
      key: { ru: 'р', en: 'h' },
      shiftPressed: { ru: 'Р', en: 'H' },
      code: 'KeyH',
    },
    {
      key: { ru: 'о', en: 'j' },
      shiftPressed: { ru: 'О', en: 'J' },
      code: 'KeyJ',
    },
    {
      key: { ru: 'л', en: 'k' },
      shiftPressed: { ru: 'Л', en: 'K' },
      code: 'KeyK',
    },
    {
      key: { ru: 'д', en: 'l' },
      shiftPressed: { ru: 'Д', en: 'L' },
      code: 'KeyL',
    },
    {
      key: { ru: 'ж', en: ';' },
      shiftPressed: { ru: 'Ж', en: ':' },
      code: 'Semicolon',
    },
    {
      key: { ru: 'э', en: "'" },
      shiftPressed: { ru: 'Э', en: '"' },
      code: 'Quote',
    },
    {
      key: 'enter',
      code: 'Enter',
      class: 'enter',
      type: true,
    },
  ],
  [
    {
      key: 'shift',
      code: 'ShiftLeft',
      class: 'shift',
      type: true,
    },
    {
      key: { ru: 'я', en: 'z' },
      shiftPressed: { ru: 'Я', en: 'Z' },
      code: 'KeyZ',
    },
    {
      key: { ru: 'ч', en: 'x' },
      shiftPressed: { ru: 'Ч', en: 'X' },
      code: 'KeyX',
    },
    {
      key: { ru: 'с', en: 'c' },
      shiftPressed: { ru: 'С', en: 'C' },
      code: 'KeyC',
    },
    {
      key: { ru: 'м', en: 'v' },
      shiftPressed: { ru: 'М', en: 'V' },
      code: 'KeyV',
    },
    {
      key: { ru: 'и', en: 'b' },
      shiftPressed: { ru: 'И', en: 'B' },
      code: 'KeyB',
    },
    {
      key: { ru: 'т', en: 'n' },
      shiftPressed: { ru: 'Т', en: 'N' },
      code: 'KeyN',
    },
    {
      key: { ru: 'ь', en: 'm' },
      shiftPressed: { ru: 'Ь', en: 'M' },
      code: 'KeyM',
    },
    {
      key: { ru: 'б', en: ',' },
      shiftPressed: { ru: 'Б', en: '<' },
      code: 'Comma',
    },
    {
      key: { ru: 'ю', en: '.' },
      shiftPressed: { ru: 'Ю', en: '>' },
      code: 'Period',
    },
    {
      key: { ru: '.', en: '/' },
      shiftPressed: { ru: ',', en: '?' },
      code: 'Slash',
    },
    { key: '▲', type: true },
    {
      key: 'shift',
      code: 'ShiftRight',
      class: 'shift',
      type: true,
    },
  ],
  [
    {
      key: 'ctrl',
      code: 'ControlLeft',
      class: 'leftctrl',
      type: true,
    },
    {
      key: '⊞',
      code: 'win',
      class: 'win',
      type: true,
    },
    {
      key: 'alt',
      code: 'AltLeft',
      class: 'leftalt',
      type: true,
    },
    { key: ' ', code: 'Space', class: 'space', type: true },
    {
      key: 'alt',
      code: 'AltRight',
      class: 'rightalt',
      type: true,
    },
    { key: '◄', code: 'ArrLeft', type: true },
    { key: '▼', type: true },
    { key: '►', type: true },
    {
      key: 'ctrl',
      code: 'ControlRight',
      class: 'rightctrl',
      type: true,
    },
  ],
];

export default keys;
