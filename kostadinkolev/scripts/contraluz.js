var playerContraluz = new Vimeo.Player(document.getElementById('vimeo-contraluz'));
var t = document.getElementById('vimeo-player-contraluz');

window.addEventListener('click', () => {
        playerContraluz.requestFullscreen().then(function() {
                playerContraluz.play();
        });
});

playerContraluz.ready().then(function() {
        playerContraluz.play();
        playerContraluz.requestFullscreen().then(function() {
                playerContraluz.play();
                // playerContraluz.on('fullscreenchange', fullscreenBose);
                // boseLoaded = true;
            });
});