# jQuery.textNodes

Get all descendent text nodes from the set of matched elements.

Tested and working in IE6+*, Firefox 26 and Chrome 32.

_Note_: IE6+ are fine with non-whitespace-only text nodes, but IE < 9 do not
correctly get _whitespace-only_ text nodes. I don't know of any workaround.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/yougov/jquery.textnodes/master/dist/jquery.textnodes.min.js
[max]: https://raw.github.com/yougov/jquery.textnodes/master/dist/jquery.textnodes.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.textnodes.min.js"></script>
<script>
jQuery(function($) {
  $('.something').textNodes();
});
</script>
```

## Examples
Returns all descendent, non-whitespace-only text nodes from the matching
set of elements _(IE6+ and modern browsers)_:
```
$('.something').textNodes();
```

Returns all descendent text nodes, including whitespace-only ones**, from
the matching set of elements _(IE9+ and modern browsers)_:
```
$('.else').textNodes(true);
```

## Release History
 * v1.0.0 Initial release
