import React from 'react';
import Calendar from './Calendar';
import Daycard from './Daycard';

const INITIAL_STATE = {
  selectedDay: 0,
  changingColor: "#f17013",
  changingTag: "",
  days: [
    {
     color : "",
     tag : ""
    },
    {
      color : "",
      tag : ""
     },
     {
      color : "",
      tag : ""
     },
     {
      color : "",
      tag : ""
     },
     {
      color : "",
      tag : ""
     },
     {
      color : "",
      tag : ""
     },
     {
      color : "",
      tag : ""
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
      const nextDay = prevState.selectedDay + 1 ;
      const days = prevState.days.map((day, j) => {
        if (j === prevState.selectedDay) {
          return { color: prevState.changingColor, tag: prevState.changingTag };
        } else {
          return day;
        }
      });
      return {
        selectedDay : nextDay,
        days,
      };
    });
  };

  handleChangingColor = (color) => {
    this.setState({ changingColor: color });
  };

  handleChangingTag = (tag) => {
    this.setState({ changingTag: tag });
  };

  onChangeSelectedDay = event => {
    this.setState({ selectedDay: parseInt(event.target.value) });
  };

  onAddItem = () => {
    this.setState(prevState => {
      const days = prevState.days.concat({ color: "", tag: "" });
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
      <Daycard handleChangingColor={this.handleChangingColor} handleChangingTag={this.handleChangingTag} handleUpdate = {this.onUpdateSelectedDay}>
      </Daycard>
    </div>

  }
}

export default App;