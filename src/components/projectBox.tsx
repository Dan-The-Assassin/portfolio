import './projectBox.css'
import { useState } from 'react';

interface ProjectProps{
    titleText: string;
    dateText: string;
    devInfo: string;
    shortDescription: string;
    depthDescription: string;
    depthDescription2: string;
    videoLink: string;
    imagePath: string;
    tryLink: string;
}

function projectBox({titleText, dateText, devInfo, shortDescription, depthDescription, depthDescription2, videoLink, imagePath, tryLink}: ProjectProps) {

    const [show, setShow] = useState(false);
    function checkShow()
    {
        if(show)
        {
            return '>';
        }
        else
        {
            return '<';
        }
    }

    function renderMedia(){
        if(videoLink!="")
        {
            return(<iframe src={videoLink} title="YouTube video player" allowFullScreen></iframe>)
        }
        if(imagePath!="")
        {
            return(<img src={imagePath}></img>)
        }
    }

    function renderLink()
    {
        if(tryLink!="")
        {
            return(<a href={tryLink} target="_blank" rel="noopener noreferrer">Click to try it out!</a>)
        }
    }

    return (
      <div className="boxMain" onClick={() => {setShow(!show);}}>
           <h2>{titleText}</h2>
            <h3>[{dateText}]<br/>
            {devInfo}
            </h3>
            <div className="projectMedia">
                {renderMedia()}
                {renderLink()}
            </div>
            <p className="shortText">{shortDescription}</p>
            <p className="arrowExtend" id="arrow">{checkShow()}</p>
            {show && <div className="fullDescription"> 
                <p>{depthDescription}</p>
                <p>{depthDescription2}</p>
            </div>}
      </div>
  )
}

export default projectBox