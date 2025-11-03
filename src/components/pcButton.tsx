import { useNavigate} from "react-router-dom";
import './pcButton.css'

interface ButtonProps{
    text: string;
    path: string;
    link:string;
}

function pcButton({text, path, link}: ButtonProps) {
    const navigate = useNavigate();
  const clickReact = (path: string, link: string) =>
{
  if(path != "")
  {
    navigate(path);
  }
  if(link != "")
  {
    window.open(link);
  }
}
  return (
    <>
      <button className="buttonComponent" onClick={() => clickReact(path, link)}>
        {text}
      </button>
    </>
  )
}

export default pcButton