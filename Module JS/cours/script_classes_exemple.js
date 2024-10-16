"use strict";

// Public fields
// public methods
// private fields
// private methods
class Account {
  // Public fields (instance data)

  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // private methods
  #approveLoan(val) {
    return true;
  }

  static helper() {}

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approaved");
    }
    return this;
  }
}

const acc1 = new Account("Julien", "GNF", 111);

console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(150);

acc1.getMovements();
// acc1.#movements.push(-150);
// acc1.#pin;

acc1.requestLoan(1000);
// acc1.#approveLoan(1000);

console.log(acc1.pin);

//Chaining
acc1.deposit(300).deposit(200).withdraw(100).requestLoan(1500).withdraw(4000);
