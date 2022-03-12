const Client = require('./base/Client');
const config = require('./config.json');
require('./base/Prototypes');
require('dotenv/config');

const client = new Client({ config });

client.login('OTExNTU3NDU1NDc2MDYwMTcx.YZjICQ.EBgcM0BYyncJTgkXRl4s8zsuo-0');

client.loadEvents();
client.loadCommands();
client.loadSelectMenus();
//client.connectDatabase();