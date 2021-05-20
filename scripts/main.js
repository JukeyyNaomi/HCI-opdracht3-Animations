// equivalent to 60 fps

// changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spinFast(){
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);
}

function spinSlow(){
	myOtherBox.object3D.rotation.y += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.z += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);
}

//  setInterval(spinFast, 6, 1000);
 setInterval(spinSlow, 70, 500);
















