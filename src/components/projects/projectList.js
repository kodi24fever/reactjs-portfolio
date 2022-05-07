import React from 'react';

export default function ProjectList() {

    return (
        <div className="row my-5">



            <div
                className={
                    "testbg col-12 col-sm-12 col-md-4 " +
                    this.props.fadeIn
                }>
                <div className="overlay">
                    <div className="text">
                        <h2>VMarine</h2>
                    </div>
                    <div>
                        <button
                            id="vmarine-button"
                            className="project-button"
                            onClick={() => {
                                var modalBG = document.getElementById(
                                    "gallery-card"
                                );
                                var marineModal = document.getElementById(
                                    "vmarine"
                                );
                                modalBG.style.display = "block";
                                marineModal.style.display =
                                    "block";
                            }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={
                    "aguabg col-12 col-sm-12 col-md-4 " +
                    this.props.fadeIn
                }>
                <div className="overlay">
                    <div className="text">
                        <h2>Aguas De Luz</h2>
                    </div>
                    <div>
                        <button
                            id="agua-button"
                            className="project-button"
                            onClick={() => {
                                var modalBG = document.getElementById(
                                    "gallery-card"
                                );
                                var aguaModal = document.getElementById(
                                    "agualuz"
                                );
                                modalBG.style.display = "block";
                                aguaModal.style.display =
                                    "block";
                            }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={
                    "todobg col-12 col-sm-12 col-md-4 " +
                    this.props.fadeIn
                }>
                <div className="overlay">
                    <div className="text">
                        <h2>To Do List</h2>
                    </div>
                    <div>
                        <button
                            id="todo-button"
                            className="project-button"
                            onClick={() => {
                                var modalBG = document.getElementById(
                                    "gallery-card"
                                );
                                var todoModal = document.getElementById(
                                    "todolist"
                                );
                                modalBG.style.display = "block";
                                todoModal.style.display =
                                    "block";
                            }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}