import React from 'react';
import Calendar from './Calendar';

const INITIAL_STATE = {
  selectedDay: 0,
  changingEmotion: "",
  days: [{ emotion: "neutral" }],
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
      const prevChangingEmotion = prevState.changingEmotion;
      const days = prevState.days.map((day, j) => {
        if (j === prevState.selectedDay) {
          return { emotion: prevState.changingEmotion };
        } else {
          return day;
        }
      });
      return {
        selectedDay: prevSelectedDay,
        changingEmotion: prevChangingEmotion,
        days,
      };
    });
  };

  onChangeChangingEmotion = event => {
    this.setState({ changingEmotion: event.target.value });
  };

  onChangeSelectedDay = event => {
    this.setState({ selectedDay: parseInt(event.target.value) });
  };

  onAddItem = () => {
    this.setState(prevState => {
      const days = prevState.days.concat({ emotion: "neutral" });
      const prevSelectedDay = prevState.selectedDay;
      const prevChangingEmotion = prevState.changingEmotion;
      return {
        selectedDay: prevSelectedDay,
        changingEmotion: prevChangingEmotion,
        days,
      };
    });
  };

  render() {
    const { days } = this.state;
    console.log(days);
    return <div>
      <button
        type="button"
        onClick={this.onAddItem}
      >Add a day</button>
      <Calendar userDays={days} handleSelectedDay={this.handleSelectedDay} />
      <br />
      
      <label>Input your Day {this.state.selectedDay} Emotion:<input
        type="text"
        value={this.state.changingEmotion}
        onChange={this.onChangeChangingEmotion}
      /></label>
      <button
        type="button"
        onClick={this.onUpdateSelectedDay}
      >Update</button>
    </div>

  }
}

export default App;