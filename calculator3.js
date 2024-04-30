"use strict";

function calculatePresentValue() {
    var monthlyPayout = parseFloat(document.getElementById('monthlyPayout').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    var years = parseFloat(document.getElementById('years').value);

    var presentValue = monthlyPayout * (1 - Math.pow(1 + interestRate, -years)) / interestRate;

    document.getElementById('result').innerText = "To fund an annuity that pays $" + monthlyPayout.toFixed(2) + " monthly for " + years + " years and earns an expected " + (interestRate * 100).toFixed(2) + "% interest, you would need to invest $" + presentValue.toFixed(2) + " today.";
}
