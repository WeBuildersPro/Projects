const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
  console.log('BOT Tarik is now running!');
});

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if(command === "add") {
  	let numArray = args.map(n=> parseInt(n));
  	let total = numArray.reduce( (p, c) => p+c)
  	message.channel.sendMessage(total);
  }

  if(command === "say") {
  	message.channel.sendMessage(args.join(" "));
  } else

  if(command === "ping") {
    message.channel.sendMessage('pong');
  } else

  if(command === "foo") {
  	message.channel.sendMessage("bar");
  }
});

client.login(config.token);