require('dotenv/config');
const monggose = require('mongoose');
const testShema = require('./../../database/shemas/testing')


module.exports = async (client) => {
  await monggose.connect(process.env.MONGO_URI || '', {
    keepAlive: true

  })


  const guild = client.guilds.cache.get('901476028713668610');

  const command = await guild.commands.set(client.slashs);

  // guild.commands.permissions.set({ fullPermissions });

  client.user.setPresence({ status: client.config.presence.type, activities: [{ name: client.config.presence.status }] });

  console.log(`[${client.user.username}]: I'm ready.`);

  /*setTimeout(async  () => {
    await new testShema({
      message: 'hello world by arthurduino !!!'
    }).save()

    const result =  await testShema.find({})
    console.log(result)
  }, 1000)*/
};