"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_i18n_1 = require("telegraf-i18n");
const stage_1 = require("telegraf/stage");
const base_1 = require("telegraf/scenes/base");
const helpers_1 = require("./helpers");
const middlewares_1 = require("./middlewares");
const actions_1 = require("./actions");
const User_1 = require("../../models/User");
const session_1 = require("../../util/session");
const keyboards_1 = require("../../util/keyboards");
const logger_1 = require("../../util/logger");
const { leave } = stage_1.default;
const movies = new base_1.default('movies');
movies.enter(async (ctx) => {
    logger_1.default.debug(ctx, 'Enters movies scene');
    const { backKeyboard } = keyboards_1.getBackKeyboard(ctx);
    const user = await User_1.default.findById(ctx.from.id);
    const movies = user.observableMovies;
    session_1.saveToSession(ctx, 'movies', movies);
    if (movies.length) {
        await ctx.reply(ctx.i18n.t('scenes.movies.list_of_movies'), helpers_1.getMoviesMenu(movies));
        await ctx.reply(ctx.i18n.t('scenes.movies.delete_unwanted_movies'), backKeyboard);
    }
    else {
        await ctx.reply(ctx.i18n.t('scenes.movies.no_movies_in_collection'), backKeyboard);
    }
});
movies.leave(async (ctx) => {
    logger_1.default.debug(ctx, 'Leaves movies scene');
    const { mainKeyboard } = keyboards_1.getMainKeyboard(ctx);
    session_1.deleteFromSession(ctx, 'movies');
    await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
});
movies.command('saveme', leave());
movies.hears(telegraf_i18n_1.match('keyboards.back_keyboard.back'), leave());
movies.action(/movie/, middlewares_1.exposeMovie, actions_1.movieAction);
movies.action(/back/, actions_1.backAction);
movies.action(/delete/, middlewares_1.exposeMovie, actions_1.deleteAction);
exports.default = movies;
//# sourceMappingURL=../../../src/controllers/movies/index.js.map