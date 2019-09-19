"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const logger_1 = require("./logger");
const session_1 = require("./session");
async function updateLanguage(ctx, newLang) {
    logger_1.default.debug(ctx, 'Updating language for user to %s', newLang);
    await User_1.default.findOneAndUpdate({ _id: ctx.from.id }, {
        language: newLang
    }, { new: true });
    session_1.saveToSession(ctx, 'language', newLang);
    ctx.i18n.locale(newLang);
}
exports.updateLanguage = updateLanguage;
//# sourceMappingURL=../../src/util/language.js.map