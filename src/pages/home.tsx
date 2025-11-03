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
      <p className= "FSMC"> 
        I'm a master's degree graduate in Graphics, Multimedia and Virtual Reality, having extensive programming experience. I've worked on various projects, such as "Beat Dungeon",
        a rhythm-based rogue-like that reached top 10 in Ubisoft's "Gamecelerator 6.0" competition and database work at BirdLife Romania (SOR).</p>
      <p className= "TBMC">
        Below you'll find a list of skills, tools, frameworks and engines that I'm knowledgeable about, as well as ways to contact me. If you're interested in working
        with me for a project, please check the respective page of what you're interested in first for more information!
      </p>
    </div>
  )
}

export default Home