var wordSets = [
  ["read", "a", "book"],
  ["watch", "some", "anime"],
  ["chill", "by", "the", "deck", "door"],
  ["take", "a", "shower"],
  ["meditate"],
  ["go", "for", "a", "walk"],
  ["play", "with", "Olive"],
  ["do", "laundry"],
  ["take","a", "nap"]
];

var currentWordSetIndex = 0;

function flipWord() {
  var sentenceElement = document.getElementById("sentence");
  var flippedElement = document.createElement("span");
  flippedElement.classList.add("flipped");

  var currentWordSet = wordSets[currentWordSetIndex];

 var words = sentenceElement.textContent.split(" ");
  words.splice(0, currentWordSet.length, ...currentWordSet);

  flippedElement.innerHTML = words.join(" ");

  if (sentenceElement.childNodes.length === 1) {
    sentenceElement.appendChild(flippedElement);
  } else {
    sentenceElement.removeChild(sentenceElement.childNodes[1]);
  }

  currentWordSetIndex = (currentWordSetIndex + 1) % wordSets.length;
}
