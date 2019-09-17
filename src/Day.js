import React from 'react';
import "./Day.css";
import classNames from 'classnames'
import reactCSS from 'reactcss'



class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.dayIndex,
      selected: false
    }
  }

  render() {
    console.log(this.props.dayColor);
    const styles = reactCSS({
      'default': {
        color: {
          background: this.props.dayColor,
        }
      },
    });
    const dayClasses = classNames('day');
    return <div style = {styles.color} className={dayClasses} onClick={() => this.props.handleSelectedDay(this.state.index)}>
      <h3> Day {this.state.index} </h3>
    </div>

  }
}

export default Day;