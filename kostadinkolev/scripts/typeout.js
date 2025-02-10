const title1 = document.getElementById('title-1');
const title2 = document.getElementById('title-2');
const title3 = document.getElementById('title-3');

const title1text = "KOSTADIN\xa0KOLEV";
const title2text = "NYC";
const title3text = "EDITOR/COLORIST";

const emptyText = "";

var t = true;

function type(element, element2, text, text2, time, i=0) {
    if (i === 0) {
        element.textContent = "";
        element2.textConent = "";
    }

    if (i < text.length) {
        element.textContent += text[i];
    }
    
    if (i > text.length - 1) {
        const j = i - text.length;
        element2.textContent += text2[j];
    }

    if (i === text.length + text2.length - 1) {
        return;
    }
    
    setTimeout(() => type(element, element2, text, text2, time, i + 1), time);
}

setTimeout(() => type(title1, title1, title1text, emptyText, 40), 500);
setTimeout(() => type(title2, title2, title2text, emptyText, 60), 1500);
setTimeout(() => type(title3, title3, title3text, emptyText, 60), 2500);


var cursor1 = document.getElementById('c-1');
setTimeout(() => {
    cursor1.classList.add('hide-image-fast');
}, 1400);

var cursor2 = document.getElementById('c-2');
setTimeout(() => {
    cursor2.classList.add('hide-image-fast');
}, 1900);



// --------------- HOME PAGE HOVER TYPE OUT ----------------- //

const nameText = document.getElementById('title-1');

const nameInfoContainer = document.getElementById('name-info');
const spacer1f = document.getElementById('spacer-1f');
const spacer1r = document.getElementById('spacer-1r');
const spacer2f = document.getElementById('spacer-2f');
const spacer2r = document.getElementById('spacer-2r');
const spacer3f = document.getElementById('spacer-3f');
const spacer3r = document.getElementById('spacer-3r');
const spacer4f = document.getElementById('spacer-4f');
const spacer4r = document.getElementById('spacer-4r');

const homeInfo1 = document.getElementById('name-line-1');
const homeInfo2 = document.getElementById('name-line-2');
const homeInfo3 = document.getElementById('name-line-3');
const homeInfo4 = document.getElementById('name-line-4');

const homeInfoText1 = "Commercials";
const homeInfoText2 = "Documentaries";
const homeInfoText3 = "Music Videos";
const homeInfoText4 = "TVC's";

var runningName = false;
var hoveringName = false;
var waitingName = false;
var fadedName = true;


nameText.addEventListener('mouseover', () => {
    hoveringName = true;
    if (runningName || waitingName) {
        return;
    }

    runningName = true;
    fadedName = false;
    

    nameInfoContainer.classList.remove('hide-image-fast');
    nameInfoContainer.classList.add('reveal-image-fast');
    homeInfo1.classList.remove('hide-image-fast');
    homeInfo1.classList.add('reveal-image-fast');

    spacer1f.classList.remove('hide-image-fast');
    spacer1f.classList.add('reveal-image-fast');
    spacer1r.classList.remove('hide-image-fast');
    spacer1r.classList.add('reveal-image-fast');

    type(homeInfo1, homeInfo1, homeInfoText1, emptyText, 40);

    setTimeout(() => {
        homeInfo2.classList.remove('hide-image-fast');
        homeInfo2.classList.add('reveal-image-fast');

        spacer2f.classList.remove('hide-image-fast');
        spacer2f.classList.add('reveal-image-fast');
        spacer2r.classList.remove('hide-image-fast');
        spacer2r.classList.add('reveal-image-fast');


        type(homeInfo2, homeInfo2, homeInfoText2, emptyText, 40)
    }, 700);

    setTimeout(() => {
        homeInfo3.classList.remove('hide-image-fast');
        homeInfo3.classList.add('reveal-image-fast');

        spacer3f.classList.remove('hide-image-fast');
        spacer3f.classList.add('reveal-image-fast');
        spacer3r.classList.remove('hide-image-fast');
        spacer3r.classList.add('reveal-image-fast');


        type(homeInfo3, homeInfo3, homeInfoText3, emptyText, 40)
    }, 1500);

    setTimeout(() => {
        homeInfo4.classList.remove('hide-image-fast');
        homeInfo4.classList.add('reveal-image-fast');

        spacer4f.classList.remove('hide-image-fast');
        spacer4f.classList.add('reveal-image-fast');
        spacer4r.classList.remove('hide-image-fast');
        spacer4r.classList.add('reveal-image-fast');


        type(homeInfo4, homeInfo4, homeInfoText4, emptyText, 50)
    }, 2200);
    setTimeout(() => {
        runningName = false;
        waitingName = true;
    }, 3000);
    setTimeout(() => {
        if (fadedName) {
            waitingName = false;
            return;
        }
        if (!hoveringName) {
            fadeHomeInfoName();
        }
        waitingName = false;
    }, 4000);
});

