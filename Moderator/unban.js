// prefixunban userid


module.exports = {
  name:"unban",
  code:`$title[1;Unban]
$description[1;<@$message[1]> was unbanded by <@$authorID> $unban[$guildID;$message[1]]
$color[1;#fe2c54]

$suppressErrors[An error has occured]`
}