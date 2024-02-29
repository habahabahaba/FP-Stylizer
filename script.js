function compose(...functions) {
  return function (result) {
    return functions.reduceRight(function (prevResult, fn) {
      return fn(prevResult);
    }, result);
  };
}

// Your code goes here!

const inputField = document.getElementById('input-text');
const caseSelect = document.getElementById('uppercase');
const clolorSelect = document.getElementById('color-picker');
const sizeSelect = document.getElementById('font-size');
const fontSelect = document.getElementById('font-family');
const applyBtn = document.getElementById('apply-styles');
const outputField = document.getElementById('styled-text');
