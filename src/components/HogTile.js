import React, { Component } from "react";

export default class HogTile extends Component {
  state = {
    specialty: "",
    greased: "",
    medal: ""
  };

  getImg = () => {
    return this.props.hogData.name.split(' ').join("_").toLowerCase()
  }

  handleDetails = () => {
    this.setState({
      specialty: this.props.hogData.specialty,
      greased: this.props.hogData.greased,
      medal: this.props.hogData.medal,
    })
  };

  render() {
    return (
      <li>
        <div>
          <img src={require(`../hog-imgs/${this.getImg()}.jpg`)} onClick={this.handleDetails}></img>
          <br></br>
          Name: {this.props.hogData.name}
          <br></br>
          Weight: {this.props.hogData.weight}
          <br></br>
          Specialty: {this.state.specialty}
          <br></br>
          Greased: {this.state.greased.toString()}
          <br></br>
          Medal: {this.state.medal}
        </div>
          <br></br>
      </li>
    );
  }
}
