// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window) {
  var byeSpeaker = {};
    var speakWord = "Good Bye";
    
    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.byeSpeaker = byeSpeaker;
}) (window);
