
// Function (algemeen)

function nameOfFunction (parameters) {
    this.parameters = outcome
}
console.log(nameOfFunction())


// for loop array
var arraylist = ["hallo", "hey", "hoi"];
for (let i = 0; i < arraylist.length; i++){
    console.log("hallo" + arraylist[i]);
}

// for loop objects
var names2 = ["hallo", "hey", "hoi"];

var myObj = {
    name: "Carina",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};
for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

//  Do/while loop

Do (i + 9)
    while (i < 3);
 

// if loop
if (10 == "10") { 
    return true
}
return false

// Objects
var literalCircle = {
    radius: 10,
    color: "blue",

    getArea: function () {
        console.log(this);
        return Math.PI * Math.pow (this.radius, 2);
    }
};

literalCircle.getArea();

//  arrays
var arraylist = ["hallo", "hey", "hoi"];

var array = new Array();
array[0] = "Carina";
array[1] = 13;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2] (array[0]);
console.log(array[3].course);