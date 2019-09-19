"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const logger_1 = require("../../util/logger");
async function exposeMovie(ctx, next) {
    const movies = await helpers_1.getMovieList(ctx);
    if (!movies) {
        logger_1.default.error(ctx, 'Attempt to pick a movie from the previous message');
        return await ctx.reply(ctx.i18n.t('shared.something_went_wrong'));
    }
    const action = JSON.parse(ctx.callbackQuery.data);
    ctx.movie = movies.find(item => item.id === action.p);
    return next();
}
exports.exposeMovie = exposeMovie;
//# sourceMappingURL=../../../src/controllers/search/middlewares.js.map