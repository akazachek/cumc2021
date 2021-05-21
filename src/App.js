import "./App.css";

// technical
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import React, { Component } from "react";
import { default as year } from "./components/Year";

// pages in site
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Students from "./pages/Students";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// components
import NavBar from "./components/NavBar";
import { LocaleContext } from "./components/locale/LocaleContext";
import LocaleSwitch from "./components/locale/LocaleSwitch";
import Header from "./components/Header.js";

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
              <Header />
              {/* load default homepage */}
              <Route exact path={"/" + year}>
                <Redirect to={"/" + year + "/about"} />
              </Route>
              <LocaleContext.Provider value={this.state.locale}>
                <NavBar />
              </LocaleContext.Provider>
              <LocaleSwitch
                locale={this.state.locale}
                changeLocale={this.changeLocale}
              />
            </div>
          </header>
          <body>
            <LocaleContext.Provider value={this.state.locale}>
              <Switch>
                <Route path={"/" + year + "/about"} component={About} />
                <Route path={"/" + year + "/speakers"} component={Speakers} />
                <Route path={"/" + year + "/students"} component={Students} />
                <Route path={"/" + year + "/faq"} component={FAQ} />
                <Route path={"/" + year + "/contact"} component={Contact} />
              </Switch>
              {/* register button is not fully implemented, so we pass a dummy method to bind to */}
              {/* <RegisterButton click={() => true} /> */}
            </LocaleContext.Provider>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
