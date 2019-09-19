"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const logger_1 = require("../../util/logger");
const User_1 = require("../../models/User");
const language_1 = require("../../util/language");
const keyboards_1 = require("../../util/keyboards");
const session_1 = require("../../util/session");
exports.languageSettingsAction = async (ctx) => await ctx.editMessageText(ctx.i18n.t('scenes.settings.pick_language'), helpers_1.getLanguageKeyboard());
exports.languageChangeAction = async (ctx) => {
    const langData = JSON.parse(ctx.callbackQuery.data);
    await language_1.updateLanguage(ctx, langData.p);
    const { backKeyboard } = keyboards_1.getBackKeyboard(ctx);
    for (const msg of ctx.session.settingsScene.messagesToDelete) {
        await ctx.telegram.deleteMessage(msg.chatId, msg.messageId);
    }
    session_1.deleteFromSession(ctx, 'settingsScene');
    await helpers_1.sendMessageToBeDeletedLater(ctx, 'scenes.settings.language_changed', helpers_1.getMainKeyboard(ctx));
    await helpers_1.sendMessageToBeDeletedLater(ctx, 'scenes.settings.what_to_change', backKeyboard);
};
exports.accountSummaryAction = async (ctx) => {
    logger_1.default.debug(ctx, 'Checking account summary');
    const user = await User_1.default.findById(ctx.from.id);
    await ctx.editMessageText(ctx.i18n.t('scenes.settings.account_summary', {
        username: user.username,
        id: user._id,
        totalMovies: user.totalMovies,
        version: process.env.npm_package_version
    }), helpers_1.getAccountSummaryKeyboard(ctx));
    await ctx.answerCbQuery();
};
exports.closeAccountSummaryAction = async (ctx) => {
    await ctx.editMessageText(ctx.i18n.t('scenes.settings.what_to_change'), helpers_1.getMainKeyboard(ctx));
    await ctx.answerCbQuery();
};
//# sourceMappingURL=../../../src/controllers/settings/actions.js.map