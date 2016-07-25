import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { StreamContainer } from './browse'
import * as actions from '../../actions/index'

 function getGenreLink(genre){
  	return '/browse' + "?genre=" + genre;
  }


function MenuItem ({pathname, selectedGenre, genre }){
	//if(pathname !== '/browse') { return null; }
	
  return (
  	  <Link to={getGenreLink(genre)} className="some-link"> 
  	  {genre}
  	  </Link>
  	);
}

const genres = [ "Techno" , "Tech House"];

function MenuList ({ selectedGenre, pathname }) {

	return (
		<div className="header-links"> 
		{
			
			genres.map((genre, idx ) => {
				const menuItemProps = { genre, selectedGenre, pathname}; 
				return <MenuItem key={idx} { ... menuItemProps } />
			})
		}
		</div>
		)
}

function Header ({ genre, router }){
	
	 const { location } = router; 
	 const { pathname, query } = location;
	 const next_genre = query.genre || "Techno";
	 //console.log(next_genre);

	return (
			<div className="header">
				<div className="header-content">
					<MenuList selectedGenre={next_genre} pathname={pathname} />
				</div>
				<StreamContainer genre={next_genre}/>
			</div>

		)
}


function mapStateToProps(state,routerState){
	//console.log(state, routerState);
	return {
		genre : routerState.genre,
		router: routerState
	}
}


Header.defaultProps = {
	genre : "techno"
}

const BrowseContainer = connect(mapStateToProps)(Header);

export { 
	Header,
	BrowseContainer
};
