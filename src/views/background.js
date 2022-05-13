import React, {useEffect} from "react";

//import hooks
import SmoothScrollTo from "../hooks/smoothScrollTo";

import WOW from "wowjs";

export default function Background() {

	useEffect(() => {
		new WOW.WOW().init();
	},[]	
	)

	return (
		<div id="my-background" className="background">
			<div id="stars" />
			<div id="stars2" />
			<div id="stars3" />
			<div className="top-container flex">
				<h1>
					Hello, I&apos;m Frank Izquierdo.
					<br />
					I&apos;m a Full Stack Web Developer.
				</h1>
				{/* offset can be changed in node modules wowjs default file */}
				<button className={"work-button wow bounceIn"} data-wow-offset="0"
					onClick={() => SmoothScrollTo("my-projects")}>
					View my work
				</button>
			</div>
		</div>
		);
}