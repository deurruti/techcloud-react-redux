import React from 'react'
import { Link } from 'react-router'
//Use this component to create a static header or footer
//The first component given to the router will reciever the router as a property
function App(props){
    //console.log(props);
	return (
		<div>
				<header className="nav">
		   <div className="nav-content"> 
		   <div style={{float: "left"}}>
		   <h1> TechCloud </h1> 
			Discover the deep-dark sounds of electronic music 
		   </div>
		   <ul className="nav-links">
			   <li> Browse </li>
			   <li> Labels </li>
			   <li> Radio </li>
		   </ul>   
		   </div>
				</header>
			{props.children}
		</div>
	);

}

export default App;
