const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.isPrime(inputtedNumber);
    console.log(result);
    PubSub.publish('PrimeChecker:result-calculated', result);

  })
};

PrimeChecker.prototype.isPrime = function (number) {
  let result = true;

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      result = false;
    }
  }

  if (number <= 1) { result = false }

  return result;
};

module.exports = PrimeChecker;
