"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
const logger_1 = require("../logger");
const common_1 = require("../common");
async function ytsReleaseChecker(config) {
    logger_1.default.debug(undefined, 'Checking international release for movie %s', config.id);
    const url = encodeURI(`https://yts.am/api/v2/list_movies.json?query_term=${config.id}`);
    let response;
    try {
        response = await rp.get(url);
    }
    catch (e) {
        logger_1.default.error(undefined, 'Error occurred during checking release for movie %O, %O', config, e);
        return false;
    }
    const movies = JSON.parse(response).data;
    if (!movies.movies)
        return false;
    return movies.movies.some((movie) => {
        const GOOD_QUALITY = ['720p', '1080p'];
        const isGoodQuality = movie.torrents.some((torrent) => GOOD_QUALITY.includes(torrent.quality));
        return (isGoodQuality &&
            movie.imdb_code === config.id &&
            common_1.checkStringSimilarity(movie.title_english, config.title) &&
            common_1.isNumberInRage(movie.year, config.year));
    });
}
exports.ytsReleaseChecker = ytsReleaseChecker;
//# sourceMappingURL=../../../src/util/release-providers/yts.js.map