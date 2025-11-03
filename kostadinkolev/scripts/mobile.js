window.onbeforeunload = function () {
        window.scrollTo(0, 0);
        
};

window.addEventListener("load", addMobileEventListeners, false);

var contactContainerMobile = document.getElementById('contact-container-mobile');
contactContainerMobile.addEventListener('click', () => {
        console.log('contactmobilecontainer');
})

var linkContact = document.getElementById('link-contact');
linkContact.addEventListener('click', () => {
        console.log('LINK');
})

var contactGif = document.getElementById('contact-gif');
var homeInfo = document.getElementById('home');
var fullscreenGifMobile = document.getElementById('fullscreen-gif-mobile');
var homeGif = document.getElementById('home-container');

gifActive = false;
homeActive = true;
window.onscroll = function() {
        if (checkVisibleHome(homeInfo) && homeActive) {
                homeActive = false;
                homeGif.classList.remove('reveal-image');
                homeGif.classList.remove('reveal-image-fast');
                homeGif.classList.add('hide-image-fast');
        }
        if (!checkVisibleHome(homeInfo) && !homeActive) {
                homeActive = true;
                homeGif.classList.remove('hide-image-fast');
                homeGif.classList.add('reveal-image');
        }
}

function checkVisibleHome(elm) {
        var rect = elm.getBoundingClientRect();
        // console.log(rect);
        return (rect.y < 50);
}


function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        // console.log(rect);
        return rect.y < 300;
}





const videoContainer = document.getElementById('contraluz-video');




const titleContainerMobile = document.getElementById('titles-mobile');
let mappedTitlesMobile = allProjects.map(a => {
        return `<div id="${a.projectName}">${a.typeoutName}</div>`
});
titleContainerMobile.innerHTML+=mappedTitlesMobile.join("");






const modalContent = document.getElementById('modal_content');

var allVimeoSourcesMobile = []
for (let k=0;k<allProjects.length;k++) {
        allVimeoSourcesMobile.push(allProjects[k].vimeoPath);
}
modalContent.innerHTML += `<div class="vimeo-player-mobile" id="vimeo-player-mobile">
                                <iframe id="vimeo-mobile" src="https://player.vimeo.com/video/1013677740?autoplay=1&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"title="adidas"></iframe>
                          </div>`

var player = new Vimeo.Player(document.getElementById('vimeo-mobile'));



const modalContainer = document.getElementById('modal-container');
const mobileContainer = document.getElementById('mobile-container');
modalContainer.addEventListener('click', () => {
        player.pause();
        
        document.body.classList.remove('modal-active');
        htmlElement.classList.remove('modal-active');
        mobileContainer.classList.remove('modal-active');
        modalContainer.classList.remove('on');
        modalContainer.classList.add('out');

        
        
        mobileContainer.classList.remove('leave');
        mobileContainer.classList.remove('fadeIn');
        vimeoBoxMobile.classList.remove('reveal-image');
        vimeoBoxMobile.classList.add('hide-image');
        
});

const vimeoBoxMobile = document.getElementById('vimeo-player-mobile');
const vimeoMobile = document.getElementById('vimeo-mobile');

const htmlElement = document.getElementById('html');

function initiateModal() {
        document.body.classList.add('modal-active');
        mobileContainer.classList.add('modal-active');
        htmlElement.classList.add('modal-active');

        setTimeout(() => {
                mobileContainer.classList.remove('comeBack');
                modalContainer.classList.remove('out');
                setTimeout(() => {
                        modalContainer.classList.add('on'); 
                }, 100);
                mobileContainer.classList.add('leave');
                
                vimeoBoxMobile.style.opacity = '1';
                vimeoBoxMobile.classList.remove('hide-image');
                vimeoBoxMobile.classList.add('reveal-image');
                player.play();
                player.requestFullscreen();
        }, 300);
}

function addMobileEventListeners() {
        for (let i=0;i<allProjects.length;i++) {
                var currentProject = document.getElementById(allProjects[i].projectName);
                currentProject.addEventListener('click', () => {
                        vimeoMobile.setAttribute('src', allVimeoSourcesMobile[i]);
                        initiateModal();
                }) 
        }
};