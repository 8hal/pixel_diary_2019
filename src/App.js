import React from 'react';

function FoodLike(Food) {
console.log(Food);
  return <div>
    <h1>I like {Food.name}</h1>
    <img src={Food.image} alt = {Food.name}/>
  </div>
  
}

const FoodList = [
    {
      key : 1,
      name : "kimchi",
      image : "http://lorempixel.com/400/200/food/1/"
    },
    {
      key : 2,
      name : "udon",
      image : "http://lorempixel.com/400/200/food/2/"
    },
    {
      key : 3,
      name : "sushi",
      image : "http://lorempixel.com/400/200/food/3/"

    },
  ]

function App() {
  return <div>
    {FoodList.map(FoodLike)}
    </div>;
}

export default App;
