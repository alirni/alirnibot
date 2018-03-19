'use strict';

const
chalk = require('chalk'),
error = chalk.bold.bgRed,
success = chalk.blue.bold,

bot = require('./bot'),
text = require('./text.json'),

registerAllCommand = () => {
  bot.onMessage(new RegExp('^/start$'), startCommand);
  bot.onMessage(new RegExp('^/contact$'), contactCommand);
  bot.onMessage(new RegExp('^/portfolio$'), portfolioCommand);
  bot.onMessage(new RegExp('^/programming$'), programmingCommand);
  bot.onMessage(new RegExp('^/logo$'), logoCommand);
  bot.onMessage(new RegExp('^/card$'), cardCommand);
  bot.onMessage(new RegExp('^/web$'), webCommand);

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

contactCommand = async (message) => {
  console.log(success('run contact command,'), message.text);

  try {
    const botMessage = `🌐 www.ramezany.com 🌐\n\n${text.contact}`;

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
    const botMessage = `${text.menu.programming}\n${text.menu.web}\n${text.menu.logo}\n${text.menu.card}\n`;
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

programmingCommand = async (message) => {
  console.log(success('run programming command,'), message.text);
  try {
    const botMessage = '📌 نمونه کار های برنامه نویسی:\n\n1️⃣ https://github.com/alirni?tab=repositories\n\n2️⃣ همین باتی که داری باش کار میکنی نمونه کارمه';
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

logoCommand = async (message) => {
  console.log(success('run logo command,'), message.text);
  try {
    const botMessage = 'در دست ساخت';
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

cardCommand = async (message) => {
  console.log(success('run card command,'), message.text);
  try {
    const botMessage = 'در دست ساخت';
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

webCommand = async (message) => {
  console.log(success('run web command,'), message.text);
  try {
    const botMessage = '📌 نمونه کار های طراحی سایت:\n\n1️⃣ www.ramezany.com\n\n2️⃣ www.shahabclinic.ir';
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
