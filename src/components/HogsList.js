import React from 'react';
import HogCard from './HogCard'

class HogList extends React.Component {



render() {
  console.log(this.props.hogs);
 const makeCards = this.props.hogs.map((hog) => {
  return  < HogCard key={hog.name} hogInfo={hog} selectHog={this.props.selectHog} removeHog={this.props.removeHog}/>
  })
  return (
    <ul className="ui eight wide column">
    {makeCards}
    </ul>
  )
}

}
// const HogCardLi = this.props.hogs.map((hog) =>{
//   return <li key={hog.name}>hog.name</li>
// })

export default HogList
