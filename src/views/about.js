import React from "react";

//import about components
import AboutLogos from "./../components/about/about.logos";
import AboutDescription from "./../components/about/about.description";

export default function About(props) {
	return (
		<div id="about-container" className="content-containers container text-center mt-5">
			<h1 id="about" className="wow bounceInLeft">About</h1>

			<AboutLogos/>

			<AboutDescription />
		</div>
	);
}