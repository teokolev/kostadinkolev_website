var fullscreenGif = document.getElementById('fullscreen-gif');
var vimeoPlayer = document.getElementById('vimeo-player');
var titles = document.getElementById('titles');
var xButton = document.getElementById('x');
var projectInfo = document.getElementById('information');
var vimeoIframe = document.getElementById('vimeo');

var projectTitle = document.getElementById('project-title');
var projectType = document.getElementById('project-type');
var projectYear = document.getElementById('project-year');
var homeGif = document.getElementById('home-container');


var contraluzText = document.getElementById('contraluz-desktop');
var adidasText = document.getElementById('adidas-desktop');
var futurelandText = document.getElementById('futureland-desktop');
var boseText = document.getElementById('bose-desktop');
var ccText = document.getElementById('cc-desktop');
var marcText = document.getElementById('marc-desktop');
var urbanText = document.getElementById('urban-desktop');
var polestarText = document.getElementById('polestar-desktop');
var bambiiText = document.getElementById('bambii-desktop');
var beattyText = document.getElementById('beatty-desktop');
var yslText = document.getElementById('ysl-desktop');
var bulgariaText = document.getElementById('bulgaria-desktop');
var bazaarText = document.getElementById('bazaar-desktop');
var reelText = document.getElementById('reel-desktop');

var contactContainer = document.getElementById('contact-container');
var contactGif = document.getElementById('contact-gif');
var homeInfo = document.getElementById('home');

allWorks = [contraluzText, adidasText, futurelandText, boseText, ccText, marcText, urbanText, polestarText, bambiiText, beattyText, yslText, bulgariaText, bazaarText, reelText]

// -----------------HOME GIF + LOGO GIF------------------------//

var videoHome = document.getElementById("video-home")
videoHome.addEventListener("loadedmetadata", initHome)

function initHome() {
        videoHome.removeEventListener("loadedmetadata", initHome);
        videoHome.play();
        videoHome.addEventListener('timeupdate', funcloop=function(){
                if (videoHome.currentTime > (videoHome.duration - 0.01)) {
                        videoHome.currentTime = 0.01;
                        videoHome.play()
                }
        }, false);
};

function initLogo() {
        if (gifActive) {
                return;
        }
        workVideo.src = "/assets/MP4/LOGO.mp4";
        workVideo.currentTime = 0.4;
        workVideo.play(); 
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};


var videoActive = false;
var player = new Vimeo.Player(document.getElementById("vimeo"));

function showVimeo() {
        disableScroll();
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        
        x.classList.remove('hide-image');
        x.classList.add('reveal-image');

        // projectInfo.classList.remove('hide-image');
        // projectInfo.classList.add('reveal-image');

        vimeoPlayer.classList.remove('hide-image');
        vimeoPlayer.classList.add('reveal-image');


        setTimeout(() => {
                videoActive = true;
                vimeoPlayer.style.zIndex = '999';
        }, 2000);
        
        player.ready().then(function() {
                
                setTimeout(() => {
                        player.play(); 
                }, 1000); 
        });
        
}

function hideVimeo() {
        enableScroll();
        vimeoPlayer.style.zIndex = '-999';


        titles.classList.remove('hide-image');
        titles.classList.add('reveal-image');

        vimeoPlayer.classList.remove('reveal-image');
        vimeoPlayer.classList.add('hide-image');

        x.classList.remove('reveal-image');
        x.classList.add('hide-image');

        // projectInfo.classList.remove('reveal-image');
        // projectInfo.classList.add('hide-image');

        player.pause();
        setTimeout(() => {
                player.setCurrentTime(0);
        }, 2000);

        titles.style.pointerEvents = 'all';
        
        videoActive = false;
}

// ------------------------------------------------------------------------------------------ //

contraluzText.addEventListener('click', contraluzVideo, false);

var workVideo = document.getElementById("work-video");

