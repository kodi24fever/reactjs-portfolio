//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application
ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Footer />
	</React.Fragment>,
	document.querySelector("#app")
);
