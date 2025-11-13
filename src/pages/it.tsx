import './it.css'
import GameIcon from '../assets/GameIcon.png'
import GraphicsIcon from '../assets/GraphicsIcon.png'
import WebDevIcon from '../assets/WebDevIcon.png'
import DatabaseIcon from '../assets/DatabaseIcon.png'
import PcIcon from '../components/pcIcon'
import ProjectBox from '../components/projectBox'
import beatDungeon from '../assets/BeatDungeon.png'
import GraphicsProj from '../assets/GraphicsProject.png'

function IT() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className="itMain">
      <h1>IT Projects</h1>
      <h2>Sections</h2>
              {/*<div className="icons">

      <PcIcon anchorPath='#GameDev' image={GameIcon} text="GameDev"></PcIcon>
      <PcIcon anchorPath='#Graphics' image={GraphicsIcon} text="Graphics"></PcIcon>
      <PcIcon anchorPath='#WebDev' image={WebDevIcon} text="WebDev"></PcIcon>
      <PcIcon anchorPath='#Databases' image={DatabaseIcon} text="Databases"></PcIcon>
      </div>*/}
      {/*
      <table className="icons">
        <tr>
          <td><PcIcon anchorPath='#GameDev' image={GameIcon} text="GameDev"></PcIcon></td>
          <td><PcIcon anchorPath='#Graphics' image={GraphicsIcon} text="Graphics"></PcIcon></td>
        </tr>
        <tr>
          <td><PcIcon anchorPath='#WebDev' image={WebDevIcon} text="WebDev"></PcIcon></td>
          <td><PcIcon anchorPath='#Databases' image={DatabaseIcon} text="Databases"></PcIcon></td>
        </tr>
      </table>*/}
      <h1 id="GameDev">Game Development</h1>
      <ProjectBox titleText="FarmSouls" dateText="05/2025 - 26/06/2025" devInfo= "Developed for PC in Godot using C#."
      shortDescription="A 2D pixel art topdown game made for my master's degree thesis project, a farming sim with a unique twist that blends combat and farming together."
      depthDescription="The player is tasked with taking care of a farm, where the plants turn into enemies at the time of harvest. Most of the systems have been coded to be very easy
      to extend and modify directly from the game engine's interface, using Godot's resource system and signals. The game presents interconnected systems such as: menus with 
      proper settings, day-night cycle, seasons, pickable/dropable item types such as: tools, seeds, consumables and weapons; an inventory with a hotbar, a farming system, a data 
      structure for plants, scene and combat-based music, and a save system that retains all inventory, farming and player related info." 
      depthDescription2="The combat systems make adding new attacks for the player or enemies as easy as typing in the values. The same applies to the enemy system, which contains: a 
      stats, a state machine with states for idle, chase, attacks and transitions; a pool of loot drop items, enemy navigation and field of detection. The player has a similar state
      machine, but connected to the inventory and UI."
      videoLink="https://www.youtube.com/embed/4XTroj3vDvk?si=4AwTRmvpN9_np5Ga" imagePath=""></ProjectBox>

      <ProjectBox titleText="VR Boat Game" dateText=" 18/01/2025 – 15/04/2025 " devInfo="Developed for Meta Quest 2&3 in Unity using C# as well as the XR Unity assets."
      shortDescription="A VR game that simulates boat rowing, made for Politehnica University of Bucharest's TRAVEE (Virtual Therapist with Augmented Feedback for Neuromotor Recovery)
      Project."
      depthDescription="This project aims to help the recovery process of patients with neuromotor impairments following strokes, traumas or brain surgery, by offering a means to 
      exercise in a customizable virtual environment. The player can manipulate the boat's oars using a customizable rowing motion, being tasked with getting to a finish line and
      colliding with collectibles along the way. "
      depthDescription2="The game offers plenty of settings: the boat's speed, the width of the rowing motion, the player position, the oars' sensitivity to hand movement etc." 
      videoLink="https://www.youtube.com/embed/ry7KRNBON04?si=OhhW1TEjresR_9SK" imagePath=""></ProjectBox>

      <ProjectBox titleText="TrueBlood" dateText=" 02/2023 – 06/2023 " devInfo="Developed for PC in Unity using C#."
      shortDescription="A 2D side-scroller game made for my bachelor's degree thesis project, the implementation of a basic metroidvania game structure."
      depthDescription="A simple 2D 'metroidvania' game with 20+ scenes, giving the player the goal of exploring the map, fighting enemies and going through platforming sections in 
      order to reach the final scene, unlocking abilities and upgrades along the way." 
      depthDescription2='It also features systems such as: player state machine, saving and loading, keyboard and 
      controller support, menus and UI, audio and video settings, combat, simple enemy AI, parallax scrolling, custom collisions, movement such as variable height jump, dashing and 
      shooting an arrow to teleport at its location.' videoLink="https://www.youtube.com/embed/Hlxo-54WMJM?si=xwhW7xP2eJxrDX_T" imagePath=""></ProjectBox>

      <ProjectBox titleText="Beat Dungeon" dateText=" 21/04/2019 – 08/06/2019 " devInfo="Developed for PC in Unity using C#."
      shortDescription="A 2D pixel art topdown game made for Ubisoft's 'Gamecelerator 6.0' contest, where it managed to reach top 10."
      depthDescription="A rhythm-based dungeon-crawler, where the player has to go through 2 levels each with their own visual theme, soundtrack and obstacles that react to the music,
      finding the exit in each. Having the position of team leader and lead programmer, I've made the following systems: a player health system, a rhythm system with UI that shows the
      incoming beats, 2 scenes with various rhythm-based obstacles such as spikes, spinning blades, arrows and lasers." depthDescription2=''
      videoLink="" imagePath={beatDungeon}></ProjectBox>

      <ProjectBox titleText="Airplane Racer" dateText=" 19/01/2024 – 19/01/2024 " devInfo="Developed for PC in Unity using C#."
      shortDescription="A 3D game made in less than 24 hours for a game developing exam, a simple but complete racing game."
      depthDescription="The player has to complete 3 laps through a racing area using a customizable airplane, avoiding trees and other obstacles, collecting coins for score and
      trying to reach the end as fast as possible. The game also features the following systems: a main menu with trophies for every win and an option to change the plane, a data save
      system, checkpoints, and a booster system allowing the player to speed up for a short while."  depthDescription2=''
      videoLink="https://www.youtube.com/embed/jX817W7OkgE?si=ymGYtT3mr_fE5OPV" imagePath=""></ProjectBox>

      <h1 id="Graphics">Graphics</h1>
      <ProjectBox titleText="3D Graphics Engine" dateText=" 18/09/2024 – 13/11/2024 " devInfo="Developed for PC using the OpenGL framework."
      shortDescription="A somewhat basic engine that can render 3D graphics with limited physics, programmed in C# using the OpenGL framework."
      depthDescription="It contains all the important structural elements for rendering, such as VAOs, VBOs, EBOs, shaders, meshes, textures and models. The project was well organized, 
      split into several classes with their own functionalities: the engine class deals with input functions, the viewport and the window; the world class represents the parent of any
      scene and has the main loop, deltaTime, a function to pause and one to close the project; the main class initializes everything." 
      depthDescription2='Extra features have also been developed, such as a 3D model importer and a light system (point lights, spot lights and directional lights) and basic physics 
      (gravity and box-sphere collision calculation and reaction).' videoLink="" imagePath={GraphicsProj}></ProjectBox>

      <h1 id="WebDev">Web Development</h1>
      <ProjectBox titleText="This site!" dateText=" 30/10/2025 – still in development! " devInfo="Developed using the React framework and HTML/CSS/Typescript."
      shortDescription="A portfolio site, this site!"
      depthDescription="The project used the Visual Studio Code IDE and is composed of html, css and tsx files. It has been split in several pages and components in order to have 
      clean, organized code. The buttons on the screen frame, shortcuts at the top of this page and each of these boxes are all their own components, connected to the respective
      pages by allowing inputs for text, images, links etc."  depthDescription2=''
      videoLink="" imagePath=""></ProjectBox>
      <ProjectBox titleText="Social site" dateText=" 29/11/2022 – 17/01/2023 " devInfo="Developed using the Angular framework, HTML/CSS/Typescript and Firebase."
      shortDescription="A social media type of site, like Twitter, with frontend and backend."
      depthDescription="The project was made with Visual Studio Code, being composed of html, css and ts files. It has 5 pages: register, login, profile, dashboard and a page for
      changing account settings (password). The user can make posts and like them or reply to them, all of these being displayed in the dashboard page. Meanwhile, the profile page
      only displays the respective user's posts, as well as their stats: the number of posts, likes and replies received."  
      depthDescription2="All the data is saved in the backend through Firebase. Lastly, the site's content is organized in several modules: the posts, the header and the pages 
      themselves. It was mostly a learning experience in order to get used to Angular."
      videoLink="" imagePath=""></ProjectBox>

      <h1 id="Databases">Databases</h1>
      <ProjectBox titleText="BirdLife Romania (SOR)" dateText=" 09/2022 " devInfo=""
      shortDescription="Review and suggestions on an older database that needed changes."
      depthDescription="I was tasked with checking a database that was created a long time ago in order to come up with improvements to its structure. Among the identified problems,
      there were multiple tabels containing several cells with identical data between them that could have been simplified by connecting the tables and using a key instead. Another
      table had manually-inputted unique integers, instead of relying on a sequence. Searches and filtering were also tedious and could have been further simplified by using
      PL/SQL."  depthDescription2=''
      videoLink="" imagePath=""></ProjectBox>
      </div>
    </>
  )
}

export default IT