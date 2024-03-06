//https://teachablemachine.withgoogle.com/models/qWh9TZh4_/

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        ;
    });
}

console.log('ml5Version', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qWh9TZh4_/model.json', modelLoaded)
function modelLoaded(){
    console.log("Modelo cargado")
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = 'La primera prediccion es:' + prediccion1;
    speak_data_2 = ' Y la segunda prediccion es:' + prediccion1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 = speak_data_2);
    synth.speak(utterThis)
}
    