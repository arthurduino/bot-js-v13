module.exports = {
    description: 'Supprimer un grand nombre de message',
    type: 'CHAT_INPUT',
    options: [
      { name: 'amount', description: 'Nombre de message à supprimer', type: 'INTEGER', required: true }
    ],
    async run({ client, interaction }) {
        if(!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply({content: `Pour utiliser cette commande, vous devez avoir la permssion **GÉRER LES MESSAGES** !`})
        if(!interaction.guild.me.permissions.has('MANAGE_MESSAGE')) return interaction.reply({content: `Je n'ai pas la permission **GÉRER LES MESSAGES** !`})

        let amount = interaction.options.getInteger('amount')

        if(isNaN(amount) || amount < 1) {
            return interaction.reply({content: `**Vous devez préciser une valeur valide entre 1 et 100 !**`, ephemeral: true})
        }
        
        if(parseInt(amount > 99)) {
            return interaction.reply({content: `Je ne peux pas supprimer plus de 99 messages !`, ephemeral: true})
        } else {
            try {
                let { size } = await interaction.channel.bulkDelete(amount)
                await interaction.reply({content: `J'ai supprimé ${size} messages.`, ephemeral: true})
            } catch(e) {
                console.log(e)
                interaction.reply({content: `Je ne peux pas supprimer des messages plus vieux que 14 jours.`, ephemeral: true})
            }
        }     
    }
  };