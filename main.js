const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause video
function toggleVideoStatus() {
  return true;
}

//update play and pause icons
function updatePlayIcon() {
  return true;
}

//updating progress and time stamp
function updateProgress() {
  return true;
}

//Set video time to progress
function setVideoProgress() {
  return true;
}

//stopping video
function stopVideo() {
  return true;
}

//Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
