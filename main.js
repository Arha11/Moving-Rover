mars_images_array = ["Mars image 1.jpg", "Mars image 2.jpg", "Mars image 3.jpeg", "Mars image 4.jpg"]
random_number = Math.floor (Math.random() * 4)
background_image = mars_images_array[random_number]
console.log("background_image = " + background_image)
console.log(random_number)
canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_x=10
rover_y=10
rover_width=150
rover_height=150
rover_image = "rover.png"
function add(){
    bg_imgTag = new Image()
    bg_imgTag.onload = uploadBackground
    bg_imgTag.src = background_image

    rover_imgTag = new Image()
    rover_imgTag.onload = uploadRover
    rover_imgTag.src = rover_image
}

function uploadBackground(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, 
        rover_width, rover_height)
}
window.addEventListener("keydown", myKeydown)

function myKeydown(e){
    keyPressed = e.keyCode
    console.log(keyPressed)
    if(keyPressed == '37'){
       left()
       console.log("left")
    }
    if(keyPressed == '38'){
        up()
        console.log("up")
     }
     if(keyPressed == '39'){
        right()
        console.log("right")
     }
     if(keyPressed == '40'){
        down()
        console.log("down")
     }
}
function right(){
    if (rover_x<=600){
        rover_x= rover_x+15
        uploadBackground()
        uploadRover()
    }
}
function left(){
    if (rover_x>=0){
        rover_x= rover_x-15
        uploadBackground()
        uploadRover()
    }
}
function down(){
    if(rover_y<=450){
        rover_y= rover_y+15
        uploadBackground()
        uploadRover()
    }
    }
    function up(){
        if(rover_y>=0){
            rover_y= rover_y-15
            uploadBackground()
            uploadRover()
        }
        }