it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment()).toEqual("439.58");
});

it("should return the correct values", function () {
  expect(getCurrentUIValues()).toEqual({ amount: 5000, years: 1, rate: 10 });
});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment() * 100).toEqual(
    Math.floor(calculateMonthlyPayment() * 100)
  );
});

/// etc
