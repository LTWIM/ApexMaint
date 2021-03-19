
import './App.css';
import React,{ Component} from 'react';
import {Header, Home, Footer, Disinfecting, Commercial, Supplies, Contact, Unsubscribe, Unsubscribed, FourOfour} from './component/index';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Tester from "./component/testing/create_user_test"
export class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = 'backgroundSheet'>
        <HashRouter>
          <Header/>
            <div className='web-container'> 
              <Switch>    
                <Route path="/" component={Home} exact/>
                <Route path="/disinfecting" component={Disinfecting} exact/>
                <Route path="/commercial" component={Commercial} exact/>
                <Route path="/supplies" component={Supplies} exact/>  
                <Route path="/testing" component={Tester} /> 
                <Route path="/contact" component={Contact} exact />
                <Route path="/Unsubscribe/:id" component={Unsubscribe}></Route>
                <Route path="/Unsubscribed" component={Unsubscribed} exact></Route>
                <Route path="/404" component={FourOfour} exact></Route>
              </Switch>  
          </div>
          <Footer/>
        </HashRouter>
        </div>
    )
  }
}

export default App;
