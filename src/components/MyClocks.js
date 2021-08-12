import React from 'react';
import Clock from './Clock';

class MyClocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(myIndex){
    this.props.delete(myIndex);
  }
  render() {
    let tzList = this.props.timezones.map((timezone, index) =>{
      return <Clock key={index} timezone={timezone} remove={this.handleRemove} myIndex={index} />
    })
    return (
      <div className="my-clocks">
        <h2>My Clocks</h2>
        <div className="clock_list">
          {tzList}
        </div>
      </div>
    )
  }
}

export default MyClocks;
