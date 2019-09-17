import React from 'react';
import reactCSS from 'reactcss'
import { SliderPicker } from 'react-color';


class Daycard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
          },
          tag: ""
    }
  }

  onChangeTag = (event) => {
    this.setState({ tag: event.target.value })
  }

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };
  
  handleChangeComplete = (color, event) => {
    this.props.handleChangingColor(color.hex);
  };

  render() {
    const styles = reactCSS({
        'default': {
          color: {
            width: '100%',
            height: '200px',
            borderRadius: '10px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          },
          center:{
                margin: 'auto',
                width: '50%',
                border: '3px solid green',
                padding: '50px',
                textAlign: 'center',
          }
        },
      });

    return <div>
        <div style = {styles.color}>
            <div style = {styles.center}>
            <label>Input Tag:<input
        type="text"
        value={this.state.tag}
        onChange={this.onChangeTag}
      /></label>
            </div>
        </div>
        <SliderPicker color={ this.state.color } onChange={ this.handleChange } onChangeComplete={this.handleChangeComplete }/>
    </div>

  }
}

export default Daycard;