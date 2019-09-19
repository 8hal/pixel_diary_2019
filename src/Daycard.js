import React from 'react';
import reactCSS from 'reactcss'
import { SliderPicker } from 'react-color';

const INITIAL_STATE = {
    hexColor:"#aef113",
    tag: ""
}

class Daycard extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE
    }

    daycardDayOutput = (color,ptag) => {
        this.setState({tag : ptag, hexColor: color})
    }

    daycardHandleUpdate = () => {
        this.props.handleUpdate(this.state.hexColor,this.state.tag);
    };

    onChangeTag = (event) => {
        this.setState({ tag: event.target.value });
    }

    handleChange = (color) => {
        this.setState({ hexColor: color.hex })
    };

    render() {
        const styles = reactCSS({
            'default': {
                card: {
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                    background: this.state.hexColor
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
            <div style={styles.card}>
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
                <SliderPicker color={this.state.hexColor} onChange={this.handleChange} />
            </div>
        </div>

    }
}

export default Daycard;