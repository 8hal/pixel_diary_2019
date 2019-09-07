import React from 'react';
import Calendar from './Calendar';

const INITIAL_STATE = {
  selectedDay: 0,
  changingEmotion : "",
  days: [{emotion:"neutral"}],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onUpdateSelectedDay = () => {
    this.setState(prevState => {
      const prevSelectedDay = prevState.selectedDay;
      console.log("onUpdateSelectedDay:"+prevSelectedDay);
      console.log("onUpdateSelectedDay:"+typeof prevSelectedDay);
      const prevChangingEmotion = prevState.changingEmotion;
      console.log("onUpdateSelectedDay:"+prevChangingEmotion);
      const days = prevState.days.map((day, j) => {
        if (j === prevState.selectedDay) {
          console.log("if");
          return {emotion:prevState.changingEmotion};
        } else {
          console.log("else");
          return day;
        }
      });
      return {
        selectedDay : prevSelectedDay,
        changingEmotion : prevChangingEmotion,
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
      const days = prevState.days.concat({emotion:"neutral"});
      const prevSelectedDay = prevState.selectedDay;
      const prevChangingEmotion = prevState.changingEmotion;
      return {
        selectedDay : prevSelectedDay,
        changingEmotion : prevChangingEmotion,
        days,
      };
    });
  };

  render() {
    const { days } = this.state;
    console.log(days);
    return <div>
      <Calendar userDays={days} />
      <button
          type="button"
          onClick={this.onAddItem}
        >Add</button>
        <br/>
      <input
          type="number"
          value={this.state.selectedDay}
          onChange={this.onChangeSelectedDay}
        />
        <input
          type="text"
          value={this.state.changingEmotion}
          onChange={this.onChangeChangingEmotion}
        />
        <br/>
        <button
          type="button"
          onClick={this.onUpdateSelectedDay}
        >Update</button>
    </div>

  }
}

export default App;