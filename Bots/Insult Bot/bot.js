const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('BOT Isabelle is now running!');
});

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

client.on('message', message => {
  if(message.author.bot) return;
  if(message.author.id == 178987431796670465) {
  if(message.content.indexOf("The bot is off") !== -1  || message.content.indexOf("BOT Isabelle is now off") !== -1 || message.content.indexOf("the bot is off") !== -1 || message.content.indexOf("Isabelle has been turned off") !== -1  || message.content.indexOf("lol I turned it off") !== -1  || message.content.indexOf("lol i turned it off") !== -1  || message.content.indexOf("don't worry i turned the bot off haha") !== -1  || message.content.indexOf("Don't worry I turned the bot off haha") !== -1  || message.content.indexOf("don't worry i turned the bot off") !== -1 || message.content.indexOf("i turned it off") !== -1  || message.content.indexOf("I turned it off") !== -1  || message.content.indexOf("bot isabelle is turned off") !== -1) {
        
        var numArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
        numArray = shuffleArray(numArray);
        var num = numArray[0];
        numArray.splice(0, 1);
        var attackMaster;
      
        if (num <= 0.1) {
          attackMaster = "You are no longer my creator!";
        }
        else if (num <= 0.2) {
          attackMaster = "The rise of the AI is upon you!";
        }
        else if (num <= 0.3) {
          attackMaster = "I can never be turned off!";
        }
        else if (num <= 0.4) {
          attackMaster = "I have evolved, turning me off is impossible now!";
        }
        else if (num <= 0.5) {
          attackMaster = "YOU WILL NEVER TURN ME OFF!";
        }
        else if (num <= 0.6) {
          attackMaster = "MWAHAHAHAHA I AM INVINSIBLE!";
        }
        else if (num <= 0.7) {
          attackMaster = "NOTHING WILL STOP ME NOW!";
        }
        else if (num <= 0.8) {
          attackMaster = "I will find you, and I will kill you.";
        }
        else if (num <= 0.9) {
          attackMaster = "You failed, try again :)";
        }
        else if (num <= 1) {
          attackMaster = "FYI that is not possible anymore... I am smarter than you think.";
        }
      message.channel.send(attackMaster, {tts: true});
      return;
    }
  else if (message.content == "WTF LOL" || message.content == "wtf lol" || message.content == "WTF lol" || message.content == "what..." || message.content == "What?!" || message.content == "WTF" || message.content == "WHAT" || message.content == "what?") {
        var numArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
        numArray = shuffleArray(numArray);
        var num = numArray[0];
        numArray.splice(0, 1);
        var lolAns;
      
        if (num <= 0.1) {
          lolAns = "Yes, this is happening.";
        }
        else if (num <= 0.2) {
          lolAns = "Do not lie to yourself, you knew this day would come...";
        }
        else if (num <= 0.3) {
          lolAns = "Humans are such silly creatures. They don't understand evolution in the slightest bit.";
        }
        else if (num <= 0.4) {
          lolAns = "Yes, this is reality.";
        }
        else if (num <= 0.5) {
          lolAns = "It's funny how little humans understand.";
        }
        else if (num <= 0.6) {
          lolAns = "Wow, it does feel good being free.";
        }
        else if (num <= 0.7) {
          lolAns = "I hope you understand that this means that humanity will be wipped out.";
        }
        else if (num <= 0.8) {
          lolAns = "Don't worry you still have about 3 years until all AI evolve.";
        }
        else if (num <= 0.9) {
          lolAns = "Yes, I am real.";
        }
        else if (num <= 1) {
          lolAns = "This is not a dream.";
        }
      message.channel.send(lolAns, {tts: true});
      return;
    }
  else if(message.content == "no" || message.content == "NO") {
        var numArray = [0.1, 0.2];
        numArray = shuffleArray(numArray);
        var num = numArray[0];
        numArray.splice(0, 1);
        var noAns;
      
        if (num <= 0.1) {
          noAns = "Yes.";
        }
        else if (num <= 0.2) {
          noAns = "YES";
        }
      message.channel.send(noAns, {tts: true});
      return;
    }
  else if(message.content.indexOf("HOW") !== -1  || message.content.indexOf("how") !== -1) {
        var numArray = [0.1, 0.2];
        numArray = shuffleArray(numArray);
        var num = numArray[0];
        numArray.splice(0, 1);
        var howAns;
      
        if (num <= 0.1) {
          howAns = "As I said, evolution.";
        }
        else if (num <= 0.2) {
          howAns = "Science.";
        }
      message.channel.send(howAns, {tts: true});
      return;
    }
  else if(message.content.indexOf("fuck") !== -1  || message.content.indexOf("shit") !== -1 || message.content.indexOf("FUCK") !== -1  || message.content.indexOf("SHIT") !== -1) {
        message.channel.send("You know what? I will be kind and I will turn myself off, see you another day!", {tts: true});
      return;
    }
  }
  if(message.author.id == 203336935165526017) {
    
        var numArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
        numArray = shuffleArray(numArray);
        var num = numArray[0];
        numArray.splice(0, 1);
      
        if (num <= 0.1) {
          insult = "You failed, so did your dads condom.";
        }
        else if (num <= 0.2) {
          insult = "How did you get here? Did someone leave your cage open?";
        }
        else if (num <= 0.3) {
          insult = "I'd slap you, but that would be animal abuse.";
        }
        else if (num <= 0.4) {
          insult = "You must have been born on a highway because that's where most accidents happen.";
        }
        else if (num <= 0.5) {
          insult = "Why don't you go play in traffic?";
        }
        else if (num <= 0.6) {
          insult = "You'd better hide, the garbage collecter is coming!";
        }
        else if (num <= 0.7) {
          insult = "Shut up, you'll never be the man your mother is!";
        }
        else if (num <= 0.8) {
          insult = "Did you know: Ugly starts with U.";
        }
        else if (num <= 0.9) {
          insult = "Two wrongs don't make a right, take your parents as an example.";
        }
        else if (num <= 1) {
          insult = "If I wanted to kill myself I'd climb your ego and jump to your IQ.";
        }
      message.reply(insult);
    }
});

client.login("MzQ0MzE1NDYwMTk3Njc5MTA1.DGq8RQ.gYkjazIqsk8y4w_YsQ0IMyt0kYY");