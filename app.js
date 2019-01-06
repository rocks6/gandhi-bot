/*
 * This example demonstrates how easy it is to create a bot
 * that sends chat messages whenever something interesting happens
 * on the server you are connected to.
 *
 * Below you can find a wide range of different events you can watch
 * but remember to check out the API documentation to find even more!
 *
 * Some events may be commented out because they are very frequent and
 * may flood the chat, feel free to check them out for other purposes though.
 *
 * This bot also replies to some specific chat messages so you can ask him
 * a few informations while you are in game.
 */
const mineflayer = require('mineflayer')
const Vec3 = require('vec3').Vec3

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node chatterbot.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

const bot = mineflayer.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ? process.argv[4] : 'chatterbox',
  password: process.argv[5],
  verbose: true
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  const result = /canSee (-?[0-9]+),(-?[0-9]+),(-?[0-9]+)/.exec(message)
  if (result) {
    canSee(new Vec3(result[1], result[2], result[3]))
    return
  }
  switch (message) {
    case 'pos':
      sayPosition(username)
      break
    case 'quit':
      quit(username)
      break
    default:
      bot.chat("That's nice")
  }

