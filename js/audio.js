const stepOne = new Audio('./audio/step-1.wav');
const stepTwo = new Audio('./audio/step-2.mp3');
const stepThree = new Audio('./audio/step-3.mp3');
const gunshot = new Audio('./audio/gunshot.wav');
const grunt = new Audio('./audio/grunt.wav');
const slash = new Audio('./audio/slash.wav');
const wound = new Audio('./audio/wound.wav');
const opening = new Audio('./audio/opening-music.mp3');

const openingAudio = document.querySelector('.play-music');
const volumeIcon = document.getElementById('volume-icon');

// Click event listener to the opening audio element
openingAudio.addEventListener('click', () => {
  if (openingAudioPlaying) {
    pauseOpeningAudio();
    volumeIcon.classList.remove('fa', 'fa-volume-up');
    volumeIcon.classList.add('fa', 'fa-volume-mute');
  } else {
    playOpeningAudio();
    volumeIcon.classList.remove('fa', 'fa-volume-mute');
    volumeIcon.classList.add('fa', 'fa-volume-up');
  }
});

let openingAudioPlaying = false;

// Function to start playing the opening audio
function playOpeningAudio() {
    opening.play()
      .then(() => {
        openingAudioPlaying = true;
      })
      .catch((error) => {
        console.error('Error playing opening audio:', error);
        openingAudioPlaying = false;
      });
  }
  
  // Function to pause the opening audio
  function pauseOpeningAudio() {
    opening.pause();
    openingAudioPlaying = false;
    volumeIcon.classList.remove('fa', 'fa-volume-up');
    volumeIcon.classList.add('fa', 'fa-volume-mute');
  }

 // Event listener for the "ended" event of the opening audio
opening.addEventListener('ended', () => {
  openingAudioPlaying = false;
  volumeIcon.classList.remove('fa', 'fa-volume-up');
  volumeIcon.classList.add('fa', 'fa-volume-mute');
});