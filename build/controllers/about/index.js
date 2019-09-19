"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../util/logger");
const about = async (ctx) => {
    logger_1.default.debug(ctx, 'Opens about section');
    await ctx.reply(ctx.i18n.t('scenes.about.main'), {
        disable_web_page_preview: true
    });
};
exports.default = about;
//# sourceMappingURL=../../../src/controllers/about/index.js.map