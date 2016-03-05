# aegean-numbers

Convert between Numbers and Aegean Numerals in JavaScript

Decimals, numbers over 99,999, zero, and negative numbers are not supported. An error will be raised.

## Usage

```javascript
// converting Number to Aegean numerals
aegean(520);
> '𐄝𐄑'

aegean('520 Spartan Street');
> '𐄝𐄑 Spartan Street'

// converting from Aegean numerals to number
aegean('𐄝𐄑', true);
> 520

// number too high
aegean(100000);
> throws Error

// sending numbers in wrong order or doubling a place value
aegean('𐄤𐄤', true);
> throws Error
```

### in NodeJS

```javascript
var aegean = require('aegean-numbers');
aegean('𐄝𐄑', true);
```

## License

Open source, MIT license
