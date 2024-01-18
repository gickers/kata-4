import { partitionOddEven } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("[1,2,3,4,5] should equal [1,3,5] and [2,4]", () => {
    expect(partitionOddEven([1,2,3,4,5])).toEqual([[1,3,5],[2,4]]);
});

test("[11,13,15,16,20,22] should equal [11,13,15] and [16,20,22]", () => {
    expect(partitionOddEven([11,13,15,16,20,22])).toEqual([[11,13,15],[16,20,22]]);
});

test("[11,121,-5,4,8,22,13]] should equal [11,121,-5,13] and [4,8,22]", () => {
    expect(partitionOddEven([11,121,-5,4,8,22,13])).toEqual([[11,121,-5,13],[4,8,22]]);
});


