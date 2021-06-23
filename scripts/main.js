// equivalent to 60 fps
// 
// changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
let i = 0;
var myOtherBox = document.getElementById('myOtherBox');
// var myFirstBox = document.getElementById('myBox');

// for (let i = 0.01; i > rotationSpeed.length; i++) {
// 	rotationSpeed - i ;
// }
		

function spin(){
	myOtherBox.object3D.rotation.y += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);
}

 setInterval(spin, 16);



// changing individual properties with code and using setInterval
// var rotationSpeed = 5;
// var myOtherBox = document.getElementById('myOtherBox');
// 
// for (let i = 0.01; i > rotationSpeed.length; i++) {
// 	rotationSpeed - i ;
// }
// 
// 
// function spin(){
// 	myOtherBox.object3D.rotation.x -= rotationSpeed;
// 	myOtherBox.object3D.rotation.y -= rotationSpeed;
// 	myOtherBox.object3D.rotation.z -= rotationSpeed;
// 	console.log(myOtherBox.object3D.rotation.x);
// }
// 
// setInterval(spin, 16); //equivalent to 60 fpss














