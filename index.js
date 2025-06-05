const mineflayer = require('mineflayer');

// Tạo bot và kết nối tới server Minecraft
const bot = mineflayer.createBot({
  host: 'Thuatdz123.aternos.me', // memethay bằng IP server
poport: 16925,              // cổng server (mặc định 25565)
  username: 'Thuatdz'       // tên bot (hoặc email nếu là tài khoản Mojang/Microsoft)
});
bot.on('spawn', () => {
  console.log('Bot đã vào server!');
  bot.chat('Xin chào! Tôi là bot 🤖');
});

// Bot phản hồi khi người chơi chat
bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if (message === 'hello') {
    bot.chat(`Chào ${username}!`);
  }

  if (message === 'nhảy') {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 1000);
  }
});
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Bot đang chạy'))
app.listen(3000, () => console.log('Web server khởi động'))