"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
function getLanguageKeyboard() {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard([
        m.callbackButton(`English`, JSON.stringify({ a: 'languageChange', p: 'en' }), false),
        m.callbackButton(`Русский`, JSON.stringify({ a: 'languageChange', p: 'ru' }), false)
    ], {}));
}
exports.getLanguageKeyboard = getLanguageKeyboard;
function getAccountConfirmKeyboard(ctx) {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard([
        m.callbackButton(ctx.i18n.t('scenes.start.lets_go'), JSON.stringify({ a: 'confirmAccount' }), false)
    ], {}));
}
exports.getAccountConfirmKeyboard = getAccountConfirmKeyboard;
//# sourceMappingURL=../../../src/controllers/start/helpers.js.map