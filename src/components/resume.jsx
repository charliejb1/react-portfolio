import { useState } from 'react';
import Pdf from './resume-2025.png';
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
        <a id="resume-click" href={Pdf}>Click for PDF</a>

        <div id="resume">
          <h3 id="summary-header">Summary</h3>
          <p id="summary-text">Aspiring entry-level software developer with a passion to enhance my foundational skillset of full-stack development and learning value-driven solutions for client needs. I am a recent graduate of the Northwestern Full Stack Software Development Bootcamp with previous work experience in private investigations, marketing, and sales. I am currently seeking junior positions in both front-end and back-end development.</p>
          <h3 id="work-experience">Work Experience</h3>
          <h4 id="job-1">Private Investigator - Hanrahan Investigations Group - Hillside, IL (Nov 2024 - Jan 2025)</h4>
          <ul id="job-1-list">
            <li>Gathered evidence through interviews and database research pertaining to asbestos exposure cases.</li>
            <li>Compiled detailed written reports of investigation findings for clients.</li>
            <li>Collected intelligence from public records and sources in the field.</li>
            <li>Conducted surveillance on individuals suspected of claiming false injuries.</li>
          </ul>
          <h4 id="job-2">Digital Media Coordinator - RealtyAds - Chicago, IL (Mar 2023 - Aug 2023)</h4>
          <ul id="job-2-list">
            <li>Assisted in creation of managed service promotions and email marketing content ideas.</li>
            <li>Deactivated broken webpages through coordination with Google and LinkedIn representatives.</li>
            <li>Created social media pages for new clients with necessary company information.</li>
          </ul>

          <h3 id="education">Education</h3>
          <h4 id="university">The University of Iowa, Iowa City, IA (Aug 2016 - May 2021)</h4>
          <ul id="education-list">
            <li>Bachelor of Arts: Communication Studies and Enterprise Leadership</li>
          </ul>
          <h3 id="certifications">Certifications</h3>
          <h4 id="bootcamp">Northwestern Full Stack Software Development Boot Camp (Feb 2024 - Aug 2024) </h4>
          <ul id="certificate-list">
            <li>6 month bootcamp focused on skill development of HTML, CSS, Javascript, Object-oriented programming, API's, Node.js, Express.js, React.js, PostgreSQL, MongoDB, Model View Controller architecture, and Object Relational Mapping</li>
            <li>Assembled applications using the fundamentals of HTML, CSS and Javascript for simple front-end development skill building.</li>
            <li>Created and developed applications with node.js for writing files to a server and for interaction between a client and a simple database.</li>
          </ul>
          <h3 id="portfolio-websites">Portfolio and Websites</h3>
          <ul id="resume-links">
            <li>Portfolio: https://charlesboyle-react-portfolio.netlify.app/</li>
            <li>Github: https://github.com/charliejb1</li>
            <li>Linkedin: https://www.linkedin.com/in/charles-boyle-37a770243/</li>
          </ul>
        </div>
      </div>

    </>
  )
}
export default Resume;