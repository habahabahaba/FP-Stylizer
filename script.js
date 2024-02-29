function compose(...functions) {
  return function (result) {
    return functions.reduceRight(function (prevResult, fn) {
      return fn(prevResult);
    }, result);
  };
}

// Your code goes here!
const applyBtn = document.getElementById('apply-styles');
const outputField = document.getElementById('styled-text');

const inputs = {
  content: document.getElementById('input-text'),
  'text-transform': document.getElementById('uppercase'),
  color: document.getElementById('color-picker'),
  'font-size': document.getElementById('font-size'),
  'font-family': document.getElementById('font-family'),
};

const outputStyle = outputField.style;

function getVal(source, prop) {
  return prop === 'text-transform'
    ? source[prop].checked
      ? 'uppercase'
      : 'none'
    : source[prop].value;
}

const getInputVal = (prop) => getVal(inputs, prop);

function setStyle(style, prop) {
  style[prop] = getInputVal(prop);
}

const setters = {
  setCase: () => {
    setStyle(outputStyle, 'text-transform');
  },
  setColor: () => {
    setStyle(outputStyle, 'color');
  },
  setSize: () => {
    setStyle(outputStyle, 'font-size');
  },
  setFont: () => {
    setStyle(outputStyle, 'font-family');
  },
};

const setOutputStyle = compose(...Object.values(setters));

applyBtn.addEventListener('click', () => {
  outputField.insertAdjacentText('afterbegin', getInputVal('content'));
  setOutputStyle(outputStyle);
  // console.log('el:', outputField);
  // console.log('el.style:', outputField.style);
});
