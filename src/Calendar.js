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
  return <div >
    <h1>Calendar</h1>
    {this.props.userDays.map((day,index) => {
      return <Day dayEmotion={day.emotion} handleSelectedDay={this.props.handleSelectedDay} dayIndex={index}/>
    }
    )
    }
  </div>}
}

export default Calendar;