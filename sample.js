//Addictonal Activity start
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
//Addictonal Activity ends


current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;


current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log("Last position of x and y coordinates = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current position of x and y coordinates = ");
console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x; 
last_position_of_y = current_position_of_mouse_y;


