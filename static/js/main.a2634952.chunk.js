(window.webpackJsonppixel_diary_2019=window.webpackJsonppixel_diary_2019||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),r=n(1),l=n(2),s=n(4),d=n(3),u=n(5),h=(n(14),n(8)),y=n.n(h),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={index:n.props.dayIndex},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=y()("day",this.props.dayEmotion);return o.a.createElement("div",{className:t,onClick:function(){return e.props.handleSelectedDay(e.state.index)}},o.a.createElement("h3",null," Day ",this.state.index," "))}}]),t}(o.a.Component),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={isLoading:!0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Calendar"),this.props.userDays.map(function(t,n){return o.a.createElement(m,{dayEmotion:t.emotion,handleSelectedDay:e.props.handleSelectedDay,dayIndex:n})}))}}]),t}(o.a.Component),g={selectedDay:0,changingEmotion:"",days:[{emotion:"neutral"}]},E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleSelectedDay=function(e){n.setState({selectedDay:e})},n.onUpdateSelectedDay=function(){n.setState(function(e){return{selectedDay:e.selectedDay,changingEmotion:e.changingEmotion,days:e.days.map(function(t,n){return n===e.selectedDay?{emotion:e.changingEmotion}:t})}})},n.onChangeChangingEmotion=function(e){n.setState({changingEmotion:e.target.value})},n.onChangeSelectedDay=function(e){n.setState({selectedDay:parseInt(e.target.value)})},n.onAddItem=function(){n.setState(function(e){var t=e.days.concat({emotion:"neutral"});return{selectedDay:e.selectedDay,changingEmotion:e.changingEmotion,days:t}})},n.state=g,n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.days;return console.log(e),o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:this.onAddItem},"Add a day"),o.a.createElement(p,{userDays:e,handleSelectedDay:this.handleSelectedDay}),o.a.createElement("br",null),o.a.createElement("label",null,"Input your Day ",this.state.selectedDay," Emotion:",o.a.createElement("input",{type:"text",value:this.state.changingEmotion,onChange:this.onChangeChangingEmotion})),o.a.createElement("button",{type:"button",onClick:this.onUpdateSelectedDay},"Update"))}}]),t}(o.a.Component);i.a.render(o.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a2634952.chunk.js.map