import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyNDI3ODM2OTk3NzE1.X3tJTQ.L3ahCpuLS3PM6fwPrePlgI5ZmEI';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message => {
    if(message.content === 'que onda'){
        message.reply('holangas');
    }
});

client.login(TOKEN_API);