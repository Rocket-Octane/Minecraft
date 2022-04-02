
var canvas = new fabric.Canvas('myCanvas');

px = 10;
py = 10;
bw = 30;
bh = 30;

var p_obj = "";
var b_obj = "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	p_obj = Img;

	p_obj.scaleToWidth(150);
	p_obj.scaleToHeight(140);
	p_obj.set({
	top:py,
	left:px
	});
	canvas.add(p_obj);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	b_obj = Img;

	b_obj.scaleToWidth(bw);
	b_obj.scaleToHeight(bh);
	b_obj.set({
	top:py,
	left:px
	});
	canvas.add(b_obj);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if (e.shiftKey == true && keyPressed == '80'){
		console.log("shift and p are pressed together");
		bh = bh + 10;
		bw = bw + 10;
		document.getElementById("current_width").innerHTML = bw;
		document.getElementById("current_height").innerHTML = bh;
	}
	if (e.shiftKey == true && keyPressed == '77'){
		console.log("shift and m are pressed together");
		bh = bh - 10;
		bw = bw - 10;
		document.getElementById("current_width").innerHTML = bw;
		document.getElementById("current_height").innerHTML = bh;
	}
	if(keyPressed == '37'){
		left();
		console.log("left");
	}
	if(keyPressed == '38'){
		up();
		console.log("up");
	}
	if(keyPressed == '39'){
		right();
		console.log("right");
	}
	if(keyPressed == '40'){
		down();
		console.log("down");
	}
	if(keyPressed == '67'){
		new_image("cloud.jpg");
		console.log("c");
	}
	if(keyPressed == '68'){
		new_image("dark_green.png");
		console.log("d");
	}
	if(keyPressed == '71'){
		new_image("ground.png");
		console.log('g');
	}
	if(keyPressed == '76'){
		new_image("light_green.png");
		console.log('l');
	}
	if(keyPressed == '82'){
		new_image("roof.jpg");
		console.log('r');
	}
	if(keyPressed == '84'){
		new_image("trunk.jpg");
		console.log('t');
	}
	if(keyPressed == '85'){
		new_image("unique.png");
		console.log('u');
	}
	if(keyPressed == '87'){
		new_image("wall.jpg");
		console.log('w');
	}
	if(keyPressed == '89'){
		new_image("yellow_wall.png");
		console.log('y');
	}
	if(keyPressed == '69'){
		new_image("emerald.png");
		console.log('e');
	}
	if(keyPressed == '66'){
		new_image("blue_wool.png");
		console.log('b');
	}
	if(keyPressed == '80'){
		new_image("pink_wool.png");
		console.log('p');
	}
	if(keyPressed == '78'){
		new_image("tnt.jpg");
		console.log('n');
	}
}

function up(){
	if (py >= 0){
		py = py - bh;
		console.log("The block height is: " + bh);
		console.log("Up arrow key pressed, X = " + px + "Y = " + py);
		canvas.remove(p_obj);
		player_update(); 
	}
}
function down(){
	if (py <= 560){
	py = py + bh;
	console.log("The block height is: " + bh);
	console.log("Down arrow key pressed, X = " + px + "Y = " + py);
	canvas.remove(p_obj);
	player_update(); 
	}
}
function right(){
	if (px <= 950){
	px = px + bw;
	console.log("The block width is: " + bw);
	console.log("Right arrow key pressed, X = " + px + "Y = " + py);
	canvas.remove(p_obj);
	player_update(); 
	}
}
function left(){
	if (px >= 0){
	px = px - bw;
	console.log("The block width is: " + bw);
	console.log("Left arrow key pressed, X = " + px + "Y = " + py);
	canvas.remove(p_obj);
	player_update(); 
	}
}