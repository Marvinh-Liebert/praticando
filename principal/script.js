const logo = document.getElementById('logo')
const audio = document.getElementById('myaudio')
audio.volume = 0.2

logo.addEventListener('mouseenter', () =>{
    audio.currentTime = 0
    audio.play()
})