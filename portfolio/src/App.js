import './App.css';
import Photo from './components/profile/ProfilePhoto' ;
import Name from './components/profile/ProfileName';
import Add from './components/profile/ProfileAdress';
import Aboutme from'./components/profile/Aboutme';
import { Component } from 'react';

class App extends Component  {
render (){
  return (
    <div className="App">
      <Name/>
      <Photo/> 
      <Add/>
      <Aboutme/>
    </div>
    
  );
}
}

export default App;
