"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const common_1 = require("../../util/common");
const language_1 = require("../../util/language");
exports.languageChangeAction = async (ctx) => {
    const langData = JSON.parse(ctx.callbackQuery.data);
    await language_1.updateLanguage(ctx, langData.p);
    const accountConfirmKeyboard = helpers_1.getAccountConfirmKeyboard(ctx);
    accountConfirmKeyboard.disable_web_page_preview = true;
    await ctx.reply(ctx.i18n.t('scenes.start.new_account'));
    await common_1.sleep(3);
    await ctx.reply(ctx.i18n.t('scenes.start.bot_description'), accountConfirmKeyboard);
    await ctx.answerCbQuery();
};
//# sourceMappingURL=../../../src/controllers/start/actions.js.map