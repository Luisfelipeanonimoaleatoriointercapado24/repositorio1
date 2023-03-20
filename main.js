var SpeechRecognition = window.webikitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("Textbox")

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event)
{
    console.log(event)
    var content = event.result[0][0].transcript;
    Textbox.innerHTML = content
    console.log(content);
    speak();
}
function speak(){
 var synth = window.speechSynthesis;
 speak_data = document.getElementById ("textbox").value;
 var utterThis = new SpeechSynthesisUtterance(speak_data)
 synth.speak (utterThis)
Webcam.atthach(camera)
}
 console.log ("tirando selfie ")

 camera = document.getElementById("camera");
Webcam.set({
whidth:360,
heigth:250,
image_format : 'png',
png_quality:90
 });