function fadeHomeInfoName() {
    nameInfoContainer.classList.remove('reveal-image-fast');
    nameInfoContainer.classList.add('hide-image-fast');
    spacer1f.classList.remove('reveal-image-fast');
    spacer1f.classList.add('hide-image-fast');
    spacer1r.classList.remove('reveal-image-fast');
    spacer1r.classList.add('hide-image-fast');

    spacer2f.classList.remove('reveal-image-fast');
    spacer2f.classList.add('hide-image-fast');
    spacer2r.classList.remove('reveal-image-fast');
    spacer2r.classList.add('hide-image-fast');

    spacer3f.classList.remove('reveal-image-fast');
    spacer3f.classList.add('hide-image-fast');
    spacer3r.classList.remove('reveal-image-fast');
    spacer3r.classList.add('hide-image-fast');

    spacer4f.classList.remove('reveal-image-fast');
    spacer4f.classList.add('hide-image-fast');
    spacer4r.classList.remove('reveal-image-fast');
    spacer4r.classList.add('hide-image-fast');

    homeInfo1.classList.remove('reveal-image-fast');
    homeInfo1.classList.add('hide-image-fast');
    homeInfo2.classList.remove('reveal-image-fast');
    homeInfo2.classList.add('hide-image-fast');
    homeInfo3.classList.remove('reveal-image-fast');
    homeInfo3.classList.add('hide-image-fast');
    homeInfo4.classList.remove('reveal-image-fast');
    homeInfo4.classList.add('hide-image-fast');

    setTimeout(() => {
        homeInfo1.innerText = "";
        homeInfo2.innerText = "";
        homeInfo3.innerText = "";
        homeInfo4.innerText = "";
        fadedName = true;
    }, 500);
}

nameText.addEventListener('mouseleave', () => {
    hoveringName = false;
    if (fadedName) {
        return;
    }
    if (!runningName) {
        fadeHomeInfoName();
    }
    // t = false;
    // interrupted = true;
    // if (runningName) {
    //     return;
    // }
    
    
    
    // first = false;
    // setTimeout(() => {
    //     nameInfoContainer.classList.remove('reveal-image-fast');
    //     nameInfoContainer.classList.add('hide-image-fast');
    //     spacer1f.classList.remove('reveal-image-fast');
    //     spacer1f.classList.add('hide-image-fast');
    //     spacer1r.classList.remove('reveal-image-fast');
    //     spacer1r.classList.add('hide-image-fast');

    //     spacer2f.classList.remove('reveal-image-fast');
    //     spacer2f.classList.add('hide-image-fast');
    //     spacer2r.classList.remove('reveal-image-fast');
    //     spacer2r.classList.add('hide-image-fast');

    //     spacer3f.classList.remove('reveal-image-fast');
    //     spacer3f.classList.add('hide-image-fast');
    //     spacer3r.classList.remove('reveal-image-fast');
    //     spacer3r.classList.add('hide-image-fast');

    //     spacer4f.classList.remove('reveal-image-fast');
    //     spacer4f.classList.add('hide-image-fast');
    //     spacer4r.classList.remove('reveal-image-fast');
    //     spacer4r.classList.add('hide-image-fast');

    //     homeInfo1.classList.remove('reveal-image-fast');
    //     homeInfo1.classList.add('hide-image-fast');
    //     homeInfo2.classList.remove('reveal-image-fast');
    //     homeInfo2.classList.add('hide-image-fast');
    //     homeInfo3.classList.remove('reveal-image-fast');
    //     homeInfo3.classList.add('hide-image-fast');
    //     homeInfo4.classList.remove('reveal-image-fast');
    //     homeInfo4.classList.add('hide-image-fast');

    //     setTimeout(() => {
    //         homeInfo1.innerText = "";
    //         homeInfo2.innerText = "";
    //         homeInfo3.innerText = "";
    //         homeInfo4.innerText = "";
    //     }, 500);
    //     finished = true;
    //     first = false;
    // }, 3900);
    
    // setTimeout(() => {
    //     homeInfo1.innerText = "";
    //     homeInfo2.innerText = "";
    //     homeInfo3.innerText = "";
    //     homeInfo4.innerText = "";
    // }, 500);

    // setTimeout(() => {
    //     homeInfo2.classList.remove('reveal-image-fast');
    //     homeInfo2.classList.add('hide-image-fast');

    // }, 1500);

    // setTimeout(() => {
    //     homeInfo2.innerText = "";
    // }, 2000);
    
    // type(homeInfo1, homeInfo1, homeInfoText1, emptyText, 40);
});

