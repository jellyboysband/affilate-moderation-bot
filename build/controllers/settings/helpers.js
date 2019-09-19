"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const lodash_1 = require("lodash");
const session_1 = require("../../util/session");
function getMainKeyboard(ctx) {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard([
        m.callbackButton(ctx.i18n.t('scenes.settings.language_button'), JSON.stringify({ a: 'languageSettings' }), false),
        m.callbackButton(ctx.i18n.t('scenes.settings.account_summary_button'), JSON.stringify({ a: 'accountSummary' }), false)
    ], {}));
}
exports.getMainKeyboard = getMainKeyboard;
function getLanguageKeyboard() {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard([
        m.callbackButton(`English`, JSON.stringify({ a: 'languageChange', p: 'en' }), false),
        m.callbackButton(`Русский`, JSON.stringify({ a: 'languageChange', p: 'ru' }), false)
    ], {}));
}
exports.getLanguageKeyboard = getLanguageKeyboard;
function getAccountSummaryKeyboard(ctx) {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard([
        m.callbackButton(ctx.i18n.t('scenes.settings.back_button'), JSON.stringify({ a: 'closeAccountSummary' }), false)
    ], {}));
}
exports.getAccountSummaryKeyboard = getAccountSummaryKeyboard;
async function sendMessageToBeDeletedLater(ctx, translationKey, extra) {
    ctx.webhookReply = false;
    const message = await ctx.reply(ctx.i18n.t(translationKey), extra);
    const messagesToDelete = lodash_1.get(ctx.session, 'settingsScene.messagesToDelete', []);
    session_1.saveToSession(ctx, 'settingsScene', {
        messagesToDelete: [
            ...messagesToDelete,
            {
                chatId: message.chat.id,
                messageId: message.message_id
            }
        ]
    });
}
exports.sendMessageToBeDeletedLater = sendMessageToBeDeletedLater;
//# sourceMappingURL=../../../src/controllers/settings/helpers.js.map