var mouseevent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;
radius=30;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseevent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        console.log("Current position of x and y cordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0,2 * Math.PI);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}