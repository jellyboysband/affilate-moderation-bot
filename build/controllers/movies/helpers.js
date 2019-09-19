"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const User_1 = require("../../models/User");
const session_1 = require("../../util/session");
function getMoviesMenu(movies) {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard(movies.map(item => [
        m.callbackButton(`(${item.year}) ${item.title}`, JSON.stringify({ a: 'movie', p: item._id }), false)
    ]), {}));
}
exports.getMoviesMenu = getMoviesMenu;
function getMovieControlMenu(ctx) {
    return telegraf_1.Extra.HTML().markup((m) => m.inlineKeyboard([
        m.callbackButton(ctx.i18n.t('scenes.movies.back_button'), JSON.stringify({ a: 'back', p: undefined }), false),
        m.callbackButton(ctx.i18n.t('scenes.movies.delete_button'), JSON.stringify({ a: 'delete', p: ctx.movie._id }), false)
    ], {}));
}
exports.getMovieControlMenu = getMovieControlMenu;
async function deleteMovieFromObservables(ctx) {
    const user = await User_1.default.findOneAndUpdate({ _id: ctx.from.id }, {
        $pull: { observableMovies: ctx.movie._id }
    }, {
        new: true
    }).populate('observableMovies');
    session_1.saveToSession(ctx, 'movies', user.observableMovies);
    return user.observableMovies;
}
exports.deleteMovieFromObservables = deleteMovieFromObservables;
//# sourceMappingURL=../../../src/controllers/movies/helpers.js.map