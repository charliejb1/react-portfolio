import { useState } from 'react';

function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 id="my-projects">My Projects</h2>
      {/*container for all projects */}
      <section id="container-top">

        <div id="my-project-1">
          <h3 id="my-project-1-header">Perform Together</h3>

          <a href="https://github.com/charliejb1/perform-together">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5778/5778100.png"
              alt="none"
            />
          </a>
          <p id="perform-p">
            PERN stack application for musicians to connect with each other. Users create profiles to share on a "connect" page.
          </p>
        </div>

        <div id="my-project-2">
          <h3 id="my-project-2-header">Capture a Feeling (In development)</h3>

          <a href="https://github.com/charliejb1/capture-a-feeling">
            <img
              src="https://images.stockcake.com/public/4/9/6/49665080-7008-4734-a323-4970e282dcbd_large/creative-light-bulb-stockcake.jpg"
              alt="none"
            />
          </a>
          <p id="capture-p">
            Application for musicians to input and save their fleeting musical ideas when they pop into their minds.
          </p>
        </div>
      </section>

      {/* Section for bootcamp projects */}
      <h2 id="bootcamp-projects">Bootcamp Projects</h2>
      <section id="container">

        <div id="Project-1">
          <h3 id="third-party-weather">Third Party Weather API</h3>
          <a href="https://github.com/charliejb1/ThirdPartyWeatherApi">
            <img
              src="data:image/jpeg;base64,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"
              alt="Picture of the sky with clouds"
            />
          </a>
          <p id="weather-p">
            Webpage for users to read current weather data pulled from third party API. Contains current day and 5 day forecast for any selected city.
          </p>
        </div>

        <div id="Project-2">
          <h3 id="node-readme">Node Readme Generator</h3>

          <a href="https://github.com/charliejb1/Node-README-Generator">
            <img
              src="https://readme.com/static/readme-logo.png"
              alt="Picture of lot of random computer code"
            />
          </a>
          <p id="readme-p">
            Selection of prompts through inquirer for users to answer. Once completed a new Readme.md is created.
          </p>
        </div>

        <div id="Project-3">
          <h3 id="node-logo"> Node Logo Maker</h3>
          <a href="https://github.com/charliejb1/node-logo-maker">
            <img
              src="https://store-images.s-microsoft.com/image/apps.31887.13527552335205219.79bdc359-aeae-43cd-ac4a-a9b8c2321785.972ea833-efd0-4edd-b0dc-20ea591f449f"
              alt="Picture of colors red, green and blue similar to how a flag would look with 3 vertical columns"
            />
          </a>
          <p id="logo-p">
            Integration of inquirer, shape classes and logo.svg file for users to create a simple logo.
          </p>
        </div>

        <div id="Project-4">
          <h3 id="employee-tracker">Employee Tracker</h3>
          <a href="https://github.com/charliejb1/employee-tracker-challenge">
            <img
              src="https://flowace.ai/wp-content/uploads/2023/10/posgra.jpg"
              alt="Picture of boxes that represent a database"
            />
          </a>
          <p id='employee-p'>
            Implementation of inquirer and postgres to view and update an employee database
          </p>
        </div>


      </section>

    </>
  )
}
export default Projects