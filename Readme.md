
# fullscreen

  Faux fullscreen implementation. Cross-browser compatible, faster and less restrictive than the actual fullscreen API.

## Example

```js
var Fullscreen = require('fullscreen'),
    textarea = document.getElementById('content');

var fullscreen = Fullscreen(textarea);

fullscreen.open();

setTimeout(function() {
  fullscreen.close();
}, 1000);
```

## Installation

    $ component install matthewmueller/fullscreen

## Events

* `open`: emitted when we open the element in fullscreen mode
* `close`: emitted when we close the element's fullscreen mode

## API

### Fullscreen(el)

Initialize fullscreen

### #open()

open fullscreen mode

### #close()

close fullscreen mode

## License

  MIT
