const { deterministicPartitionKey } = require("./dpk");
const { deterministicPartitionKeyRefactored } = require("./dpk-refactored");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKeyRefactored();
    expect(trivialKey).toBe("0");
  });
});
