import React, { Component } from "react";

class HogTile extends Component {
  state = {
    weight: "",
    specialty: "",
    greased: "",
    medal: "",
    hidden: true
  };

  getImg = () => {
    return this.props.hogData.name
      .split(" ")
      .join("_")
      .toLowerCase();
  };

  handleDetails = e => {
    this.setState({
      weight: this.props.hogData.weight,
      specialty: this.props.hogData.specialty,
      greased: this.props.hogData.greased,
      medal: this.props.hogData.medal,
      hidden: !this.state.hidden
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.hogData !== prevProps.hogData) {
      this.setState({
        weight: "",
        specialty: "",
        greased: "",
        medal: "",
        hidden: true
      });
    }
  }

  render() {
    return (
      <li>
        <label className="ui link cards">
          <div className="card">
            <div className="face front">
              <img
                src={require(`../hog-imgs/${this.getImg()}.jpg`)}
                onClick={this.handleDetails}
                alt=""
              ></img>
              <br></br>
              Name: {this.props.hogData.name}
            </div>
            <div className="face back">
              Weight: {!this.state.hidden ? this.state.weight : ""}
              <br></br>
              Specialty: {!this.state.hidden ? this.state.specialty : ""}
              <br></br>
              Greased: {!this.state.hidden ? this.state.greased.toString() : ""}
              <br></br>
              Medal: {!this.state.hidden ? this.state.medal : ""}
            </div>
          </div>
        </label>
      </li>
    );
  }
}

export default HogTile;
