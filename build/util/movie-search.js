"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const search_providers_1 = require("./search-providers");
const MOVIE_TTL = 3;
const movieSearchWrapper = (provider) => async (ctx) => {
    const currentYear = new Date().getFullYear();
    const { language } = ctx.session;
    let title = ctx.message.text;
    let year;
    const yearSearchResult = ctx.message.text.match(/\[[1,2][0-9]{3}]$/g);
    if (yearSearchResult) {
        year = Number(yearSearchResult[0].slice(1, -1));
        title = title.slice(0, -7);
    }
    const rawResult = await provider({
        title,
        year,
        language
    });
    const filteredResult = rawResult.filter(movie => movie.year >= currentYear - MOVIE_TTL);
    logger_1.default.debug(ctx, 'Movie search: params %O, results length %d', { title, year, language }, filteredResult.length);
    return filteredResult;
};
exports.movieSearch = {
    en: movieSearchWrapper(search_providers_1.imdb),
    ru: movieSearchWrapper(search_providers_1.filmopotok)
};
//# sourceMappingURL=../../src/util/movie-search.js.map