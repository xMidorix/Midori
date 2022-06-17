//usage > prefixkick userid reason(optional)

module.exports = {
  name:"kick",
  code:`$title[1;Kick]
$description[1;<@$message[1]> was kicked by <@$authorID> $kick[$message[1];$guildID;$message[2]]

$onlyBotPerms[kick;I donot have permisson to kick]
$onlyPerms[kick;you donot have permisson to kick a user

$suppressErrors[An error has occured]`
}