// setTimeout(() => type(homeInfo1, homeInfo1, homeInfoText1, emptyText, 40), 500);
// setTimeout(() => type(title2, title2, title2text, emptyText, 60), 1500);
// setTimeout(() => type(title3, title3, title3text, emptyText, 80), 2500);
// setTimeout(() => type(title1, title1, title1text, emptyText, 40), 500);

var runningLocation = false;
var hoveringLocation = false;
var waitingLocation = false;
var fadedLocation = true;

const locationText = document.getElementById('title-2');

const locationInfoContainer = document.getElementById('location-info');
const spacer1floc = document.getElementById('spacer-1f-loc');
const spacer1rloc = document.getElementById('spacer-1r-loc');
const spacer2floc = document.getElementById('spacer-2f-loc');
const spacer2rloc = document.getElementById('spacer-2r-loc');

const locationInfo1 = document.getElementById('location-line-1');
const locationInfo2 = document.getElementById('location-line-2');

const locationInfoText1 = "Brooklyn Habitant";
const locationInfoText2 = "Manhattan Creative";

locationText.addEventListener('mouseover', () => {
    hoveringLocation = true;
    if (runningLocation || waitingLocation) {
        return;
    }

    runningLocation = true;
    fadedLocation = false;
    

    locationInfoContainer.classList.remove('hide-image-fast');
    locationInfoContainer.classList.add('reveal-image-fast');
    locationInfo1.classList.remove('hide-image-fast');
    locationInfo1.classList.add('reveal-image-fast');

    spacer1floc.classList.remove('hide-image-fast');
    spacer1floc.classList.add('reveal-image-fast');
    spacer1rloc.classList.remove('hide-image-fast');
    spacer1rloc.classList.add('reveal-image-fast');

    type(locationInfo1, locationInfo1, locationInfoText1, emptyText, 20);

    setTimeout(() => {
        locationInfo2.classList.remove('hide-image-fast');
        locationInfo2.classList.add('reveal-image-fast');

        spacer2floc.classList.remove('hide-image-fast');
        spacer2floc.classList.add('reveal-image-fast');
        spacer2rloc.classList.remove('hide-image-fast');
        spacer2rloc.classList.add('reveal-image-fast');


        type(locationInfo2, locationInfo2, locationInfoText2, emptyText, 20)
    }, 500);
    setTimeout(() => {
        runningLocation = false;
        waitingLocation = true;
    }, 1000);
    setTimeout(() => {
        // if (fadedLocation) {
        //     waitingLocation = false;
        //     return;
        // }
        if (!hoveringLocation) {
            fadeHomeInfoLocation();
        }
        waitingLocation = false;
    }, 4000);
});


function fadeHomeInfoLocation() {
    locationInfoContainer.classList.remove('reveal-image-fast');
    locationInfoContainer.classList.add('hide-image-fast');
    spacer1floc.classList.remove('reveal-image-fast');
    spacer1floc.classList.add('hide-image-fast');
    spacer1rloc.classList.remove('reveal-image-fast');
    spacer1rloc.classList.add('hide-image-fast');

    spacer2floc.classList.remove('reveal-image-fast');
    spacer2floc.classList.add('hide-image-fast');
    spacer2rloc.classList.remove('reveal-image-fast');
    spacer2rloc.classList.add('hide-image-fast');

    locationInfo1.classList.remove('reveal-image-fast');
    locationInfo1.classList.add('hide-image-fast');
    locationInfo2.classList.remove('reveal-image-fast');
    locationInfo2.classList.add('hide-image-fast');

    setTimeout(() => {
        locationInfo1.innerText = "";
        locationInfo2.innerText = "";
        fadedLocation = true;
        waitingLocation = false;
    }, 500);
}

locationText.addEventListener('mouseleave', () => {
    hoveringLocation = false;
    if (fadedLocation) {
        return;
    }
    if (!runningLocation) {
        fadeHomeInfoLocation();
    }
});


//////


const workText = document.getElementById('title-3');

const workInfoContainer = document.getElementById('work-info');
const spacer1fwork = document.getElementById('spacer-1f-work');
const spacer1rwork = document.getElementById('spacer-1r-work');
const spacer2fwork = document.getElementById('spacer-2f-work');
const spacer2rwork = document.getElementById('spacer-2r-work');
const spacer3fwork = document.getElementById('spacer-3f-work');
const spacer3rwork = document.getElementById('spacer-3r-work');
const spacer4fwork = document.getElementById('spacer-4f-work');
const spacer4rwork = document.getElementById('spacer-4r-work');

const workInfo1 = document.getElementById('work-line-1');
const workInfo2 = document.getElementById('work-line-2');
const workInfo3 = document.getElementById('work-line-3');
const workInfo4 = document.getElementById('work-line-4');

