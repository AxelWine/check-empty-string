const fs = require("fs");
const { check, sanitize } = require("../src/check-empty-string/index.cjs");

const emptyBigEmpty = fs.readFileSync("test/empty-big-empty.txt");

console.log(`is empty: ${check(emptyBigEmpty)}`);
console.log(`sanitized: "${sanitize(emptyBigEmpty)}"`);
console.log("--------------------");

const emptyBigEmptyUTF8 = fs.readFileSync("test/empty-big-empty.txt", "utf8");

console.log(`is empty: ${check(emptyBigEmptyUTF8)}`);
console.log(`sanitized: "${sanitize(emptyBigEmptyUTF8)}"`);

try {
  console.log(`is empty: ${check(null)}`);
} catch (error) {
  console.log('invalid inputs throw errors');
} finally {
  console.log("--------------------");
}