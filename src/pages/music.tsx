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
      depthDescription="All of the music presented in the video has been produced digitally, only using FL Studio and many of the plugins available for it. I am available for music
      commissions, simply contact me and mention what you need. If you don't see the genre you're interested in here, don't worry, just ask, there's several more I can do or try!" 
      depthDescription2="If trying to commission me, PLEASE provide clear descriptions of what you need AND references if possible, this will make it a lot more likely I'll accept!"
      videoLink="https://www.youtube.com/embed/mrEX-PCIafA?si=Q4OaLSt6DspNrerO" imagePath=""></ProjectBox>
    </div>
</>
  )
}

export default Music