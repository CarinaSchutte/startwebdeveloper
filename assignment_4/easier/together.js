

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    console.log(names)

    function speakHello(name) {
        let speakWordHoi = "Hello";
        let firstLetter = names[i].charAt(0).toLowerCase();
        console.log(speakWordHoi + firstLetter + name);
        console.log(speakWord)
      }

    function speakBye(name) {
        var speakWord = "Good Bye";
        console.log(speakWord + firstLetter + name);
      }

(function wholeFunction() {
      for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            speakBye(names[i]);
          } else {
            speakHello(names[i]);
          }
        }
})
console.log(wholeFunction(john))