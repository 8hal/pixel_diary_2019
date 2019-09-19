import React from 'react';
import Day from './Day';



class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }


  render() {
    console.log("this.props.userDays:")
    console.log(this.props.userDays)
    return <div >
      <h1>Calendar</h1>
      {this.props.userDays.map((day, index) => {
        return <Day daySelectedDay={this.props.userSelectedDay} dayColor={day.color} handleSelectedDay={this.props.handleSelectedDay} dayIndex={index} />
      }
      )
      }
    </div>
  }
}

export default Calendar;