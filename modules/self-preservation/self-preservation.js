
const mineflayer = require('mineflayer')
const math = require('math')
const nearest = require('nearest')

const HOSTILE_ENTS = [4,5,6,23,27,34,35,36,37,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69]

// this function will check if any hostile entities are in range or are a danger to the bot, if so attack them
function defendSelf (bot) {

}

function scanNearby (bot) {
	//bot.entities is a map of entityId to entity
	stripped = bot.entities.values().filter(ent => ent.type == "mob" & ent.kind == "HOSTILE MOB PLACEHOLDER")

	near = nearestEntity(stripped)
	if (floor(distance(entity.position, bot.position)) < 3) {
		//TODO: check if entity is in sight
	}

	
}