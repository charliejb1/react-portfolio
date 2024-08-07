import { useState } from 'react';
// import Header from './components/header.jsx'

function Resume() {
    const [count, setCount] = useState(0)
  
    return (
      <>
       <div>
        <h2>Resume</h2>
       </div>
       <div>
       <ul id = 'resume-points'>
           <li> </li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
       </div>
      </>
    )
  }
   export default Resume;