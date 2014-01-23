# jQuery.textNodes

Get all descendent text nodes from the set of matched elements.

Tested and working in IE6+*, Firefox 26 and Chrome 32.

* IE < 9 does not correctly get whitespace-only text nodes. I don't know of any
  workaround.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/markrian/jquery.textnodes/master/dist/jquery.textnodes.min.js
[max]: https://raw.github.com/markrian/jquery.textnodes/master/dist/jquery.textnodes.js

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
set of elements:
```
$('.something').textNodes();
```

Returns all descendent text nodes, including whitespace-only ones**, from
the matching set of elements:
** Except in IE < 9, which sometimes pretends these don't exist.
```
$('.else').textNodes(true);
```

## Release History
_(Nothing yet)_
