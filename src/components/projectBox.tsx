import './projectBox.css'
import { useState } from 'react';

interface ProjectProps{
    titleText: string;
    dateText: string;
    devInfo: string;
    shortDescription: string;
    depthDescription: string;
    videoLink: string;
    imagePath: string;
}

function projectBox({titleText, dateText, devInfo, shortDescription, depthDescription, videoLink, imagePath}: ProjectProps) {

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
            return(<iframe width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
        }
        if(imagePath!="")
        {
            return(<img width="560" height="315" src={imagePath}></img>)
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
            </div>
            <p className="shortText">{shortDescription}</p>
            <p className="arrowExtend" id="arrow">{checkShow()}</p>
            {show && <div className="fullDescription"> 
                {depthDescription}
            </div>}
      </div>
  )
}

export default projectBox