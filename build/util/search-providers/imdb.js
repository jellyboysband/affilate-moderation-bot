"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imdbAPI = require("imdb-api");
const logger_1 = require("../logger");
const IMDB_SEARCH_PARAMS = {
    apiKey: process.env.IMDB_API_KEY,
    timeout: 30000
};
async function imdb(params) {
    let result;
    try {
        result = await imdbAPI.search({ name: params.title, year: params.year }, IMDB_SEARCH_PARAMS);
        return result.results.map(item => ({
            id: item.imdbid,
            title: item.title,
            year: item.year,
            posterUrl: item.poster
        }));
    }
    catch (e) {
        if (e.message && e.message.includes('Movie not found')) {
        }
        else {
            logger_1.default.error(undefined, 'Error occurred during imdb searching for movie %O. %O', params, e);
        }
        return [];
    }
}
exports.imdb = imdb;
//# sourceMappingURL=../../../src/util/search-providers/imdb.js.map