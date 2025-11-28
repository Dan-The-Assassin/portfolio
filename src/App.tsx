import './App.css'
import IT from './pages/it'
import Music from './pages/music'
import Art from './pages/art'
import Home from './pages/home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import pcFrame from "./assets/site_frame.png"
import PcButton from './components/pcButton'
import crtLines from './assets/crtLines.png'
import ScrollToTop from './components/scrollToTop'

function App() {

  window.scroll

  return (
    <>
    {/*this apparently prevents the mobile version from being opened by default zoomed in?? */}
    {/*<BrowserRouter>
      <Routes>
        <Route path ="/IT" element ={<IT/>}/>
        <Route path ="/Music" element ={<Music/>}/>
        <Route path ="/Art" element ={<Art/>}/>
        <Route path ="/Contact" element ={<Contact/>}/>
      </Routes>
    </BrowserRouter>*/}
    <BrowserRouter basename='/portfolio'>
    <ScrollToTop/>
    <div className="main">
          <div className="Buttons">
            <PcButton text="Home" path="/" link=""/>
            <PcButton text="IT" path="/it" link=""/>
            <PcButton text="Music" path="" link="https://www.youtube.com/@DanTheAssassin"/>
            <PcButton text="Art" path="" link="https://www.artstation.com/dantheassassin"/>
          </div>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path = "/it" element = {<IT/>}/>
        <Route path = "/music" element ={<Music/>}/>
        <Route path ="/art" element ={<Art/>}/>
      </Routes>
  </div>
      {/*<div id="testAnchor">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff</h1>
      <h1>stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff</h1>
      */}
    <div className="pcEffects">
      <img className="crtLines" src={crtLines}></img>
      <div className="screenStatic"></div>
      <div className="blueTint"></div>
      <img className="pcFrame" src={pcFrame}></img>
      <p className="name">DanTheAssassin</p>
      <div className="blueGlow"></div>
    </div>
    </BrowserRouter>
    {/*please don't forget that you copy pasted that weird script into index.html and also copy pasted that 404.html file to fix the issue where refreshing the site when on a page
    different than the base one lead to a 404. I don't know how they solve it, but they do, so keep them*/}
    </>
  )
}

export default App
