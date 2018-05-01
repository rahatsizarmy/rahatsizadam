const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('《 Komut Listesi 》\n\n')
    .setThumbnail('https://cdn.discordapp.com/avatars/434771960849760258/b546921364b470cc10213d6c3e4ca6c3.png?size=2048')
    .addField('❯  Genel Komutlar','[r,tavsiye](https://discord.gg/yakinda)  •  Yapımcıya tavsiye yollarsınız.\n[r,yardım](https://discord.gg/yakinda)  •  Botun Komutlarını Gösterir.\n[r,avatar](https://discord.gg/yakinda) •  Etiketledğiniz Kişinin Avatarını Verir.\n[r,sunucubilgi](https://discord.gg/yakinda)  ==  Sunucu Hakkında Bilgi Verir.\n[r,ping](https://discord.gg/yakinda) • Botun Pingini Gösterir.\n[r,bilgi](https://discord.gg/yakinda)  • Bot Hakkında Bilgi Verir.\n[r,kullanıcıbilgi](https://discordapp.gg/yakinda) • Etiketlene kişinin hakkında bilgi verir..\n[r,avatar](https://discord.gg/yakinda)  == Etiketlediğiniz Kullanıcının Avatarını Verir.\n[r,istatistik](https://discord.gg/yakinda) == Botun istatistiklerini Göstir.\n[r,davet](https://discord.gg/yakinda) Botun Davet Linkini Atar.')
    .addField('❯  Destek Sistemimiz','`çağrılar` adında bir kanal açın.\n[r,çağır](https://discord.gg/yakinda) •Desteği Çağırır.\n[r,bildir](https://discord.gg/yakinda) •  Bildiriniz Yetkililere Gönderir.')
    .addField('❯  Eğlence Komutları','[r,tokat](https://discord.gg/yakinda) •  İstediğiniz kişiye tokat atar.\n[r,aletim](https://discord.gg/yakinda) •  Aletinizin kaç cm olduğunu ölçer.\n[r,geleceğim](https://discord.gg/yakinda) • Geleceğinizi Söyler.\n[r,sor](https://discord.gg/yakinda) •  Bota Sorular Sorarsınız.\n[r,taş-kağıt-makas](https://discord.gg/yakinda) ==  Bot İle Taş-Kağıt-Makas Oynarsınız.\n[r,günaydın](https://discord.gg/yakinda)  •  Günaydın Gifi Atar.\n[r,yaz](https://discord.gg/yakinda)  •  Bota Yazı Yazdırırsınız.\n[r,merhaba](https://discord.gg/yakinda) • Merhaba Gifi Atar.')
    .addField('❯  Moderatör Komutları','[r,yasakla](https://discord.gg/yakinda) • Birini Sunucudan Yasaklar.\n[r,unban](https://discord.gg/yakinda) •  (İD ile)Birinin Yasağını Açar.\n[r,at](https://discord.gg/yakinda) •   Birini Sunucudan Atar.\n[r,sil](https://discord.gg/yakinda) •  Belirtilen Sayı Kadar Mesaj Siler.\n[r,uyar](https://discord.gg/yakinda)  • Belirtilen Kişiye `@Uyarıldı` Rolü Verir.\n[r,sustur](https://discord.gg/yakinda) • Belirtilen Kişiyi `@Susturulmuş` Rolü Verir.\n[r,duyuru](https://discord.gg/yakinda) •  Güzel Bir Duyuru Görünmü Sağlar.')
    .addField('❯  Admin Komutları','[r,ayrıl](https://discord.gg/yakinda) • Belirtilen sunucudan botu çıkartır.\n[r,eval](https://discord.gg/yakinda) • JS kodu dener.\n[r,unload](https://discord.gg/yakinda) • Bir komutu devre dışıbırakır.\n[r,load](https://discord.gg/yakinda) •  Devredışı bir komutu yeniden başlatır.\n[r,reboot](https://discord.gg/yakinda) •  Botu yenidenbaşlatır.\n[r,reload](https://discord.gg/yakinda) •  Bir komutu yeniden başlatır.\n[r,sunucular](https://discord.gg/yakinda) • Botun bulunduğu sunucuları gösterir.')
    .setFooter('© 2018 Rahatsız Adam|ßatu Murt#7406 tarfından yapıldı.')
    return message.channel.sendEmbed(embed)

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
