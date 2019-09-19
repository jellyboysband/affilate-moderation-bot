"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = async (ctx, next) => {
    const password = ctx.message.text.split(' ')[1];
    if (ctx.from.id === +process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD) {
        return next();
    }
    return ctx.reply('Sorry, you are not an admin :(');
};
//# sourceMappingURL=../../src/middlewares/is-admin.js.map