(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  var TEXT_NODE = 3;

  module('jQuery#textnodes', {
    // This will run before each test in this module.
    setup: function() {
      var fixture = $('#qunit-fixture');
      this.whitespaceOnly = fixture.find('.whitespaceOnly');
      this.deep = fixture.find('.deep');
      this.noTextNodes = fixture.find('.noTextNodes');
    }
  });

  test('gets only text nodes', function () {
    expect(1);

    var areAllTextNodes = true;

    this.deep.textNodes(true).each(function () {
      if (this.nodeType !== TEXT_NODE) {
        areAllTextNodes = false;
      }
    });

    ok(areAllTextNodes, 'should only return text nodes');
  });

  test('gets the right number of nodes', function() {
    expect(6);

    strictEqual(this.whitespaceOnly.textNodes().length, 0, 'ignores whitespace-only text nodes by default');
    strictEqual(this.whitespaceOnly.textNodes(true).length, 3, 'does not ignore whitespace-only text nodes if told to');

    strictEqual(this.deep.textNodes().length, 9, 'gets all descendent text nodes, except whitespace-only ones');
    strictEqual(this.deep.textNodes(true).length, 20, 'gets all descendent text nodes, including whitespace-only ones if told to');

    strictEqual(this.noTextNodes.textNodes().length, 0, 'returns an empty jQuery object when there are no text nodes');
    strictEqual(this.noTextNodes.textNodes(true).length, 0, 'returns an empty jQuery object when there are no text nodes, not even whitespace-only ones');
  });

}(jQuery));
