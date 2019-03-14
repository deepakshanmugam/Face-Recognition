 import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js'
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import FaceRecognize from './Components/FaceRecognize/FaceRecognize';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

    const app  = new Clarifai.App({
      apiKey:'1d56f9dc3de1449c9911acd63ac38bf2'
    });

    const particlesoption= {
    	particles:{
    	line_linked: {
    		shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
        }
    }
    }
    }
            	
             
class App extends Component {
  constructor(){
    super();
    this.state= {
      input: '' , 
      imgUrl:'',
      box:{} ,
      route:'signin',
      issignedin:false
    }
  }
   calculateFace=(data)=>{

 const clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
 const image=document.getElementById('inputimage');
 const width=Number(image.width);
 const height=Number(image.height);
 return {
  leftCol: clarifaiface.left_col*width,
  topRow: clarifaiface.top_row*height,
  rightCol: width-(clarifaiface.right_col*width),
  bottomRow: height-(clarifaiface.bottom_row*height)
 }

  }
  displayFace=(box)=>{
    console.log(box);
    this.setState({box:box});
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  onButtonClick=()=>{
    this.setState({imgUrl:this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
     .then(response => this.displayFace(this.calculateFace(response))) 
      .catch(err => console.log(err));
     }
     onroutechange=(route)=>{
      if(route==='signout'){
        this.setState({issignedin:false})
      }
      else if(route==='home'){
        this.setState({issignedin:true})
      }
      this.setState({route:route});
     }


  render() {
    return (
    	<div className='App'>
    	<Particles className='particles'
              params={particlesoption}
            		
            />
      <Navigation issignedin={this.state.issignedin}onroutechange={this.onroutechange}/>
      {this.state.route==='home'
      ?<div>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
      
      <FaceRecognize imgUrl={this.state.imgUrl} box={this.state.box}/>
      </div>
      :(
       <Signin  onroutechange={this.onroutechange}/>
      


      )
 }
      </div>
      
    );
  }
}

export default App;
