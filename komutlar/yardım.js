const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['[❯  Genel Komutlar](https://discord.gg/yakinda)\n\n[r,emojiler](https://discord.gg/yakinda)  •  Sunucunun emojilerini gösterir.\n[r,tavsiye](https://discord.gg/yakinda)  •  Yapımcıya tavsiye yollarsınız.\n[r,yardım](https://discord.gg/yakinda)  •  Botun Komutlarını Gösterir.\n[r,avatar](https://discord.gg/yakinda) •  Etiketledğiniz Kişinin Avatarını Verir.\n[r,sunucubilgi](https://discord.gg/yakinda)  •  Sunucu Hakkında Bilgi Verir.\n[r,ping](https://discord.gg/yakinda) • Botun Pingini Gösterir.\n[r,bilgi](https://discord.gg/yakinda)  • Bot Hakkında Bilgi Verir.\n[r,kullanıcıbilgi](https://discordapp.gg/yakinda) • Etiketlene kişinin hakkında bilgi verir.\n[r,avatar](https://discord.gg/yakinda)  • Etiketlediğiniz Kullanıcının Avatarını Verir.\n[r,istatistik](https://discord.gg/yakinda) • Botun istatistiklerini Göstir.\n[r,davet](https://discord.gg/yakinda)  •   Botun Davet Linkini Atar.','[❯  Sitemlerimiz](https://discord.gg/yakinda)\n\n**❯ _Destek Sistemi_**\n`çağrılar` adında bir kanal açın.\n[r,çağır](https://discord.gg/yakinda) •  Desteği Çağırır.\n[r,bildir](https://discord.gg/yakinda) •  Bildiriniz Yetkililere Gönderir.(En az 2 kelime)\n\n**❯ _Giriş-Çıkış Sistemi_**\n[giriş-çıkış](https://discord.gg/yakinda) adında bir kanal yeterli.','[❯  Eğlence Komutları](https://discord.gg/yakinda)\n\n [r,1vs1](https://discord.gg/yakinda) •  Seçtiğiniz 2 kişiyi savaştırırsınız.\n[r,tokat](https://discord.gg/yakinda) •  İstediğiniz kişiye tokat atar.\n[r,aletim](https://discord.gg/yakinda) •  Aletinizin kaç cm olduğunu ölçer.\n[r,geleceğim](https://discord.gg/yakinda) • Geleceğinizi Söyler.\n[r,sor](https://discord.gg/yakinda) •  Bota Sorular Sorarsınız.\n[r,taş-kağıt-makas](https://discord.gg/yakinda) •  Bot İle Taş-Kağıt-Makas Oynarsınız.\n[r,günaydın](https://discord.gg/yakinda)  •  Günaydın Gifi Atar.\n[r,yaz](https://discord.gg/yakinda)  •  Bota Yazı Yazdırırsınız.\n[r,merhaba](https://discord.gg/yakinda) • Merhaba Gifi Atar.','[❯  Moderatör Komutları](https://discord.gg/yakinda)\n\n[r,kurulum](https://discord.gg/yakinda)  •  `mod-log`,`giriş-çıkış` ve `çağrılar` adlarında kanal açar.\n[r,yasakla](https://discord.gg/yakinda) • Birini Sunucudan Yasaklar.\n[r,unban](https://discord.gg/yakinda) •  (İD ile)Birinin Yasağını Açar.\n[r,at](https://discord.gg/yakinda) •   Birini Sunucudan Atar.\n[r,sil](https://discord.gg/yakinda) •  Belirtilen Sayı Kadar Mesaj Siler.\n[r,uyar](https://discord.gg/yakinda)  • Belirtin kişiyi belirtilen sebeble özelden uyarır.\n[r,sustur](https://discord.gg/yakinda) • Belirtilen Kişiyi `@Susturulmuş` Rolü Verir.\n[r,duyuru](https://discord.gg/yakinda) •  Güzel Bir Duyuru Görünmü Sağlar.\n[r,anket](https://discord.gg/yakinda) • Anket açarsınız','[❯  Admin Komutları](https://discord.gg/yakinda) \n\n [r,on](https://discord.gg/yakinda) • Botun yayıncı modunu istediğiniz şekilde değiştirir.\n[r,off](https://discord.gg/yakinda) • Botun yayıncı modunu eski haline döndürür.\n[r,ayrıl](https://discord.gg/yakinda) • Belirtilen sunucudan botu çıkartır.\n[r,eval](https://discord.gg/yakinda) • JS kodu dener.\n[r,unload](https://discord.gg/yakinda) • Bir komutu devre dışıbırakır.\n[r,load](https://discord.gg/yakinda) •  Devredışı bir komutu yeniden başlatır.\n[r,reboot](https://discord.gg/yakinda) •  Botu yenidenbaşlatır.\n[r,reload](https://discord.gg/yakinda) •  Bir komutu yeniden başlatır.\n[r,sunucular](https://discord.gg/yakinda) • Botun bulunduğu sunucuları gösterir.']; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,client.user.avatarURL)
  .setFooter(`© 2018 Rahatsız Adam|Sayfa ${page} / ${pages.length}`,client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,client.user.avatarURL)
message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 Rahatsız Adam|Sayfa ${page} / ${pages.length}`,client.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 Rahatsız Adam|Sayfa ${page} / ${pages.length}`,client.user.avatarURL)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['h', 'halp', 'help', 'y'],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım'
};
