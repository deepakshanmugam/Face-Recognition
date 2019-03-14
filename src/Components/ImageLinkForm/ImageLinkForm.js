import React from 'react';



const ImageLinkForm= ({onInputChange, onButtonClick})=>{
return(
	<div>
	<p className='f3'>{'This Application will detect the face in the picture'}</p>
	<div className='center'>
	<div className='form center pa4 br3 shado-5'>
	<input type='tex' className='f4 pa2 w-70 center'onChange={onInputChange} placeholder='Enter Image URL Here'/>
	<button className='w-30 grow f4 link ph3 pv2  bg-light' onClick={onButtonClick}>Detect</button>
	</div>
	</div>
		<p className='f6'>{'EXAMPLE:https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}</p>

	</div>

	);
}
export default ImageLinkForm;
