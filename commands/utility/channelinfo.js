module.exports = {
    description: 'Afficher les informations du salon indiqué.',
    type: 'CHAT_INPUT',
    options: [
      { name: 'salon', description: 'Salon', type: 'CHANNEL', required: true }
    ],
    async run({ client, interaction }) {

      const channel = interaction.options.getChannel('salon'); 
      console.log(channel)
      const types = {
        GUILD_TEXT: 'Salon textuel',
        DM: 'Message privé',
        GROUP_DM: 'Groupe privé',
        GUILD_CATEGORY: 'Catégorie',
        GUILD_NEWS: 'Salon des annonce',
        GUILD_NEWS_THREAD: 'Fil d\'un salon d\'annonce',
        GUILD_PUBLIC_THREAD: 'Fil public',
        GUILD_PRIVATE_THREAD: 'Fil privé',
        GUILD_VOICE: 'Salon vocal',
        GUILD_STAGE_VOICE: 'Salon de conférence',
        UNKNOWN: 'Inconnu'
      };

      interaction.reply({
        embeds: [{
          color: client.config.colors.main,
          title: `Information du salon __${channel.name}__`,
          fields: [
              {name: '📑 ID :', value: `\`${channel.id}\``, inline: true},
              {name: '🧭 Type :', value: types[channel.type], inline: true},
              {name: '🔞 NSFW :', value: `${channel.nsfw == true ? 'Oui' : 'Non'}`, inline: true}, 
              {name: '🗓️ date de création :', value: `<t:${Math.floor(channel.createdTimestamp / 1000)}>`, inline: true},
              {name: '📜 Description :', value: channel.topic || 'Aucune description', inline: false}],
          footer: { icon_url: client.user.displayAvatarURL(), text: client.config.footer }
        }]
      });




  

    }
  };