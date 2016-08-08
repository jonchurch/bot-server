'use strict'
// const Promise = require('bluebird')
// const logger = require('../utils/logger')
const store = require('../store')
const LocationService = require('../services/locations')
const handlers = require('../handlers')
    // const PlayerManager = require('../services/playermanager')

class Exit {
    constructor() {}

    tryExit(exit, message, bot) {
        //I need to see if the supplied text, which matched for exits in the parser, is a viable exit from the player's current room
        const user = store.getState(message.from)
        const currentRoomExits = LocationService.getRoomExits(user.current_location)

        const matches = filterExits(exit, currentRoomExits)
        console.log('matches:', matches)
        if (!matches.length) {
            return false
        }
        if (matches.length > 1) {
            return false
        }

        move(matches.pop(), message.from)

        function move(exit, player) {
            const room = LocationService.roomsList[exit.location]
            if (!room) {
                return
            }
            //SMELLY CODE ALERT WOOP WOOP!! Gonna find a better way to move the player around, and force a look on new room enter
            store.update(player, { current_location: exit.location })
            handlers.look.getLookstring(message, bot)
        }

        function filterExits(exit, arr) {
        	// exit = exit[0].toLowerCase
        	console.log('exit lowercase:',exit[0].toLowerCase())
            console.log('filter array:', arr)

            const result = arr.filter(function(e) {

                const regex = new RegExp("^" + exit)

                console.log('regex match:', e.direction.match(regex))

                return e.direction.match(regex)
            })

            console.log('result:', result)
        }

    }
}

module.exports = Exit
