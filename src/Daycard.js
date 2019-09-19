import React from 'react';
import reactCSS from 'reactcss'
import { SliderPicker } from 'react-color';

const INITIAL_STATE = {
    color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    },
    hexColor:"",
    tag: ""
}

class Daycard extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE
    }

    daycardDayOutput = () => {
        this.setState({tag : this.props.daycardDayTag, dayHexColor: this.props.daycardDayColor})
    }

    daycardHandleUpdate = () => {
        this.props.handleUpdate(this.state.hexColor,this.state.tag);
        this.setState(INITIAL_STATE);
    };

    onChangeTag = (event) => {
        this.setState({ tag: event.target.value });
    }

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    handleChangeComplete = (color, event) => {
        this.setState({hexColor:color.hex});
    };

    render() {
        const styles = reactCSS({
            'default': {
                dayColor: {
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                    background: this.props.daycardDayColor,
                },
                color: {
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
                center: {
                    margin: 'auto',
                    width: '50%',
                    padding: '50px',
                    textAlign: 'center',
                },
                update: {
                    background : 'white',
                    width: '30%',
                    border: '1px solid black',
                    textAlign: 'center',
                }
            },
        });

        return <div>
            <div style={styles.color}>
                <div style={styles.center}>
                    <label>Input Tag
                    <br/>
                        <input
                        type="text"
                        value={this.state.tag}
                        onChange={this.onChangeTag}
                    /></label>
                    <button style={styles.update}
                        type="button"
                        onClick={this.daycardHandleUpdate}
                    >Update</button>
                </div>
            </div>
            <SliderPicker color={this.state.color} onChange={this.handleChange} onChangeComplete={this.handleChangeComplete} />
        </div>

    }
}

export default Daycard;