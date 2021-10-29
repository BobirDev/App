import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="H" >Home</Link>
            </li>
            <li>
              <Link to="/about" className="A" >About</Link>
            </li>
            <li>
              <Link to="/blog" className="B" >Blog</Link>
            </li>
          </ul>
        </nav>

        <Switch>                                                                                                                                                
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Assalomu aleykum hush kelibsiz!</h2>;
}

function About() {
  return <h2>About pages</h2>;
}

function Blog() {
  return <h2>Blog pages</h2>;
  
}
