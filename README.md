# co-probe-image-size
Get image size without full download. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, PSD.

Install
-------

```bash
npm install co-probe-image-size --save
```

Example
-------

```js
var probe = require('co-probe-image-size');

var dimensions = yield coImage.getSize("test-image-name.jpg");
console.log(dimensions);
```

License
-------

[MIT](https://raw.github.com/nodeca/probe-image-size/master/LICENSE)
