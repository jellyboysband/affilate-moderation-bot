"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stage_1 = require("telegraf/stage");
const base_1 = require("telegraf/scenes/base");
const telegraf_i18n_1 = require("telegraf-i18n");
const keyboards_1 = require("../../util/keyboards");
const logger_1 = require("../../util/logger");
const helpers_1 = require("./helpers");
const { leave } = stage_1.default;
const admin = new base_1.default('admin');
admin.enter(async (ctx) => {
    logger_1.default.debug(ctx, 'Enters admin scene');
    const { backKeyboard } = keyboards_1.getBackKeyboard(ctx);
    await ctx.reply('Welcome to Admin stage', backKeyboard);
});
admin.leave(async (ctx) => {
    logger_1.default.debug(ctx, 'Leaves admin scene');
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
});
admin.command('saveme', leave());
admin.hears(telegraf_i18n_1.match('keyboards.back_keyboard.back'), leave());
admin.on('text', async (ctx) => {
    const [type, ...params] = ctx.message.text.split(' | ');
    switch (type) {
        case 'write':
            await helpers_1.write(ctx, params[0], params[1]);
            break;
        case 'stats':
            await helpers_1.getStats(ctx);
            break;
        case 'help':
            await helpers_1.getHelp(ctx);
            break;
        default:
            ctx.reply('Command was not specified');
    }
});
exports.default = admin;
//# sourceMappingURL=../../../src/controllers/admin/index.js.map