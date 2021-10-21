import React,{useState,useContext} from 'react';
import './styling/app.css'
import Breadcrumb from './components/Breadcrumb';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Project from './components/Project.js'
import Game from './components/Game.js'
import Setting from './components/Setting.js'

import ThemeContext from './components/themecontext'
import Routelinks from './components/Routelinks';
import Imagesection from './components/Imagesection';



function App() {
  const themes=useContext(ThemeContext)

 

  const [items,setitems]=useState(Routelinks)

const [theme,settheme]=useState(themes)
const   changetoggle =()=>{

  theme === themes.dark 
  ?
  settheme(themes.light)
  :
  settheme(themes.dark)

}


  return (
    <Router>
    <div className="App" style={theme}>
    <button  style={
      {backgroundColor:"crimson"
      ,color:"white"
      ,padding:"10px"
      ,fontSize:"20px"
      ,border:"none"}} 
      onClick={changetoggle}>
      change theme
      </button>
      
     
     <Breadcrumb items={items}  />
     <Imagesection/>
   
   
     
  
 
  
     <Switch>
<Route path="/" exact>
<Home/>
</Route>
<Route path="/project" exact>
 <Project/>
</Route>
<Route path="/game" exact>
 <Game/>
</Route>
<Route path="/project" exact>
 <Project/>
</Route>
<Route path="/setting" exact>
 <Setting/>
</Route>
     </Switch>


    </div>
    </Router>
  );
}

export default App;
