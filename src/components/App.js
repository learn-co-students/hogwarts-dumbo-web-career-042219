import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredHogs: [],
      allHogs: []
    };
  }

  handleGreasedUp = () => {
    const filtered = hogs.filter(hog => hog.greased === true);

    this.setState({
      filteredHogs: filtered
    });
  };

  handleAZ = () => {
    const nameSorted = hogs.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      filteredHogs: nameSorted
    });
  };

  handleHeaviest = () => {
    const heaviestSorted = hogs.sort((a, b) =>
      b.weight.toString().localeCompare(a.weight.toString())
    );

    this.setState({
      filteredHogs: heaviestSorted
    });
  };

  handleLightest = () => {
    const lightestSorted = hogs.sort((a, b) =>
      a.weight.toString().localeCompare(b.weight.toString())
    );

    this.setState({
      filteredHogs: lightestSorted
    });
  };

  componentDidMount() {
    this.setState({ filteredHogs: hogs, allHogs: hogs });
  }

  render() {
    const allHogs = this.state.filteredHogs.map(hog => {
      return <HogTile hogData={hog} />;
    });

    return (
      <div className="App">
        <Nav />
        <button onClick={this.handleGreasedUp}>Greased Up</button>
        <button onClick={this.handleAZ}>A-Z</button>
        <button onClick={this.handleHeaviest}>Heaviest</button>
        <button onClick={this.handleLightest}>Lightest</button>
        <ul>{allHogs}</ul>
      </div>
    );
  }
}

export default App;
