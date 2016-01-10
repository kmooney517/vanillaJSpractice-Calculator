import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';



// Empty arrays for saving values

let firstNum = [];
let secondNum = [];
let operation = [];

// Click events for all buttons

let answerField = document.querySelector('.answerField');

let one = document.querySelector('.one').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 1;
});

let two = document.querySelector('.two').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 2;
});

let three = document.querySelector('.three').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 3;
});

let four = document.querySelector('.four').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 4;  
});

let five = document.querySelector('.five').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 5;
});

let six = document.querySelector('.six').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 6;
});

let seven = document.querySelector('.seven').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 7;
});

let eight = document.querySelector('.eight').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 8;
});

let nine = document.querySelector('.nine').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 9;
});

let zero = document.querySelector('.zero').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + 0;
});

let period = document.querySelector('.period').addEventListener('click', function() {
  answerField.textContent = answerField.textContent + '.';
});

let clear = document.querySelector('.clearButton').addEventListener('click', function() {
  answerField.textContent = '';
  firstNum = [];
  secondNum = [];
  operation = [];
});


// Operation functions

let plus = document.querySelector('.plus').addEventListener('click', function() {
  operation.push(1);
  let num = Number(answerField.textContent);
  firstNum.push(num);
  answerField.textContent = ''; 
});

let minus = document.querySelector('.minus').addEventListener('click', function() {
  operation.push(2);
  let num = Number(answerField.textContent);
  firstNum.push(num);
  answerField.textContent = ''; 
});

let multiply = document.querySelector('.multiply').addEventListener('click', function() {
  operation.push(3);
  let num = Number(answerField.textContent);
  firstNum.push(num);
  answerField.textContent = ''; 
});

let divide = document.querySelector('.divide').addEventListener('click', function() {
  operation.push(4);
  let num = Number(answerField.textContent);
  firstNum.push(num);
  answerField.textContent = ''; 
});


let equal = document.querySelector('.equal').addEventListener('click', function() {
  let num2 = Number(answerField.textContent);
  secondNum.push(num2);

  if (Number(operation.join('')) === 1) {
    answerField.textContent = Number(firstNum) + Number(secondNum);
  } else if (Number(operation.join('')) === 2) {
    answerField.textContent = firstNum - secondNum;
  } else if (Number(operation.join('')) === 3) {
    answerField.textContent = firstNum * secondNum;
  } else if (Number(operation.join('')) === 4) {
    answerField.textContent = firstNum / secondNum;
  }
});



