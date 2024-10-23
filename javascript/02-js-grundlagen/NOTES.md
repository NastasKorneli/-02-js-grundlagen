# Functions

```js
// Functions =====
const getProductsByLetterLong = (letter) => {
  const productsStartingWithLetter = products.filter((str) => {
    return str.toUpperCase().startsWith(letter.toUpperCase());
  });

  return productsStartingWithLetter;
};
```
