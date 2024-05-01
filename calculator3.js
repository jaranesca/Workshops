"use strict";

function calculatePresentValue() {
    let monthlyPayout = parseFloat(document.getElementById('monthlyPayout').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    let years = parseInt(document.getElementById('years').value);

    let monthlyInterestRate = interestRate / 12;
    let numberOfPayments = years * 12;

    let presentValue = monthlyPayout * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) / monthlyInterestRate;

    document.getElementById('presentValue').innerHTML = `You would need to invest $${presentValue.toFixed(2)} today.`;
}
