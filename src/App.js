import React from 'react';


class App extends React.Component{
constructor(props){
  super(props);
  console.log("hello");
}

  state = {
  count : 0,
  bgColor : "orange"
}

add = () => {
  this.setState(current => ({bgColor : "pink"}));
 };
minus = () => {
  this.setState(current => ({bgColor : "gray"}));
};
componentDidMount(){
  console.log("component rendered");
}
componentDidUpdate(){
  console.log("component updated");
}
  render(){
    console.log("rendering");
    
return <div>
<div style={{backgroundColor:this.state.bgColor}}>today</div>
<button style={{backgroundColor: "pink"}} onClick = {this.add} >Happy</button>
<button style={{backgroundColor: "gray"}} onClick = {this.minus} >Sad</button>
</div>

  }
}

export default App;
