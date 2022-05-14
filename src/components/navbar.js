import React, {useEffect} from "react";


//import hooks
import SmoothScrollTo from "../hooks/smoothScrollTo";


export default function Navbar() {

	useEffect(() => {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}, [])

	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="home-style navbar-brand" onClick={() => SmoothScrollTo("root")}>Back to Space</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a onClick={() => SmoothScrollTo("about-container")} className="btn-style nav-item nav-link">About</a>
						<a onClick={() => SmoothScrollTo("my-projects")}className="btn-style nav-item nav-link">Projects</a>
						<a onClick={() => SmoothScrollTo("my-contact")}className="btn-style nav-item nav-link">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
