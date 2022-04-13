status = "";

function setup()
{
    canvas = createCanvas(800, 576);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDectector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects..";
    inputvalue = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 800, 576);
}