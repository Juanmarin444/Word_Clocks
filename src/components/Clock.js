import React from 'react';
import moment from 'moment-timezone';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().tz(`${this.props.timezone}`).format("h:mm:ss A")
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: moment().tz(`${this.props.timezone}`).format("h:mm:ss A")
    });
  }

  render() {
    return(
      <div className="clock">
        <div className="timezone">
          <p>{this.props.timezone}</p>
        </div>
        <div className="time">
          {this.state.time}
        </div>
        <button onClick={() => this.props.remove(this.props.myIndex)} className="rm_button">Remove Clock</button>
      </div>
    )
  }
}


export default Clock;
