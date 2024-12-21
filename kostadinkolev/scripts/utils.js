window.addEventListener("keydown", function(e) {
        if(["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
}, false);

window.onbeforeunload = function () {
        window.scrollTo(0, 0);
}

function disableScroll() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
       

        window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
        };
};
    
function enableScroll() {
         window.onscroll = function() { onScrollReveal() };
}

function onScrollReveal() {
        if (checkVisibleHomeDesktop(homeInfo) && homeActive) {
                homeActive = false;
                homeGif.classList.remove('reveal-image');
                homeGif.classList.remove('reveal-image-fast');
                homeGif.classList.add('hide-image-fast');
        }
        if (!checkVisibleHomeDesktop(homeInfo) && !homeActive) {
                homeActive = true;
                homeGif.classList.remove('hide-image-fast');
                homeGif.classList.add('reveal-image');
        }


        if (checkVisibleDesktop(contactContainer)) {
                initLogo();
                gifActive = true;
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image-fast');

                contactContainer.classList.remove('hide-image-fast');
                contactContainer.classList.add('reveal-image-fast');
        } 
        if ((!checkVisibleDesktop(contactContainer)) && gifActive) {

                fullscreenGif.classList.remove('reveal-image-fast');
                fullscreenGif.classList.add('hide-image-fast');

                contactContainer.classList.remove('reveal-image-fast');
                contactContainer.classList.add('hide-image-fast');
                gifActive = false;
        }
};

gifActive = false;
homeActive = true;
window.onscroll = function() { onScrollReveal() };

function checkVisibleHomeDesktop(elm) {
        var rect = elm.getBoundingClientRect();
        return (rect.y < 50);
}


function checkVisibleDesktop(elm) {
        var rect = elm.getBoundingClientRect();
        return !(rect.x > 500);
}

xButton.addEventListener('click', hideVimeo, false);

document.addEventListener('keyup', (e) => {
        if (e.key == "Escape" && videoActive) {
                player.pause();
                player.exitFullscreen();
                hideVimeo();
        }
});

document.addEventListener('keyup', (e) => {
        if (e.key == "f" && videoActive) {
                player.requestFullscreen();
        }
});

document.addEventListener('keyup', (e) => {
        if (e.key == " " && videoActive) {
                player.getPaused().then(function(paused) {
                        if (paused) {
                                player.play();
                        } else {
                                player.pause();
                        }
                })
        }
});

document.addEventListener('keyup', (e) => {
        if (e.key == "m" && videoActive) {
                player.getMuted().then(function(muted) {
                        if (muted) {
                                player.setMuted(false);
                        } else {
                                player.setMuted(true);
                        }
                })
        }
});

document.addEventListener('click', () => {
        if (videoActive) {
                hideVimeo();
        }
        
});

function changeFocus() {
        if (document.activeElement == document.getElementsByTagName("iframe")[0]) {
            window.focus();
        }
}
    
window.setInterval(changeFocus, 1000);