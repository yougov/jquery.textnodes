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

  module('jQuery#textNodes', {
    // This will run before each test in this module.
    setup: function() {
      var fixture = $('#qunit-fixture');
      this.whitespaceOnly = fixture.find('.whitespaceOnly');
      this.simpleSet = fixture.find('.simpleSet');
      this.deep = fixture.find('.deep');
      this.noTextNodes = fixture.find('.noTextNodes');
    }
  });

  test('gets only text nodes', function () {
    expect(1);

    var areAllTextNodes = false;

    var nodes = this.deep.textNodes(true);
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType === TEXT_NODE) {
        areAllTextNodes = true;
      } else {
        areAllTextNodes = false;
        break;
      }
    }

    ok(areAllTextNodes, 'should only return text nodes');
  });

  test('gets the right number of nodes', function() {
    expect(7);

    strictEqual(this.whitespaceOnly.textNodes().length, 0, 'ignores whitespace-only text nodes by default');
    strictEqual(this.whitespaceOnly.textNodes(true).length, 4, 'does not ignore whitespace-only text nodes if told to');

    strictEqual(this.simpleSet.textNodes(true).length, 2, 'iterates correctly over a jQuery selection of more than one element');

    strictEqual(this.deep.textNodes().length, 9, 'gets all descendent text nodes, except whitespace-only ones');
    strictEqual(this.deep.textNodes(true).length, 20, 'gets all descendent text nodes, including whitespace-only ones if told to');

    strictEqual(this.noTextNodes.textNodes().length, 0, 'returns an empty jQuery object when there are no text nodes');
    strictEqual(this.noTextNodes.textNodes(true).length, 0, 'returns an empty jQuery object when there are no text nodes, not even whitespace-only ones');
  });

}(jQuery));
