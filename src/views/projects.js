import React from "react";
import PropTypes from "prop-types";

//import project folder components
import HiddenModals from "../components/projects/hiddenModals";
import ProjectList from "../components/projects/projectList";

export default function Projects() {

		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className="project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center wow fadeInRight"}>
							Projects
						</h1>

						<ProjectList />
						
					</div>
				</div>

				<HiddenModals />

			</React.Fragment>
		);
}