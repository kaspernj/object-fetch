# object-digger

## Usage

### digs

This will fail is `object` doesn't contain keys named `firstKey` and `secondKey`.
```js
const {firstKey, secondKey} = digs(object, "firstKey", "secondKey")
```
