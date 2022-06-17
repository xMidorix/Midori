const aoijs = require("aoi.js")
var fs = require('fs')

const bot = new aoijs.Bot({
  token: "OTE5OTM5NzgzMjE0NjQ5Mzg0.Gs5C7H.tJJKpScXFWp_IaR84kMATS9_GUnMYJCTZL2uTA",
  prefix: "-",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./commands/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }

var reader = fs.readdirSync("./Moderator/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./Moderator/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })

  }



  
  


//Events
bot.onMessage()


bot.command({
  name: "ping",
  code: `
  Pong! $pingms 🏓
  `
});


bot.readyCommand({
  channel: "987017322193649726",
  code: `$title[1;Reboot]
$thumbnail[1;https://media.discordapp.net/attachments/985530272202260531/986976892022300752/midori.png?width=113&height=113]
$description[1;Midori was recently restarted 

Initialized on aoi.js v5.2.0



[𝙐𝙬𝙐 Click Me](https://youtu.be/xjrU3N8M4eo?t=11)]
$image[1;https://lh3.googleusercontent.com/yaaT5_QSTcSQdtdY5KXjLCs6raBxkhMMGWfKSleJcuiwleGXPXhxEKYQXmAf_LN3l5eyI_P-TaEQEyLPjjbX6SQ0h3B7AFhQyTPXLQ=w1400-k]
$footer[1;]$addTimestamp[1;]
$color[1;#fe2c54]`
});



