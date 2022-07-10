//we are now going to create a javascript object
const car ={
    size : "havy",
    color : "red",
    seetertype: "fourseeter"
}
document.getElementById('box').innerHTML = "The size of this car is so " + car.size 
+ ' and the color of this car ' + car.color +" "+ " and the seeter type is "+ car.seetertype;