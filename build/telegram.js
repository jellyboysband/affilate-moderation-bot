"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const telegram = new telegraf_1.Telegram(process.env.TELEGRAM_TOKEN, {});
exports.default = telegram;
//# sourceMappingURL=../src/telegram.js.map