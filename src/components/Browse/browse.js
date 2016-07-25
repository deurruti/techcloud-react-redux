import React from 'react'
import { Link } from 'react-router'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TracksContainer } from './tracks'
import { TracksList } from '../TrackList'

//work on displaying each of the tracks
//next work on displaying the player
class Stream extends React.Component {
    
    constructor(props){
    	super(props);
    	this.fetchTracksByGenre = this.fetchTracksByGenre.bind(this);
    	this.needToFetchTracks = this.needToFetchTracks.bind(this);

    }

    componentDidMount(){
    	this.fetchTracksByGenre();
    }
   

    componentDidUpdate(prevProps){
        //calling it twice because of componenetDidUpdate
        //console.log(!this.needToFetchTracks());
        if(!this.needToFetchTracks()) { return; }
        
        //if (prevProps.genre !== this.props.genre) {
      		console.log("FETCHING TRACKS");
      		this.fetchTracksByGenre();
    	//}
    	
    }

    fetchTracksByGenre(){
    	const { genre, paginate } = this.props;
    	//console.log(genre);
    	//console.log("paginate",paginate[genre]);
    	const next_href = paginate[genre];
    	this.props.fetchTracks(genre,next_href);
    }

    needToFetchTracks(){
    	//make tracks contain tracks for each genre
    	const { tracks, genre } = this.props;
    	//console.log("TRACKS TOO", tracks);
    	return !tracks[genre] || tracks[genre].length < 20;
    }

	render(){

		const { tracks , genre } = this.props;
 
		//In this render method render the tracks but make it's own module.
		return (<div className="tracksList">
		<TracksContainer genre={genre} />
		</div> )
	}
}

function mapStateToProps(state, props){
	//console.log("HERE", state.tracks);
	const { paginate } = state;
	return {
		tracks : state.tracks,
		paginate
	};
}

function mapDispatchToProps(dispatch){
	return {
		fetchTracks : bindActionCreators(actions.fetchTracksByGenre,dispatch)
	};
}

const StreamContainer = connect(mapStateToProps,mapDispatchToProps)(Stream)

export { StreamContainer };