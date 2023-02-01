describe('Servers test (with setup and tear-down)', function () {
   beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
   });

   it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
      expect(serverId).toEqual(1);
   });

   it('should add a row to serverTable', function () {
      submitServerInfo();

      expect(serverTbody.innerHTML).toEqual(
         '<tr id="server1"><td>Alice</td><td>$0.00</td></tr>'
      );
   });

   afterEach(function () {
      // teardown logic
      allServers = {};
      serverTbody.innerHTML = '';
      serverId = 0;
      serverNameInput.value = '';
   });
});
