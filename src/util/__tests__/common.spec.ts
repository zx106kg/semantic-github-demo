import { add, sub } from "../common";

describe("add", function () {
  it("should add", function () {
    expect(add(1, 2)).toEqual(3);
  });
});

describe("sub", function () {
  it("should sub", function () {
    expect(sub(1, 2)).toEqual(3);
  });
});
