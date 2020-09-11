import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    var { timeInSeconds } = this.props;
    this.state = {
      seconds: timeInSeconds,
    };
  }
  formatTime(timeInSeconds) {
    if (this.state.seconds == 0) {
      clearInterval(this.myInterval);
    }
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  render() {
    return (
      <div className="clock">
        <span className="clock-text">
          <h1>{this.formatTime(this.state.seconds)}</h1>
        </span>
      </div>
    );
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds - 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Clock;
