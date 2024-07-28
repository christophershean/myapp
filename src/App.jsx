import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header'
import Banner from './components/Banner';

//variables
/*
var a = 22;
var a = 100;
console.log(a);

let b = 23;

b = 24;


console.log(b);

const c = 10;

console.log(c);

const chris = (z) => {
    console.log("This is from the chris function with z value " + z);

}

chris(42);


function jackie(x=10, y=11) {
    console.log("This is from the chris function." + x + y);
}

jackie();


const herbert = [10, 20, 30];
console.log(herbert)
*/

const a = () => { console.log( "data "); };


const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner heading={a} />
    </div>
  )
}

export default App