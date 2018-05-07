

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "Fine"];
    console.log(names)

    function speakHello(name) {
        var speakWordHoi = "Hello";
        console.log(speakWordHoi)
        console.log(speakWordHoi + " " + name);
      }

    function speakBye(name) {
        var speakWord = "Good Bye";
        console.log(speakWord + " " + name);
      }

function wholeFunction() {
      for (var i = 0; i < names.length; i++) {
          console.log(names.length)
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            speakBye(names[i]);
          } else {
            speakHello(names[i]);
          }
        }
}
console.log(wholeFunction(john))