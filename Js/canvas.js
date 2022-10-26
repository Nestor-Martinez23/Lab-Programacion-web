

function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("among");    
    ctx.font = "30px  Comic Sans MS ";
    ctx.drawImage(img, 10, 50);
    ctx.fillStyle = "red";
    ctx.fillText("Impostor",130,50);
}

