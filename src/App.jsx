import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <div id='profile-icon'>
          <a href="https://www.linkedin.com/in/charles-boyle-37a770243/">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFrO3w30vYwuQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666760663116?e=1750896000&v=beta&t=XCn9HEZoB69f-pbDsgS_oBma-zCOMWYm0O-v9RKlW5w"
              alt="Picture of Charles Boyle in suit and tie"
            />
          </a>
        </div>
        <h1>Charles Boyle</h1>
        <nav>

          <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </nav>
      </header>
      <Outlet />
    </div>

  )
}
export default App;

