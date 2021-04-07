
import './App.css';
import React,{ Component} from 'react';
import {Header, Home, Footer, Disinfecting, Commercial, Supplies, Contact, Unsubscribe, Unsubscribed, FourOfour} from './component/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tester from "./component/testing/create_user_test";
import {Helmet} from 'react-helmet'

export class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = 'backgroundSheet'>
         <Helmet>
        <title>APEX MAINTENANCE</title>
        <meta name="description" content="Commercial Cleaning for Any Industry Whether your company makes its home in an office building, clinic or school, we deliver professional commercial cleaning services that help promote healthy work environments and keep your buildings sparkling." />
      </Helmet>
        <BrowserRouter>
          <Header/>
            <div className='web-container'> 
              <Switch>    
                <Route path="/" component={Home} exact/>
                <Route path="/disinfecting" component={Disinfecting} exact/>
                <Route path="/commercial" component={Commercial} exact/>
                <Route path="/supplies" component={Supplies} exact/>  
                <Route path="/testing" component={Tester} /> 
                <Route path="/contact" component={Contact} exact />
                <Route path="/Unsubscribe/:id" component={Unsubscribe} ></Route>
                {/* <Route path='/Unsubscribe/:id' render={(props) => (<Unsubscribe props= {props} />)}/> */}
                <Route path="/Unsubscribed" component={Unsubscribed} exact></Route>
                <Route path="/*" component={FourOfour} exact></Route>
              </Switch>  
          </div>
          <Footer/>
        </BrowserRouter>
        </div>
    )
  }
}

export default App;
