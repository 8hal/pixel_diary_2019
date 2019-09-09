import React from 'react';
import "./Day.css";
import classNames from 'classnames'


class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.dayIndex,
      selected: false
    }
  }

  render() {
    const dayClasses = classNames('day', this.props.dayEmotion);
    return <div className={dayClasses} onClick={() => this.props.handleSelectedDay(this.state.index)}>
      <h3> Day {this.state.index} </h3>
    </div>

  }
}

export default Day;