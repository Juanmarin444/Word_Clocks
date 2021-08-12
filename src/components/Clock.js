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
    // console.log("YOOOO LOOOK AT ME IM SHOWING KEY!", this.props.myKey);
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
// moment().tz(""America/Los_Angeles"").format("h:mm:ss A");
// <h4>{moment().tz(`${this.props.timezone}`).format("h:mm:ss A")}</h4>

export default Clock;
