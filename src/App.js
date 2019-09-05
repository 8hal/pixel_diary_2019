import React from 'react';
import Calendar from './Calendar';


class App extends React.Component {

  state = {
    emotion: "neutral"
  }

  happy = () => {
    this.setState(current => ({ emotion: "happy" }));
  };

  sad = () => {
    this.setState(current => ({ emotion: "sad" }));
  };


  render() {
    const { emotion } = this.state;
    return <div>
      <Calendar dayEmotion = {emotion} />
      <button style={{ backgroundColor: "pink" }} onClick={this.happy} >Happy</button>
      <button style={{ backgroundColor: "gray" }} onClick={this.sad} >Sad</button>
    </div>

  }
}

export default App;