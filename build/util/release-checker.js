"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const release_providers_1 = require("./release-providers");
const russianReleaseCheckers = [release_providers_1.scarabeyReleaseChecker];
const englishReleaseCheckers = [release_providers_1.ytsReleaseChecker];
const checkRelease = (checkers) => async (config) => {
    const result = await Promise.all(checkers.map(checker => checker(config)));
    return result.some(result => result);
};
exports.releaseChecker = {
    en: checkRelease(englishReleaseCheckers),
    ru: checkRelease(russianReleaseCheckers)
};
//# sourceMappingURL=../../src/util/release-checker.js.map