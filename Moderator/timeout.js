// prefixtimeout userid time for timeout time for timeout reason(optional)



module.exports = {
  name:"timeout",
  code:`


$suppressErrors[An error has occured]

$onlyBotPerms[manageserver;I donot have permission to timeout]
$onlyPerms[manageserver;You donot have permission to timeout]

$title[1;Timeout]
$description[1;<@$message[1]> was timeouted by <@$authorID> 

$color[1;#fe2c54]

$timeoutMember[$guildID;$message[1];$message[2];0;$message[4];]

`
}