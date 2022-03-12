module.exports = {
    description: 'Afficher les informations de l\'utilisateur indiqué.',
    type: 'CHAT_INPUT',
    options: [
      { name: 'role', description: 'Rôle', type: 'ROLE', required: true}
    ],
    async run({ client, interaction }) {

      const role = interaction.options.getRole('role');
      const frPermissions = {
        ADD_REACTIONS: "Ajouter des réactions",
        ADMINISTRATOR: "Administrateur",
        ATTACH_FILES: "Poster des fichiers",
        BAN_MEMBERS: "Bannir des membres",
        CHANGE_NICKNAME: "Changer son surnom",
        CONNECT: "Se connecter à un salon vocal",
        CREATE_INSTANT_INVITE: "Créer une invitation",
        DEAFEN_MEMBERS: "Rendre sourd des gens en vocal",
        EMBED_LINKS: "Envoyer des liens avec des embeds",
        KICK_MEMBERS: "Éjecter des membres",
        MANAGE_CHANNELS: "Gérer les salons",
        MANAGE_EMOJIS_AND_STICKERS: "Gérer les émojis et les stikers",
        MANAGE_EVENTS: "Gérer les évenements",
        MANAGE_GUILD: "Gérer le serveur",
        MANAGE_MESSAGES: "Gérer les messages",
        MANAGE_NICKNAMES: "Gérer les surnoms",
        MANAGE_ROLES: "Gérer les rôles",
        MANAGE_THREADS: "Gérer les threads",
        MANAGE_WEBHOOKS: "Gérer les webhooks",
        MENTION_EVERYONE: "Mentionner @everyone et @here et tous les autres rôles",
        MODERATE_MEMBERS: "Modérer les membres",
        MOVE_MEMBERS: "Déplacer des membres en appels vocaux",
        MUTE_MEMBERS: "Rendre muet des gens en vocal",
        PRIORITY_SPEAKER: "Avoir la priorité sonore en appels vocaux",
        READ_MESSAGE_HISTORY: "Lire les anciens messages",
        SEND_MESSAGES: "Envoyer des messages",
        SEND_TTS_MESSAGES: "Envoyer des messages TTS",
        SPEAK: "Parler en appel vocal",
        STREAM: "Faire un stream Discord",
        USE_EXTERNAL_EMOJIS: "Utiliser des émojis externes",
        USE_VAD: "Utiliser la détection de voix",
        VIEW_AUDIT_LOG: "Voir les logs du serveur",
        VIEW_CHANNEL: "Voir les salons",
        VIEW_GUILD_INSIGHTS: "Voir les informations du serveur"
    };




  
      interaction.reply({
        embeds: [{
          color: role.color || client.config.colors.main,
          title: `Information du rôle __${role.name}__`,
          fields: [
              {name: '📑 ID :', value: `\`${role.id}\``, inline: true},
              {name: '🎨 Couleur :', value: `\`${role.hexColor}\``, inline: true},
              {name: '🎭 Rôle affiché séparément :', value:`${role.hoist ? 'Oui':'Non'}`, inline: true },
              {name: '🗓️ date de création :', value: `<t:${Math.floor(role.createdTimestamp / 1000)}>`, inline: true},
              {name: '🔔 Mentionable :', value: `${role.mentionable ? 'Oui':'Non'}`, inline: true},
              {name: 'Permissions :', value: `${perms(role.permissions).join(', ')}`}
              
              
          ],
          thumbnail: {url : role.iconURL()},

          footer: { icon_url: client.user.displayAvatarURL(), text: client.config.footer }
        }]
      });

      function perms(permissions){
        const perms = []

        
        
        if(permissions.has('ADMINISTRATOR')){perms.push(frPermissions['ADMINISTRATOR'])}
        if(permissions.has('ATTACH_FILES')){perms.push(frPermissions['ATTACH_FILES'])}
        if(permissions.has('BAN_MEMBERS')){perms.push(frPermissions['BAN_MEMBERS'])}
        if(permissions.has('DEAFEN_MEMBERS')){perms.push(frPermissions['DEAFEN_MEMBERS'])}
        if(permissions.has('KICK_MEMBERS')){perms.push(frPermissions['KICK_MEMBERS'])}
        if(permissions.has('MANAGE_CHANNELS')){perms.push(frPermissions['MANAGE_CHANNELS'])}
        if(permissions.has('MANAGE_EMOJIS_AND_STICKERS')){perms.push(frPermissions['MANAGE_EMOJIS_AND_STICKERS'])}
        if(permissions.has('MANAGE_EVENTS')){perms.push(frPermissions['MANAGE_EVENTS'])}
        if(permissions.has('MANAGE_GUILD')){perms.push(frPermissions['MANAGE_GUILD'])}
        if(permissions.has('MANAGE_MESSAGES')){perms.push(frPermissions['MANAGE_MESSAGES'])}
        if(permissions.has('MANAGE_NICKNAMES')){perms.push(frPermissions['MANAGE_NICKNAMES'])}
        if(permissions.has('MANAGE_ROLES')){perms.push(frPermissions['MANAGE_ROLES'])}
        if(permissions.has('MANAGE_THREADS')){perms.push(frPermissions['MANAGE_THREADS'])}
        if(permissions.has('MANAGE_WEBHOOKS')){perms.push(frPermissions['MANAGE_WEBHOOKS'])}
        if(permissions.has('MOVE_MEMBERS')){perms.push(frPermissions['MOVE_MEMBERS'])}
        if(permissions.has('MUTE_MEMBERS')){perms.push(frPermissions['MUTE_MEMBERS'])}
        if(permissions.has('SEND_MESSAGES')){perms.push(frPermissions['SEND_MESSAGES'])}



        return perms
      }
      
    }
  };