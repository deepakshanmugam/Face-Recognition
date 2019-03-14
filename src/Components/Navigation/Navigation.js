import React from 'react';
	

const Navigation= ({onroutechange, issignedin})=>{
	if(issignedin){


return(
	<nav style={{display:'flex',justifyContent:'flex-end'}}>
	<p onClick={()=>onroutechange('signout')}className='f3 link dim black underline pa3 pointer'>Sign Out</p>
	</nav>
	);
}
else{
	return(
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
	<p onClick={()=>onroutechange('signin')}className='f3 link dim black underline pa3 pointer'>Sign In</p>
	
	</nav>


		);
	}
}
export default Navigation;