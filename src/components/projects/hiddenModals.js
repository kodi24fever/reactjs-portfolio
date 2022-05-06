import React, {useState} from "react";

//import images
import Vmarine from "../../img/Vmarine.jpg";
import aguaDeLuz from "../../img/aguaDeLuz.png";
import todo from "../../img/todolist.png";



import HiddenModalDescription from "./hiddenjModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
        {
            name: "vmarine",
            image: Vmarine,
            status: "Comming Soon!",
            description: [
                "Prototype marine web-application to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS.",
                "ba;lasdjkpasj kl;djaslkjdl kasl;d l;asd ."
            ]
        },
        {
            name: "agualuz",
            image: Vmarine,
            status: "Comming So",
            description: [
                "Marine web-application to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        },
        {
            name: "todolist",
            image: Vmarine,
            status: "Comming",
            description: [
                "YEAHHHH lication to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        }
    ]);



    return(
		<div id="gallery-card">
        {
        projects.map((project) => {
            return (
                <div id={project.name} className="modal-card">
                    <div className="visual">
                        <img src={Vmarine} alt=""/>
                    </div>
                    <div className="modal-info">
                        <h2>{project.name}</h2>
                        <HiddenModalDescription description={project.description} />
                        <div className="modal-bottom">
                            <h4>{project.status}</h4>
                            <p
                                className="close-icon"
                                style={{
                                    textAlign: "right",
                                    fontWeight: 900,
                                    fontSize: 2 + "rem",
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    var modalBG = document.getElementById(
                                        "gallery-card"
                                    );
                                    var marineModal = document.getElementById(project.name);
                                    modalBG.style.display = "none";
                                    marineModal.style.display = "none";
                                }}>
                                &#10005;
                            </p>
                        </div>
                    </div>
                </div>
            );
            })
            }
            <div id="vmarine" className="modal-card">
                <div className="visual">
                    <img src={Vmarine} alt=""/>
                </div>
                <div className="modal-info">
                    <h2>Vmarine</h2>
                    <div className="modal-description">
                        <ul>
                            <li>
                                Prototype marine web-application to
                                provide information about progress of
                                services and prices.
                            </li>
                            <li>
                                Designed with HTML5, CSS3, Bootstrap,
                                Webpack, Wordpress, and ReactJS.
                            </li>
                        </ul>
                    </div>
                    <div className="modal-bottom">
                        <h4>Comming Soon!</h4>
                        <p
                            className="close-icon"
                            style={{
                                textAlign: "right",
                                fontWeight: 900,
                                fontSize: 2 + "rem",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                var modalBG = document.getElementById(
                                    "gallery-card"
                                );
                                var marineModal = document.getElementById(
                                    "vmarine"
                                );
                                modalBG.style.display = "none";
                                marineModal.style.display = "none";
                            }}>
                            &#10005;
                        </p>
                    </div>
                </div>
            </div>

                <div id="agualuz" className="modal-card">
                    <div className="visual">
                        <img src={aguaDeLuz} alt=""/>
                    </div>
                    <div className="modal-info">
                        <h2>Agua De Luz</h2>
                        <div className="modal-description">
                            <ul>
                                <li>
                                    Prototype website to promote health
                                    natural-made products to increase brand
                                    and online presence.
                                </li>
                                <li>
                                    Developed with HTML5, CSS3, Bootstrap,
                                    Webpack, Parallax Effect,
                                    SmoothScrolling(UI), and VanillaJS.
                                </li>
                            </ul>
                        </div>
                        <div className="modal-bottom">
                            <a
                                href="./AguaDeLuz/index.html"
                                target="_blank">
                                <h3>View live demo</h3>
                            </a>
                            <p
                                className="close-icon"
                                style={{
                                    textAlign: "right",
                                    fontWeight: 900,
                                    fontSize: 2 + "rem",
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    var modalBG = document.getElementById(
                                        "gallery-card"
                                    );
                                    var aguaModal = document.getElementById(
                                        "agualuz"
                                    );
                                    modalBG.style.display = "none";
                                    aguaModal.style.display = "none";
                                }}>
                                &#10005;
                            </p>
                        </div>
                    </div>
                </div>

                <div id="todolist" className="modal-card">
                    <div className="visual">
                        <img src={todo} alt=""/>
                    </div>
                    <div className="modal-info">
                        <h2>To-Do List</h2>
                        <div className="modal-description">
                            <ul>
                                <li>
                                    A to-do list to keep track of goals.
                                </li>
                                <li>
                                    Developed with HTML5, CSS3, Bootstrap,
                                    Webpack, and ReactJS.
                                </li>
                            </ul>
                        </div>
                        <div className="modal-bottom">
                            <a href="./todoList/index.html" target="_blank">
                                <h3>View live demo</h3>
                            </a>
                            <p
                                className="close-icon"
                                style={{
                                    textAlign: "right",
                                    fontWeight: 900,
                                    fontSize: 2 + "rem",
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    var modalBG = document.getElementById(
                                        "gallery-card"
                                    );
                                    var todoModal = document.getElementById(
                                        "todolist"
                                    );
                                    modalBG.style.display = "none";
                                    todoModal.style.display = "none";
                                }}>
                                &#10005;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}