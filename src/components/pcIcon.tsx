import './pcIcon.css'

interface IconProps{
    anchorPath: string;
    image:string;
    text:string;
}

function pcIcon({anchorPath, image,text}: IconProps) {
  return (
        <a href={anchorPath} className="iconAnchor">
            <img src={image} className="anchorImage"/>
            <p className="anchorText">
            {text}
            </p>
        </a>
  )
}

export default pcIcon