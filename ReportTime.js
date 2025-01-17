import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';

function ReportTime(){
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
      

      {redirect === false && 
      <App fixObjectEtikett={fixObject} />
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
        <h1>Report Time</h1>  
          <div className="WrapperAddTime">
          <p>Set Time</p>
            <input id="hours" type="text" placeholder="Hours..." onChange={changeInput}/>
            <p>h</p>
            <input id="min" type="text" placeholder="Min..." onChange={changeInput}/>
            <p>m</p>
          </div>
          <button onClick={() => props.fixObjectEtikett(name,startDate,endDate,hours,min)} className="button">Save</button>
        </div>
      </div>
    
  );
}

export default ReportTime;//ska det vara parent eller app här?