function initContraluz() {
        workVideo.src = "/assets/MP4/CONTRALUZ.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifContraluz() {
        initContraluz();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
        }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');


        for (var i=0; i < allWorks.length; i++) {
                if (i == 0) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifContraluz() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');


        for (var i=0; i < allWorks.length; i++) {
                if (i == 0) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

function contraluzVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/925424364?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        // projectTitle.innerHTML = 'CONTRALUZ X MALUMA';
        // projectType.innerHTML = 'FOOD & BEVERAGE';
        // projectYear.innerHTML = '2023';
        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
}

contraluzText.addEventListener('mouseenter', showBigGifContraluz, false);
contraluzText.addEventListener('mouseleave', hideBigGifContraluz, false);


// ------------------------------------------------------------------------------------------ //

function initAdidas() {
        workVideo.src = "/assets/MP4/ADIDAS.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifAdidas() {
        initAdidas();
        // fullscreenGif.style.background = 'url(/assets/NOSCHT_WEBSITE_GIFS_ADIDAS.gif)';
        // fullscreenGif.style.backgroundSize = 'cover';
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        

        for (var i=0; i < allWorks.length; i++) {
                if (i == 1) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifAdidas() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 1) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

adidasText.addEventListener('mouseenter', showBigGifAdidas, false);
adidasText.addEventListener('mouseleave', hideBigGifAdidas, false);

adidasText.addEventListener('click', adidasVideo, false);

function adidasVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/1013677740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'ADIDAS X TRAE YOUNG';
        // projectType.innerHTML = 'CAMPAIGN';
        // projectYear.innerHTML = '2024';
        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
}

// ------------------------------------------------------------------------------------------ //

function initFutureland() {
        workVideo.src = "/assets/MP4/FUTURELAND.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifFutureland() {
        initFutureland();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 2) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifFutureland() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 2) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

futurelandText.addEventListener('mouseenter', showBigGifFutureland, false);
futurelandText.addEventListener('mouseleave', hideBigGifFutureland, false);

futurelandText.addEventListener('click', futurelandVideo, false);

function futurelandVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/786053616?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'FUTURELAND';
        // projectType.innerHTML = 'CREATIVE ADVERTISEMENT';
        // projectYear.innerHTML = '2022';
        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
}

// ------------------------------------------------------------------------------------------ //

function initBose() {
        workVideo.src = "/assets/MP4/BOSE.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifBose() {
        initBose();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 3) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifBose() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 3) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

boseText.addEventListener('mouseenter', showBigGifBose, false);
boseText.addEventListener('mouseleave', hideBigGifBose, false);

boseText.addEventListener('click', boseVideo, false);

function boseVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/925403898?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'BOSE X COCO GAUFF';
        // projectType.innerHTML = 'CAMPAIGN';
        // projectYear.innerHTML = '2024';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

function hideTitles() {
        titles.classList.remove('reveal-image');
        titles.classList.add('hide-image');
        titles.style.zIndex = '-999999';
        titles.style.pointerEvents = 'none';
}

// ------------------------------------------------------------------------------------------ //

function initCC() {
        workVideo.src = "/assets/MP4/CC.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifCC() {
        initCC();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 4) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifCC() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 4) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

ccText.addEventListener('mouseenter', showBigGifCC, false);
ccText.addEventListener('mouseleave', hideBigGifCC, false);

ccText.addEventListener('click', ccVideo, false);

function ccVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/954469056?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'CALIFORNIA CLOSETS 2024';
        // projectType.innerHTML = 'COMMERCIAL';
        // projectYear.innerHTML = '2024';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initMarc() {
        workVideo.src = "/assets/MP4/MARC JACOBS.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifmarc() {
        initMarc();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 5) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifmarc() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 5) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

marcText.addEventListener('mouseenter', showBigGifmarc, false);
marcText.addEventListener('mouseleave', hideBigGifmarc, false);

marcText.addEventListener('click', marcVideo, false);

function marcVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/1013672752?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'MARC JACOBS';
        // projectType.innerHTML = 'FASHION + LUXURY';
        // projectYear.innerHTML = '2023';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initUrban() {
        workVideo.src = "/assets/MP4/UD.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifurban() {
        initUrban();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 6) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifurban() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 6) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

urbanText.addEventListener('mouseenter', showBigGifurban, false);
urbanText.addEventListener('mouseleave', hideBigGifurban, false);

urbanText.addEventListener('click', urbanVideo, false);

function urbanVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/1012646241?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'URBAN DECAY MONDIALE';
        // projectType.innerHTML = 'BEAUTY';
        // projectYear.innerHTML = '2024';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initPolestar() {
        workVideo.src = "/assets/MP4/POLESTAR.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifpolestar() {
        initPolestar();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 7) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifpolestar() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 7) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

polestarText.addEventListener('mouseenter', showBigGifpolestar, false);
polestarText.addEventListener('mouseleave', hideBigGifpolestar, false);

polestarText.addEventListener('click', polestarVideo, false);

function polestarVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/1013672453?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'POLESTAR 3 NYC LAUNCH';
        // projectType.innerHTML = 'EVENT CAPTURE';
        // projectYear.innerHTML = '2024';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initBambii() {
        workVideo.src = "/assets/MP4/BAMBII.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifbambii() {
        initBambii();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 8) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifbambii() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 8) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

