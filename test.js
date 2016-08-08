'use strict';

const exits = [{direction: "west", location: 1}, {direction: "south", location: 2}]

function filterExits(exit) {

	const result = exits.filter(function(e){
		
			const regex = new RegExp("^" + exit)
		
		
		return e.direction.match(regex)
	})

	console.log(result)
}

input("west")
