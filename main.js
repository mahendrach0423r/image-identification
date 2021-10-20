Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_qulity:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="selfie_img"  src="'+data_uri+'"/>';
    });
}

 console.log('ml5 vresion :' , ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aLDrvkekG/' , modelLoaded);


 function modelLoaded()
 {
    console.log('modelLoaded');
 }

 function check()
 {
     img = document.getElementById("selfie_img");
     classifier.classify(img , gotResult);
 }

 function gotResult(error , results)
 {
     if (error)
     {
         console(error);
     }
     else{
         console.log(result);
         document.getElementById("name_of_the_object").innerHTML = results[0].label;
         document.getElementById("accuracy_of_object").innerHTML = results[0].confidence.toFixed(3);
     }
 }