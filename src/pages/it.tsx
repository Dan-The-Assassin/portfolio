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
      <h2 className="subtitle">Sections</h2>
      <div className="icons">
      <PcIcon anchorPath='#testAnchor' image={GameIcon} text="GameDev"></PcIcon>
      <PcIcon anchorPath='#testAnchor' image={GraphicsIcon} text="Graphics"></PcIcon>
      <PcIcon anchorPath='#testAnchor' image={WebDevIcon} text="WebDev"></PcIcon>
      <PcIcon anchorPath='#testAnchor' image={DatabaseIcon} text="Databases"></PcIcon>
      </div>
      </div>
    </>
  )
}

export default IT