"use strict";

document.getElementById('mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById('principal').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanLength = parseFloat(document.getElementById('loanLength').value);

    var monthlyInterestRate = (interestRate / 100) / 12;
    var numberOfPayments = loanLength * 12;

    var monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    var totalInterest = monthlyPayment * numberOfPayments - principal;

    document.getElementById('result').innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2) + "<br>Total Interest Paid: $" + totalInterest.toFixed(2);
});
