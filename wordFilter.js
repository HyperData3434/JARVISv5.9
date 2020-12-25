//set is outside our event listener to prevent wasted processing re-creating it on every message
let set = new Set(['badword', 'badword2'])
bot.on('message', (msg) => {
  //if author of message is a bot, return. This prevents potential infinite loops
  if(msg.author.bot) {
    return
  }
  //split message into array of individual words
  let wordArray = msg.content.split(' ')
  console.log(wordArray)
  
  //loop through every word and check if it is in our set of banned words
  for(var i = 0; i < wordArray.length; i++) {
    //if the message contains a word in our set, we delete it and send a message telling them why
    if(set.has(wordArray[i])) {
      msg.delete()
      msg.channel.send(`sorry ${msg.author.username}, this is a christian server, no bad words allowed`)
      break
    }
    
  }
})