import React from 'react';
import "./Day.css";

class Day extends React.Component {
    
    render() {
      return <div className={this.props.dayEmotion}>
          <h3> Day</h3>
      </div>
  
    }
  }
  
  export default Day;