import React from 'react';
import MyClocks from './MyClocks';
import moment from "moment-timezone";

class AddClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      myTzs: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value === '') {
      alert("Please choose a location.");
      return;
    }
    var newTz = this.state.myTzs.concat(this.state.value)
    this.setState({myTzs: newTz})

    event.preventDefault();
  }
  removeAt(array, index){
    for (var i = index; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    array.length--;
    return array;
  }
  handleDel(myIndex) {
    const newTzs = this.removeAt(this.state.myTzs, myIndex);
    this.setState({ myTzs: newTzs });
  }
  render() {
    let clockList = moment.tz.names().map((timezone, index) =>{
      return <option key={index} value={timezone}>{timezone}</option>
    })
    return(
      <div className="add-clocks">
        <form className="form" onSubmit={this.handleSubmit}>
          <select className="search-box" name="timezones" id="timezones" value={this.state.value} onChange={this.handleChange}>
            <option value='' disabled>Choose a location...</option>
            {clockList}
          </select>
          <input className="btn" type="submit" value="Add Clock"></input>
        </form>
        <MyClocks timezones={this.state.myTzs} delete={this.handleDel}/>
      </div>
    )
  }
}

export default AddClock;
