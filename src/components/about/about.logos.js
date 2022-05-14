import React, {useState} from "react";

//import logo-images
import layers from "../../img/layers.png";
import cogwheel from "../../img/cogwheel.png";
import pen from "../../img/pen.png";
import browser from "../../img/browser.png";


export default function AboutLogos() {
    const [skils, setSkills] = useState([
        {
            type: "Responsive",
            animation: "wow fadeInLeft",
            logo: layers   
        },
        {
            type: "Design",
            animation: "wow fadeInLeft",
            logo: cogwheel   
        },
        {
            type: "Performance",
            animation: "wow fadeInRight",
            logo: pen   
        },
        {
            type: "Agile",
            animation: "wow fadeInRight",
            logo: browser   
        }
    ]);

    return(
        <div className="row mt-5">
            {
            skils.map((skill, index) => {
                return (
                    <div className={"col-6 col-sm-6 col-md-3 " + skill.animation} key={index}>
                        <img src={skill.logo} alt=""/>
                        <h4>{skill.type}</h4>
                    </div>
                );
            })
            }
        </div>
    );
}