const workInfoText2 = "Animation";
const workInfoText1 = "Color";
const workInfoText3 = "Sound Design & Mixing";
const workInfoText4 = "Graphic Design";

var runningWork = false;
var hoveringWork = false;
var waitingWork = false;
var fadedWork = true;


workText.addEventListener('mouseover', () => {
    hoveringWork = true;
    if (runningWork || waitingWork) {
        return;
    }

    runningWork = true;
    fadedWork = false;
    

    workInfoContainer.classList.remove('hide-image-fast');
    workInfoContainer.classList.add('reveal-image-fast');
    // workInfo1.classList.remove('hide-image-fast');
    // workInfo1.classList.add('reveal-image-fast');

    // spacer1fwork.classList.remove('hide-image-fast');
    // spacer1fwork.classList.add('reveal-image-fast');
    // spacer1rwork.classList.remove('hide-image-fast');
    // spacer1rwork.classList.add('reveal-image-fast');

    // type(workInfo1, workInfo1, workInfoText1, emptyText, 40);
    workInfo2.classList.remove('hide-image-fast');
    workInfo2.classList.add('reveal-image-fast');

    spacer2fwork.classList.remove('hide-image-fast');
    spacer2fwork.classList.add('reveal-image-fast');
    spacer2rwork.classList.remove('hide-image-fast');
    spacer2rwork.classList.add('reveal-image-fast');


    type(workInfo2, workInfo2, workInfoText2, emptyText, 40)


    // setTimeout(() => {
        
    // }, 600);

    setTimeout(() => {
        workInfo3.classList.remove('hide-image-fast');
        workInfo3.classList.add('reveal-image-fast');

        spacer3fwork.classList.remove('hide-image-fast');
        spacer3fwork.classList.add('reveal-image-fast');
        spacer3rwork.classList.remove('hide-image-fast');
        spacer3rwork.classList.add('reveal-image-fast');


        type(workInfo3, workInfo3, workInfoText3, emptyText, 30)
    }, 600);

    setTimeout(() => {
        workInfo4.classList.remove('hide-image-fast');
        workInfo4.classList.add('reveal-image-fast');

        spacer4fwork.classList.remove('hide-image-fast');
        spacer4fwork.classList.add('reveal-image-fast');
        spacer4rwork.classList.remove('hide-image-fast');
        spacer4rwork.classList.add('reveal-image-fast');


        type(workInfo4, workInfo4, workInfoText4, emptyText, 30)
    }, 1200);
    setTimeout(() => {
        runningWork = false;
        waitingWork = true;
    }, 1900);
    setTimeout(() => {
        if (fadedWork) {
            waitingWork = false;
            return;
        }
        if (!hoveringWork) {
            fadeHomeInfoWork();
        }
        waitingWork = false;
    }, 4000);
});

function fadeHomeInfoWork() {
    workInfoContainer.classList.remove('reveal-image-fast');
    workInfoContainer.classList.add('hide-image-fast');
    // spacer1fwork.classList.remove('reveal-image-fast');
    // spacer1fwork.classList.add('hide-image-fast');
    // spacer1rwork.classList.remove('reveal-image-fast');
    // spacer1rwork.classList.add('hide-image-fast');

    spacer2fwork.classList.remove('reveal-image-fast');
    spacer2fwork.classList.add('hide-image-fast');
    spacer2rwork.classList.remove('reveal-image-fast');
    spacer2rwork.classList.add('hide-image-fast');

    spacer3fwork.classList.remove('reveal-image-fast');
    spacer3fwork.classList.add('hide-image-fast');
    spacer3rwork.classList.remove('reveal-image-fast');
    spacer3rwork.classList.add('hide-image-fast');

    spacer4fwork.classList.remove('reveal-image-fast');
    spacer4fwork.classList.add('hide-image-fast');
    spacer4rwork.classList.remove('reveal-image-fast');
    spacer4rwork.classList.add('hide-image-fast');

    // workInfo1.classList.remove('reveal-image-fast');
    // workInfo1.classList.add('hide-image-fast');
    workInfo2.classList.remove('reveal-image-fast');
    workInfo2.classList.add('hide-image-fast');
    workInfo3.classList.remove('reveal-image-fast');
    workInfo3.classList.add('hide-image-fast');
    workInfo4.classList.remove('reveal-image-fast');
    workInfo4.classList.add('hide-image-fast');

    setTimeout(() => {
        // workInfo1.innerText = "";
        workInfo2.innerText = "";
        workInfo3.innerText = "";
        workInfo4.innerText = "";
        fadedWork = true;
        waitingWork = false;
    }, 500);
}

workText.addEventListener('mouseleave', () => {
    hoveringWork = false;
    if (fadedWork) {
        return;
    }
    if (!runningWork) {
        fadeHomeInfoWork();
    }
});