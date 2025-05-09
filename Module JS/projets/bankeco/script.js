'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4).length);
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice().push('f'));
// console.log([...arr]);
// console.log('==SPLICE==');
// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(2, 4).length);
// console.log(arr.splice(-2));
// console.log(arr.splice(1, -2));
// arr.splice(-1);
// arr.pop();

// console.log('==REVERSE==');
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr2.reverse());
// console.log(arr2);

// console.log('==CONCAT==');
// const numbers = arr2.reverse().concat([10, 11, 12]);
// console.log(numbers);

// console.log(numbers.join());
// console.log(numbers.join(' is less than ').split(' is less than '));

// const arr3 = [23, 11, 45];
// console.log(arr3[0]);
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1));

// console.log(arr3.at(-1));

// // loops
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((mov, idx, _) => {
//   if (mov > 0) console.log(`You deposited ${mov} GNF`);
//   else console.log(`You whithdrawed ${Math.abs(mov)} GNF`);
// });
