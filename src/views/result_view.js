const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeResult = event.detail;

    this.displayResult(primeResult);

  })
};

ResultView.prototype.displayResult = function (result) {

  const resultElement = document.querySelector('#result');
  resultElement.textContent = `The number is ${this.processBoolean(result)}`
};

ResultView.prototype.processBoolean = function (result) {
  if (result) {
    result = "prime"
  } else {
    result = "not prime"
  }

  return result;

};

module.exports = ResultView;
