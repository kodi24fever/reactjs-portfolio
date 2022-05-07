import React, {useState} from "react";

//import images
import Vmarine from "../../img/Vmarine.jpg";
import aguaDeLuz from "../../img/aguaDeLuz.png";
import todo from "../../img/todolist.png";



import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
        {
            name: "vmarine",
            image: Vmarine,
            status: "View Live Demo",
            ref:"./",
            description: [
                "Prototype marine web-application to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS.",
                "ba;lasdjkpasj kl;djaslkjdl kasl;d l;asd ."
            ]
        },
        {
            name: "agualuz",
            image: aguaDeLuz,
            status: "View Live Demo",
            ref: "./AguaDeLuz/index.html",
            description: [
                "Marine web-application to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        },
        {
            name: "todolist",
            image: todo,
            status: "View Live Demo",
            ref: "./todoList/index.html",
            description: [
                "YEAHHHH lication to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        }
    ]);


    function hiddeModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }


    return(
		<div id="gallery-card">
        {
            projects.map((project, index) => {
            return (
                <div id={project.name} className="modal-card" key={index}>
                    <div className="visual">
                        <img src={project.image} alt=""/>
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>

                        <HiddenModalDescription description={project.description} />

                        <div className="modal-bottom">
                            <a href={project.ref} target="_blank">
                                <h3>{project.status}</h3>
                            </a>
                            <p className="close-icon" style={style} onClick={() => hiddeModal(project.name)}>&#10005;</p>
                        </div>

                    </div>
                </div>
            );})
        }
        </div>
    );
}