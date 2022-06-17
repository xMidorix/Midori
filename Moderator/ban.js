//usage > prefixban userid days reason(optional)


module.exports = {
  name:"ban",
  code:`

$suppressErrors[An error has occured]

$title[1;Ban] 
$description[1;<@$message[1]> was banded by <@$authorID> 

$ban[$guildID;$message[1];$message[2];$message[3]]




$onlyIf[$findUser[$message[1]]!=$clientID;i guess you can't ban myself]
$onlyIf[$findUser[$message[1]]!=$authorID;i cannot ban you]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];You cannot ban a person who has higher role then you or same]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];This user has higher or the same role as me, so i cannot ban him]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;I cannot find this user in this server]
$onlyIf[$findUser[$message[1]]!=$ownerID;An error has occured!]
$onlyIf[$message[1]!=;Mention a id to ban]
$onlyBotPerms[ban;I donot have permisson to ban]
$onlyPerms[ban;you donot have permisson to ban a user]`

}