import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/signup' compoent={SignUp} exact>
            <SignUp />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/login' compoent={Login} exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
