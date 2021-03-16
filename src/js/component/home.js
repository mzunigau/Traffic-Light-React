import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");

	const colors = ["red", "yellow", "green"];
	let i = 0;
	useEffect(() => {
		const interval = setInterval(() => {
			if (i > 2) {
				i = 0;
			}
			setColor(colors[i]);
			i++;
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container">
			<div className="traffic">
				<div
					className={`light red ${color == "red" ? "glow" : ""}`}
					onClick={() => setColor("red")}></div>
				<div
					className={`light yellow ${
						color == "yellow" ? "glow" : ""
					}`}
					onClick={() => setColor("yellow")}></div>
				<div
					className={`light green ${color == "green" ? "glow" : ""}`}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
