let messages = [
        "this site is dog shit",
	"this site was coppied and pasted",
	"horribly programmed ah website",
	"who gave the child who made this access to the internet",
	"who the fuck obfuscates with obfuscator.io and then obfuscates with an eval obfuscator",
        "Hey my name is sizzukie! I paste my color pallette on websites and give shoutouts to people for helping me paste"
];

var Writeout = document.getElementById('Writing');

function Writer() {
  var N = RandomInteger(0, messages.length);
  var s = {
    'loop': true
  };
  var O = new Typewriter(Writeout, s);
  O.typeString('$ ' + messages[N] + ' $').pauseFor(3750).deleteAll().pauseFor(25).callFunction(() => {
    O.stop();
    Writer();
  }).start();
}
function RandomInteger(v, N) {
  v = Math.ceil(v);
  N = Math.floor(N);
  return Math.floor(Math.random() * (N - v) + v);
}