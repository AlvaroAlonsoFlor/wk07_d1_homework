const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    //still need to define isPrime
    const result = this.isPrime(inputtedNumber);

    PubSub.publish('PrimeChecker:result-calculated', result);

  })
};
