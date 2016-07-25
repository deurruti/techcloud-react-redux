import * as actionTypes from '../constants/actionTypes';

const initialState = {
	tracks : [],
	activeTrack: null
}

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.TRACKS_SET:
			return setTracks(state,action);
		case actionTypes.ACTIVE_TRACK:
			return setActiveTrack(state,action);
	}
	return state;
}

function setTracks(state,action){
	//same as var tracks = action.tracks ;
	console.log("action is : ", action);

	const { tracks } = action;
	//spreads the elements of state and tracks into the array
	return { ...state, tracks:tracks };
}

function setActiveTrack(state,action){
	const { track } = action;
	return {...state, activeTrack : track};
}
