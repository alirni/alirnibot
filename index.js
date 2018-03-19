'use strict';

const
chalk = require('chalk'),
error = chalk.bold.bgRed,
success = chalk.blue.bold,

bot = require('./bot'),
text = require('./text.json'),

registerAllCommand = () => {
  bot.onMessage(new RegExp('^/start$'), startCommand);
  bot.onMessage(new RegExp('^/portfolio$'), portfolioCommand);

  console.log(success('registered all command'));
},

startCommand = async (message) => {
  console.log(success('run start command,'), message.text);

  try {
    const botMessage = `🤖 سلام ${message.chat.first_name} عزیز خوش آمدید.\n\n${text.bio}\n\n🌐 www.ramezany.com 🌐\n\n${text.menu.portfolio}\n\n${text.contact}`;

    await bot.sendMessage({
      chat_id: message.chat.id,
      text: botMessage,
    });

    console.log(success('message sent'));
  }
  catch (error) {
    console.log(error('message error:'), error);
  }
},

portfolioCommand = async (message) => {
  console.log(success('run portfolio command,'), message.text);
  try {
    const botMessage = `${text.menu.web}\n${text.menu.logo}\n${text.menu.card}\n`;
    await bot.sendMessage({
      chat_id: message.chat.id,
      text: botMessage,
    });

    console.log(success('message sent'));
  }
  catch (error) {
    console.log(error('message error:'), error);
  }
}
;

//main function
(() => {
  registerAllCommand();
})();
