"use strict"

document.getElementById('calculateBtn').addEventListener('click', function() {
    var deposit = parseFloat(document.getElementById('deposit').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var years = parseInt(document.getElementById('years').value);
  
    var futureValue = deposit * Math.pow((1 + (interestRate / 100) / 365), years * 365);
    var totalInterest = futureValue - deposit;
  
    document.getElementById('result').innerHTML = "If you deposit $" + deposit.toFixed(2) +
      " in a CD that earns " + interestRate.toFixed(2) + "% interest and matures in " + years +
      " years, your CD's ending balance will be $" + futureValue.toFixed(2) +
      " and you would have earned $" + totalInterest.toFixed(2) + " in interest.";
  });
  