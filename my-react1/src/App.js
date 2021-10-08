import React from 'react';
import "./App.css";
import Header from './components/Header.jsx';
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import Dialogs from "./components/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";
import News from "./components/News";


const App = (props) => {

  return (
      <BrowserRouter>
      <div className="background">
    <div className="app-wrapper">
        <Header />
       <Navbar/>
        <div className="app-wrapper-content">
            <Route path='/Dialogs' render={ () =>
                <Dialogs
                    state={props.state.DialogsPage}
                    />}/>
            <Route path='/Profile' render={ () =>
                <Profile
                    state={props.state.ProfilePge} />}/>

            <Route path='/News' render={ () =>  <News />}/>
            <Route path='/Music' render={ () =>  <Music />}/>
            <Route path='/Settings' render={ () =>  <Settings />}/>

    </div>

    </div>
</div>
</BrowserRouter>
  );
}


export default App;
