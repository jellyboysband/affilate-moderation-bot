"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const asyncWrapper = (fn) => {
    return async function (ctx, next) {
        try {
            return await fn(ctx);
        }
        catch (error) {
            logger_1.default.error(ctx, 'asyncWrapper error, %O', error);
            await ctx.reply(ctx.i18n.t('shared.something_went_wrong'));
            return next();
        }
    };
};
exports.default = asyncWrapper;
//# sourceMappingURL=../../src/util/error-handler.js.map