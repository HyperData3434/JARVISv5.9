if(command === 'joke') {
    //async API call using async/await syntax
    let getJoke = async () => {
      //make API call
      let result = await fetch('https://official-joke-api.appspot.com/random_joke')
      //convert to object we can work with
      let json = await result.json()
      return json
    }
    //call function defined above
    let joke = await getJoke()
    
    //have our bot reply using the data returned from our API call
    msg.reply(`
    Here's your joke

    ${joke.setup}

    ${joke.punchline}
    `)
  }