const body = document.querySelector("body");
body.style.backgroundColor = "#f3f3f3";

let mainColor = "black";



const styleButton = 
	`width: 250px;
	height: 40px;
	display: block;
	font-size: 22px;
	border-radius: 20px;
	background-color: #6abfc3;
	margin: 30px auto;`;

const button = document.createElement("button");
button.textContent = "Create new grid";
button.style = styleButton;
button.addEventListener("click", function() {
	const squares = prompt("Type the number of squares per side of the new grid");

	canvas.innerHTML = "";

	createGrid(squares);
});



const labelColor = document.createElement("label");
labelColor.textContent = "Choose a new color:";
labelColor.style.width = "300px";
labelColor.style.display = "block";
labelColor.style.margin = "0 auto";
labelColor.style.fontSize = "22px";


const pickColor = document.createElement("input");
pickColor.setAttribute("type", "color");
pickColor.setAttribute("value", "#aa0000");
pickColor.setAttribute("id", "color");
pickColor.style.width = "50px";
pickColor.style.margin = "0 5px";
pickColor.addEventListener("change", function(event) {
	mainColor = event.target.value;
});

labelColor.appendChild(pickColor);



const width = 600;
const height = 600;
const canvas = document.querySelector("#canvas");
canvas.style.margin = "0 auto";
canvas.style.width = width + "px";
canvas.style.height = height + "px";
canvas.style.border = "10px solid #cc9543";
canvas.style.lineHeight = 0;


body.appendChild(button);
body.appendChild(labelColor);
body.appendChild(document.createElement("br"));
body.appendChild(canvas);



function createGrid(squares) {
	for (let i = 0; i < squares * squares; i++) {
		const div = document.createElement("div");
		
		div.style.boxSizing = "border-box";
		div.style.width = String(width / squares) + "px";
		div.style.height = String(height / squares) + "px";
		div.style.display = "inline-block";
	
		div.addEventListener("mouseenter", function() {
			div.style.backgroundColor = mainColor;
		});
	
		canvas.appendChild(div);
	}
}

createGrid(16);