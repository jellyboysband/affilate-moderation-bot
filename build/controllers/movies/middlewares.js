"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exposeMovie(ctx, next) {
    const action = JSON.parse(ctx.callbackQuery.data);
    ctx.movie = ctx.session.movies.find((item) => item._id === action.p);
    return next();
}
exports.exposeMovie = exposeMovie;
//# sourceMappingURL=../../../src/controllers/movies/middlewares.js.map