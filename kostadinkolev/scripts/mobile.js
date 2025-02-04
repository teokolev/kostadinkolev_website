// const video = document.getElementById('test');
// document.addEventListener("touchstart", function() {}, true);
// var videoHome = document.getElementById("video-home")
// videoHome.addEventListener("loadedmetadata", initHome)

// function initHome() {
//         // alert('here?')
//         videoHome.removeEventListener("loadedmetadata", initHome);
//         videoHome.play()
//         videoHome.addEventListener('timeupdate', funcloop=function(){
//                 if (videoHome.currentTime > (videoHome.duration - 0.01)) {
//                         // alert('?')
//                         videoHome.currentTime = 0.01;
//                         videoHome.play()
//                 }
//         }, false);
// };
window.onbeforeunload = function () {
        window.scrollTo(0, 0);
};

var contactContainerMobile = document.getElementById('contact-container-mobile');
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


        if (checkVisible(contactContainerMobile)) {
                console.log('show')
                gifActive = true;
                fullscreenGifMobile.classList.remove('hide-image-fast');
                fullscreenGifMobile.classList.add('reveal-image-fast');

                contactContainerMobile.classList.remove('hide-image-fast');
                contactContainerMobile.classList.add('reveal-image-fast');
        } 
        if ((!checkVisible(contactContainerMobile)) && gifActive) {
                console.log('hide');
                fullscreenGifMobile.classList.remove('reveal-image-fast');
                fullscreenGifMobile.classList.add('hide-image-fast');

                contactContainerMobile.classList.remove('reveal-image-fast');
                contactContainerMobile.classList.add('hide-image-fast');
                gifActive = false;
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

var contraluzText = document.getElementById('contraluz');
var adidasText = document.getElementById('adidas');
var futurelandText = document.getElementById('futureland');
var boseText = document.getElementById('bose');
var ccText = document.getElementById('cc');
var marcText = document.getElementById('marc');
var urbanText = document.getElementById('urban');
var polestarText = document.getElementById('polestar');
var bambiiText = document.getElementById('bambii');
var beattyText = document.getElementById('beatty');
var yslText = document.getElementById('ysl');
var bulgariaText = document.getElementById('bulgaria');
var bazaarText = document.getElementById('bazaar');
var reelText = document.getElementById('reel');

// var playerContraluz = new Vimeo.Player(document.getElementById('vimeo-contraluz'));
// var vimeoPlayer = document.getElementById('vimeo');
// contraluzText.addEventListener('click', () => {
//         // video.src += "&autoplay=1";
//         // video.src += "&playsinline=1";
//         contraluzText.click();
//         player.loadVideo("https://vimeo.com/914863354/2af003c63c").then(function(id) {
//                 // the video successfully loaded
//                 player.ready().then(function() {
//                         player.play();
//                         player.requestFullscreen().then(function() {
//                                 // the player entered fullscreen
//                             }).catch(function(error) {
//                                 // an error occurred
//                             });
//                     });
//                     videoContainer.classList.remove('hidden');
//             }).catch(function(error) {
//                 switch (error.name) {
//                     case 'TypeError':
//                         // the id was not a number
//                         break;
            
//                     case 'PasswordError':
//                         // the video is password-protected and the viewer needs to enter the
//                         // password first
//                         break;
            
//                     case 'PrivacyError':
//                         // the video is password-protected or private
//                         break;
            
//                     default:
//                         // some other error occurred
//                         break;
//                 }
//             });
//         // player.ready().then(function() {
//         //         player.play();
//         //         player.requestFullscreen().then(function() {
//         //                 // the player entered fullscreen
//         //             }).catch(function(error) {
//         //                 // an error occurred
//         //             });
//         //     });
        
        
//         // // let element = video.src;
//         // // element = element.replace("autoplay=0", "autoplay=1");
//         // // video.src = element;
//         // // video.src += "&playsinline=0";
//         // videoContainer.classList.remove('hidden');
// });



// playerContraluz.loadVideo("https://player.vimeo.com/video/925424364?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
// const fullscreenContraluz = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerContraluz.pause();
//                 playerContraluz.setCurrentTime(0);
//         };
// }
// var contraluzLoaded = false;

// contraluzText.addEventListener('click', () => {
//         // playerContraluz.off('fullscreenchange');
//         // playerContraluz.loadVideo("https://player.vimeo.com/video/925424364?autoplay=1&muted=1").then(function() {
//         //         playerContraluz.ready().then(function() {
//         //                 playerContraluz.play();
//         //                 playerContraluz.requestFullscreen().then(function() {
//         //                         playerContraluz.play();
//         //                         playerContraluz.on('fullscreenchange', fullscreenContraluz);
//         //                 });
//         //         })
//         // })

//                 // playerContraluz.ready().then(function() {
//         //         playerContraluz.requestFullscreen().then(function() {
//         //                 playerContraluz.play();
//         //                 playerContraluz.on('fullscreenchange', fullscreenContraluz);
//         //         }); 
//         // });




//         if (!contraluzLoaded) {
//                 playerContraluz.loadVideo("https://player.vimeo.com/video/925424364?autoplay=1&muted=1&playsinline=0");
//                 playerContraluz.requestFullscreen().then(function() {

//                 })
//                 playerContraluz.play();
//                 contraluzLoaded = true;

//         }
//         playerContraluz.ready().then(function() {
//                 playerContraluz.play();
//                 playerContraluz.requestFullscreen().then(function() {
//                         playerContraluz.play();
//                         playerContraluz.on('fullscreenchange', fullscreenContraluz);
//                         contraluzLoaded = true;
//                         adidasLoaded = false;
//                 });
//         });
        
// });

// // ----------------------------------------------------------------------------------------- //

// // var playerAdidas = new Vimeo.Player(document.getElementById('vimeo-adidas'));

// // playerContraluz.loadVideo("https://player.vimeo.com/video/1013677740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
// const fullscreenAdidas = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerContraluz.pause();
//                 playerContraluz.setCurrentTime(0);
//         };
// }
// var adidasLoaded = false;

// adidasText.addEventListener('click', () => {
//         playerContraluz.off('fullscreenchange');
//         playerContraluz.loadVideo("https://player.vimeo.com/video/1013677740?autoplay=1&muted=1&playsinline=0").then(function() {
//                 playerContraluz.ready().then(function() {
//                         playerContraluz.play();
//                         playerContraluz.requestFullscreen().then(function() {
//                                 playerContraluz.play();
//                                 playerContraluz.on('fullscreenchange', fullscreenAdidas);
//                         }); 
//                         });
//         })



//         // playerContraluz.loadVideo("https://player.vimeo.com/video/1013677740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//         // playerContraluz.ready().then(function() {
//         //         playerContraluz.requestFullscreen().then(function() {
//         //                 playerContraluz.play();
//         //                 playerContraluz.on('fullscreenchange', fullscreenAdidas);
//         //         }); 
//         // });

//         // playerContraluz.off('fullscreenchange');
//         // playerContraluz.loadVideo("https://player.vimeo.com/video/1013677740?autoplay=1&muted=1").then(function() {
//         //         playerContraluz.ready().then(function() {
//         //                 playerContraluz.play();
//         //                 playerContraluz.requestFullscreen().then(function() {
//         //                         playerContraluz.play();
//         //                         playerContraluz.on('fullscreenchange', fullscreenContraluz);
//         //                 });
//         //         })
                
//         // })


//         // if (!adidasLoaded) {
//         //         playerContraluz.loadVideo("https://player.vimeo.com/video/1013677740?autoplay=1&muted=1");
//         //         playerContraluz.ready().then(function() {
//         //                 alert('ready');
//         //                 return;
//         //                 playerContraluz.play();
//         //                 console.log('2')
//         //                 playerContraluz.requestFullscreen().then(function() {
//         //                         console.log('3')
//         //                         playerContraluz.play();
//         //                         // playerAdidas.play();
//         //                         playerContraluz.on('fullscreenchange', fullscreenAdidas);
//         //                         adidasLoaded = true;
//         //                         contraluzLoaded = false;
//         //                 });
//         //         });
//         //         // playerContraluz.play();
//         //         // adidasLoaded = true;
//         //         // console.log('1')
//         //         // playerContraluz.loadVideo("https://player.vimeo.com/video/1013677740?autoplay=1&muted=1").then(function() {
//         //         //         playerContraluz.play();
//         //         //         playerContraluz.on('fullscreenchange', fullscreenAdidas);
//         //         //         adidasLoaded = true;
//         //         //         contraluzLoaded = false;
//         //         //         return;
//         //         // })
                
//         // }
//         // playerContraluz.ready().then(function() {
//         //         playerContraluz.play();
//         //         console.log('2')
//         //         alert('!!')
//         //         playerContraluz.requestFullscreen().then(function() {
//         //                 console.log('3')
//         //                 playerContraluz.play();
//         //                 // playerAdidas.play();
//         //                 playerContraluz.on('fullscreenchange', fullscreenAdidas);
//         //                 adidasLoaded = true;
//         //                 contraluzLoaded = false;
//         //         });
//         // });
// });

// // ----------------------------------------------------------------------------------------- //

// // var playerFutureland = new Vimeo.Player(document.getElementById('vimeo-futureland'));
// // playerFutureland.loadVideo("https://player.vimeo.com/video/786053616?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenFutureland = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerFutureland.pause();
//                 playerFutureland.setCurrentTime(0);
//         };
// }

// var futurelandLoaded = false;

// futurelandText.addEventListener('click', () => {
//         // playerContraluz.off('fullscreenchange');
//         playerContraluz.loadVideo("https://player.vimeo.com/video/786053616?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//         playerContraluz.ready().then(function() {
//                 playerContraluz.requestFullscreen().then(function() {
//                         playerContraluz.play();
//                         playerContraluz.on('fullscreenchange', fullscreenContraluz);
//                 }); 
//         });
//         // if (!futurelandLoaded) {
//         //         playerFutureland.loadVideo("https://player.vimeo.com/video/786053616?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//         //         playerFutureland.play();
//         // }
//         // playerFutureland.ready().then(function() {
//         //         playerFutureland.play();
//         //         playerFutureland.requestFullscreen().then(function() {
//         //                 playerFutureland.on('fullscreenchange', fullscreenFutureland);
//         //                 futurelandLoaded = true;
//         //             });
//         // });
// });

// // // ----------------------------------------------------------------------------------------- //

// var playerBose = new Vimeo.Player(document.getElementById('vimeo-bose'));
// playerBose.loadVideo("https://player.vimeo.com/video/925403898?autoplay=1&muted=1&playsinline=0");

// const fullscreenBose = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerBose.pause();
//                 playerBose.setCurrentTime(0);
//         };
// }

// var boseLoaded = false;

// boseText.addEventListener('click', () => {
//         if (!boseLoaded) {
//                 playerBose.loadVideo("https://player.vimeo.com/video/925403898?autoplay=1&muted=1&playsinline=0");
//                 playerBose.play();
//         }
//         playerBose.ready().then(function() {
//                 playerBose.play();
//                 playerBose.requestFullscreen().then(function() {
//                         playerBose.play();
//                         playerBose.on('fullscreenchange', fullscreenBose);
//                         boseLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerCC = new Vimeo.Player(document.getElementById('vimeo-cc'));
// playerCC.loadVideo("https://player.vimeo.com/video/954469056?autoplay=1&muted=1&playsinline=0");

// const fullscreenCC = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerCC.pause();
//                 playerCC.setCurrentTime(0);
//         };
// }

// var ccLoaded = false;

// ccText.addEventListener('click', () => {
//         if (!ccLoaded) {
//                 playerCC.loadVideo("https://player.vimeo.com/video/954469056?autoplay=1&muted=1&playsinline=0");
//                 playerCC.play();
//         }
//         playerCC.ready().then(function() {
//                 playerCC.play();
//                 playerCC.requestFullscreen().then(function() {
//                         playerCC.play();
//                         playerCC.on('fullscreenchange', fullscreenCC);
//                         ccLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerMarc = new Vimeo.Player(document.getElementById('vimeo-marc'));
// playerMarc.loadVideo("https://player.vimeo.com/video/1013672752?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenMarc = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerMarc.pause();
//                 playerMarc.setCurrentTime(0);
//         };
// }

// var marcLoaded = false;

// marcText.addEventListener('click', () => {
//         if (!marcLoaded) {
//                 playerMarc.loadVideo("https://player.vimeo.com/video/1013672752?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerMarc.play();
//         }
//         playerMarc.ready().then(function() {
//                 playerMarc.play();
//                 playerMarc.requestFullscreen().then(function() {
//                         playerMarc.on('fullscreenchange', fullscreenMarc);
//                         marcLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerUrban = new Vimeo.Player(document.getElementById('vimeo-urban'));
// playerUrban.loadVideo("https://player.vimeo.com/video/1012646241?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenUrban = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerUrban.pause();
//                 playerUrban.setCurrentTime(0);
//         };
// }

// var urbanLoaded = false;

// urbanText.addEventListener('click', () => {
//         if (!marcLoaded) {
//                 playerUrban.loadVideo("https://player.vimeo.com/video/1012646241?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerUrban.play();
//         }
//         playerUrban.ready().then(function() {
//                 playerUrban.play();
//                 playerUrban.requestFullscreen().then(function() {
//                         playerUrban.on('fullscreenchange', fullscreenUrban);
//                         urbanLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerPolestar = new Vimeo.Player(document.getElementById('vimeo-polestar'));
// playerPolestar.loadVideo("https://player.vimeo.com/video/1013672453?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenPolestar = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerPolestar.pause();
//                 playerPolestar.setCurrentTime(0);
//         };
// }

// var polestarLoaded = false;

// polestarText.addEventListener('click', () => {
//         if (!polestarLoaded) {
//                 playerPolestar.loadVideo("https://player.vimeo.com/video/1013672453?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerPolestar.play();
//         }
//         playerPolestar.ready().then(function() {
//                 playerPolestar.play();
//                 playerPolestar.requestFullscreen().then(function() {
//                         playerPolestar.on('fullscreenchange', fullscreenPolestar);
//                         polestarLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerBambii = new Vimeo.Player(document.getElementById('vimeo-bambii'));
// playerBambii.loadVideo("https://player.vimeo.com/video/357900879?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenBambii = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerBambii.pause();
//                 playerBambii.setCurrentTime(0);
//         };
// }

// var bambiiLoaded = false;

// bambiiText.addEventListener('click', () => {
//         if (!bambiiLoaded) {
//                 playerBambii.loadVideo("https://player.vimeo.com/video/357900879?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerBambii.play();
//         }
//         playerBambii.ready().then(function() {
//                 playerBambii.play();
//                 playerBambii.requestFullscreen().then(function() {
//                         playerBambii.on('fullscreenchange', fullscreenBambii);
//                         bambiiLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerBeatty = new Vimeo.Player(document.getElementById('vimeo-beatty'));
// playerBeatty.loadVideo("https://player.vimeo.com/video/288258977?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenBeatty = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerBeatty.pause();
//                 playerBeatty.setCurrentTime(0);
//         };
// }

// var beattyLoaded = false;

// beattyText.addEventListener('click', () => {
//         if (!beattyLoaded) {
//                 playerBeatty.loadVideo("https://player.vimeo.com/video/288258977?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerBeatty.play();
//         }
//         playerBeatty.ready().then(function() {
//                 playerBeatty.play();
//                 playerBeatty.requestFullscreen().then(function() {
//                         playerBeatty.on('fullscreenchange', fullscreenBeatty);
//                         beattyLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerysl = new Vimeo.Player(document.getElementById('vimeo-ysl'));
// playerysl.loadVideo("https://player.vimeo.com/video/1012646511?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenysl = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerysl.pause();
//                 playerysl.setCurrentTime(0);
//         };
// }

// var yslLoaded = false;

// yslText.addEventListener('click', () => {
//         if (!yslLoaded) {
//                 playerysl.loadVideo("https://player.vimeo.com/video/1012646511?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerysl.play();
//         }
//         playerysl.ready().then(function() {
//                 playerysl.play();
//                 playerysl.requestFullscreen().then(function() {
//                         playerysl.on('fullscreenchange', fullscreenysl);
//                         yslLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerbulgaria = new Vimeo.Player(document.getElementById('vimeo-bulgaria'));
// playerbulgaria.loadVideo("https://player.vimeo.com/video/938691368?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenbulgaria = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerbulgaria.pause();
//                 playerbulgaria.setCurrentTime(0);
//         };
// }

// var bulgariaLoaded = false;

// bulgariaText.addEventListener('click', () => {
//         if (!bulgariaLoaded) {
//                 playerbulgaria.loadVideo("https://player.vimeo.com/video/938691368?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerbulgaria.play();
//         }
//         playerbulgaria.ready().then(function() {
//                 playerbulgaria.play();
//                 playerbulgaria.requestFullscreen().then(function() {
//                         playerbulgaria.on('fullscreenchange', fullscreenbulgaria);
//                         bulgariaLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerbazaar = new Vimeo.Player(document.getElementById('vimeo-bazaar'));
// playerbazaar.loadVideo("https://player.vimeo.com/video/423321791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenbazaar = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerbazaar.pause();
//                 playerbazaar.setCurrentTime(0);
//         };
// }

// var bazaarLoaded = false;

// bazaarText.addEventListener('click', () => {
//         if (!bazaarLoaded) {
//                 playerbazaar.loadVideo("https://player.vimeo.com/video/423321791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerbazaar.play();
//         }
//         playerbazaar.ready().then(function() {
//                 playerbazaar.play();
//                 playerbazaar.requestFullscreen().then(function() {
//                         playerbazaar.on('fullscreenchange', fullscreenbazaar);
//                         bazaarLoaded = true;
//                     });
//         });
// });

// // ----------------------------------------------------------------------------------------- //

// var playerreel = new Vimeo.Player(document.getElementById('vimeo-reel'));
// playerreel.loadVideo("https://player.vimeo.com/video/914863354?h=2af003c63c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");

// const fullscreenreel = function(fullscreen) {
//         if (!(fullscreen.fullscreen)) {
//                 playerreel.pause();
//                 playerreel.setCurrentTime(0);
//         };
// }

// var reelLoaded = false;

// reelText.addEventListener('click', () => {
//         if (!reelLoaded) {
//                 playerreel.loadVideo("https://player.vimeo.com/video/914863354?h=2af003c63c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
//                 playerreel.play();
//         }
//         playerreel.ready().then(function() {
//                 playerreel.play();
//                 playerreel.requestFullscreen().then(function() {
//                         playerreel.on('fullscreenchange', fullscreenreel);
//                         reelLoaded = true;
//                     });
//         });
// });