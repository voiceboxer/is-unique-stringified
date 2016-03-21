# is-unique-stringified

Check if the stringified values of an array are unique.

	 npm install is-unique-stringified

# Usage

```javascript
var unique = require('is-unique-stringified');

console.log(unique([1, 2, 3]));   // => true
console.log(unique([1, 2, '2'])); // => false
```
