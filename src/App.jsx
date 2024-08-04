import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/header.jsx';
import AboutMe from './components/aboutme.jsx';
import Projects from './components/projects.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (

<div>
  <h2>Charles Boyle</h2>

  <ul>
    <li>
      <Link to= "/">Home</Link> 
    </li>
    <li>
      <Link to= "/aboutme">AboutMe</Link>
      </li>
    <li>
      <Link to= "/projects">Projects</Link>
    </li>
  </ul>

  <Route path="/" element={Header}> </Route>
  <Route path="/aboutme" element={AboutMe}></Route>
  <Route path="/projects" element={Projects}></Route>

</div>

        )
}
export default App;

