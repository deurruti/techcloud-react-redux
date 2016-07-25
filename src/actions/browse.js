import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes'

function setTracks (tracks,genre){
	return {
		type: actionTypes.TRACKS_SET,
    	tracks,
      genre
	}	
}

function setNextHref(href,paginateGenre){
  return {
    type : actionTypes.SET_NEXT_HREF,
    href,
    paginateGenre
  }
}

function extractTracks(data){

  const tracks = data.map( (entry) => {
    return entry.track;
  });

  //console.log("Techno tracks",tracks);
  return tracks;
}

export const fetchTracksByGenre = (genre,next_href) => (dispatch,getState) => {
        //console.log("GENRE IS: ", genre)
    //inject Client ID into the techno url
    var url = ``; 
		if(genre == "Techno") {
      //https://api-v2.soundcloud.com/charts?genre=soundcloud%3Agenres%3Atechno&query_urn=soundcloud%3Acharts%3A26487a7639e74faeb63f9905e05ba00b&offset=20&kind=trending&limit=20
			url =  next_href || `//api-v2.soundcloud.com/charts?kind=trending&genre=soundcloud%3Agenres%3Atechno&client_id=${CLIENT_ID}&limit=25`;
		}else if(genre  == "Tech House"){
			url =  next_href || `//api.soundcloud.com/search/sounds?linked_partitioning=1&client_id=${CLIENT_ID}&filter.genre=tech+house&limit=30`; 
		}

		fetch(url)
			.then((response) => response.json())
        	.then((data) =>  { 
        		//console.log("Tracks recieved",data.collection);
        		//console.log("Next href" , data.next_href);
            //console.log(genre);
        		if(genre == "Techno"){
        			dispatch(setTracks(extractTracks(data.collection),genre));
              dispatch(setNextHref(data.next_href,genre));
        		}else{
        			dispatch(setTracks(data.collection,genre)); 
              dispatch(setNextHref(data.next_href,genre));
        		}
        		
        });

	}	
