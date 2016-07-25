import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export function paginate(state = initialState ,action){
	switch(action.type){
		case actionTypes.SET_NEXT_HREF: 
			return setNextHref(state,action);
		default: 
			return state; 
	}
}

function setNextHref(state,action){
	const { paginateGenre, href } = action;
	//console.log("Paginate genre",paginateGenre);
	//
	// paginateObj = { paginateGenre } sets the key to that specifically
	// paginateObj = { [paginateGenre] } sets it to what paginateGenre represents 
    const paginateObj = { 
    	[paginateGenre] : href
    }

    //use Object.assign to copy the object into our state
    return Object.assign({}, state, paginateObj);
}