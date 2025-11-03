//import { useState } from 'react'
import './home.css'


function Home() {

  return (
    <div className="homeMain">
      <h1>
        What's this site?
      </h1>
      <p>
        Hello! I'm Daniel, a Romanian game developer and artist! This is my portfolio, where you can find information about most of the projects I've worked on, be it programming, 
        music or art.</p>
      <p className="FSMC"> 
        I'm a master's degree graduate in Graphics, Multimedia and Virtual Reality, having extensive programming experience. I've worked on various projects, such as "Beat Dungeon",
        a rhythm-based rogue-like that reached top 10 in Ubisoft's "Gamecelerator 6.0" competition, and database work at BirdLife Romania (SOR).</p>
      <p className= "TBMC">
        Below you'll find a list of programming languages, tools, frameworks and engines that I'm knowledgeable about, as well as how to contact me. Interested in working
        with me? Please check the page of what you're interested in first for more information!
      </p>
      <table className="skillsGrid">
      <tr>
        <th>Languages</th>
        <th>Engines/Frameworks</th>
        <th>Tools</th>
      </tr>
      <tr>
        <td>C#</td>
        <td>Godot</td>
        <td>FL Studio</td>
      </tr>
      <tr>
        <td>C++</td>
        <td>Unity</td>
        <td>Clip Studio Paint</td>
      </tr>
      <tr>
        <td>JavaScript/TypeScript</td>
        <td>GameMaker Studio 2</td>
        <td>Photoshop/AfterEffects</td>
      </tr>
      <tr>
        <td>HTML</td>
        <td>OpenGL</td>
        <td>Blender</td>
      </tr>
      <tr>
        <td>CSS/SCSS</td>
        <td>React</td>
        <td>GitHub</td>
      </tr>
      <tr>
        <td></td>
        <td>Angular</td>
        <td>FMOD</td>
      </tr>
      </table>
      <div className="contact">
        For work-related subjects, please contact me at: 
        <a href="mailto:danielsandu1702@gmail.com"> danielsandu1702@gmail.com</a>
      </div>
    </div>
  )
}

export default Home