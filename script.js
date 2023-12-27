var wordSets = [
  ["read a book"],
  ["watch some anime"],
  ["chill by the deck door"],
  ["take a shower"],
  ["meditate"],
  ["go for a walk"],
  ["play with Olive"],
  ["do laundry"],
  ["take a nap"]
];

var currentWordSetIndex = 0;

function flipWord() {
  var sentenceElement = document.getElementById("sentence");
  function flipWord() {
   var sentenceElement = document.getElementById("sentence");
   var currentWordSet = wordSets[currentWordSetIndex];

   var words = sentenceElement.textContent.split(" ");
   words.splice(0, currentWordSet.length, ...currentWordSet);

   sentenceElement.innerHTML = words.join(" ");

   currentWordSetIndex = (currentWordSetIndex + 1) % wordSets.length;
}
