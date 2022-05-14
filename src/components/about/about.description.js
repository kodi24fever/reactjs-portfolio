import React from "react";

import myImage from "../../img/myImage.png";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                <p className="mytext pt-3">
                    I love to transform ideas into reality using code. I
                    am passionate about using Javascript and animations
                    to create awesome user experiences.
                </p>
            </div>

            <SkillBars />

        </div>
    );
}