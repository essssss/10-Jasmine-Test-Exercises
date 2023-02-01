window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 5000;
  document.getElementById("loan-years").value = 1;
  document.getElementById("loan-rate").value = 10;
  updateMonthly();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  values = getCurrentUIValues();
  let P = values.amount;
  let i = values.rate / 100 / 12;
  let n = values.years * 12;
  let payment = 0;
  if (values.rate === 0) {
    payment = P / n;
  } else {
    payment = (P * i) / (1 - (1 + i) ** -n);
  }
  payment = Math.round(payment * 100) / 100;
  return `${payment}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText =
    calculateMonthlyPayment();
}
