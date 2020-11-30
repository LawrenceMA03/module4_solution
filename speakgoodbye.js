
STEP 7: Create an object, called 'byeSpeaker' to which you will attach

(function(){
	var byeSpeaker = {};

var speakWord = "Good Bye";
byeSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

window.byeSpeaker = byeSpeaker;

})();
