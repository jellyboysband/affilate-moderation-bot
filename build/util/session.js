"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
function saveToSession(ctx, field, data) {
    logger_1.default.debug(ctx, 'Saving %s to session', field);
    ctx.session[field] = data;
}
exports.saveToSession = saveToSession;
function deleteFromSession(ctx, field) {
    logger_1.default.debug(ctx, 'Deleting %s from session', field);
    delete ctx.session[field];
}
exports.deleteFromSession = deleteFromSession;
//# sourceMappingURL=../../src/util/session.js.map