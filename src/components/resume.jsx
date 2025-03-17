import { useState } from 'react';
// import Header from './components/header.jsx'

// Resume bullet points with install button
function Resume() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Resume</h2>
      </div>
      <div>
        <ul id='resume-points'>
          <li>Fundamental Knowledge of HTML, CSS, and vanilla Javascript</li>
          <li>Created multiple applications with third party API's</li>
          <li>Learned the foundations of Javascript frameworks such as express, MySQL, Sequelize, Node, React and NoSQL</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nostrum temporibus quia. Earum, blanditiis voluptates, a natus ipsa, quam reprehenderit tenetur dicta non laudantium recusandae necessitatibus obcaecati explicabo dolorum amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique rem adipisci quas maxime qui provident magnam autem beatae sint nihil illo ad neque corrupti, nemo, vitae saepe temporibus praesentium!</li>
        </ul>
      </div>
      <div>

        <a
          href="src/components/resume.jsx"
          download="MyResume.pdf"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '20px 0',
            color: 'white',
            backgroundColor: 'blue',
            textAlign: 'center',
            textDecoration: 'none',
            borderRadius: '60px'
          }}
        >
          Install Resume
        </a>


      </div>
    </>
  )
}
export default Resume;