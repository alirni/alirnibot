'use strict';

const
chalk = require('chalk'),
error = chalk.bold.bgRed,
success = chalk.blue.bold,

bot = require('./bot'),

// bot.onMessage(new RegExp('^/start[ ]*$'), async (message) => {
//   console.log(success('run start command,'), message.chat);

//   try {
//     const
//       bio = 'من علی رمضانی هستم ✋️\n🎓 کارشناسی برنامه نویسی تحت وب دارم و در کنار کار برنامه نویسی به گرافیک هم علاقه دارم.\nدر حوضه‌ی Progressive Web Applications فعالیت دارم و جزء مشارکت کنندگان کامپوننت های Polymer هستم.\nدر حال حاظر در شرکت پیشتازان توسعه به عنوان توسعه دهنده وب مشغولم.',
//       menu = '📌 نمونه کار ها: /portfolio',
//       contact = '▪️ تلگرام: @AliRniE\n▪️ ایمیل: aliramezani19.1@gmail.com\n▪️ گیتهاب: https://github.com/alirni',
//       text = `... سلام ${message.chat.first_name} عزیز خوش آمدید.\n\n${bio}\n\n.: www.ramezany.com :.\n${menu}\n\n${contact}`
//     ;
//     await bot.sendMessage({
//       chat_id: message.chat.id,
//       text: text,
//     });

//     console.log(success('message sent'));
//   }
//   catch (error) {
//     console.log(error('message error:'), error);
//   }
// });

// bot.onMessage(new RegExp('^/portfolio[ ]*$'), async (message) => {
//   console.log(success('run portfolio command,'), message.chat);

//   try {
//     const text = '▪️ طراحی سایت: /web\n▪️ طراحی لوگو: /logo\n▪️ کارت ویزیت: /card';
//     await bot.sendMessage({
//       chat_id: message.chat.id,
//       text: text,
//     });

//     console.log(success('message sent'));
//   }
//   catch (error) {
//     console.log(error('message error:'), error);
//   }
// });

registerAllCommand = () => {
  bot.onMessage(new RegExp('^/start[ ]*$'), startCommand);

  //portfolioCommand();
  console.log(success('registered all command'));
},

startCommand = (message) => {
  console.log(success('run start command,'), message);
}
;

//main function
(() => {
  registerAllCommand();
})();
