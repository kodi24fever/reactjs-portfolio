import React from "react";
import PropTypes from "prop-types";

export default class Background extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
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
					<button
						className="work-button"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.node
};
