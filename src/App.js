/* media */

import header from './media/header.png';
import './App.css';

/* technical */

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";

/* pages in site */
import About from './pages/About';
import Keynotes from './pages/Keynotes';
import Students from './pages/Students';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

/* components */
import NavBar from './components/NavBar';
import { LocaleContext } from './components/LocaleContext';
import LocaleSwitch from './components/LocaleSwitch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locale: "en"
    };
  }

  changeLocale = (locale) => {
    this.setState({
      locale: locale
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
            <header className="menu">
              <div className="fullWidth">
                <img src={header} className="header" alt="CUMC 2021" />
                {/* load default homepage */}
                <Route exact path="/">
                  <Redirect to="/about"/>
                </Route>
                <NavBar/>
                <LocaleSwitch locale = {this.state.locale} changeLocale = {this.changeLocale} />
              </div>
            </header>
            <body>
              <LocaleContext.Provider value = {this.state.locale}>
                <p>
                  Super cool conference stuff.
                  {this.state.locale}
                </p>
                <Switch>
                    <Route path = "/about" component={About} />
                    <Route path = "/keynotes" component={Keynotes} />
                    <Route path = "/students" component={Students} />
                    <Route path = "/faq" component={FAQ} />
                    <Route path = "/contact" component={Contact} />
                </Switch>
              </LocaleContext.Provider>
            </body>
        </div>
      </Router>
    );
  }
}

export default App;
