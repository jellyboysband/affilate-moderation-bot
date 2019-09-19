"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = require("../../telegram");
async function sendMessage(ctx) {
    const msg = `From: ${JSON.stringify(ctx.from)}.\n\nMessage: ${ctx.message.text}`;
    await telegram_1.default.sendMessage(process.env.ADMIN_ID, msg);
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=../../../src/controllers/contact/helpers.js.map