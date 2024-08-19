function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseInt(document.getElementById('years').value);
  const numberOfPayments = years * 12;

  if (amount > 0 && interestRate > 0 && years > 0) {
      const x = Math.pow(1 + interestRate, numberOfPayments);
      const monthly = (amount * x * interestRate) / (x - 1);
      
      const monthlyPayment = monthly.toFixed(2);
      const totalPayment = (monthly * numberOfPayments).toFixed(2);
      const totalInterest = (monthly * numberOfPayments - amount).toFixed(2);

      document.getElementById('result').innerHTML = `
          Monthly Payment: $${monthlyPayment}<br>
          Total Payment: $${totalPayment}<br>
          Total Interest: $${totalInterest}
      `;
  } else {
      document.getElementById('result').innerHTML = 'Please enter valid values.';
  }
}
