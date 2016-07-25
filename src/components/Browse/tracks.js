import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function replaceUrl(str){
	
	let s = str;
	//console.log("String is", s);
	if(str == null){
		return '';
	}
	//s = s.replace('http:', '');
	//console.log("Replaced http is", s);
	s = s.replace('large','t300x300');
	//console.log("Replaced large is", s);
	return s;
}

function Track({ track }){
	//console.log(track);
	const imageURl = replaceUrl(track.artwork_url);
	//<span className="album-image" style={ {backgroundImage: 'url(' + imageURl + ')' }}></span>
	return (
		<div className="track">
			<div className="track-inner-content">
				<div className="album-artwork">
					<div className="album-image">
						<span className="image" style={ {backgroundImage: 'url(' + imageURl + ')' }}></span>
					</div>
				</div>
				<div className="track-title">{track.title}</div>
			</div>
		</div>
	)
}

class Tracks extends React.Component{

	render(){
		//console.log("HERE??",this.props);
		const { tracks, genre } = this.props;
		return (
			<div className="tracks"> 
				
			{

				tracks[genre].map((track,idx) => {
					return (<Track track={track} key={idx} />);
				})
			}
			</div>
		)
	}
}

function mapStateToProps(state,props){
	return {
		tracks : state.tracks
	}
}

const TracksContainer = connect(mapStateToProps)(Tracks);

export { TracksContainer };