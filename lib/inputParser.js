'use strict';

const commands = require('../constants/commands')

class InputParser {
    // commands
    isLook(text) {
        const pattern = /look|examine|l/i

        return text.match(pattern)
    }
    isExit(text) {
        const pattern = /north|east|south|west/i
        return text.match(pattern)
    }

    // testing
    isGreeting(text) {
        const pattern = /hi|sup|hello|yo/i
        return text.match(pattern)
    }

    isHelp(text) {
        const pattern = /help/i
        return text.match(pattern)
    }

}

module.exports = InputParser
