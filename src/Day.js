import React from 'react';
import "./Day.css";
import classNames from 'classnames'


class Day extends React.Component {
  
  test(){console.log("div selected")}

    render() {
      const dayClasses = classNames('day', this.props.dayEmotion);
      return <div className = {dayClasses} onClick={() => this.test()}>
          <h3> Day</h3>
      </div>
  
    }
  }
  
  export default Day;