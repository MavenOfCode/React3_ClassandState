import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // First thing called the very first time this class is first created
  // Way to initialize State
  constructor(props){
    // Calls base/parent class React.Component constructor function
    super(props);

    // Initialize a property of state with a key value pair
    this.state ={ lat: null };
  }

  // React requires render method defined for any React.Component class extension
  render (){
    window.navigator.geolocation.getCurrentPosition(
      // argument number 1 - aka succcess callback
      (position)=> console.log(position),
      // argument number 2 - error callback
      // if user declines location request or location not available)
      (err) => console.log(err)
      );

      return <div> Latitude: </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);