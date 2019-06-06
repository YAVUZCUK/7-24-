const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Botunuz olan ${client.user.tag} sunucuya girişti yaptı ve yerine oturdu!`);
});

client.on('message', msg => {
  console.log(`LOG: S:${msg.guild.name} M:${msg.content} Y:${msg.author.tag}`);

  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('as');
  }
  if (msg.content.toLowerCase() === 'merhaba') {
      msg.channel.sendMessage('merhaba cnm');
  }
  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.channel.sendMessage('iyiyim cnm');
  }
  if (msg.content.toLowerCase() === prefix +'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 Adet mesaj silindi efendim!");
  }
  if (msg.content.toLowerCase() === prefix +'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
  }
}

});

client.login(process.env.BOT_TOKEN);