bambiiText.addEventListener('mouseenter', showBigGifbambii, false);
bambiiText.addEventListener('mouseleave', hideBigGifbambii, false);

bambiiText.addEventListener('click', bambiiVideo, false);

function bambiiVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/357900879?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'BAMBI "NITEVISION"';
        // projectType.innerHTML = 'MUSIC VIDEO';
        // projectYear.innerHTML = '2019';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initBeatty() {
        workVideo.src = "/assets/MP4/PARTYS OVER.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifbeatty() {
        initBeatty();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 9) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifbeatty() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 9) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

beattyText.addEventListener('mouseenter', showBigGifbeatty, false);
beattyText.addEventListener('mouseleave', hideBigGifbeatty, false);

beattyText.addEventListener('click', beattyVideo, false);

function beattyVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/288258977?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'RYAN BEATTY "PARTY\'S OVER"';
        // projectType.innerHTML = 'MUSIC VIDEO';
        // projectYear.innerHTML = '2018';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initYSL() {
        workVideo.src = "/assets/MP4/LNX REBEL.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifysl() {
        initYSL();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 10) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifysl() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 10) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

yslText.addEventListener('mouseenter', showBigGifysl, false);
yslText.addEventListener('mouseleave', hideBigGifysl, false);

yslText.addEventListener('click', yslVideo, false);

function yslVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/1012646511?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = 'YSL LNX REBEL';
        // projectType.innerHTML = 'FASHION + LUXURY';
        // projectYear.innerHTML = '2024';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initBulgaria() {
        workVideo.src = "/assets/MP4/CHILDS HOME.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifbulgaria() {
        initBulgaria();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 11) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifbulgaria() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 11) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

bulgariaText.addEventListener('mouseenter', showBigGifbulgaria, false);
bulgariaText.addEventListener('mouseleave', hideBigGifbulgaria, false);

bulgariaText.addEventListener('click', bulgariaVideo, false);

function bulgariaVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/938691368?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = "A CHILD'S HOME (TRAILER)";
        // projectType.innerHTML = 'DOCUMENTARY';
        // projectYear.innerHTML = '2024';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initBazarr() {
        workVideo.src = "/assets/MP4/BAZAAR.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifbazaar() {
        initBazarr();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 12) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifbazaar() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 12) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

bazaarText.addEventListener('mouseenter', showBigGifbazaar, false);
bazaarText.addEventListener('mouseleave', hideBigGifbazaar, false);

bazaarText.addEventListener('click', bazaarVideo, false);

function bazaarVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/423321791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // projectTitle.innerHTML = "BAZAAR";
        // projectType.innerHTML = 'EXPERIMENTAL';
        // projectYear.innerHTML = '2019';

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);
        
}

// ------------------------------------------------------------------------------------------ //

function initReel() {
        workVideo.src = "/assets/MP4/REEL.mp4";
        workVideo.play();
        workVideo.addEventListener('timeupdate', funcloop=function(){
                if (workVideo.currentTime > (workVideo.duration - 0.01)) {
                        workVideo.currentTime = 0.01;
                        workVideo.play();
                }
        }, false);
};

function showBigGifreel() {
        initReel();
        if (fullscreenGif.classList.contains('hide-image-fast')){
                fullscreenGif.classList.remove('hide-image-fast');
                fullscreenGif.classList.add('reveal-image');
            }
        
        fullscreenGif.classList.remove('hide-image');
        fullscreenGif.classList.add('reveal-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 13) {
                        continue;
                }
                allWorks[i].classList.remove('unblur');
                allWorks[i].classList.add('blur');
        }
}

function hideBigGifreel() {
        fullscreenGif.classList.remove('reveal-image');
        fullscreenGif.classList.add('hide-image');

        for (var i=0; i < allWorks.length; i++) {
                if (i == 13) {
                        continue;
                }
                allWorks[i].classList.remove('blur');
                allWorks[i].classList.add('unblur');
        }
}

reelText.addEventListener('mouseenter', showBigGifreel, false);
reelText.addEventListener('mouseleave', hideBigGifreel, false);

reelText.addEventListener('click', reelVideo, false);

function reelVideo() {
        vimeoIframe.src = "https://player.vimeo.com/video/914863354?h=2af003c63c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        // 

        hideTitles();

        setTimeout(() => {
                showVimeo();
        }, 500);    
}