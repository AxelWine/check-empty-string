# check-empty-string
Checks whether a string is empty and sanitizes strings by removing unnecessary whitespace and control characters that can be used to try to fool the system. This package provides a simple API to efficiently check and clean strings.

## Use cases
### Username validation
The check-empty-string package is particularly useful for validating usernames in web applications. Many users may try to cheat the system by inserting blank characters into their usernames, so it is necessary to sanitize and check their validity.
```js
const isEmpty = require('check-empty-string');

// When displayed on screen, it's a blank username
const rawUsername = '\u202E\u202E\u202E\n' // they are not conventional spaces

// JavaScript
if (rawUsername.trim().length < 2) {
  console.error('Invalid username!');
};

// check-empty-string
if (isEmpty.sanitize(rawUsername).length < 2) {
  console.error('Definitely invalid username!');
};
```

### Data cleaning
When processing data from external sources, such as user input forms or file uploads, it's crucial to clean up the data. This ensures consistency and prevents issues caused by extraneous whitespace or invisible special characters.

```js
const sanitize = require('check-empty-string');

const userInput = '   Hello World! \u202C  ';
const cleanedInput = sanitize(userInput);

console.log(`Cleaned user input: "${cleanedInput}"`); // Outputs: "Hello World!"
```

## Installation
To use **check-empty-string**, you need to install the module using npm:
```bash
npm install check-empty-string
```

## Usage
You can use the `check` and `sanitize` functions. Below is an example of how to use these functions:
```js
const isEmpty = require('check-empty-string');
const text = ...

if (isEmpty.check(text)) {
  console.log('The string is completely empty');
} else {
  console.log('The string is not completely empty');
}

// Returns the text completely removed invisible characters and spaces
console.log(isEmpty.sanitize(text));
```

## License
This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/AxelWine/check-empty-string/blob/main/LICENSE.md).
