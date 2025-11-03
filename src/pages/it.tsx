import './it.css'
import GameIcon from '../assets/GameIcon.png'
import GraphicsIcon from '../assets/GraphicsIcon.png'
import WebDevIcon from '../assets/WebDevIcon.png'
import DatabaseIcon from '../assets/DatabaseIcon.png'
import PcIcon from '../components/pcIcon'

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
      <h2>FarmSouls</h2>
      <p>[ 05/2025 – 26/06/2025 ]</p>
      <p>
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
      <iframe width="420" height="315"
src="https://youtu.be/4XTroj3vDvk">
</iframe>
      <p>Developed for PC in Godot using C#.</p>
      <h2>VR Boat Game</h2>
      <h2>TrueBlood</h2>
      <h2>Beat Dungeon</h2>
      <h2>Airplane Racer</h2>
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