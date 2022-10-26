// corresponding js code
const sentece = window.prompt();
let vowels = 0;
let words = 0;
let i = 0;
while (sentece[i] != ".") {
  if (
    sentece[i].toLowerCase() == "a" ||
    sentece[i].toLowerCase() == "e" ||
    sentece[i].toLowerCase() == "i" ||
    sentece[i].toLowerCase() == "o" ||
    sentece[i].toLowerCase() == "u"
  ) {
    vowels++;
  }
  if (sentece[i] == " ") {
    words++;
  }
  i++;
}
console.log(`Sentece is : ${sentece}`);
console.log(`Number of vowels is ${vowels}`);
console.log(`Number of words is ${words + 1}`);
