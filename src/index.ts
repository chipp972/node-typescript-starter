import { Bot } from 'bittrex-bot';

const bot = new Bot({
  apikey: process.env.BITTREX_API_KEY,
  apisecret: process.env.BITTREX_API_SECRET,
});

const start = async () => {
  try {
    const balance = await bot.getBalance('ltc');
    console.log(balance);
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

start();
