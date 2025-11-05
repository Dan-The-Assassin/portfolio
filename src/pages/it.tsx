import './it.css'
import GameIcon from '../assets/GameIcon.png'
import GraphicsIcon from '../assets/GraphicsIcon.png'
import WebDevIcon from '../assets/WebDevIcon.png'
import DatabaseIcon from '../assets/DatabaseIcon.png'
import PcIcon from '../components/pcIcon'
import ProjectBox from '../components/projectBox'
import beatDungeon from '../assets/BeatDungeon.png'

function IT() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className="itMain">
      <h1>IT Projects</h1>
      <h2>Sections</h2>
      <div className="icons">
      <PcIcon anchorPath='#GameDev' image={GameIcon} text="GameDev"></PcIcon>
      <PcIcon anchorPath='#Graphics' image={GraphicsIcon} text="Graphics"></PcIcon>
      <PcIcon anchorPath='#WebDev' image={WebDevIcon} text="WebDev"></PcIcon>
      <PcIcon anchorPath='#Databases' image={DatabaseIcon} text="Databases"></PcIcon>
      </div>
      <h1 id="GameDev">Game Development</h1>
      <ProjectBox titleText="FarmSouls" dateText="05/2025 - 26/06/2025" devInfo= "Developed for PC in Godot using C#"
      shortDescription="A 2D pixel art topdown game made for my master's degree thesis project, a farming sim with a unique twist that blends combat and farming together."
      depthDescription="The player is tasked with taking care of a farm, where the plants turn into enemies at the time of harvest. The game presents various manually coded 
      interconnected systems, such as: menus with settings for video/audio/controls, day-night cycle, seasons, various item types you can pick or drop such as: tools, seeds, 
      consumables and weapons; an inventory with a hotbar, an enemy system that's easy to extend and contains: a custom resource for stats, a state machine with states for 
      idle, chase, attacks and transitions; a custom resource for attacks, a pool of items it can drop loot from, enemy navigation and field of view; a player system with a
      similar state machine, a farming system, a custom easily modifiable and extendable resource for plants, custom functions for time, scene and combat-based music, and a
      save system that retains all inventory, farming and player related info."
      videoLink="https://www.youtube.com/embed/4XTroj3vDvk?si=4AwTRmvpN9_np5Ga" imagePath=""></ProjectBox>

      <ProjectBox titleText="VR Boat Game" dateText=" 18/01/2025 – 15/04/2025 " devInfo="Developed for Meta Quest 2&3 in Unity using C# as well as the XR Unity assets."
      shortDescription="A VR game that simulates boat rowing, made for Politehnica University of Bucharest's TRAVEE (Virtual Therapist with Augmented Feedback for Neuromotor Recovery)
      Project."
      depthDescription="This project aims to help the recovery process of patients with neuromotor impairments following strokes, traumas or brain surgery, by offering a means to 
      exercise in a customizable virtual environment. The player can manipulate the boat's oars using a customizable rowing motion, being tasked with getting to a finish line and
      colliding with collectibles along the way. The game offers plenty of settings: the boat's speed, the width of the rowing motion, the player position, the oars' sensitivity to 
      hand movement etc." videoLink="https://www.youtube.com/embed/ry7KRNBON04?si=OhhW1TEjresR_9SK" imagePath=""></ProjectBox>

      <ProjectBox titleText="TrueBlood" dateText=" 02/2023 – 06/2023 " devInfo="Developed for PC in Unity using C#."
      shortDescription="A 2D side-scroller game made for my bachelor's degree thesis project, the implementation of a basic metroidvania game structure."
      depthDescription="A simple 2D 'metroidvania' game with 20+ scenes, giving the player the goal of exploring the map, fighting enemies and going through platforming sections in 
      order to reach the final scene, unlocking abilities and upgrades along the way. It also features systems such as: player state machine, saving and loading, keyboard and 
      controller support, menus and UI, audio and video settings, combat, simple enemy AI, parallax scrolling, custom collisions, movement such as variable height jump, dashing and 
      teleporting." videoLink="https://www.youtube.com/embed/Hlxo-54WMJM?si=xwhW7xP2eJxrDX_T" imagePath=""></ProjectBox>

      <ProjectBox titleText="Beat Dungeon" dateText=" 21/04/2019 – 08/06/2019 " devInfo="Developed for PC in Unity using C#."
      shortDescription="A 2D pixel art topdown game made for Ubisoft's 'Gamecelerator 6.0' contest, where it managed to reach top 10."
      depthDescription="A rhythm-based, dungeon-crawler, where the player has to go through 2 levels each with their own visual theme, soundtrack and obstacles that react to the music,
      finding the exit in each. Having the position of team leader and lead programmer, I've made the following systems: a player health system, a rhythm system with UI that shows the
      incoming beats, 2 scenes with various rhythm-based obstacles such as spikes, spinning blades, arrows and lasers." 
      videoLink="" imagePath={beatDungeon}></ProjectBox>

      <ProjectBox titleText="Airplane Racer" dateText=" 19/01/2024 – 19/01/2024 " devInfo="Developed for PC in Unity using C#."
      shortDescription="A 3D game made in less than 24 hours for a game developing exam, a simple but complete racing game"
      depthDescription="The player has to complete 3 laps through a racing area using a customizable airplane, avoiding trees and other obstacles, collecting coins for score and
      trying to reach the end as fast as possible. The game also features the following systems: a main menu with trophies for every win and an option to change the plane, a data save
      system, checkpoints, and a booster system allowing the player to speed up for a short while." 
      videoLink="https://www.youtube.com/embed/jX817W7OkgE?si=ymGYtT3mr_fE5OPV" imagePath=""></ProjectBox>
      <h1 id="Graphics">Graphics</h1>
      <h2>3D Graphics Engine (OpenGL)</h2>
      <h1 id="WebDev">Web Development</h1>
      <h2>This site!</h2>
      <h2>Forum-type site</h2>
      <h2>Events-type site</h2>
      <h1 id="Databases">Databases</h1>
      <h2>BirdLife/SOR Database Work</h2>
      </div>
    </>
  )
}

export default IT