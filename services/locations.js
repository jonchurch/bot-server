'use strict';
module.exports = (function() {
    const Promise = require('bluebird')
    const Rooms = require('../data/rooms')
    const rooms = new Rooms().loadRooms()
    const store = require('../store')
    console.log('Locations excecuting!')

    return {
        roomsList: rooms,
        getRoomDescription: getUserRoomDescription,
        getRoomExits: getRoomExits,
        addItemToRoom: null,
        removeItemFromRoom: null,
        getAt: null, //Return room object from roomList with the supplied id
    }

    function getUserRoomDescription(hash) {
        // store.update(hash, { current_location: 1 })
        let user = store.getState(hash)
        let loc = user.current_location
        return rooms[loc].getDescription()
    }
    function getRoomExits(loc){
        return rooms[loc].getExits()

    }
}());


