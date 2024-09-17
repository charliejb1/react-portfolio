import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <div id ='icon'>
      <a href="https://www.linkedin.com/in/charles-boyle-37a770243/">
            <img
              src="https://media.licdn.com/dms/image/D5603AQFrO3w30vYwuQ/profile-displayphoto-shrink_200_200/0/1666760663116?e=1728518400&v=beta&t=16Ro_YaS_oN0rZu_107usyCg6ElVVR6Dzmner5mGSzE"
              alt="Picture of Charles Boyle in suit and tie"
            />
          </a>
          </div>
        <h1>Charles Boyle</h1>
        <nav>
          
          <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/about">AboutMe</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>

  )
}
export default App;

