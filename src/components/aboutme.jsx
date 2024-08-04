import { useState } from 'react';
// import Header from './components/header.jsx'

function AboutMe() {
    const [count, setCount] = useState(0)
  
    return (
      <>
       <div>
        <h2>About Me</h2>
       </div>
       <div>
       <p>I am a current coding bootcamp student through Northwestern University. I am currently building simple website projects with fundamental knowledge of html and css. I am aspiring to be a junior software developer within the next year!  </p>
       </div>
      </>
    )
  }
   export default AboutMe;