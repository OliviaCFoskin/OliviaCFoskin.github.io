var wordSets = [
  ["Why dont we watch some anime"],
  ["Why dont we chill by the deck door"],
  ["Why dont we take a shower"],
  ["Why dont we meditate"],
  ["Why dont we go for a walk"],
  ["Why dont we play with Olive"],
  ["Why dont we do laundry"],
  ["Why dont we take a nap"],
  ["Why dont we go read a book"]
];

var currentWordSetIndex = 0;

function flipWord() {
  var sentenceElement = document.getElementById("sentence");
  var currentWordSet = wordSets[currentWordSetIndex];

  var words = sentenceElement.textContent.split(" ");
  words.splice(0, currentWordSet.length, ...currentWordSet);

  sentenceElement.innerHTML = words.join(" ");

  currentWordSetIndex = (currentWordSetIndex + 1) % wordSets.length;

  // Check if all sets have been flipped, then reset
  if (currentWordSetIndex === 0) {
    resetWordSet();
  }
}

function resetWordSet() {
  currentWordSetIndex = 0;
}
