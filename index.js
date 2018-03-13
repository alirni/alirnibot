'use strict';

const
chalk = require('chalk'),
error = chalk.bold.bgRed,
success = chalk.blue.bold,

lib = require('./lib'),
bot = require('./bot'),

text = lib.readJsonFile('./text.json'),
menu = lib.readJsonFile('./menu.json'),

registerAllCommand = () => {
  bot.onMessage(new RegExp('^/start[ ]*$'), startCommand);
  bot.onMessage(new RegExp('^/portfolio[ ]*$'), portfolioCommand);

  console.log(success('registered all command'));
},

startCommand = async (message) => {
  console.log(success('run start command,'), message.text);

  try {
    const botMessage = `🤖 سلام ${message.chat.first_name} عزیز خوش آمدید.\n\n${text.bio}\n\n🌐 www.ramezany.com 🌐\n${text.menu}\n\n${text.contact}`;

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
    const botMessage = `${menu.web}\n${menu.logo}\n${menu.card}\n`;
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
