import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function Track({ track }){
	console.log("track");
	return (
		<div> {track.title }</div>
	)
}

class Tracks extends React.Component{

	render(){
		console.log(this.props);
		return (
			<div> 
			{

				this.props.tracks.map((track,idx) => {
					return (<Track track={track} key={idx} />);
				})
			}
				
			</div>
		)
	}
}

function mapStateToProps(state){
	const { tracks } = state.tracks;
	return {
		tracks : tracks
	}
}

const TracksList = connect(mapStateToProps)(Tracks);

export { TracksList };