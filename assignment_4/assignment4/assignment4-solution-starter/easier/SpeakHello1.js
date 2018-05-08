// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function (){
  var speakWord = "Hello";
  function speak () {}
})();

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var helloSpeaker = {
  speak () {}
};

helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name)
} 



console.log(helloSpeaker);
helloSpeaker.name = names;
console.log(helloSpeaker.name[5]);
helloSpeaker.try = function () {
  console.log("hello" + helloSpeaker.name)
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
      // if (firstLetter === 'j') {
      //   byeSpeaker.speak(names[i]);
      // } else {
      //   helloSpeaker.speak(names[i]);
      // }
  console.log()
  }
}
// var hello = 10;
// console.log(hello);
// var a = 1;
// console.log(a);




// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(speakWord + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
