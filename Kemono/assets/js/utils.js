var AudioTrack = document.getElementById("AudioTrack");
var MuteButton = document.getElementById("MuteButton");
var IsAudioMuted = false;

function SetAudioMuted(flag){
    AudioTrack.muted = flag;
}

function HandleMuteButton(){
    IsAudioMuted = !IsAudioMuted;
    SetAudioMuted(IsAudioMuted);

    if (IsAudioMuted){
        MuteButton.src = "assets/img/off.png";
    }
    else
    {
        MuteButton.src = "assets/img/on.png";
    }
}