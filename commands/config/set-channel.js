const configShema = require('./../../database/shemas/config')

module.exports = {
    description: 'Séléctionner le salon du starboard',
    type: 'CHAT_INPUT',
    options: [
      { name: 'channel', description: 'Salon', type: 'CHANNEL', required: true }
    ],
    async run({ client, interaction }) {

      const channel = interaction.options.getChannel('channel');
      if(channel.type != 'GUILD_TEXT') return interaction.reply({content: `Veuillez séléctionner un salon textuel valide !`, ephemeral: true})

      /*await new configShema.deleteOne({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`
      })

      await new configShema({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`,
        value: channel.id
      }).save()
      
      await new configShema.updateOne(

      )*/

     /* await new configShema({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`,
        value: channel.id
      }).save()*/

      /*if(await configShema.find({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`
      })) {
        await configShema.updateOne({ 
          server : interaction.guild.id,
          module: `starboard`,
          key: `channel` 
        }, {
          server : interaction.guild.id,
          module: `starboard`,
          key: `channel`,
          value: channel.id
        });
      } else {
        await new configShema({
          server : interaction.guild.id,
          module: `starboard`,
          key: `channel`,
          value: channel.id
        }).save()
      }*/

      
      /*await new configShema({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`,
        value: channel.id
      }).save()

      curValue = await configShema.find({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`
      })
      if(curValue){

      }

      console.log()*/
      
      /*var found = await configShema.find({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`
      })
      console.log(found)
      if(found == []) {
        await configShema.findOneAndUpdate({server : interaction.guild.id, module: `starboard`, key: `channel`}, {value: channel.id})
      } else {
        console.log('not found')
        await new configShema({
          server : interaction.guild.id,
          module: `starboard`,
          key: `channel`,
          value: channel.id
        }).save()
      }*/

      const filter = { server : interaction.guild.id, module: `starboard`, key: `channel` };
      const update = { value: channel.id };
      var found = await configShema.find({
        server : interaction.guild.id,
        module: `starboard`,
        key: `channel`
      })

      if(found == []){
          console.log(found)
        let doc = await configShema.findOneAndReplace(filter, update, {
            returnOriginal: false
          });
      }else {
          console.log(found)
        await new configShema({
            server : interaction.guild.id,
            module: `starboard`,
            key: `channel`,
            value: channel.id
          }).save()

      }
      /*const filter = { server : interaction.guild.id, module: `starboard`, key: `channel` };
      const update = { value: channel.id };
      configShema.findOneAndReplace(filter, update)*/








  
      interaction.reply({
        embeds: [{
          color: client.config.colors.main,
          description: `Le salon <#${channel.id}> est désormais le salon des starboard !`,
          footer: { icon_url: client.user.displayAvatarURL(), text: client.config.footer }
        }]
      });
    }
  };