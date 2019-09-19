"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const release_checker_1 = require("./release-checker");
const logger_1 = require("./logger");
const common_1 = require("./common");
const Movie_1 = require("../models/Movie");
const User_1 = require("../models/User");
const telegram_1 = require("../telegram");
async function checkUnreleasedMovies() {
    logger_1.default.debug(undefined, 'Starting to check unreleased movies');
    const unreleasedMovies = await Movie_1.default.find({ released: false });
    for (const movie of unreleasedMovies) {
        await common_1.sleep(0.5);
        const checkResult = await release_checker_1.releaseChecker[movie.language]({
            id: movie._id,
            title: movie.title,
            year: movie.year
        });
        if (checkResult) {
            logger_1.default.debug(undefined, 'Movie has been released, %O', movie);
            await notifyAndUpdateUsers(movie);
            await Movie_1.default.findOneAndUpdate({
                _id: movie._id
            }, {
                released: false
            }, {
                new: true
            });
        }
    }
}
exports.checkUnreleasedMovies = checkUnreleasedMovies;
async function notifyAndUpdateUsers(movie) {
    const usersToNotify = await User_1.default.find({
        observableMovies: movie._id
    });
    for (const user of usersToNotify) {
        logger_1.default.debug(undefined, 'Notifying user %s about movie %s', user.username, movie.title);
        const message = user.language === 'en'
            ? `🎉 Movie ${movie.title} has been released!`
            : `🎉 Фильм ${movie.title} вышел и доступен на торрентах!`;
        await common_1.sleep(0.5);
        try {
            await telegram_1.default.sendMessage(user._id, message);
        }
        catch (e) {
            logger_1.default.error(undefined, "Can't notify user about released movie, reason: %O", e);
        }
        finally {
            await User_1.default.findOneAndUpdate({
                _id: user._id
            }, {
                $pull: { observableMovies: movie._id },
                $inc: { totalMovies: 1 }
            }, {
                new: true
            });
        }
    }
}
//# sourceMappingURL=../../src/util/notifier.js.map