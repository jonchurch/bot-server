'use strict'

// const Promise = require('bluebird')
// const logger = require('../utils/logger')
const store = require('../store')
const LocationService = require('../services/locations')

// const PlayerManager = require('../services/playermanager')

class Look {
    constructor() {}

    getLookString(message, bot) {
        store.getState(message.from)
        // const playerContext =
        //  PlayerManager.getPlayerContext(message.from)
        let textArr = message.text.trim().split(" ")
        let cmd = textArr[0]
        console.log(cmd)

        if (textArr.length === 1){
          getRoomDescription(message, bot)
        }
        // if (textArr[] in playerContext.items)
        // { getItemDescription() }
        function getRoomDescription(message, bot) {
            var str = LocationService.getRoomDescription(message.from)
            bot.sendMessage(message.from, str)
        }
        function getItemDescription(message, bot){
          console.log('Getting Item Description!')
          return
        }
    }
}

module.exports = Look
