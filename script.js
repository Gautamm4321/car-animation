// Simple background music
const audio = new Audio('sound.mp3');
audio.loop = true;
audio.volume = 0.5;

let musicStarted = false;

// Page load hone pe music start
window.addEventListener('load', function() {
    audio.play().catch(function(error) {
        console.log('Music autoplay blocked, user click required');
        // Agar autoplay block ho toh click pe chalega
        document.addEventListener('click', function() {
            if (!musicStarted) {
                audio.play();
                musicStarted = true;
                document.querySelector('.music-info').innerHTML = '🎵 Music Playing - Press Space to pause';
            }
        }, { once: true });
    });
});

// Space key press pe play/pause
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        if (audio.paused) {
            audio.play();
            document.querySelector('.music-info').innerHTML = '🎵 Music Playing - Press Space to pause';
        } else {
            audio.pause();
            document.querySelector('.music-info').innerHTML = '🎵 Music Paused - Press Space to play';
        }
        musicStarted = true;
    }
});

// Optional: Hide music info after 5 seconds
setTimeout(function() {
    const info = document.querySelector('.music-info');
    if (info && musicStarted) {
        info.style.opacity = '0.5';
    }
}, 5000);

// Optional: Completely remove music info after 10 seconds
setTimeout(function() {
    const info = document.querySelector('.music-info');
    if (info && musicStarted) {
        info.style.display = 'none';
    }
}, 10000);
