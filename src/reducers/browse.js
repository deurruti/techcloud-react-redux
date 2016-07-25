import * as actionTypes from '../constants/actionTypes'
const initialState = {
	"Techno" : [ ],
	"Tech House": [ ]
}

export function tracks(state = initialState, action){
	switch(action.type){
		case actionTypes.TRACKS_SET: 
			return setTracks(state,action)
		default:
			return state;
	}
}

function setTracks(state,action){
	const { tracks, genre } = action; 

	const obj = {}
	const oldTracks = state[genre] ;
	obj[genre] = [...state[genre],...tracks]

	return Object.assign({},state,obj); 
}