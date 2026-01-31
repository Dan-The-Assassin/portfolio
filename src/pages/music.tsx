import './music.css'
import ProjectBox from '../components/projectBox'

function Music() {
  //const [count, setCount] = useState(0)

  return (
<>
    <div className="musicMain">
      <h1>Music</h1>
      <h2>Sections</h2>
      <ProjectBox titleText="Music compilation" dateText="2020 - 2025" devInfo= "Made using FL Studio."
      shortDescription="A video showcasing the various genres of music I have the knowledge and skills to compose and produce."
      depthDescription="" 
      depthDescription2=""
      videoLink="https://www.youtube.com/embed/mrEX-PCIafA?si=Q4OaLSt6DspNrerO" imagePath=""></ProjectBox>
    </div>
</>
  )
}

export default Music