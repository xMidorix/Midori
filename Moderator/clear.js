module.exports = {
  name:"clear",
  code:` Successfully deleted $message[1] messages
 $wait[1s]
 $clear[$message[1]
 $onlyIf[$message[1]>=0;I can't delete 0 messages]
 $onlyIf[$message[1]<=10000;I can't purge up to 10000 messages]
 $onlyIf[$isNumber[$message[1]]==true;Hey you need to specify how many messages you want me to purge with a valid number]
 $onlyPerms[managemessages;You don't have \`MANAGE MESSAGES\`]
 $onlyBotPerms[managemessages;I don't have \`MANAGE MESSAGES\` permission]

$suppressErrors[An error has occured]`
}