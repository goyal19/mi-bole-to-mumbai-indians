song=""

function preload(){
    song=loadSound("song.mp3")
    song2=loadSound("song2.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
 video.hide();   
}

function draw(){
    image(video,0,0,600,500);
    
}
function play(){
    song.play()
}
