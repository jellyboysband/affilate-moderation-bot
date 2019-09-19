"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
exports.updateUserTimestamp = async (ctx, next) => {
    await User_1.default.findOneAndUpdate({ _id: ctx.from.id }, { lastActivity: new Date().getTime() }, { new: true });
    return next();
};
//# sourceMappingURL=../../src/middlewares/update-user-timestamp.js.map