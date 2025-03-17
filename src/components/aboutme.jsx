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
        <p>I am a current coding bootcamp student through Northwestern University. I am currently building simple website projects with fundamental knowledge of html, css javascript, and javascript frameworks. I am aspiring to be a junior software developer within the next year!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto ex provident quas excepturi repellat nisi alias, atque ullam doloremque minus sint, eos culpa blanditiis perspiciatis veritatis praesentium similique ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut veniam reprehenderit? Rem minima quo cum delectus quaerat suscipit nobis? Voluptas sapiente maxime beatae ratione delectus accusantium asperiores nesciunt natus?
        </p>
      </div>
    </>
  )
}
export default AboutMe;