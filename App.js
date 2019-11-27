import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Child from "./Child.js";


//vårt nästa sak är att vi vill försöka skicka vårt course till vårt child så att dem får en props
function Parent(){
  const [localData, setLocalData] = useState(loadData());
  const [redirect, setRedirect] = useState(false);

  function saveData(a){
    window.localStorage.setItem("data", JSON.stringify(a));
    setRedirect(true);
  }
//denna eller funktion gör vi i falla att det är null i localstarage
  function loadData(){
    try {
      const storage = JSON.parse(window.localStorage.getItem("data"));
      console.log(storage);
      return storage || [];
    } catch (e) {
      return [];
    }
  }

  function setData(data){
    setLocalData(data);
    saveData(data);
  }

  function fixObject (a, b, c, d, e) {
console.log("Ifix")
console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log(e)

let name = a;
let startDate = b;
let endDate = c;
let hours = d;
let min = e;

let TotTime = (Number(d)*60) + Number(e);
let g = String(10); //reptime
let f = String(TotTime);
console.log(TotTime)


const Course = {name: a, startDate: b, endDate: c, totTime: f, repTime: g };
console.log(Course);
 
addtoList(Course);
//getCourseName(Course);

}


function addtoList(courseToAdd){

  //count = count + 1;
  localData.push(courseToAdd);
 // console.log("Here´s the array");
 // console.log(courseArray);
  //console.log(courseArray[0]);
 // const array = [];
  //{array.map(heading, index) => <div key={index}>{heading}</div>)};


  setData(localData);

}


function routerApp(){
return(


<Router>
<div>
<li>
  <Link to="/Child">Child</Link>
</li>
</div>



<Switch>
<Route path="/Child" component={Child} />

</Switch>
</Router>);

}

  return(


  <div>

  {redirect === false && 
  <App fixObjectEtikett={fixObject} />
  }
  
  {redirect === true && 
  <Child courses={localData} />
  }
  
  

  </div>

  );





}


//App är form
function App(props) { // props eller inte props??

const [name, setCoursName] = useState({name: ''});
const [startDate, setStartDate] = useState({startDate: 0});
const [endDate, setEndDate] = useState({endDate: 0});
const [hours, setHours] = useState({setH: 0});
const [min, setMin] = useState({setMin: 0});


function changeInput(event){
  //console.log(event.target.id);
if(event.target.id === "name"){
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
    

  } 


  return (

    <div className="App">

      /////////////consloe.log("Hej");

      <h1> Form </h1>
      <input id="name" type="text" placeholder="Course..." onChange={changeInput} />
      
      <div> <input id="startDate" type="text" placeholder="StartDate..." onChange={changeInput} /> </div>
      <div> <input id="endDate" type="text" placeholder="EndDate..." onChange={changeInput} /> </div>

      <div> <input id="hours" type="text" placeholder="Hours..." onChange={changeInput} /> </div>
      <div> <input id="min" type="text" placeholder="Min..." onChange={changeInput} /> </div>
      
      <button onClick={() => props.fixObjectEtikett(name,startDate,endDate,hours,min)} className="button"> Save </button>
      

    </div>
  );
}

export default Parent;//ska det vara parent eller app här?

