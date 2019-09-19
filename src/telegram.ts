import Agent from 'socks-proxy-agent';

import Telegraf, { Telegram } from 'telegraf';

const telegram = new Telegram(process.env.TELEGRAM_TOKEN, {
  agent: new Agent('socks://35.245.58.129:4444')
});
const bot = new Telegraf(process.env.TELEGRAM_TOKEN, { telegram });
export default { bot, telegram };
