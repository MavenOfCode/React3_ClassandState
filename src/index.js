import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
  // First thing called the very first time this class is first created
  // Constructor function is one way to initialize State
  // good for one -time set
  // Best practice - do not do data loading in the constructor
  // OPTIONAL
  // constructor(props){
  //   // Calls base/parent class React.Component constructor function
  //   super(props);

  //   // Initialize a property of state with a key value pair
  //   // ONLY TIME we directly assign this.state value
  //   this.state = { lat: null , errorMessage: ''};
  // }

  // Alternate clean way to initialize state
  state = {lat :null, errorMessage: ''};

  // OPTIONAL will be called one time at the start of the lifecycle
  // good for one-time setup
  // best practice to do data loading here rather than constructor
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      // argument number 1 - aka succcess callback
      // called setState (a function that is available from extension of parent React.Component Class)
      position => this.setState({lat: Math.floor(position.coords.latitude)}),
      // argument number 2 - error callback
      // if user declines location request or location not available)
      err => this.setState( {errorMessage: err.message})
      );
      console.log("my component is loaded")
  }

  // render is called before this method each time
  // OPTIONAL will be called anytime the component updates itself
  // good place to do addtional data loading for components
  componentDidUpdate(){
    console.log("my component did update")
  }

    // OPTIONAL  could be called if the component was no longer needed
  // componentWillUnmount()

  // React requires render method defined for any React.Component class extension
  // Can be called fequently so dont' put other methods/calls in it
  // NOT OPTIONAL
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