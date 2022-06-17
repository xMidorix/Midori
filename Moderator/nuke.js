module.exports = {
  name:"nuke",
  code:`
$suppressErrors[An error has occured]

$onlyBotPerms[managechannels;I donot have permission to nuke this channel]
$onlyPerms[ban;you donot have permisson to ban a user

$deleteChannel[$channelID]
$cloneChannel[$channelID;$channelName[$channelID];no]

$title[1;Nuked]
$description[1;<@$authorID> nuked <#$channelID>]
$color[1;#fe2c54]`
 
}