module.exports = {
    description: 'Afficher les informations de l\'utilisateur indiqué.',
    type: 'CHAT_INPUT',
    async run({ client, interaction }) {
        
        const guild = interaction.guild;
        const channels = guild.channels.cache;
        const emojis = guild.emojis.cache;
        
   //     console.log(emojis)




  
      interaction.reply({
        embeds: [{
          color: client.config.colors.main,
          title: `Information du serveur`,
          fields: [
              {name: '📑 ID :', value: `\`${guild.id}\``, inline: true},
              {name: '🔢 Membres :', value: `- 👨‍🦱 Humains: ${guild.members.cache.filter((m) => !m.user.bot).size}\n- 🤖 Robots: ${guild.members.cache.filter((m) => m.user.bot).size}\n Total: ${guild.memberCount
              }`, inline: true},
              {name: '🔢 Salons :', value: `- 💬 Salon texte: ${channels.filter(channel => channel.type === 'GUILD_TEXT').size}\n- 🔊 Salons vocaux: ${channels.filter(channel => channel.type === 'GUILD_VOICE').size}\n- 📂 Catégories: ${channels.filter(channel => channel.type === 'GUILD_CATEGORY').size}`, inline: true},
              {name: '🗓️ Date de création :', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}>`, inline: true},
              {name: '🗒️ Description :', value: guild.description ? guild.description : 'aucune description', inline: true},
              {name: '👑 Fondateur: ', value: `<@${guild.ownerId}>`, inline: true}           
              
          ],
          thumbnail: {url: guild.iconURL({ dynamic: true })},

          footer: { icon_url: client.user.displayAvatarURL(), text: client.config.footer }
        }]
      });
    }
  };