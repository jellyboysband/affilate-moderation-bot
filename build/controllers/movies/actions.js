"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const logger_1 = require("../../util/logger");
exports.movieAction = async (ctx) => {
    const text = ctx.i18n.t('scenes.movies.chosen_movie', {
        title: ctx.movie.title
    });
    await ctx.editMessageText(`${text}<a href="${ctx.movie.posterUrl}">.</a>`, helpers_1.getMovieControlMenu(ctx));
    await ctx.answerCbQuery();
};
exports.backAction = async (ctx) => {
    await ctx.editMessageText(ctx.i18n.t('scenes.movies.list_of_movies'), helpers_1.getMoviesMenu(ctx.session.movies));
    await ctx.answerCbQuery();
};
exports.deleteAction = async (ctx) => {
    logger_1.default.debug(ctx, 'Removing movie %s from collection', ctx.movie._id);
    const updatedMovieList = await helpers_1.deleteMovieFromObservables(ctx);
    await ctx.editMessageText(ctx.i18n.t('scenes.movies.list_of_movies'), helpers_1.getMoviesMenu(updatedMovieList));
    await ctx.answerCbQuery();
};
//# sourceMappingURL=../../../src/controllers/movies/actions.js.map