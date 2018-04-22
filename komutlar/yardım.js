const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  if (!params[0]) {

  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:\n\n***__Linkler__***\n[Destek Sunucum](https://discord.gg/9f82q)\n[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=434771960849760258&scope=bot&permissions=2146958591)');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('= Komut Listesi =','`Hergün Geliştiriliyorum.`')
    .addField('❯  Genel Komutlar','[r,tavsiye](https://discord.gg/yakinda)  ==  Yapımcıya tavsiye yollarsınız.\n[r,yardım](https://discord.gg/yakinda)  ==  Botun Komutlarını Gösterir.\n[r,avatar](https://discord.gg/yakinda) ==  Etiketledğiniz Kişinin Avatarını Verir.\n[r,sunucubilgi](https://discord.gg/yakinda)  ==  Sunucu Hakkında Bilgi Verir.\n[r,ping](https://discord.gg/yakinda) == Botun Pingini Gösterir.\n[r,bilgi](https://discord.gg/yakinda)  == Bot Hakkında Bilgi Verir.\n[r,kullanıcıbilgi](https://discordapp.gg/yakinda) == Etiketlene kişinin hakkında bilgi verir..\n[r,avatar](https://discord.gg/yakinda)  == Etiketlediğiniz Kullanıcının Avatarını Verir.\n[r,istatistik](https://discord.gg/yakinda) == Botun istatistiklerini Göstir.\n[r,davet](https://discord.gg/yakinda) Botun Davet Linkini Atar.')
    .addField('❯  Destek Sistemimiz','`çağrılar` adında bir kanal açın.\n[r,çağır](https://discord.gg/yakinda) == Desteği Çağırır.\n[r,bildir](https://discord.gg/yakinda) ==  Bildiriniz Yetkililere Gönderir.')
    .addField('❯  Eğlence Komutları','[r,sor](https://discord.gg/yakinda) ==  Bota Sorular Sorarsınız.\n[r,taş-kağıt-makas](https://discord.gg/yakinda) ==  Bot İle Taş-Kağıt-Makas Oynarsınız.\n[r,günaydın](https://discord.gg/yakinda)  ==  Günaydın Gifi Atar.\n[r,yaz](https://discord.gg/yakinda)  ==  Bota Yazı Yazdırırsınız.\n[r,merhaba](https://discord.gg/yakinda) == Merhaba Gifi Atar.')
    .addField('❯  Moderasyon Komutları','[r,yasakla](https://discord.gg/yakinda) == Birini Sunucudan Yasaklar.\n[r,unban](https://discord.gg/yakinda) ==  (İD ile)Birinin Yasağını Açar.\n[r,at](https://discord.gg/yakinda)  ==  Birini Sunucudan Atar.\n[r,sil](https://discord.gg/yakinda) ==  Belirtilen Sayı Kadar Mesaj Siler.\n[r,uyar](https://discord.gg/yakinda)  == Belirtilen Kişiye `@Uyarıldı` Rolü Verir.\n[r,sustur](https://discord.gg/yakinda) Belirtilen Kişiyi `@Susturulmuş` Rolü Verir.\n[r,duyuru](https://discord.gg/yakinda) ==  Güzel Bir Duyuru Görünmü Sağlar.')
    .addField('❯  Admin Komutları','`Güvenlik amacıyla burasını görüntüleyemiyorum.`')
    .setFooter('© 2018 Rahatsız Adam|ßatu Murt#7406 tarfından yapıldı.')
    return message.author.sendEmbed(pingozel)
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
