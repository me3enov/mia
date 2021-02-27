//video item
const vid = document.querySelector('.main-content__showreel');
//play button
const playBtn = document.querySelector('.video-icons__btn_type_play');
//mute button
const muteBtn = document.querySelector('.video-icons__btn_type_mute');

//play video
function togglePlay() {
  playBtn.classList.toggle('video-icons__btn_state_play');
  return vid.paused ? vid.play() : vid.pause();
}

//mute video
function toggleMute() {
  muteBtn.classList.toggle('video-icons__btn_state_mute');
  return vid.paused ? vid.muted = false : vid.muted = true;
}

//set event listeners video
playBtn.addEventListener('click', togglePlay);
muteBtn.addEventListener('click', toggleMute);

export {vid};