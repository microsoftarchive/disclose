# Disclose

A small module to help toggle details on click in the dom.

## Usage

```js
var disclose = require("disclose");
var el document.querySelector("[data-disclose]");
var disclosure = disclose.create(el);
console.log("Is it currently visible?", disclosure.isActive);
disclosure.show();
console.log("Is it currently visible?", disclosure.isActive);
```

or

```js
var disclose = require("disclose");
disclose.all(); // will automatically find and enable all [data-disclose] element
```
