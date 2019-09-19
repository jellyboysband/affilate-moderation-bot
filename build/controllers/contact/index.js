"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_i18n_1 = require("telegraf-i18n");
const stage_1 = require("telegraf/stage");
const base_1 = require("telegraf/scenes/base");
const helpers_1 = require("./helpers");
const keyboards_1 = require("../../util/keyboards");
const logger_1 = require("../../util/logger");
const { leave } = stage_1.default;
const contact = new base_1.default('contact');
contact.enter(async (ctx) => {
    logger_1.default.debug(ctx, 'Enters contact scene');
    const { backKeyboard } = keyboards_1.getBackKeyboard(ctx);
    await ctx.reply(ctx.i18n.t('scenes.contact.write_to_the_creator'), backKeyboard);
});
contact.leave(async (ctx) => {
    logger_1.default.debug(ctx, 'Leaves contact scene');
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
});
contact.command('saveme', leave());
contact.hears(telegraf_i18n_1.match('keyboards.back_keyboard.back'), leave());
contact.on('text', async (ctx) => {
    await helpers_1.sendMessage(ctx);
    await ctx.reply(ctx.i18n.t('scenes.contact.message_delivered'));
});
exports.default = contact;
//# sourceMappingURL=../../../src/controllers/contact/index.js.map