"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_i18n_1 = require("telegraf-i18n");
const stage_1 = require("telegraf/stage");
const base_1 = require("telegraf/scenes/base");
const helpers_1 = require("./helpers");
const actions_1 = require("./actions");
const keyboards_1 = require("../../util/keyboards");
const session_1 = require("../../util/session");
const logger_1 = require("../../util/logger");
const { leave } = stage_1.default;
const settings = new base_1.default('settings');
settings.enter(async (ctx) => {
    logger_1.default.debug(ctx, 'Enters settings scene');
    const { backKeyboard } = keyboards_1.getBackKeyboard(ctx);
    session_1.deleteFromSession(ctx, 'settingsScene');
    await helpers_1.sendMessageToBeDeletedLater(ctx, 'scenes.settings.what_to_change', helpers_1.getMainKeyboard(ctx));
    await helpers_1.sendMessageToBeDeletedLater(ctx, 'scenes.settings.settings', backKeyboard);
});
settings.leave(async (ctx) => {
    logger_1.default.debug(ctx, 'Leaves settings scene');
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
    session_1.deleteFromSession(ctx, 'settingsScene');
});
settings.command('saveme', leave());
settings.hears(telegraf_i18n_1.match('keyboards.back_keyboard.back'), leave());
settings.action(/languageSettings/, actions_1.languageSettingsAction);
settings.action(/languageChange/, actions_1.languageChangeAction);
settings.action(/accountSummary/, actions_1.accountSummaryAction);
settings.action(/closeAccountSummary/, actions_1.closeAccountSummaryAction);
exports.default = settings;
//# sourceMappingURL=../../../src/controllers/settings/index.js.map