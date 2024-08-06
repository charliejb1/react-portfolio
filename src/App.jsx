import { useState } from 'react'
import './App.css'
import { Link, Outlet }  from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (

<div>
  <h2>Charles Boyle</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/about">AboutMe</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

  <Outlet />
</div>

        )
}
export default App;

