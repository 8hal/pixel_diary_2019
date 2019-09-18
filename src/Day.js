import React from 'react';
import "./Day.css";
import classNames from 'classnames'
import reactCSS from 'reactcss'



class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.dayIndex,
      selected: false
    }
  }

  handleOnClick = () => {
    console.log(this.props);
    this.props.handleSelectedDay(this.state.index);
  }

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          background: this.props.dayColor,
        },
        seletedColor: {
          background: this.props.dayColor,
          border: '1px solid black'
        }
      },
    });
    const dayClasses = classNames('day');
    return <div style = {this.state.index == this.props.daySelectedDay ? styles.seletedColor : styles.color  } className={dayClasses} onClick={this.handleOnClick}>
      <h4> {this.state.index}</h4>
    </div>

  }
}

export default Day;