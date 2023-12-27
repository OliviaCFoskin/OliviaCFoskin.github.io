var wordSets = [
  ["watch some anime"],
  ["chill by the deck door"],
  ["take a shower"],
  ["meditate"],
  ["go for a walk"],
  ["play with Olive"],
  ["do laundry"],
  ["take a nap"],
  ["go read a book"]
];

var currentWordSetIndex = 0;

function flipWord() {
  var sentenceElement = document.getElementById("sentence");
  var currentWordSet = wordSets[currentWordSetIndex];

  var words = sentenceElement.textContent.split(" ");

  for (var i = 3; i < words.length; i++) {
    words[i] = currentWordSet[i - 3];
  }

  sentenceElement.innerHTML = words.join(" ");

  currentWordSetIndex = (currentWordSetIndex + 1) % wordSets.length;

  if (currentWordSetIndex === 0) {
    resetWordSet();
  }
}
