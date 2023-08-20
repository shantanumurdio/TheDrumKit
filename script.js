var currentlyPlayingAudio = null;

function playAudio(audioID) {
    if(currentlyPlayingAudio){
        currentlyPlayingAudio.pause();
    }

    var audio = document.getElementById(audioID);
    audio.play();
    currentlyPlayingAudio = audio;
}