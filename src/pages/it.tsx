import './it.css'
import GameIcon from '../assets/GameIcon.png'
import GraphicsIcon from '../assets/GraphicsIcon.png'
import WebDevIcon from '../assets/WebDevIcon.png'
import DatabaseIcon from '../assets/DatabaseIcon.png'
import PcIcon from '../components/pcIcon'
import ProjectBox from '../components/projectBox'

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
      <ProjectBox></ProjectBox>
      {/*
      <h2 className="gameTitle">FarmSouls (Thesis Project)</h2>
      <p>[ 05/2025 – 26/06/2025 ]</p>
      <iframe className="FSVideo" width="560" height="315" src="https://www.youtube.com/embed/4XTroj3vDvk?si=nmOATANfyq1MO0WV" title="YouTube video player" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <p className="gameDescription">
        A 2D game that blends together elements from the farming simulator genre with combat
mechanics, resulting in a unique combination. The player is tasked with taking care of a
farm, where the plants turn into enemies at the time of harvest. The game presents
various manually coded interconnected systems, such as: menus with settings for video/
audio/controls, day-night cycle, seasons, various item types you can pick or drop such as:
tools, seeds, consumables and weapons; an inventory with a hotbar, an enemy system
that's easy to extend and contains: a custom resource for stats, a state machine with
states for idle, chase, attacks and transitions; a custom resource for attacks, a pool of
items it can drop loot from, enemy navigation and field of view; a player system with a
similar state machine, a farming system, a custom easily modifiable and extendable
resource for plants, custom functions for time, scene and combat-based music, and a
save system that retains all inventory, farming and player related info.
      </p>
      <p>Developed for PC in Godot using C#.</p>
      <h2>VR Boat Game</h2>
      <p>[ 18/01/2025 – 15/04/2025 ]</p>
      <p className="gameDescription">A VR game that simulates boat rowing, made for Politehnica University of Bucharest's
TRAVEE (Virtual Therapist with Augmented Feedback for Neuromotor Recovery) Project,
which aims to help the recovery process of patients with neuromotor impairments
following strokes, traumas or brain surgery. The player can manipulate the boat's oars
using a customizable rowing motion, being tasked with getting to a finish line and
colliding with collectibles along the way. The game offers plenty of settings: the boat's
speed, the width of the rowing motion, the player position, the oars' sensitivity to hand
movement etc.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ry7KRNBON04?si=OhhW1TEjresR_9SK" title="YouTube video player" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <p>Developed for Meta Quest 2&3 in Unity using C# as well as the XR Unity assets.</p>
      <h2>TrueBlood (Thesis Project)</h2>
      <p>[ 02/2023 – 06/2023 ]</p>
      <p className="gameDescription">A simple 2D "metroidvania" game with 20+ scenes, giving the player the goal of exploring
the map, fighting enemies and going through platforming sections in order to reach the
final scene, unlocking abilities and upgrades along the way. It also features systems such
as: player state machine, saving and loading, keyboard and controller support, menus
and UI, audio and video settings, combat, simple enemy AI, parallax scrolling, custom
collisions, movement such as variable height jump, dashing and teleporting.</p>
      <p>Developed for PC in Unity using C#</p>
      <h2>Beat Dungeon</h2>
      <p>[ 21/04/2019 – 08/06/2019 ]</p>
      <p className="gameDescription">A 2D rhythm-based game made for Ubisoft's "Gamecelerator 6.0" contest, where the
player has to go through 2 levels each with their own visual theme, finding the exit in
each. Having the position of team leader and lead programmer, I've made the following
systems: a player health system, a rhythm system with UI that shows the incoming beats,
2 scenes with various rhythm-based obstacles such as spikes, spinning blades, arrows and
lasers.
</p>
      <p>Developed for PC in Unity using C#</p>
      <h2>Airplane Racer</h2>
      <p>[ 19/01/2024 – 19/01/2024 ]</p>
      <p className="gameDescription">A simple 3D airplane game made in 24 hours, where the player has to complete 3 laps
through a racing area, avoiding trees and other obstacles, collecting coins for score and
trying to reach the end as fast as possible. The game also features the following systems:
a main menu with trophies for every win and an option to change the plane, a save
system, checkpoints, and a booster system allowing the player to speed up for a short
while.</p>
      <p>Developed for PC in Unity using C#.</p>
      <h1 id="Graphics">Graphics</h1>
      <h2>3D Graphics Engine (OpenGL)</h2>
      <h1 id="WebDev">Web Development</h1>
      <h2>This site!</h2>
      <h2>Forum-type site</h2>
      <h2>Events-type site</h2>
      <h1 id="Databases">Databases</h1>
      <h2>BirdLife/SOR Database Work</h2>*/}
      </div>
    </>
  )
}

export default IT