const serverOneText = document.getElementById('serverOne').innerText;
const serverTwoText = document.getElementById('serverTwo').innerText;
const serverThreeText = document.getElementById('serverThree').innerText;

//Target the text that we want

const newServerOne = serverOneText.slice(0, 32) + "...";
const newServerTwo = serverTwoText.slice(0, 32) + "...";
const newServerThree = serverThreeText.slice(0, 32) + "...";

console.log(newServerOne);
console.log(newServerTwo);
console.log(newServerThree);
document.getElementById('serverName').innerText = newText;