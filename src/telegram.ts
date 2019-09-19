import Agent from 'socks-proxy-agent';

import Telegraf, { Telegram } from 'telegraf';

const telegram = new Telegram(process.env.TELEGRAM_TOKEN, {
  agent: new Agent(process.env.PROXY_URL)
});
const bot = new Telegraf(process.env.TELEGRAM_TOKEN, { telegram });
export default { bot, telegram };
