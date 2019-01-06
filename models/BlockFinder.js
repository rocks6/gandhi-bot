export default class BlockFinder {
    constructor (bot) {
        this.bot = bot
        this.findBlock()
    }
    findBlock () {
        bot.once('spawn', function() {
            bot.findBlock({
              point: bot.entity.position,
              matching: 56,
              maxDistance: 256,
              count: 1,
            }, function(err, blocks) {
              if (err) {
                return bot.chat('Error trying to find Diamond Ore: ' + err);
                bot.quit('quitting');
                return;
              }
              if (blocks.length) {
                bot.chat('I found a Diamond Ore block at ' + blocks[0].position + '.');
                bot.quit('quitting');
                return;
              } else {
                bot.chat("I couldn't find any Diamond Ore blocks within 256.");
                bot.quit('quitting');
                return;
              }
            });
    }
}