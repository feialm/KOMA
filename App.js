import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function fixObject (a, b, c, d, e) {
console.log("Ifix")
console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log(e)

let coursName;
let startDate = b;
let endDate = c;
let hours = d;
let min = e;

console.log(min)


const Course = {coursName: a, startDate: b, endDate: c, hours: d, min: e};
console.log(Course);
 
addtoList(Course);

}


function addtoList(courseToAdd){

  let count = 0;
  const array = [];
  //{array.map(heading, index) => <div key={index}>{heading}</div>)};

}


function App(props) {

const [coursName, setCoursName] = useState({coursName: ''});
const [startDate, setStartDate] = useState({startDate: 0});
const [endDate, setEndDate] = useState({endDate: 0});
const [hours, setHours] = useState({setH: 0});
const [min, setMin] = useState({setMin: 0});






function changeInput(event){
  //console.log(event.target.id);
if(event.target.id === "coursName"){
    setCoursName(event.target.value);
  }
else if(event.target.id === "startDate"){
  setStartDate(event.target.value);
}
else if(event.target.id === "endDate"){
setEndDate(event.target.value);
}
else if(event.target.id === "hours"){
  setHours(event.target.value);
}
else{
    setMin(event.target.value);
}
    
    
  
    //console.log("Innanhar")
   //console.log(coursName);
   // console.log(startDate);
    //<button type="submit">Save</button>
      //<button onClick={}
  } 


  return (

    <div className="App">



      consloe.log("Hej");

      <h1> Form </h1>
      <input id="coursName" type="text" placeholder="Course..." onChange={changeInput} />
      
      <div> <input id="startDate" type="text" placeholder="StartDate..." onChange={changeInput} /> </div>
      <div> <input id="endDate" type="text" placeholder="EndDate..." onChange={changeInput} /> </div>

      <div> <input id="hours" type="text" placeholder="Hours..." onChange={changeInput} /> </div>
      <div> <input id="min" type="text" placeholder="Min..." onChange={changeInput} /> </div>
      

      <button onClick={() => fixObject(coursName,startDate,endDate,hours,min)} className="button"> Save </button>




      





    </div>
  );
}


export default App;
