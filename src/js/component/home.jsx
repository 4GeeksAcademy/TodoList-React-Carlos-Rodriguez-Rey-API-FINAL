import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [all, setAll] = useState([]);
	return (
		<div className="container">
			<h1> My Assignments</h1>
			<ul>
				<li><input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setAll(all.concat(inputValue));
							setInputValue("");
						}
					}}
					placeholder="What do you need?"></input></li>

				{all.map((item, index) => (

					<li> {item} {" "} <i class="fas fa-trash"
						onClick={() =>
							setAll(all.filter(
								(t, currentIndex) =>
									index != currentIndex
							)
							)
						}></i>
					</li>
				))}	
			</ul>
			<div> 10 tasks </div>
		</div>
	);
};

export default Home;
