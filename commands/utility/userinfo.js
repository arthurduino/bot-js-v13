module.exports = {
    description: 'Afficher les informations de l\'utilisateur indiqué.',
    type: 'CHAT_INPUT',
    options: [
      { name: 'membre', description: 'Utilisateur', type: 'USER', required: false }
    ],
    async run({ client, interaction }) {

      const memberOption = interaction.options.getMember('membre'); 
      if(!memberOption){
        member = interaction.guild.members.cache.get(interaction.user.id)
      } else member = interaction.guild.members.cache.get(memberOption.id)
      console.log(member)
      const frPermissions = {
        ADD_REACTIONS: "Ajouter des réactions.",
        ADMINISTRATOR: "Administrateur",
        ATTACH_FILES: "Poster des fichiers.",
        BAN_MEMBERS: "Bannir des membres.",
        CHANGE_NICKNAME: "Changer son surnom.",
        CONNECT: "Se connecter à un salon vocal.",
        CREATE_INSTANT_INVITE: "Créer une invitation.",
        DEAFEN_MEMBERS: "Rendre sourd des gens en vocal.",
        EMBED_LINKS: "Envoyer des liens avec des embeds.",
        KICK_MEMBERS: "Éjecter des membres.",
        MANAGE_CHANNELS: "Gérer les salons.",
        MANAGE_EMOJIS: "Gérer les émojis.",
        MANAGE_GUILD: "Gérer le serveur.",
        MANAGE_MESSAGES: "Gérer les messages.",
        MANAGE_NICKNAMES: "Gérer les surnoms.",
        MANAGE_ROLES: "Gérer les rôles.",
        MANAGE_WEBHOOKS: "Gérer les webhooks.",
        MENTION_EVERYONE: "Mentionner @everyone et @here et tous les autres rôles.",
        MOVE_MEMBERS: "Déplacer des membres en appels vocaux.",
        MUTE_MEMBERS: "Rendre muet des gens en vocal.",
        PRIORITY_SPEAKER: "Avoir la priorité sonore en appels vocaux.",
        READ_MESSAGE_HISTORY: "Lire les anciens messages.",
        SEND_MESSAGES: "Envoyer des messages.",
        SEND_TTS_MESSAGES: "Envoyer des messages TTS.",
        SPEAK: "Parler en appel vocal.",
        STREAM: "Faire un stream Discord.",
        USE_EXTERNAL_EMOJIS: "Utiliser des émojis externes.",
        USE_VAD: "Utiliser la détection de voix.",
        VIEW_AUDIT_LOG: "Voir les logs du serveur.",
        VIEW_CHANNEL: "Voir les salons.",
        VIEW_GUILD_INSIGHTS: "Voir les informations du serveur."
    };
    
    console.log(perms(member.permissions))


  
      interaction.reply({
        embeds: [{
          color: client.config.colors.main,
          author: { name: `${member.user.tag}`, icon_url: member.displayAvatarURL({dynamic: true}) },
          fields: [
              {name: 'ID :', value: `\`${member.user.id}\``},
              {name: 'A rejoint le serveur :', value: `<t:${Math.floor(member.guild.joinedTimestamp/1000)}:D>, <t:${Math.floor(member.guild.joinedTimestamp/1000)}:R>`, inline: true},
              {name: 'Création de compte :', value: `<t:${Math.floor(member.user.createdAt/1000)}:D>, <t:${Math.floor(member.user.createdAt/1000)}:R>`, inline: true},
              {name: `Rôles [${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `\`${roles.name}\``).length}]`, value: `${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `<@&${roles.id }>`).join(" **, ** ") || "Aucun Roles"}`}
          ],
          thumbnail: {url: member.displayAvatarURL({dynamic: true})},
          footer: { icon_url: client.user.displayAvatarURL(), text: client.config.footer }
        }]
      });

      function perms(permissions){
        const perms = []

        if(permissions.has('ADD_REACTIONS')){perms.push(frPermissions['ADD_REACTIONS'])}
        if(permissions.has('ADMINISTRATOR')){perms.push(frPermissions['ADMINISTRATOR'])}
        if(permissions.has('ATTACH_FILES')){perms.push(frPermissions['ATTACH_FILES'])}
        if(permissions.has('BAN_MEMBERS')){perms.push(frPermissions['BAN_MEMBERS'])}
        if(permissions.has('CHANGE_NICKNAME')){perms.push(frPermissions['CHANGE_NICKNAME'])}
        if(permissions.has('CONNECT')){perms.push(frPermissions['CONNECT'])}
        if(permissions.has('CREATE_INSTANT_INVITE')){perms.push(frPermissions['CREATE_INSTANT_INVITE'])}
        if(permissions.has('DEAFEN_MEMBERS')){perms.push(frPermissions['DEAFEN_MEMBERS'])}
        if(permissions.has('EMBED_LINKS')){perms.push(frPermissions['EMBED_LINKS'])}
        if(permissions.has('KICK_MEMBERS')){perms.push(frPermissions['KICK_MEMBERS'])}
        if(permissions.has('MANAGE_CHANNELS')){perms.push(frPermissions['MANAGE_CHANNELS'])}
        if(permissions.has('MANAGE_EMOJIS_AND_STICKERS')){perms.push(frPermissions['MANAGE_EMOJIS_AND_STICKERS'])}
        if(permissions.has('MANAGE_GUILD')){perms.push(frPermissions['MANAGE_GUILD'])}
        if(permissions.has('MANAGE_MESSAGES')){perms.push(frPermissions['MANAGE_MESSAGES'])}
        if(permissions.has('MANAGE_NICKNAMES')){perms.push(frPermissions['MANAGE_NICKNAMES'])}
        if(permissions.has('MANAGE_ROLES')){perms.push(frPermissions['MANAGE_ROLES'])}
        if(permissions.has('MANAGE_WEBHOOKS')){perms.push(frPermissions['MANAGE_WEBHOOKS'])}
        if(permissions.has('MENTION_EVERYONE')){perms.push(frPermissions['MENTION_EVERYONE'])}
        if(permissions.has('MOVE_MEMBERS')){perms.push(frPermissions['MOVE_MEMBERS'])}
        if(permissions.has('MUTE_MEMBERS')){perms.push(frPermissions['MUTE_MEMBERS'])}
        if(permissions.has('PRIORITY_SPEAKER')){perms.push(frPermissions['PRIORITY_SPEAKER'])}
        if(permissions.has('READ_MESSAGE_HISTORY')){perms.push(frPermissions['READ_MESSAGE_HISTORY'])}
        if(permissions.has('SEND_MESSAGES')){perms.push(frPermissions['SEND_MESSAGES'])}
        if(permissions.has('SEND_TTS_MESSAGES')){perms.push(frPermissions['SEND_TTS_MESSAGES'])}
        if(permissions.has('SPEAK')){perms.push(frPermissions['SPEAK'])}
        if(permissions.has('STREAM')){perms.push(frPermissions['STREAM'])}
        if(permissions.has('USE_EXTERNAL_EMOJIS')){perms.push(frPermissions['USE_EXTERNAL_EMOJIS'])}
        if(permissions.has('USE_VAD')){perms.push(frPermissions['USE_VAD'])}
        if(permissions.has('VIEW_AUDIT_LOG')){perms.push(frPermissions['VIEW_AUDIT_LOG'])}
        if(permissions.has('VIEW_CHANNEL')){perms.push(frPermissions['VIEW_CHANNEL'])}
        if(permissions.has('USE_VAD')){perms.push(frPermissions['USE_VAD'])}
        if(permissions.has('VIEW_GUILD_INSIGHTS')){perms.push(frPermissions['VIEW_GUILD_INSIGHTS'])}


        return perms
      }
    }
  };