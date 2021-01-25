import './App.css';
import React,{ Component} from 'react';
import {Header, Home, Footer, Disinfecting, Commercial, Supplies} from './component/index';
import { BrowserRouter, Route } from 'react-router-dom';

export class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Header/>
        <div className='web-container'>    
          <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/disinfecting" component={Disinfecting} exact/>
            <Route path="/commercial" component={Commercial} exact/>
            <Route path="/supplies" component={Supplies} exact/>      
          </BrowserRouter>
        </div>
        <Footer/>
        
      </div>
      
    )
  }
}

export default App;
