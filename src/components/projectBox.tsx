import './projectBox.css'
/*
interface ProjectProps{
    anchorPath: string;
    image:string;
    text:string;
}*/

function projectBox(/*{anchorPath, image,text}: ProjectProps*/) {
    function clickReact(): void
    {
        var collapsible=document.getElementById("collapsible");
        var arrow = document.getElementById("arrow");
        if(collapsible != null && arrow!=null)
        {
            if(collapsible.style.display == "none" || !collapsible.style.display)
            {
                collapsible.style.display="block";
                arrow.textContent = "⯅";
            }
            else if (collapsible.style.display == "block")
            {
                collapsible.style.display="none";
                arrow.textContent = "▼";
            }
        }
    } 

    return (
      <div className="boxMain" onClick={() => clickReact()}>
            <h2>TestTitle</h2>
            <h3>[TestDate - TestDate]</h3>
            <div className="projectMedia">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ry7KRNBON04?si=OhhW1TEjresR_9SK" title="YouTube video player" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
            <p className="shortText">This is a test description, which means it's a paragraph made for testing. It is supposed to have 2 sentences so I see how it looks.</p>
            <p className="arrowExtend" id="arrow">▼</p>
            <div className="fullDescription" id="collapsible"> 
                <p>A 2D game that blends together elements from the farming simulator genre with combat mechanics, resulting in a unique combination.
                    The player is tasked with taking care of a farm, where the plants turn into enemies at the time of harvest. </p>               
<p> The game presents
various manually coded interconnected systems, such as: menus with settings for video/
audio/controls, day-night cycle, seasons, various item types you can pick or drop such as:
tools, seeds, consumables and weapons; an inventory with a hotbar, an enemy system
that's easy to extend and contains: a custom resource for stats, a state machine with
states for idle, chase, attacks and transitions; a custom resource for attacks, a pool of
items it can drop loot from, enemy navigation and field of view; a player system with a
similar state machine, a farming system, a custom easily modifiable and extendable
resource for plants, custom functions for time, scene and combat-based music, and a
save system that retains all inventory, farming and player related info.</p></div>
      </div>
  )
}

export default projectBox