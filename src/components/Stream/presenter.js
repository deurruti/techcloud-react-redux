import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { CLIENT_ID } from '../../constants/auth'
import { Link } from 'react-router'

class Stream extends Component {

    componentDidUpdate(){


      const audioElement = ReactDOM.findDOMNode(this.refs.audio);
      if (!audioElement) { return; }

      const { activeTrack } = this.props;
      if(activeTrack) {
        audioElement.play();
      }else{
        audioElement.pause();
      }
    }
    //make the button a link to the new router
    //in redux state save the current stream to switch to
    //then the router will go to a new component
    render(){
      const { user, tracks = [], onAuth, onPlay, activeTrack } = this.props;

      return (
        <div>
          <div>
            {
              user ?
                <div>{user.username}</div> :
                <button onClick={onAuth} type="button">Login</button>
            }
          </div>
          <br/>
          <div>
            {
              tracks.map((track, key) => {
                 //console.log(track.origin.description);
                 return (
                   <div className="track" key={key}>
                   {track.track.title}
                   <button onClick={() => onPlay(track)}> Play </button>
                   </div>
                 );
              })
            }
          </div>
          {
            activeTrack ? <audio id="audio" ref="audio" src={`${activeTrack.track.uri}/stream?client_id=${CLIENT_ID}`} controls></audio> :
            null
          }

        </div>
      );
    }
}

Stream.defaultProps = {
  genre: "techno"
};

export default Stream;
