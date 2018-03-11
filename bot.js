'use strict';

const
  config = require('./config'),
  telegramBot = require('telegram-bot-api.js').default,
  bot = new telegramBot(config.token, config.botOption)
;

module.exports = bot;
