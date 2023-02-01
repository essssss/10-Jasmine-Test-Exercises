describe('Payments Test (with Setup and Teardown)', function () {
   beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
   });

   it('should submit payment info to allPayments', function () {
      submitPaymentInfo();

      expect(paymentId).toEqual(1);
      expect(Object.keys(allPayments).length).toEqual(1);
   });

   it('should create the current payment obj', function () {
      submitPaymentInfo();
      expect(allPayments['payment1']).toEqual({
         billAmt: '100',
         tipAmt: '20',
         tipPercent: 20,
      });
   });

   it('should add to the summary table', function () {
      submitPaymentInfo();
      expect(summaryTds[0].innerHTML).toEqual('$100');
      expect(summaryTds[1].innerHTML).toEqual('$20');
      expect(summaryTds[2].innerHTML).toEqual('20%');
   });

   it('should reject a bill of 0', function () {
      billAmtInput.value = 0;
      submitPaymentInfo();

      expect(createCurPayment()).toEqual(undefined);
   });

   it('should reject empty bill and tip fields', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      submitPaymentInfo();

      expect(createCurPayment()).toEqual(undefined);
   });

   afterEach(function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      document.querySelector('#summaryTable tbody').innerHTML = '';
   });
});
