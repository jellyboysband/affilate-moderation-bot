"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const session_1 = require("../../util/session");
const logger_1 = require("../../util/logger");
exports.movieAction = async (ctx) => {
    const { title, posterUrl } = ctx.movie;
    const text = ctx.i18n.t('scenes.search.chosen_movie', {
        title
    });
    await ctx.editMessageText(`${text}\n <a href="${posterUrl}">.</a>`, helpers_1.getMovieControlMenu(ctx));
    await ctx.answerCbQuery();
};
exports.addMovieAction = async (ctx) => {
    const canAddResult = await helpers_1.canAddMovie(ctx);
    if (typeof canAddResult === 'string') {
        await ctx.editMessageText(ctx.i18n.t('scenes.search.continue_search', { canAddResult }));
    }
    else {
        logger_1.default.debug(ctx, 'User is adding movie %O to this collection', ctx.movie);
        await helpers_1.addMovieForUser(ctx);
        await ctx.editMessageText(ctx.i18n.t('scenes.search.added_movie_to_lib', {
            title: ctx.movie.title
        }));
    }
    await ctx.answerCbQuery();
    session_1.deleteFromSession(ctx, 'movies');
};
exports.backAction = async (ctx) => {
    const movies = await helpers_1.getMovieList(ctx);
    await ctx.editMessageText(ctx.i18n.t('scenes.search.list_of_found_movies'), helpers_1.getMoviesMenu(movies));
    await ctx.answerCbQuery();
};
//# sourceMappingURL=../../../src/controllers/search/actions.js.map