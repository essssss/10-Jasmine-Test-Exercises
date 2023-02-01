describe('helpers test', function () {
   beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
   });

   it('should calculate the tip', function () {
      createCurPayment();
      expect(createCurPayment()['tipPercent']).toEqual(20);
   });
});
