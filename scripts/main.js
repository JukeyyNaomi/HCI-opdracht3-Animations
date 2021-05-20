// equivalent to 60 fps

// changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

 setInterval(spin, 16);
















