module.exports = {
  name:"untimeout",
  code:`$title[1;UnTimeout]
$description[1;<@$message[1]> timeout was removed by <@$authorID>]

$stopTimeout[$message[1]]

$onlyBotPerms[manageserver;I donot have enough permisson to timeout]
$onlyPerms[manageserver;You donot have permission to remove a timeout of a user]

$color[1;#fe2c54]`
}