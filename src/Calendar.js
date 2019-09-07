import React from 'react';
import Day from './Day';



class Calendar extends React.Component {
  constructor(props){
    super(props);
  }

  state = {
    isLoading : true
  }
  

  render(){
  return <div>
    <h1>Calendar</h1>
    {this.props.userDays.map(day => {
      return <Day dayEmotion={day.emotion} />
    }
    )
    }
  </div>}
}

export default Calendar;