

const CZInfoContainer = document.getElementById('cz-info');
const CZspacer1f = document.getElementById('spacer-1f-cz');
const CZspacer1r = document.getElementById('spacer-1r-cz');
const CZspacer2f = document.getElementById('spacer-2f-cz');
const CZspacer2r = document.getElementById('spacer-2r-cz');
// const spacer3f = document.getElementById('spacer-3f-cz');
// const spacer3r = document.getElementById('spacer-3r-cz');

const CZLine1 = document.getElementById('CZ-1');
const CZLine2 = document.getElementById('CZ-2');
// const homeInfo3 = document.getElementById('name-line-3');

const CZText1 = "FOOD & BEVERAGE";
const CZText2 = "2023";
// const CZText3 = "Always in the mix; finger on the pulse; inside and";


var runningCZ = false;
var hoveringCZ = false;
var waitingCZ = false;
var fadedCZ = true;

var f = false;


contraluzText.addEventListener('mouseover', () => {
    hoveringCZ = true;
    if (runningCZ || waitingCZ) {
        return;
    }

    runningCZ = true;
    fadedCZ = false;
    

    CZInfoContainer.classList.remove('hide-image-fast');
    CZInfoContainer.classList.add('reveal-image-fast');
    CZLine1.classList.remove('hide-image-fast');
    CZLine1.classList.add('reveal-image-fast');

    CZspacer1f.classList.remove('hide-image-fast');
    CZspacer1f.classList.add('reveal-image-fast');
    CZspacer1r.classList.remove('hide-image-fast');
    CZspacer1r.classList.add('reveal-image-fast');

    type(CZLine1, CZLine1, CZText1, emptyText, 30);

    setTimeout(() => {
        CZLine2.classList.remove('hide-image-fast');
        CZLine2.classList.add('reveal-image-fast');

        CZspacer2f.classList.remove('hide-image-fast');
        CZspacer2f.classList.add('reveal-image-fast');
        CZspacer2r.classList.remove('hide-image-fast');
        CZspacer2r.classList.add('reveal-image-fast');


        type(CZLine2, CZLine2, CZText2, emptyText, 30)
    }, 500);

    setTimeout(() => {
        runningCZ = false;
        waitingCZ = true;
    }, 1000);
    setTimeout(() => {
        if (fadedCZ) {
            waitingCZ = false;
            return;
        }
        if (!hoveringCZ) {
            fadeCZ();
        }
        waitingCZ = false;
    }, 2000);
});

contraluzText.addEventListener('mouseleave', () => {
        hoveringCZ = false;
        if (fadedCZ) {
            return;
        }
        if (!runningCZ) {
            fadeCZ();
        }
});

function fadeCZ() {
        CZInfoContainer.classList.remove('reveal-image-fast');
        CZInfoContainer.classList.add('hide-image-fast');
        CZspacer1f.classList.remove('reveal-image-fast');
        CZspacer1f.classList.add('hide-image-fast');
        CZspacer1r.classList.remove('reveal-image-fast');
        CZspacer1r.classList.add('hide-image-fast');
    
        CZspacer2f.classList.remove('reveal-image-fast');
        CZspacer2f.classList.add('hide-image-fast');
        CZspacer2r.classList.remove('reveal-image-fast');
        CZspacer2r.classList.add('hide-image-fast');
    
        CZLine1.classList.remove('reveal-image-fast');
        CZLine1.classList.add('hide-image-fast');
        CZLine2.classList.remove('reveal-image-fast');
        CZLine2.classList.add('hide-image-fast');
    
        setTimeout(() => {
            CZLine1.innerText = "";
            CZLine2.innerText = "";
            fadedCZ = true;
        }, 500);
    }