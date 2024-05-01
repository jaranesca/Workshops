"use strict";

function calculateFutureValue() {
    let deposit = Number(document.getElementById('deposit').value);
    let interestRate = Number(document.getElementById('interestRate').value) / 100;
    let years = Number(document.getElementById('years').value);

    let dailyInterestRate = interestRate / 365; 

    let numberOfCompounds = years * 365; 
    
    let futureValue = deposit * Math.pow(1 + dailyInterestRate, numberOfCompounds);

    let totalInterestEarned = futureValue - deposit;

    document.getElementById('futureValue').innerHTML = `$${futureValue.toFixed(2)}`;
    document.getElementById('totalInterestEarned').innerHTML = `$${totalInterestEarned.toFixed(2)}`;
}
