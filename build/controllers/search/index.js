"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_i18n_1 = require("telegraf-i18n");
const stage_1 = require("telegraf/stage");
const base_1 = require("telegraf/scenes/base");
const logger_1 = require("../../util/logger");
const session_1 = require("../../util/session");
const helpers_1 = require("./helpers");
const keyboards_1 = require("../../util/keyboards");
const actions_1 = require("./actions");
const middlewares_1 = require("./middlewares");
const { leave } = stage_1.default;
const searcher = new base_1.default('search');
searcher.enter(async (ctx) => {
    logger_1.default.debug(ctx, 'Enter search scene');
    const { backKeyboard } = keyboards_1.getBackKeyboard(ctx);
    await ctx.reply(ctx.i18n.t('scenes.search.welcome_to_search'), backKeyboard);
});
searcher.leave(async (ctx) => {
    logger_1.default.debug(ctx, 'Leaves search scene');
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    session_1.deleteFromSession(ctx, 'movies');
    await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
});
searcher.command('saveme', leave());
searcher.hears(telegraf_i18n_1.match('keyboards.back_keyboard.back'), leave());
searcher.on('text', async (ctx) => {
    session_1.deleteFromSession(ctx, 'movies');
    const movies = await helpers_1.getMovieList(ctx);
    if (!movies || !movies.length) {
        await ctx.reply(ctx.i18n.t('scenes.search.no_movies_found'));
        return;
    }
    await ctx.reply(ctx.i18n.t('scenes.search.list_of_found_movies'), helpers_1.getMoviesMenu(movies));
});
searcher.action(/movie/, middlewares_1.exposeMovie, actions_1.movieAction);
searcher.action(/add/, middlewares_1.exposeMovie, actions_1.addMovieAction);
searcher.action(/back/, actions_1.backAction);
exports.default = searcher;
//# sourceMappingURL=../../../src/controllers/search/index.js.map