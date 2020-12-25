if(command === 'kick') {
    //verify that user has moderation role
    if(!msg.member.roles.cache.has('Role ID Here')) {
      msg.reply('you dont have permission to kick users')
      // if user doesnt have the role, we return without kicking the user
      return
    }
    //check to make sure a user was actually mentioned, if not we return because bot doesnt know who to kick
    const user = msg.mentions.users.first()
    if(!user) {
      msg.reply('no user mentioned')
      return
    }
    //if user was mentioned, grab their guild member information
    const member = msg.guild.member(user)
    //if they are a member of the server, kick them
    if(member) {
      member.kick('this is a message for the server logs').then(() => {
        msg.reply(`${user.tag} was kicked from the server`)
      })
    }
  }