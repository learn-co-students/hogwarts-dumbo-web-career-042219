import React from 'react';

class FilterBar extends React.Component {

render() {
  return (
    <div className="ui eight wide column">
    <h1>Filters List</h1>
    <button onClick={this.props.greasyFilter}>greased filter</button>
    <button onClick={this.props.alphaFilter}>name filter</button>
    <button onClick={this.props.numberFilter}>weight filter</button>
    </div>
  )
}

}

export default FilterBar
