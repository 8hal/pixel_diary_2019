import React from 'react';
import Calendar from './Calendar';
import Daycard from './Daycard';

const INITIAL_STATE = {
  selectedDay: 0,
  changingColor: "",
  days: [
    {
     color : ""
    }
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
      const prevSelectedDay = prevState.selectedDay;
      const prevChangingColor = prevState.changingColor;
      const days = prevState.days.map((day, j) => {
        if (j === prevState.selectedDay) {
          return { color: prevState.changingColor };
        } else {
          return day;
        }
      });
      return {
        selectedDay: prevSelectedDay,
        changingColor: prevChangingColor,
        days,
      };
    });
  };

  handleChangingColor = (color) => {
    this.setState({ changingColor: color });
  }

  onChangeSelectedDay = event => {
    this.setState({ selectedDay: parseInt(event.target.value) });
  };

  onAddItem = () => {
    this.setState(prevState => {
      const days = prevState.days.concat({ color: "" });
      const prevSelectedDay = prevState.selectedDay;
      const prevChangingColor = prevState.changingColor;
      return {
        selectedDay: prevSelectedDay,
        changingColor: prevChangingColor,
        days,
      };
    });
  };

  render() {
    const { days } = this.state;
    console.log(this.state);
    return <div>
      <button
        type="button"
        onClick={this.onAddItem}
      >Add a day</button>
      <Calendar userDays={days} handleSelectedDay={this.handleSelectedDay} />
      <br />
      <button
        type="button"
        onClick={this.onUpdateSelectedDay}
      >Update</button>
      <Daycard handleChangingColor={this.handleChangingColor}/>
    </div>

  }
}

export default App;