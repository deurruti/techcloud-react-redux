import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from '../actions/track';

function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user
  };
}

export function setHomepageTracks(){
  return function(dispatch){
    SC.initialize({client_id: CLIENT_ID, redirect_uri: REDIRECT_URI});

    SC.connect().then((session) => {
      fetch(`//api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3Atechno&client_id=${CLIENT_ID}&limit=20`)
    })
  }
}

function extractTracks(data){

  const tracks = data.map( (entry) => {
    return entry.track;
  });

  console.log("Techno tracks",tracks);

}

export function auth() {
  return function (dispatch) {
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

    //This works because according to the documentation the connect function returns a session object
    //With the session object we can access the oauth_token

      
      fetch(`//api.soundcloud.com/search/sounds?client_id=${CLIENT_ID}&filter.genre=tech+house`)
        .then((response) => response.json())
        .then((data) =>  { console.log("Tech House tracks",data.collection);  });

      fetch(`//api-v2.soundcloud.com/charts?kind=trending&genre=soundcloud%3Agenres%3Atechno&client_id=${CLIENT_ID}`)
        .then((response) => response.json())
        .then((data) => { console.log(data.collection); extractTracks(data.collection); dispatch(setTracks(data.collection)); });




    SC.connect().then((session) => {
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
        .then((response) => {
          response.json();

        })
        .then((me) => {
          dispatch(setMe(me));
          //dispatch(fetchStream(me, session));
        });
    });
  };
};


function fetchCategoryURL(client_id,genre){
  switch(genre){
  case 'techno':
    return `//api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3Atechno&client_id=${client_id}&limit=20`;
  case 'techhouse':
    return `//api.soundcloud.com/search/sounds?client_id=${client_id}&filter.genre=tech+house&limit=10&linked_partitioning=1`
  default:
    return ``;
  }
}

function fetchStream(me, session) {
  return function (dispatch) {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.collection);
        dispatch(setTracks(data.collection));
      });
  };
}
