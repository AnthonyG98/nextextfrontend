// Setting initial time of 0
let timeElement = document.getElementById("time");
let timeSet = parseInt(timeElement.innerHTML);

//Adding and subtracting time
const addTime = () => {
  timeSet += 5;

  document.getElementById("time").innerHTML = timeSet;
};
const subtractTime = () => {
  timeSet -= 5;

  document.getElementById("time").innerHTML = timeSet;
};

document.getElementById("add").addEventListener("click", addTime);

document.getElementById("subtract").addEventListener("click", subtractTime);
//Change URL to swtich to once time runs out
const changeUrl = () => {
  let tabUrl = document.getElementById("url-input").value;
  chrome.tabs.update(undefined, { url: tabUrl });
};
//Converts user input minutes into milliseconds
function minutesToMilliseconds(minutes) {
  return setTimeout(changeUrl, minutes * 60 * 1000);
}
//Execute extension functionality
document.getElementById("set-btn").addEventListener("click", () => {
  minutesToMilliseconds(timeSet);
});
