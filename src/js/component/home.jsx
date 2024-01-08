import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1> My To Do List</h1>
			<ul>
				<li><input type="text" placeholder="What do you need?"></input></li>
				<li>Hola1</li>
				<li>Hola1</li>
				<li>Hola1</li>
				<li>Hola1</li>
				<li>Hola1</li>
				<li>Hola1</li>
			</ul>
		
		</div>
	);
};

export default Home;
