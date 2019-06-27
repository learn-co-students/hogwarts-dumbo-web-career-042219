import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogShow from './HogShow'
import Sidebar from './Sidebar'

class App extends Component {

  state = {
    currentHog: hogs[2]
  }



  handleSelectedHog = (event) => {
      const selectedHog = hogs.find( hog => {
        return hog.name === event.currentTarget.id
      })

      this.setState({
        currentHog: selectedHog
      })
  }

  render() {
    return (
      <div className="App">
          < Nav />
        < HogShow currentHog={this.state.currentHog}/>
        < Sidebar
        selectHog={this.handleSelectedHog}
         hogs={hogs}/>

      </div>
    )
  }
}

export default App;
