import React from 'react';
 import Image from "../hog-imgs/cherub.jpg"

class HogCard extends React.Component {

handleRemove = (e) => {
this.props.removeHog
}

render() {
  return (
    <div className="pigTile">
    <li onClick={this.props.selectHog} id={this.props.hogInfo.name}>
    {this.props.hogInfo.name}
    <img src={require(`../hog-imgs/${this.props.hogInfo.name.toLowerCase().replace(/ /g, "_")}.jpg`)} alt="pig" />
    </li>
    <button id={this.props.hogInfo.name} onClick={this.props.removeHog}>X</button>
  </div>
  )
}

}

export default HogCard
