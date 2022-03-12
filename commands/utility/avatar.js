module.exports = {
    description: 'Afficher l\'avatar de l\'utilisateur indiqué.',
    type: 'CHAT_INPUT',
    options: [
      { name: 'membre', description: 'Utilisateur', type: 'USER', required: false }
    ],
    async run({ client, interaction }) {

        console.log(interaction)
      const memberOption = interaction.options.getMember('membre'); 
      if(!memberOption){
          member = interaction.user
      } else member = memberOption.user

      avatar = member.displayAvatarURL({size: 4096, dynamic: true})
  
      interaction.reply({
        embeds: [{
          color: client.config.colors.main,
          author: { name: `Avatar de ${member.tag}`, icon_url: avatar },
          description: `[PNG](${member.displayAvatarURL({format: 'png'})}) - [GIF](${member.displayAvatarURL({format: 'gif'})}) - [WEBP](${member.displayAvatarURL({format: 'webp'})})`,
          image: {url: avatar},
          footer: { icon_url: client.user.displayAvatarURL(), text: client.config.footer }
        }]
      });
    }
  };