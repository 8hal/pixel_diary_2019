import React from 'react';
import Day from './Day';

const days = [
  {
    key : 1,
    date : ""
  },
  {
    key : 2,
    date : ""
  },
  {
    key : 3,
    date : ""
  },
  {
    key : 4,
    date : ""
  },
  ]

function Calendar(props) {
  console.log (props.dayEmotion)
  return <div>
    <h1>Calendar</h1>
    <div >
      <Day dayEmotion={props.dayEmotion} />
      <Day dayEmotion={props.dayEmotion} />
      <Day dayEmotion={props.dayEmotion} />
    </div>
  </div>
  }
  
  export default Calendar;