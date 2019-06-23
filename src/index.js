import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  // First thing called the very first time this class is first created
  // Way to initialize State
  constructor(props){
    // Calls base/parent class React.Component constructor function
    super(props);

    // Initialize a property of state with a key value pair
    // ONLY TIME we directly assign this.state value
    this.state = { lat: null , errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      // argument number 1 - aka succcess callback
      (position)=> {
        // called setState (a function that is available from extension of parent React.Component Class)
        this.setState({lat: Math.floor(position.coords.latitude)})
      },
      // argument number 2 - error callback
      // if user declines location request or location not available)
      (err) => {
        this.setState( {errorMessage: err.message})
      }
      );

  }

  // React requires render method defined for any React.Component class extension
  // Can be called fequently so dont' put other methods/calls in it
  render (){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(this.state.lat && !this.state.errorMessage){
      return <div> Latitude: {this.state.lat} </div>
    }
    return (
      <div> ...loading</div>
      );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);