//import { useState } from 'react'
import './home.css'
import cSharp from '../assets/CSharpIcon.png'
import cPlus from '../assets/CPlusIcon.png'
import jsIcon from '../assets/JSIcon.png'
import tsIcon from '../assets/TSIcon.png'
import htmlIcon from '../assets/HTMLIcon.png'
import cssIcon from '../assets/cssIcon.png'
import scssIcon from '../assets/scssIcon.png'
import unityIcon from '../assets/UnityIcon.png'
import godotIcon from '../assets/GodotIcon.png'
import gms2Icon from '../assets/GMS2Icon.png'
import glIcon from '../assets/OpenGLIcon.png'
import reactIcon from '../assets/ReactIcon.png'
import angularIcon from '../assets/AngularIcon.png'
import gitIcon from '../assets/GitHubIcon.png'
import blenderIcon from '../assets/BlenderIcon.png'
import psIcon from '../assets/PhotoshopIcon.png'
import aeIcon from '../assets/AfterEffectsIcon.png'
import cspIcon from '../assets/CSPIcon.png'
import fmodicon from '../assets/FmodIcon.png'
import flIcon from '../assets/FLStudioIcon.png'


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
        <td><img src={cSharp} title="C#"></img></td>
        <td><img src={cPlus} title="C++"></img></td>
        <td><img src={tsIcon} title="TypeScript"></img></td>
        <td><img src={jsIcon} title="JavaScript"></img></td>
        <td><img src={htmlIcon} title="HTML"></img></td>
        <td><img src={cssIcon} title="CSS"></img></td>
        <td><img src={scssIcon} title="SCSS"></img></td>
      </tr>
      <tr>
        <th>Engines/Frameworks</th>
        <td><img src={unityIcon} title="Unity"></img></td>
        <td><img src={godotIcon} title="Godot"></img></td>
        <td><img src={gms2Icon} title="Gamemaker Studio 2"></img></td>
        <td><img src={glIcon} title="OpenGL"></img></td>
        <td><img src={reactIcon} title="React"></img></td>
        <td><img src={angularIcon} title="Angular"></img></td>
      </tr>
      <tr>
        <th>Tools</th>
        <td><img src={gitIcon} title="Git/GitHub"></img></td>
        <td><img src={blenderIcon} title="Blender"></img></td>
        <td><img src={psIcon} title="Photoshop"></img></td>
        <td><img src={aeIcon} title="After Effects"></img></td>
        <td><img src={fmodicon} title="FMOD"></img></td>
        <td><img src={flIcon} title="Fl Studio"></img></td>
        <td><img src={cspIcon} title="Clip Studio"></img></td>
      </tr>
      {/* <tr>
        <th>Languages</th>
        <th>Engines/Frameworks</th>
        <th>Tools</th>
      </tr>
      <tr>
        <td>C#</td>
        <td>Unity</td>
        <td>Git</td>
      </tr>
      <tr>
        <td>C++</td>
        <td>Godot</td>
        <td>Blender</td>
      </tr>
      <tr>
        <td>JavaScript/TypeScript</td>
        <td>GameMaker Studio 2</td>
        <td>Photoshop/AfterEffects</td>
      </tr>
      <tr>
        <td>HTML</td>
        <td>OpenGL</td>
        <td>Clip Studio Paint</td>
      </tr>
      <tr>
        <td>CSS/SCSS</td>
        <td>React</td>
        <td>FMOD</td>
      </tr>
      <tr>
        <td></td>
        <td>Angular</td>
        <td>FL Studio</td>
      </tr>*/}
      </table>
      <div className="contact">
        For work-related subjects, please contact me at: 
        <a href="mailto:danielsandu1702@gmail.com"> danielsandu1702@gmail.com</a>
      </div>
    </div>
  )
}

export default Home