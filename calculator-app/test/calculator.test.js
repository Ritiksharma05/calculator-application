const test = require("node:test");
const assert = require("node:assert/strict");
const { calculate } = require("../src/calculator");

test("adds numbers", () => assert.equal(calculate(2, 3, "+"), 5));
test("subtracts numbers", () => assert.equal(calculate(5, 3, "-"), 2));
test("multiplies numbers", () => assert.equal(calculate(4, 3, "*"), 12));
test("divides numbers", () => assert.equal(calculate(8, 2, "/"), 4));
test("rejects division by zero", () => {
  assert.throws(() => calculate(8, 0, "/"), /Cannot divide by zero/);
});
