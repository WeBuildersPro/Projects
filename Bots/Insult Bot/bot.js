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
  if(message.author.id == 203336935165526017 || message.author.id == 178987431796670465) {
      
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