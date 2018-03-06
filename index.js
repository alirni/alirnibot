(()=>{
  'use strict';

  const
    token = 'xxx',

    chalk = require('chalk'),
    error = chalk.bold.bgRed,
    success = chalk.blue.bold,

    telegram = require('telegram-bot-api.js').default,

    botOption = {
      autoChatActionUploadOnly: true,
      autoUpdate: true,
    },

    bot = new telegram(token, botOption)
  ;

  bot.onMessage(new RegExp('^/start[ ]*$'), async (message) => {
    console.log(success('run start command,'), message.chat);

    try {
      const text = `... سلام ${message.chat.first_name} عزیز خوش آمدید.\n..: www.ramezany.com :..\n\n📌 نمونه کار ها: /portfolio\n\n▪️ تلگرام: @AliRniE\n▪️ ایمیل: aliramezani19.1@gmail.com\n▪️ گیتهاب: https://github.com/alirni\n▪️ اینستاگرام: https://www.instagram.com/alirni/`;
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: text,
      });

      console.log(success('message sent'));
    }
    catch (error) {
      console.log(error('message error:'), error);
    }
  });
})();
