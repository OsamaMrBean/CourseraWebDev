( function (window) {

  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  
  var speakWord = "Good bye";
  
  window.byeSpeaker = byeSpeaker;
  
  })(window)
