"use strict";

function calculateMortgage() {
 
    let principal = Number(document.getElementById('principal').value);
    let interestRate = Number(document.getElementById('interestRate').value) / 100; 
    let loanLength = Number(document.getElementById('loanLength').value);

    let monthlyInterestRate = interestRate / 12;


    let numberOfPayments = loanLength * 12;


    let monthlyPayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    let totalInterest = monthlyPayment * numberOfPayments - principal;

    document.getElementById('monthlyPayment').innerHTML = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalInterest').innerHTML = `$${totalInterest.toFixed(2)}`;
}

