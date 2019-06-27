import React from 'react';
import Image from "../hog-imgs/cherub.jpg"

class HogShow extends React.Component {


  render() {
    return (
      <div className="hogShow">
        <h1>Hog Details</h1>
        <p>Name: {this.props.currentHog.name}</p>
        <p>Specialty: {this.props.currentHog.specialty}</p>
        <p>Greased: {this.props.currentHog.greased.toString()}</p>
        <p>Weight: {this.props.currentHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Highest Medal Achieved: {this.props.currentHog['highest medal achieved']}</p>
          <img src={require(`../hog-imgs/${this.props.currentHog.name.toLowerCase().replace(/ /g, "_")}.jpg`)} alt="pig" />
      </div>
    )
  }


}

export default HogShow
