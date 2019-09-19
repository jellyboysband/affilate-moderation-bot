"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
exports.getBackKeyboard = (ctx) => {
    const backKeyboardBack = ctx.i18n.t('keyboards.back_keyboard.back');
    let backKeyboard = telegraf_1.Markup.keyboard([backKeyboardBack]);
    backKeyboard = backKeyboard.resize().extra();
    return {
        backKeyboard,
        backKeyboardBack
    };
};
exports.getMainKeyboard = (ctx) => {
    const mainKeyboardSearchMovies = ctx.i18n.t('keyboards.main_keyboard.search');
    const mainKeyboardMyCollection = ctx.i18n.t('keyboards.main_keyboard.movies');
    const mainKeyboardSettings = ctx.i18n.t('keyboards.main_keyboard.settings');
    const mainKeyboardAbout = ctx.i18n.t('keyboards.main_keyboard.about');
    const mainKeyboardSupport = ctx.i18n.t('keyboards.main_keyboard.support');
    const mainKeyboardContact = ctx.i18n.t('keyboards.main_keyboard.contact');
    let mainKeyboard = telegraf_1.Markup.keyboard([
        [mainKeyboardSearchMovies, mainKeyboardMyCollection],
        [mainKeyboardSettings, mainKeyboardAbout],
        [mainKeyboardSupport, mainKeyboardContact]
    ]);
    mainKeyboard = mainKeyboard.resize().extra();
    return {
        mainKeyboard,
        mainKeyboardSearchMovies,
        mainKeyboardMyCollection,
        mainKeyboardSettings,
        mainKeyboardAbout,
        mainKeyboardSupport,
        mainKeyboardContact
    };
};
//# sourceMappingURL=../../src/util/keyboards.js.map