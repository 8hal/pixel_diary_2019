import React from 'react';
import Calendar from './Calendar';
import Daycard from './Daycard';

const INITIAL_STATE = {
  selectedDay: 0,
  days: [
    {
      color: "#aef113",
      tag: ""
    },
    {
      color: "#aef113",
      tag: ""
    },
    {
      color: "#aef113",
      tag: ""
    },
    {
      color: "#aef113",
      tag: ""
    },
    {
      color: "#aef113",
      tag: ""
    },
    {
      color: "#aef113",
      tag: ""
    },
    {
      color: "#aef113",
      tag: ""
    },
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.daycardElement = React.createRef();
  }

  handleSelectedDay = (index) => { 
    this.daycardElement.current.daycardDayOutput(this.state.days[index].color,this.state.days[index].tag);
    this.setState({ 
      selectedDay: index
    });
 }

  onUpdateSelectedDay = (changingColor,changingTag) => {
    this.setState(prevState => {
      const days = prevState.days.map((day, j) => {
        if (j === prevState.selectedDay) {
          return { color: changingColor, tag: changingTag };
        } else {
          return day;
        }
      });
      return {
        days,
      };
    });
    this.handleSelectedDay(this.state.selectedDay + 1);
  };

  onChangeSelectedDay = event => {
    this.setState({ selectedDay: parseInt(event.target.value) });
  };

  onAddItem = () => {
    this.setState(prevState => {
      const days = prevState.days.concat({ color: "#aef113", tag: "" });
      return {
        days,
      };
    });
  };

  render() {
    const { days, selectedDay } = this.state;
    console.log("App state:");
    console.log(this.state);
    return <div>
      <button
        type="button"
        onClick={this.onAddItem}
      >Add a day</button>
      <Calendar userSelectedDay={selectedDay} userDays={days} handleSelectedDay={this.handleSelectedDay} />
      <br />
      <Daycard 
      ref = {this.daycardElement}
      handleUpdate={this.onUpdateSelectedDay}
      daycardDayColor={this.state.dayColor}
      daycardDayTag={this.state.dayTag}
      >
      </Daycard>
    </div>

  }
}

export default App;