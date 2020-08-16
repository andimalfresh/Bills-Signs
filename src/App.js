import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/contact'
import Foot from './components/foot'
import Land from'./components/land'
import Navi from './components/navi'
import Services from './components/services'
import  {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bill's Signs</title>
                <link rel="canonical" href="http://billssigns.com" />
                <meta name="Bills Signs" content="Bill’s Sign’s and Services is state licensed and has been trusted since 1969 for new visual identity, redesigned external and internal graphic and signs, led digital signs, flag poles, street pole signs, monument signs, electronic messaging displays, plaques, directional signs, marque signs, lighted and unlighted signs, installation of existing signage and surveying by providing information, quality, experience, dependability and state-of-the-art technology to make sure your business is projecting the right image."></meta>
            </Helmet>
          <Navi />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Land />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
          <Foot />
      </div>
    );
  }
}

export default App;
