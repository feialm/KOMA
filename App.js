import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Child from "./Child.js";
import ReportTime from "./ReportTime.js";

//import HomePage from './pages/homepage';
//import Page2 from './pages/page2';
//import Page3 from './pages/page3';
//import Menu from './components/menu';

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

    let TotTime = (Number(d)*60) + Number(e);
    let g = String(0); //reptime
    let f = String(TotTime);

    const Course = {name: a, startDate: b, endDate: c, totTime: f, repTime: g };
     
    addtoList(Course);
  }

  function addtoList(courseToAdd){
    localData.push(courseToAdd);
    setData(localData);
  }
/*
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
      </Router>
    );
  }
*/



// main component of app is always one page (depending on url path) + Menu below


  return(
    <div>
      

     // <Router>

     // <Route exact path = "/ReportTime" component={ReportTime} />

     // </Router>
     

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
      <div className="App-header">
        <h1>Add Activity</h1>
      </div>
      <div className="MainBody">
        <div className="WrapperAddActivity">
          <div className="WrapperNameDates">
            <p>Activity Name</p>
            <input id="name" type="text" placeholder="Course Name..." onChange={changeInput}/>
          </div>
          <div className="WrapperNameDates"> 
            <p>Start Date</p> 
            <input id="startDate" type="text" placeholder="Start Date..." onChange={changeInput}/>
          </div>
          <div className="WrapperNameDates">
            <p>End Date</p>
            <input id="endDate" type="text" placeholder="EndDate..." onChange={changeInput}/>
          </div>
          <div className="WrapperAddTime">
          <p>Set Time</p>
            <input id="hours" type="text" placeholder="Hours..." onChange={changeInput}/>
            <p>Hours</p>
            <input id="min" type="text" placeholder="Min..." onChange={changeInput}/>
            <p>Min</p>
          </div>
          <button onClick={() => props.fixObjectEtikett(name,startDate,endDate,hours,min)} className="button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Parent;//ska det vara parent eller app här?

