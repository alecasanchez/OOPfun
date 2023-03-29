//const circle = {
//  radius: 1,
//  location: {
//    x: 1,
//    y: 1,
//  },//commas are extremely important!
//  draw: function() {
//    console.log("draw");
//  }
//};
//circle.draw();

// There are three members. draw is a function in an object which is called a method. the rest are properties. 100% fundamentally different learn this.


//Factories


//if object has one or more methods, call this object that it has behavior
// delete second circle
//define function called createCircle
//Move code into new function
//Do you need to declare the constant? or return the object? 
//what do you do with radius instead of hard coding 1? 
//what do you do if the key and the value are the same?
//Simplify
//Add draw method

// to create any circle, what do you do? (with circle.draw)

//Command F2 to target all highlighted instances
// option left click select arbitrary cursor


function createCircle(radius){//radius here
  return { //return object
    radius,
    draw: function(){
      console.log('draw');
    }
  };
}
const circle = createCircle(1);
circle.draw(); //dot notation calling draw method hey sup
