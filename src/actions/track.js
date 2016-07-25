import * as actionTypes from '../constants/actionTypes';

export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks: tracks
  };
};

export function playTrack(track){
  return {
    type: actionTypes.ACTIVE_TRACK,
    track
  }
}
