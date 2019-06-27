import React from 'react';
import List from './HogsList'
import Filter from './FilterBar'

class Sidebar extends React.Component {

state = {
    hogs: this.props.hogs
}


greasedPigsOnly = (e) => {
  if (this.state.hogs.length === this.props.hogs.length) {
    let newHogs = this.state.hogs.filter(hog => {
      return hog.greased === true
    })
    this.setState({hogs: newHogs})
  } else {
    this.setState({hogs: this.props.hogs})
  }
}

hogsAToZ = (e) => {
  let alphaHogs = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))
  console.log(alphaHogs)
  this.setState({hogs: alphaHogs})
}

hogsOneToAMillion = (e) => {
  let numberHogs = this.state.hogs.sort(function(a,b){
    return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  })
  this.setState({hogs: numberHogs})
}

handleRemove = (event) => {
  const newHogs = this.state.hogs.filter(hog => {
    return hog.name !== event.target.id
  })
  console.log(event.target)
  this.setState ({hogs: newHogs })
}

render() {
  console.log(this.props);
  return (
    <div className="ui grid container">
    <h1>SideBar</h1>
    < Filter
        greasyFilter={this.greasedPigsOnly}
        alphaFilter={this.hogsAToZ}
        numberFilter={this.hogsOneToAMillion}
        />

    < List
    removeHog={this.handleRemove}
    selectHog={this.props.selectHog}
    hogs={this.state.hogs}/>
    </div>
  )
}

}

export default Sidebar
