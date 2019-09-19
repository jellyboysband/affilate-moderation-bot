"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_similarity_1 = require("string-similarity");
function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
exports.sleep = sleep;
function isNumberInRage(number, base, step = 1) {
    return number >= base - step && number <= base + step;
}
exports.isNumberInRage = isNumberInRage;
function checkStringSimilarity(a, b) {
    const first = a.toLocaleLowerCase();
    const second = b.toLocaleLowerCase();
    if (first === second)
        return true;
    return string_similarity_1.compareTwoStrings(first, second) >= 0.75;
}
exports.checkStringSimilarity = checkStringSimilarity;
//# sourceMappingURL=../../src/util/common.js.map