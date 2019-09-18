import React from 'react';
import Calendar from './Calendar';
import Daycard from './Daycard';

const INITIAL_STATE = {
  selectedDay: 0,
  changingColor: "#f17013",
  days: [
    {
     color : ""
    },
    {
      color : ""
     },
     {
      color : ""
     },
     {
      color : ""
     },
     {
      color : ""
     },
     {
      color : ""
     },
     {
      color : ""
     },
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSelectedDay = (index) => { this.setState({ selectedDay: index }) }

  onUpdateSelectedDay = () => {
    this.setState(prevState => {
      const days = prevState.days.map((day, j) => {
        if (j === prevState.selectedDay) {
          return { color: prevState.changingColor };
        } else {
          return day;
        }
      });
      return {
        days,
      };
    });
  };

  handleChangingColor = (color) => {
    this.setState({ changingColor: color });
  };

  onChangeSelectedDay = event => {
    this.setState({ selectedDay: parseInt(event.target.value) });
  };

  onAddItem = () => {
    this.setState(prevState => {
      const days = prevState.days.concat({ color: "" });
      return {
        days,
      };
    });
  };

  render() {
    const { days,selectedDay } = this.state;
    console.log(this.state);
    return <div>
      <button
        type="button"
        onClick={this.onAddItem}
      >Add a day</button>
      <Calendar userSelectedDay = {selectedDay} userDays={days} handleSelectedDay={this.handleSelectedDay} />
      <br />
      <Daycard handleChangingColor={this.handleChangingColor}>
      </Daycard>
      <button
        type="button"
        onClick={this.onUpdateSelectedDay}
      >Update</button>
    </div>

  }
}

export default App;