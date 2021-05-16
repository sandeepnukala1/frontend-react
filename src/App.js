import './App.css';
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import React, { useState, useEffect } from "react";

function App() {
  const URL = "https://backend-express-react.herokuapp.com/"
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App content">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home themeToggler={themeToggler}/>
            </Route>
            <Route path="/projects">
              <Projects URL={URL} />
            </Route>
            <Route path="/about">
              <About URL={URL} />
            </Route>
          </Switch>
          
        </div>
        <Footer />
     </>
    </ThemeProvider>

  );
}

export default App;
