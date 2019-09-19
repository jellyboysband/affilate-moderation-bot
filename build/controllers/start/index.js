"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stage_1 = require("telegraf/stage");
const base_1 = require("telegraf/scenes/base");
const actions_1 = require("./actions");
const helpers_1 = require("./helpers");
const logger_1 = require("../../util/logger");
const User_1 = require("../../models/User");
const keyboards_1 = require("../../util/keyboards");
const { leave } = stage_1.default;
const start = new base_1.default('start');
start.enter(async (ctx) => {
    const uid = String(ctx.from.id);
    const user = await User_1.default.findById(uid);
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    if (user) {
        await ctx.reply(ctx.i18n.t('scenes.start.welcome_back'), mainKeyboard);
    }
    else {
        logger_1.default.debug(ctx, 'New user has been created');
        const now = new Date().getTime();
        const newUser = new User_1.default({
            _id: uid,
            created: now,
            username: ctx.from.username,
            name: ctx.from.first_name + ' ' + ctx.from.last_name,
            observableMovies: [],
            lastActivity: now,
            totalMovies: 0
        });
        await newUser.save();
        await ctx.reply('Choose language / Выбери язык', helpers_1.getLanguageKeyboard());
    }
});
start.leave(async (ctx) => {
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
});
start.command('saveme', leave());
start.action(/languageChange/, actions_1.languageChangeAction);
start.action(/confirmAccount/, async (ctx) => {
    await ctx.answerCbQuery();
    ctx.scene.leave();
});
exports.default = start;
//# sourceMappingURL=../../../src/controllers/start/index.js.map