var last_x, last_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "plum";
    width_of_line = 2;
    var width= screen.width;
    var new_W= screen.width- 70;
    var new_H= screen.height- 300;

    if(width < 992){
        document.getElementById("myCanvas").width = new_W;
        document.getElementById("myCanvas").height = new_H;
        document.body.style.overflow = "hidden";
    }


    canvas.addEventListener("touchstart", F_Touchstart);
    function F_Touchstart(e){
//Addictonal Activity start
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
//Addictonal Activity ends

last_x = e.touches[0].clientX - canvas.offsetLeft;
last_y = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", F_Touchmove);

    function F_Touchmove(e){
        current_x = e.touches[0].clientX - canvas.offsetLeft;
        current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_x,last_y)
    ctx.lineTo(current_x,current_y);
    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
    }


    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }    