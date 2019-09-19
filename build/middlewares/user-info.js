"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
exports.getUserInfo = async (ctx, next) => {
    if (!ctx.session.language) {
        const user = await User_1.default.findById(ctx.from.id);
        if (user) {
            ctx.session.language = user.language;
            ctx.i18n.locale(user.language);
        }
    }
    return next();
};
//# sourceMappingURL=../../src/middlewares/user-info.js.map