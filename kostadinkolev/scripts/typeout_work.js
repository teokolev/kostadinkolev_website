

function addTypeOutHover(index) {
    var currProject = allProjects[index];
    var hoverText = allTexts[index];

    var infoBox = document.getElementById(`${currProject.projectNickname}-info`);

    var currLine1 = document.getElementById(`${currProject.projectNickname}-1`);
    var currLine2 = document.getElementById(`${currProject.projectNickname}-2`);

    var running = false;
    var hovering = false;
    var waiting = false;
    var faded = false;

    hoverText.addEventListener('mouseover', () => {
        hovering = true;
        if (running || waiting) {
            return;
        }

        running = true;
        faded = false;

        infoBox.classList.remove('hide-image-fast');
        infoBox.classList.add('reveal-image-fast');
        currLine1.classList.remove('hide-image-fast');
        currLine1.classList.add('reveal-image-fast');

        type(currLine1, currLine1, currProject.typeout1, emptyText, 30);

        setTimeout(() => {
            currLine2.classList.remove('hide-image-fast');
            currLine2.classList.add('reveal-image-fast');
            type(currLine2, currLine2, currProject.typeout2, emptyText, 30)
        }, 500);

        setTimeout(() => {
            running = false;
            waiting = true;
        }, 1000);
        setTimeout(() => {
            if (faded) {
                waiting = false;
                return;
            }
            if (!hovering) {
                infoBox.classList.remove('reveal-image-fast');
                infoBox.classList.add('hide-image-fast');
                currLine1.classList.remove('reveal-image-fast');
                currLine1.classList.add('hide-image-fast');
                currLine2.classList.remove('reveal-image-fast');
                currLine2.classList.add('hide-image-fast');

                setTimeout(() => {
                    currLine1.innerText = "";
                    currLine2.innerText = "";
                    faded = true;
                }, 500);
            }
            waiting = false;
        }, 2000);
    })

    hoverText.addEventListener('mouseleave', () => {
        hovering = false;
        if (faded) {
            return;
        }

        if (!running) {
            infoBox.classList.remove('reveal-image-fast');
            infoBox.classList.add('hide-image-fast');
            currLine1.classList.remove('reveal-image-fast');
            currLine1.classList.add('hide-image-fast');
            currLine2.classList.remove('reveal-image-fast');
            currLine2.classList.add('hide-image-fast');

            setTimeout(() => {
                currLine1.innerText = "";
                currLine2.innerText = "";
                faded = true;
            }, 500);
        }
    })
};




// const CZInfoContainer = document.getElementById('cz-info');
// const CZspacer1f = document.getElementById('spacer-1f-cz');
// const CZspacer1r = document.getElementById('spacer-1r-cz');
// const CZspacer2f = document.getElementById('spacer-2f-cz');
// const CZspacer2r = document.getElementById('spacer-2r-cz');

// const CZLine1 = document.getElementById('CZ-1');
// const CZLine2 = document.getElementById('CZ-2');

// const CZText1 = "Food & Beverage";
// const CZText2 = "2023";

// var runningCZ = false;
// var hoveringCZ = false;
// var waitingCZ = false;
// var fadedCZ = true;

// var f = false;


// contraluzText.addEventListener('mouseover', () => {
//     hoveringCZ = true;
//     if (runningCZ || waitingCZ) {
//         return;
//     }

//     runningCZ = true;
//     fadedCZ = false;
    

//     CZInfoContainer.classList.remove('hide-image-fast');
//     CZInfoContainer.classList.add('reveal-image-fast');
//     CZLine1.classList.remove('hide-image-fast');
//     CZLine1.classList.add('reveal-image-fast');

//     // CZspacer1f.classList.remove('hide-image-fast');
//     // CZspacer1f.classList.add('reveal-image-fast');
//     // CZspacer1r.classList.remove('hide-image-fast');
//     // CZspacer1r.classList.add('reveal-image-fast');

//     type(CZLine1, CZLine1, CZText1, emptyText, 30);

//     setTimeout(() => {
//         CZLine2.classList.remove('hide-image-fast');
//         CZLine2.classList.add('reveal-image-fast');

//         // CZspacer2f.classList.remove('hide-image-fast');
//         // CZspacer2f.classList.add('reveal-image-fast');
//         // CZspacer2r.classList.remove('hide-image-fast');
//         // CZspacer2r.classList.add('reveal-image-fast');


//         type(CZLine2, CZLine2, CZText2, emptyText, 30)
//     }, 500);

//     setTimeout(() => {
//         runningCZ = false;
//         waitingCZ = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedCZ) {
//             waitingCZ = false;
//             return;
//         }
//         if (!hoveringCZ) {
//             fadeCZ();
//         }
//         waitingCZ = false;
//     }, 2000);
// });

// contraluzText.addEventListener('mouseleave', () => {
//         hoveringCZ = false;
//         if (fadedCZ) {
//             return;
//         }
//         if (!runningCZ) {
//             fadeCZ();
//         }
// });

// function fadeCZ() {
//         CZInfoContainer.classList.remove('reveal-image-fast');
//         CZInfoContainer.classList.add('hide-image-fast');
//         // CZspacer1f.classList.remove('reveal-image-fast');
//         // CZspacer1f.classList.add('hide-image-fast');
//         // CZspacer1r.classList.remove('reveal-image-fast');
//         // CZspacer1r.classList.add('hide-image-fast');
    
//         // CZspacer2f.classList.remove('reveal-image-fast');
//         // CZspacer2f.classList.add('hide-image-fast');
//         // CZspacer2r.classList.remove('reveal-image-fast');
//         // CZspacer2r.classList.add('hide-image-fast');
    
//         CZLine1.classList.remove('reveal-image-fast');
//         CZLine1.classList.add('hide-image-fast');
//         CZLine2.classList.remove('reveal-image-fast');
//         CZLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             CZLine1.innerText = "";
//             CZLine2.innerText = "";
//             fadedCZ = true;
//         }, 500);
// }

// // ***************************************************************************************** //


// const adInfoContainer = document.getElementById('ad-info');
// const adspacer1f = document.getElementById('spacer-1f-ad');
// const adspacer1r = document.getElementById('spacer-1r-ad');
// const adspacer2f = document.getElementById('spacer-2f-ad');
// const adspacer2r = document.getElementById('spacer-2r-ad');

// const adLine1 = document.getElementById('ad-1');
// const adLine2 = document.getElementById('ad-2');

// const adText1 = "Campaign";
// const adText2 = "2024";

// var runningad = false;
// var hoveringad = false;
// var waitingad = false;
// var fadedad = true;

// var f = false;



// adidasText.addEventListener('mouseover', () => {
//     hoveringad = true;
//     if (runningad || waitingad) {
//         return;
//     }

//     runningad = true;
//     fadedad = false;
    

//     adInfoContainer.classList.remove('hide-image-fast');
//     adInfoContainer.classList.add('reveal-image-fast');
//     adLine1.classList.remove('hide-image-fast');
//     adLine1.classList.add('reveal-image-fast');

//     adspacer1f.classList.remove('hide-image-fast');
//     adspacer1f.classList.add('reveal-image-fast');
//     adspacer1r.classList.remove('hide-image-fast');
//     adspacer1r.classList.add('reveal-image-fast');

//     type(adLine1, adLine1, adText1, emptyText, 40);

//     setTimeout(() => {
//         adLine2.classList.remove('hide-image-fast');
//         adLine2.classList.add('reveal-image-fast');

//         adspacer2f.classList.remove('hide-image-fast');
//         adspacer2f.classList.add('reveal-image-fast');
//         adspacer2r.classList.remove('hide-image-fast');
//         adspacer2r.classList.add('reveal-image-fast');


//         type(adLine2, adLine2, adText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningad = false;
//         waitingad = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedad) {
//             waitingad = false;
//             return;
//         }
//         if (!hoveringad) {
//             fadead();
//         }
//         waitingad = false;
//     }, 2000);
// });



// adidasText.addEventListener('mouseleave', () => {
//         hoveringad = false;
//         if (fadedad) {
//             return;
//         }
//         if (!runningad) {
//             fadead();
//         }
// });

// function fadead() {
//         adInfoContainer.classList.remove('reveal-image-fast');
//         adInfoContainer.classList.add('hide-image-fast');
//         adspacer1f.classList.remove('reveal-image-fast');
//         adspacer1f.classList.add('hide-image-fast');
//         adspacer1r.classList.remove('reveal-image-fast');
//         adspacer1r.classList.add('hide-image-fast');
    
//         adspacer2f.classList.remove('reveal-image-fast');
//         adspacer2f.classList.add('hide-image-fast');
//         adspacer2r.classList.remove('reveal-image-fast');
//         adspacer2r.classList.add('hide-image-fast');
    
//         adLine1.classList.remove('reveal-image-fast');
//         adLine1.classList.add('hide-image-fast');
//         adLine2.classList.remove('reveal-image-fast');
//         adLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             adLine1.innerText = "";
//             adLine2.innerText = "";
//             fadedad = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const FLInfoContainer = document.getElementById('FL-info');
// const FLspacer1f = document.getElementById('spacer-1f-FL');
// const FLspacer1r = document.getElementById('spacer-1r-FL');
// const FLspacer2f = document.getElementById('spacer-2f-FL');
// const FLspacer2r = document.getElementById('spacer-2r-FL');

// const FLLine1 = document.getElementById('FL-1');
// const FLLine2 = document.getElementById('FL-2');

// const FLText1 = "Creative Advertisement";
// const FLText2 = "2022";

// var runningFL = false;
// var hoveringFL = false;
// var waitingFL = false;
// var fadedFL = true;

// var f = false;



// futurelandText.addEventListener('mouseover', () => {
//     hoveringFL = true;
//     if (runningFL || waitingFL) {
//         return;
//     }

//     runningFL = true;
//     fadedFL = false;
    

//     FLInfoContainer.classList.remove('hide-image-fast');
//     FLInfoContainer.classList.add('reveal-image-fast');
//     FLLine1.classList.remove('hide-image-fast');
//     FLLine1.classList.add('reveal-image-fast');

//     FLspacer1f.classList.remove('hide-image-fast');
//     FLspacer1f.classList.add('reveal-image-fast');
//     FLspacer1r.classList.remove('hide-image-fast');
//     FLspacer1r.classList.add('reveal-image-fast');

//     type(FLLine1, FLLine1, FLText1, emptyText, 40);

//     setTimeout(() => {
//         FLLine2.classList.remove('hide-image-fast');
//         FLLine2.classList.add('reveal-image-fast');

//         FLspacer2f.classList.remove('hide-image-fast');
//         FLspacer2f.classList.add('reveal-image-fast');
//         FLspacer2r.classList.remove('hide-image-fast');
//         FLspacer2r.classList.add('reveal-image-fast');


//         type(FLLine2, FLLine2, FLText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningFL = false;
//         waitingFL = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedFL) {
//             waitingFL = false;
//             return;
//         }
//         if (!hoveringFL) {
//             fadeFL();
//         }
//         waitingFL = false;
//     }, 2000);
// });



// futurelandText.addEventListener('mouseleave', () => {
//         hoveringFL = false;
//         if (fadedFL) {
//             return;
//         }
//         if (!runningFL) {
//             fadeFL();
//         }
// });

// function fadeFL() {
//         FLInfoContainer.classList.remove('reveal-image-fast');
//         FLInfoContainer.classList.add('hide-image-fast');
//         FLspacer1f.classList.remove('reveal-image-fast');
//         FLspacer1f.classList.add('hide-image-fast');
//         FLspacer1r.classList.remove('reveal-image-fast');
//         FLspacer1r.classList.add('hide-image-fast');
    
//         FLspacer2f.classList.remove('reveal-image-fast');
//         FLspacer2f.classList.add('hide-image-fast');
//         FLspacer2r.classList.remove('reveal-image-fast');
//         FLspacer2r.classList.add('hide-image-fast');
    
//         FLLine1.classList.remove('reveal-image-fast');
//         FLLine1.classList.add('hide-image-fast');
//         FLLine2.classList.remove('reveal-image-fast');
//         FLLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             FLLine1.innerText = "";
//             FLLine2.innerText = "";
//             fadedFL = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const BOSEInfoContainer = document.getElementById('BOSE-info');
// const BOSEspacer1f = document.getElementById('spacer-1f-BOSE');
// const BOSEspacer1r = document.getElementById('spacer-1r-BOSE');
// const BOSEspacer2f = document.getElementById('spacer-2f-BOSE');
// const BOSEspacer2r = document.getElementById('spacer-2r-BOSE');

// const BOSELine1 = document.getElementById('BOSE-1');
// const BOSELine2 = document.getElementById('BOSE-2');

// const BOSEText1 = "Campaign";
// const BOSEText2 = "2024";

// var runningBOSE = false;
// var hoveringBOSE = false;
// var waitingBOSE = false;
// var fadedBOSE = true;

// var f = false;



// boseText.addEventListener('mouseover', () => {
//     hoveringBOSE = true;
//     if (runningBOSE || waitingBOSE) {
//         return;
//     }

//     runningBOSE = true;
//     fadedBOSE = false;
    

//     BOSEInfoContainer.classList.remove('hide-image-fast');
//     BOSEInfoContainer.classList.add('reveal-image-fast');
//     BOSELine1.classList.remove('hide-image-fast');
//     BOSELine1.classList.add('reveal-image-fast');

//     BOSEspacer1f.classList.remove('hide-image-fast');
//     BOSEspacer1f.classList.add('reveal-image-fast');
//     BOSEspacer1r.classList.remove('hide-image-fast');
//     BOSEspacer1r.classList.add('reveal-image-fast');

//     type(BOSELine1, BOSELine1, BOSEText1, emptyText, 40);

//     setTimeout(() => {
//         BOSELine2.classList.remove('hide-image-fast');
//         BOSELine2.classList.add('reveal-image-fast');

//         BOSEspacer2f.classList.remove('hide-image-fast');
//         BOSEspacer2f.classList.add('reveal-image-fast');
//         BOSEspacer2r.classList.remove('hide-image-fast');
//         BOSEspacer2r.classList.add('reveal-image-fast');


//         type(BOSELine2, BOSELine2, BOSEText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningBOSE = false;
//         waitingBOSE = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedBOSE) {
//             waitingBOSE = false;
//             return;
//         }
//         if (!hoveringBOSE) {
//             fadeBOSE();
//         }
//         waitingBOSE = false;
//     }, 2000);
// });



// boseText.addEventListener('mouseleave', () => {
//         hoveringBOSE = false;
//         if (fadedBOSE) {
//             return;
//         }
//         if (!runningBOSE) {
//             fadeBOSE();
//         }
// });

// function fadeBOSE() {
//         BOSEInfoContainer.classList.remove('reveal-image-fast');
//         BOSEInfoContainer.classList.add('hide-image-fast');
//         BOSEspacer1f.classList.remove('reveal-image-fast');
//         BOSEspacer1f.classList.add('hide-image-fast');
//         BOSEspacer1r.classList.remove('reveal-image-fast');
//         BOSEspacer1r.classList.add('hide-image-fast');
    
//         BOSEspacer2f.classList.remove('reveal-image-fast');
//         BOSEspacer2f.classList.add('hide-image-fast');
//         BOSEspacer2r.classList.remove('reveal-image-fast');
//         BOSEspacer2r.classList.add('hide-image-fast');
    
//         BOSELine1.classList.remove('reveal-image-fast');
//         BOSELine1.classList.add('hide-image-fast');
//         BOSELine2.classList.remove('reveal-image-fast');
//         BOSELine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             BOSELine1.innerText = "";
//             BOSELine2.innerText = "";
//             fadedBOSE = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const CCInfoContainer = document.getElementById('CC-info');
// const CCspacer1f = document.getElementById('spacer-1f-CC');
// const CCspacer1r = document.getElementById('spacer-1r-CC');
// const CCspacer2f = document.getElementById('spacer-2f-CC');
// const CCspacer2r = document.getElementById('spacer-2r-CC');

// const CCLine1 = document.getElementById('CC-1');
// const CCLine2 = document.getElementById('CC-2');

// const CCText1 = "Commercial";
// const CCText2 = "2024";

// var runningCC = false;
// var hoveringCC = false;
// var waitingCC = false;
// var fadedCC = true;

// var f = false;



// ccText.addEventListener('mouseover', () => {
//     hoveringCC = true;
//     if (runningCC || waitingCC) {
//         return;
//     }

//     runningCC = true;
//     fadedCC = false;
    

//     CCInfoContainer.classList.remove('hide-image-fast');
//     CCInfoContainer.classList.add('reveal-image-fast');
//     CCLine1.classList.remove('hide-image-fast');
//     CCLine1.classList.add('reveal-image-fast');

//     CCspacer1f.classList.remove('hide-image-fast');
//     CCspacer1f.classList.add('reveal-image-fast');
//     CCspacer1r.classList.remove('hide-image-fast');
//     CCspacer1r.classList.add('reveal-image-fast');

//     type(CCLine1, CCLine1, CCText1, emptyText, 40);

//     setTimeout(() => {
//         CCLine2.classList.remove('hide-image-fast');
//         CCLine2.classList.add('reveal-image-fast');

//         CCspacer2f.classList.remove('hide-image-fast');
//         CCspacer2f.classList.add('reveal-image-fast');
//         CCspacer2r.classList.remove('hide-image-fast');
//         CCspacer2r.classList.add('reveal-image-fast');


//         type(CCLine2, CCLine2, CCText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningCC = false;
//         waitingCC = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedCC) {
//             waitingCC = false;
//             return;
//         }
//         if (!hoveringCC) {
//             fadeCC();
//         }
//         waitingCC = false;
//     }, 2000);
// });



// ccText.addEventListener('mouseleave', () => {
//         hoveringCC = false;
//         if (fadedCC) {
//             return;
//         }
//         if (!runningCC) {
//             fadeCC();
//         }
// });

// function fadeCC() {
//         CCInfoContainer.classList.remove('reveal-image-fast');
//         CCInfoContainer.classList.add('hide-image-fast');
//         CCspacer1f.classList.remove('reveal-image-fast');
//         CCspacer1f.classList.add('hide-image-fast');
//         CCspacer1r.classList.remove('reveal-image-fast');
//         CCspacer1r.classList.add('hide-image-fast');
    
//         CCspacer2f.classList.remove('reveal-image-fast');
//         CCspacer2f.classList.add('hide-image-fast');
//         CCspacer2r.classList.remove('reveal-image-fast');
//         CCspacer2r.classList.add('hide-image-fast');
    
//         CCLine1.classList.remove('reveal-image-fast');
//         CCLine1.classList.add('hide-image-fast');
//         CCLine2.classList.remove('reveal-image-fast');
//         CCLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             CCLine1.innerText = "";
//             CCLine2.innerText = "";
//             fadedCC = true;
//         }, 500);
// }

// // ***************************************************************************************** //


// const MARCInfoContainer = document.getElementById('MARC-info');
// const MARCspacer1f = document.getElementById('spacer-1f-MARC');
// const MARCspacer1r = document.getElementById('spacer-1r-MARC');
// const MARCspacer2f = document.getElementById('spacer-2f-MARC');
// const MARCspacer2r = document.getElementById('spacer-2r-MARC');

// const MARCLine1 = document.getElementById('MARC-1');
// const MARCLine2 = document.getElementById('MARC-2');

// const MARCText1 = "Fashion + Luxury";
// const MARCText2 = "2023";

// var runningMARC = false;
// var hoveringMARC = false;
// var waitingMARC = false;
// var fadedMARC = true;

// var f = false;



// marcText.addEventListener('mouseover', () => {
//     hoveringMARC = true;
//     if (runningMARC || waitingMARC) {
//         return;
//     }

//     runningMARC = true;
//     fadedMARC = false;
    

//     MARCInfoContainer.classList.remove('hide-image-fast');
//     MARCInfoContainer.classList.add('reveal-image-fast');
//     MARCLine1.classList.remove('hide-image-fast');
//     MARCLine1.classList.add('reveal-image-fast');

//     MARCspacer1f.classList.remove('hide-image-fast');
//     MARCspacer1f.classList.add('reveal-image-fast');
//     MARCspacer1r.classList.remove('hide-image-fast');
//     MARCspacer1r.classList.add('reveal-image-fast');

//     type(MARCLine1, MARCLine1, MARCText1, emptyText, 40);

//     setTimeout(() => {
//         MARCLine2.classList.remove('hide-image-fast');
//         MARCLine2.classList.add('reveal-image-fast');

//         MARCspacer2f.classList.remove('hide-image-fast');
//         MARCspacer2f.classList.add('reveal-image-fast');
//         MARCspacer2r.classList.remove('hide-image-fast');
//         MARCspacer2r.classList.add('reveal-image-fast');


//         type(MARCLine2, MARCLine2, MARCText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningMARC = false;
//         waitingMARC = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedMARC) {
//             waitingMARC = false;
//             return;
//         }
//         if (!hoveringMARC) {
//             fadeMARC();
//         }
//         waitingMARC = false;
//     }, 2000);
// });



// marcText.addEventListener('mouseleave', () => {
//         hoveringMARC = false;
//         if (fadedMARC) {
//             return;
//         }
//         if (!runningMARC) {
//             fadeMARC();
//         }
// });

// function fadeMARC() {
//         MARCInfoContainer.classList.remove('reveal-image-fast');
//         MARCInfoContainer.classList.add('hide-image-fast');
//         MARCspacer1f.classList.remove('reveal-image-fast');
//         MARCspacer1f.classList.add('hide-image-fast');
//         MARCspacer1r.classList.remove('reveal-image-fast');
//         MARCspacer1r.classList.add('hide-image-fast');
    
//         MARCspacer2f.classList.remove('reveal-image-fast');
//         MARCspacer2f.classList.add('hide-image-fast');
//         MARCspacer2r.classList.remove('reveal-image-fast');
//         MARCspacer2r.classList.add('hide-image-fast');
    
//         MARCLine1.classList.remove('reveal-image-fast');
//         MARCLine1.classList.add('hide-image-fast');
//         MARCLine2.classList.remove('reveal-image-fast');
//         MARCLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             MARCLine1.innerText = "";
//             MARCLine2.innerText = "";
//             fadedMARC = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const UDInfoContainer = document.getElementById('UD-info');
// const UDspacer1f = document.getElementById('spacer-1f-UD');
// const UDspacer1r = document.getElementById('spacer-1r-UD');
// const UDspacer2f = document.getElementById('spacer-2f-UD');
// const UDspacer2r = document.getElementById('spacer-2r-UD');

// const UDLine1 = document.getElementById('UD-1');
// const UDLine2 = document.getElementById('UD-2');

// const UDText1 = "Beauty";
// const UDText2 = "2024";

// var runningUD = false;
// var hoveringUD = false;
// var waitingUD = false;
// var fadedUD = true;

// var f = false;



// urbanText.addEventListener('mouseover', () => {
//     hoveringUD = true;
//     if (runningUD || waitingUD) {
//         return;
//     }

//     runningUD = true;
//     fadedUD = false;
    

//     UDInfoContainer.classList.remove('hide-image-fast');
//     UDInfoContainer.classList.add('reveal-image-fast');
//     UDLine1.classList.remove('hide-image-fast');
//     UDLine1.classList.add('reveal-image-fast');

//     UDspacer1f.classList.remove('hide-image-fast');
//     UDspacer1f.classList.add('reveal-image-fast');
//     UDspacer1r.classList.remove('hide-image-fast');
//     UDspacer1r.classList.add('reveal-image-fast');

//     type(UDLine1, UDLine1, UDText1, emptyText, 40);

//     setTimeout(() => {
//         UDLine2.classList.remove('hide-image-fast');
//         UDLine2.classList.add('reveal-image-fast');

//         UDspacer2f.classList.remove('hide-image-fast');
//         UDspacer2f.classList.add('reveal-image-fast');
//         UDspacer2r.classList.remove('hide-image-fast');
//         UDspacer2r.classList.add('reveal-image-fast');


//         type(UDLine2, UDLine2, UDText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningUD = false;
//         waitingUD = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedUD) {
//             waitingUD = false;
//             return;
//         }
//         if (!hoveringUD) {
//             fadeUD();
//         }
//         waitingUD = false;
//     }, 2000);
// });



// urbanText.addEventListener('mouseleave', () => {
//         hoveringUD = false;
//         if (fadedUD) {
//             return;
//         }
//         if (!runningUD) {
//             fadeUD();
//         }
// });

// function fadeUD() {
//         UDInfoContainer.classList.remove('reveal-image-fast');
//         UDInfoContainer.classList.add('hide-image-fast');
//         UDspacer1f.classList.remove('reveal-image-fast');
//         UDspacer1f.classList.add('hide-image-fast');
//         UDspacer1r.classList.remove('reveal-image-fast');
//         UDspacer1r.classList.add('hide-image-fast');
    
//         UDspacer2f.classList.remove('reveal-image-fast');
//         UDspacer2f.classList.add('hide-image-fast');
//         UDspacer2r.classList.remove('reveal-image-fast');
//         UDspacer2r.classList.add('hide-image-fast');
    
//         UDLine1.classList.remove('reveal-image-fast');
//         UDLine1.classList.add('hide-image-fast');
//         UDLine2.classList.remove('reveal-image-fast');
//         UDLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             UDLine1.innerText = "";
//             UDLine2.innerText = "";
//             fadedUD = true;
//         }, 500);
// }

// // ***************************************************************************************** //


// const POLEInfoContainer = document.getElementById('POLE-info');
// const POLEspacer1f = document.getElementById('spacer-1f-POLE');
// const POLEspacer1r = document.getElementById('spacer-1r-POLE');
// const POLEspacer2f = document.getElementById('spacer-2f-POLE');
// const POLEspacer2r = document.getElementById('spacer-2r-POLE');

// const POLELine1 = document.getElementById('POLE-1');
// const POLELine2 = document.getElementById('POLE-2');

// const POLEText1 = "Event Capture";
// const POLEText2 = "2024";

// var runningPOLE = false;
// var hoveringPOLE = false;
// var waitingPOLE = false;
// var fadedPOLE = true;

// var f = false;



// polestarText.addEventListener('mouseover', () => {
//     hoveringPOLE = true;
//     if (runningPOLE || waitingPOLE) {
//         return;
//     }

//     runningPOLE = true;
//     fadedPOLE = false;
    

//     POLEInfoContainer.classList.remove('hide-image-fast');
//     POLEInfoContainer.classList.add('reveal-image-fast');
//     POLELine1.classList.remove('hide-image-fast');
//     POLELine1.classList.add('reveal-image-fast');

//     POLEspacer1f.classList.remove('hide-image-fast');
//     POLEspacer1f.classList.add('reveal-image-fast');
//     POLEspacer1r.classList.remove('hide-image-fast');
//     POLEspacer1r.classList.add('reveal-image-fast');

//     type(POLELine1, POLELine1, POLEText1, emptyText, 40);

//     setTimeout(() => {
//         POLELine2.classList.remove('hide-image-fast');
//         POLELine2.classList.add('reveal-image-fast');

//         POLEspacer2f.classList.remove('hide-image-fast');
//         POLEspacer2f.classList.add('reveal-image-fast');
//         POLEspacer2r.classList.remove('hide-image-fast');
//         POLEspacer2r.classList.add('reveal-image-fast');


//         type(POLELine2, POLELine2, POLEText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningPOLE = false;
//         waitingPOLE = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedPOLE) {
//             waitingPOLE = false;
//             return;
//         }
//         if (!hoveringPOLE) {
//             fadePOLE();
//         }
//         waitingPOLE = false;
//     }, 2000);
// });



// polestarText.addEventListener('mouseleave', () => {
//         hoveringPOLE = false;
//         if (fadedPOLE) {
//             return;
//         }
//         if (!runningPOLE) {
//             fadePOLE();
//         }
// });

// function fadePOLE() {
//         POLEInfoContainer.classList.remove('reveal-image-fast');
//         POLEInfoContainer.classList.add('hide-image-fast');
//         POLEspacer1f.classList.remove('reveal-image-fast');
//         POLEspacer1f.classList.add('hide-image-fast');
//         POLEspacer1r.classList.remove('reveal-image-fast');
//         POLEspacer1r.classList.add('hide-image-fast');
    
//         POLEspacer2f.classList.remove('reveal-image-fast');
//         POLEspacer2f.classList.add('hide-image-fast');
//         POLEspacer2r.classList.remove('reveal-image-fast');
//         POLEspacer2r.classList.add('hide-image-fast');
    
//         POLELine1.classList.remove('reveal-image-fast');
//         POLELine1.classList.add('hide-image-fast');
//         POLELine2.classList.remove('reveal-image-fast');
//         POLELine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             POLELine1.innerText = "";
//             POLELine2.innerText = "";
//             fadedPOLE = true;
//         }, 500);
// }

// // ***************************************************************************************** //


// const BAMBIIInfoContainer = document.getElementById('BAMBII-info');
// const BAMBIIspacer1f = document.getElementById('spacer-1f-BAMBII');
// const BAMBIIspacer1r = document.getElementById('spacer-1r-BAMBII');
// const BAMBIIspacer2f = document.getElementById('spacer-2f-BAMBII');
// const BAMBIIspacer2r = document.getElementById('spacer-2r-BAMBII');

// const BAMBIILine1 = document.getElementById('BAMBII-1');
// const BAMBIILine2 = document.getElementById('BAMBII-2');

// const BAMBIIText1 = "Music Video";
// const BAMBIIText2 = "2019";

// var runningBAMBII = false;
// var hoveringBAMBII = false;
// var waitingBAMBII = false;
// var fadedBAMBII = true;

// var f = false;



// bambiiText.addEventListener('mouseover', () => {
//     hoveringBAMBII = true;
//     if (runningBAMBII || waitingBAMBII) {
//         return;
//     }

//     runningBAMBII = true;
//     fadedBAMBII = false;
    

//     BAMBIIInfoContainer.classList.remove('hide-image-fast');
//     BAMBIIInfoContainer.classList.add('reveal-image-fast');
//     BAMBIILine1.classList.remove('hide-image-fast');
//     BAMBIILine1.classList.add('reveal-image-fast');

//     BAMBIIspacer1f.classList.remove('hide-image-fast');
//     BAMBIIspacer1f.classList.add('reveal-image-fast');
//     BAMBIIspacer1r.classList.remove('hide-image-fast');
//     BAMBIIspacer1r.classList.add('reveal-image-fast');

//     type(BAMBIILine1, BAMBIILine1, BAMBIIText1, emptyText, 40);

//     setTimeout(() => {
//         BAMBIILine2.classList.remove('hide-image-fast');
//         BAMBIILine2.classList.add('reveal-image-fast');

//         BAMBIIspacer2f.classList.remove('hide-image-fast');
//         BAMBIIspacer2f.classList.add('reveal-image-fast');
//         BAMBIIspacer2r.classList.remove('hide-image-fast');
//         BAMBIIspacer2r.classList.add('reveal-image-fast');


//         type(BAMBIILine2, BAMBIILine2, BAMBIIText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningBAMBII = false;
//         waitingBAMBII = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedBAMBII) {
//             waitingBAMBII = false;
//             return;
//         }
//         if (!hoveringBAMBII) {
//             fadeBAMBII();
//         }
//         waitingBAMBII = false;
//     }, 2000);
// });



// bambiiText.addEventListener('mouseleave', () => {
//         hoveringBAMBII = false;
//         if (fadedBAMBII) {
//             return;
//         }
//         if (!runningBAMBII) {
//             fadeBAMBII();
//         }
// });

// function fadeBAMBII() {
//         BAMBIIInfoContainer.classList.remove('reveal-image-fast');
//         BAMBIIInfoContainer.classList.add('hide-image-fast');
//         BAMBIIspacer1f.classList.remove('reveal-image-fast');
//         BAMBIIspacer1f.classList.add('hide-image-fast');
//         BAMBIIspacer1r.classList.remove('reveal-image-fast');
//         BAMBIIspacer1r.classList.add('hide-image-fast');
    
//         BAMBIIspacer2f.classList.remove('reveal-image-fast');
//         BAMBIIspacer2f.classList.add('hide-image-fast');
//         BAMBIIspacer2r.classList.remove('reveal-image-fast');
//         BAMBIIspacer2r.classList.add('hide-image-fast');
    
//         BAMBIILine1.classList.remove('reveal-image-fast');
//         BAMBIILine1.classList.add('hide-image-fast');
//         BAMBIILine2.classList.remove('reveal-image-fast');
//         BAMBIILine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             BAMBIILine1.innerText = "";
//             BAMBIILine2.innerText = "";
//             fadedBAMBII = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const BEATTYInfoContainer = document.getElementById('BEATTY-info');
// const BEATTYspacer1f = document.getElementById('spacer-1f-BEATTY');
// const BEATTYspacer1r = document.getElementById('spacer-1r-BEATTY');
// const BEATTYspacer2f = document.getElementById('spacer-2f-BEATTY');
// const BEATTYspacer2r = document.getElementById('spacer-2r-BEATTY');

// const BEATTYLine1 = document.getElementById('BEATTY-1');
// const BEATTYLine2 = document.getElementById('BEATTY-2');

// const BEATTYText1 = "Music Video";
// const BEATTYText2 = "2018";

// var runningBEATTY = false;
// var hoveringBEATTY = false;
// var waitingBEATTY = false;
// var fadedBEATTY = true;

// var f = false;



// beattyText.addEventListener('mouseover', () => {
//     hoveringBEATTY = true;
//     if (runningBEATTY || waitingBEATTY) {
//         return;
//     }

//     runningBEATTY = true;
//     fadedBEATTY = false;
    

//     BEATTYInfoContainer.classList.remove('hide-image-fast');
//     BEATTYInfoContainer.classList.add('reveal-image-fast');
//     BEATTYLine1.classList.remove('hide-image-fast');
//     BEATTYLine1.classList.add('reveal-image-fast');

//     BEATTYspacer1f.classList.remove('hide-image-fast');
//     BEATTYspacer1f.classList.add('reveal-image-fast');
//     BEATTYspacer1r.classList.remove('hide-image-fast');
//     BEATTYspacer1r.classList.add('reveal-image-fast');

//     type(BEATTYLine1, BEATTYLine1, BEATTYText1, emptyText, 40);

//     setTimeout(() => {
//         BEATTYLine2.classList.remove('hide-image-fast');
//         BEATTYLine2.classList.add('reveal-image-fast');

//         BEATTYspacer2f.classList.remove('hide-image-fast');
//         BEATTYspacer2f.classList.add('reveal-image-fast');
//         BEATTYspacer2r.classList.remove('hide-image-fast');
//         BEATTYspacer2r.classList.add('reveal-image-fast');


//         type(BEATTYLine2, BEATTYLine2, BEATTYText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningBEATTY = false;
//         waitingBEATTY = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedBEATTY) {
//             waitingBEATTY = false;
//             return;
//         }
//         if (!hoveringBEATTY) {
//             fadeBEATTY();
//         }
//         waitingBEATTY = false;
//     }, 2000);
// });



// beattyText.addEventListener('mouseleave', () => {
//         hoveringBEATTY = false;
//         if (fadedBEATTY) {
//             return;
//         }
//         if (!runningBEATTY) {
//             fadeBEATTY();
//         }
// });

// function fadeBEATTY() {
//         BEATTYInfoContainer.classList.remove('reveal-image-fast');
//         BEATTYInfoContainer.classList.add('hide-image-fast');
//         BEATTYspacer1f.classList.remove('reveal-image-fast');
//         BEATTYspacer1f.classList.add('hide-image-fast');
//         BEATTYspacer1r.classList.remove('reveal-image-fast');
//         BEATTYspacer1r.classList.add('hide-image-fast');
    
//         BEATTYspacer2f.classList.remove('reveal-image-fast');
//         BEATTYspacer2f.classList.add('hide-image-fast');
//         BEATTYspacer2r.classList.remove('reveal-image-fast');
//         BEATTYspacer2r.classList.add('hide-image-fast');
    
//         BEATTYLine1.classList.remove('reveal-image-fast');
//         BEATTYLine1.classList.add('hide-image-fast');
//         BEATTYLine2.classList.remove('reveal-image-fast');
//         BEATTYLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             BEATTYLine1.innerText = "";
//             BEATTYLine2.innerText = "";
//             fadedBEATTY = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const YSLInfoContainer = document.getElementById('YSL-info');
// const YSLspacer1f = document.getElementById('spacer-1f-YSL');
// const YSLspacer1r = document.getElementById('spacer-1r-YSL');
// const YSLspacer2f = document.getElementById('spacer-2f-YSL');
// const YSLspacer2r = document.getElementById('spacer-2r-YSL');

// const YSLLine1 = document.getElementById('YSL-1');
// const YSLLine2 = document.getElementById('YSL-2');

// const YSLText1 = "Fashion + Luxury";
// const YSLText2 = "2024";

// var runningYSL = false;
// var hoveringYSL = false;
// var waitingYSL = false;
// var fadedYSL = true;

// var f = false;



// yslText.addEventListener('mouseover', () => {
//     hoveringYSL = true;
//     if (runningYSL || waitingYSL) {
//         return;
//     }

//     runningYSL = true;
//     fadedYSL = false;
    

//     YSLInfoContainer.classList.remove('hide-image-fast');
//     YSLInfoContainer.classList.add('reveal-image-fast');
//     YSLLine1.classList.remove('hide-image-fast');
//     YSLLine1.classList.add('reveal-image-fast');

//     YSLspacer1f.classList.remove('hide-image-fast');
//     YSLspacer1f.classList.add('reveal-image-fast');
//     YSLspacer1r.classList.remove('hide-image-fast');
//     YSLspacer1r.classList.add('reveal-image-fast');

//     type(YSLLine1, YSLLine1, YSLText1, emptyText, 40);

//     setTimeout(() => {
//         YSLLine2.classList.remove('hide-image-fast');
//         YSLLine2.classList.add('reveal-image-fast');

//         YSLspacer2f.classList.remove('hide-image-fast');
//         YSLspacer2f.classList.add('reveal-image-fast');
//         YSLspacer2r.classList.remove('hide-image-fast');
//         YSLspacer2r.classList.add('reveal-image-fast');


//         type(YSLLine2, YSLLine2, YSLText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningYSL = false;
//         waitingYSL = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedYSL) {
//             waitingYSL = false;
//             return;
//         }
//         if (!hoveringYSL) {
//             fadeYSL();
//         }
//         waitingYSL = false;
//     }, 2000);
// });



// yslText.addEventListener('mouseleave', () => {
//         hoveringYSL = false;
//         if (fadedYSL) {
//             return;
//         }
//         if (!runningYSL) {
//             fadeYSL();
//         }
// });

// function fadeYSL() {
//         YSLInfoContainer.classList.remove('reveal-image-fast');
//         YSLInfoContainer.classList.add('hide-image-fast');
//         YSLspacer1f.classList.remove('reveal-image-fast');
//         YSLspacer1f.classList.add('hide-image-fast');
//         YSLspacer1r.classList.remove('reveal-image-fast');
//         YSLspacer1r.classList.add('hide-image-fast');
    
//         YSLspacer2f.classList.remove('reveal-image-fast');
//         YSLspacer2f.classList.add('hide-image-fast');
//         YSLspacer2r.classList.remove('reveal-image-fast');
//         YSLspacer2r.classList.add('hide-image-fast');
    
//         YSLLine1.classList.remove('reveal-image-fast');
//         YSLLine1.classList.add('hide-image-fast');
//         YSLLine2.classList.remove('reveal-image-fast');
//         YSLLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             YSLLine1.innerText = "";
//             YSLLine2.innerText = "";
//             fadedYSL = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const BGInfoContainer = document.getElementById('BG-info');
// const BGspacer1f = document.getElementById('spacer-1f-BG');
// const BGspacer1r = document.getElementById('spacer-1r-BG');
// const BGspacer2f = document.getElementById('spacer-2f-BG');
// const BGspacer2r = document.getElementById('spacer-2r-BG');

// const BGLine1 = document.getElementById('BG-1');
// const BGLine2 = document.getElementById('BG-2');

// const BGText1 = "Documentary";
// const BGText2 = "2024";

// var runningBG = false;
// var hoveringBG = false;
// var waitingBG = false;
// var fadedBG = true;

// var f = false;



// bulgariaText.addEventListener('mouseover', () => {
//     hoveringBG = true;
//     if (runningBG || waitingBG) {
//         return;
//     }

//     runningBG = true;
//     fadedBG = false;
    

//     BGInfoContainer.classList.remove('hide-image-fast');
//     BGInfoContainer.classList.add('reveal-image-fast');
//     BGLine1.classList.remove('hide-image-fast');
//     BGLine1.classList.add('reveal-image-fast');

//     BGspacer1f.classList.remove('hide-image-fast');
//     BGspacer1f.classList.add('reveal-image-fast');
//     BGspacer1r.classList.remove('hide-image-fast');
//     BGspacer1r.classList.add('reveal-image-fast');

//     type(BGLine1, BGLine1, BGText1, emptyText, 40);

//     setTimeout(() => {
//         BGLine2.classList.remove('hide-image-fast');
//         BGLine2.classList.add('reveal-image-fast');

//         BGspacer2f.classList.remove('hide-image-fast');
//         BGspacer2f.classList.add('reveal-image-fast');
//         BGspacer2r.classList.remove('hide-image-fast');
//         BGspacer2r.classList.add('reveal-image-fast');


//         type(BGLine2, BGLine2, BGText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningBG = false;
//         waitingBG = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedBG) {
//             waitingBG = false;
//             return;
//         }
//         if (!hoveringBG) {
//             fadeBG();
//         }
//         waitingBG = false;
//     }, 2000);
// });



// bulgariaText.addEventListener('mouseleave', () => {
//         hoveringBG = false;
//         if (fadedBG) {
//             return;
//         }
//         if (!runningBG) {
//             fadeBG();
//         }
// });

// function fadeBG() {
//         BGInfoContainer.classList.remove('reveal-image-fast');
//         BGInfoContainer.classList.add('hide-image-fast');
//         BGspacer1f.classList.remove('reveal-image-fast');
//         BGspacer1f.classList.add('hide-image-fast');
//         BGspacer1r.classList.remove('reveal-image-fast');
//         BGspacer1r.classList.add('hide-image-fast');
    
//         BGspacer2f.classList.remove('reveal-image-fast');
//         BGspacer2f.classList.add('hide-image-fast');
//         BGspacer2r.classList.remove('reveal-image-fast');
//         BGspacer2r.classList.add('hide-image-fast');
    
//         BGLine1.classList.remove('reveal-image-fast');
//         BGLine1.classList.add('hide-image-fast');
//         BGLine2.classList.remove('reveal-image-fast');
//         BGLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             BGLine1.innerText = "";
//             BGLine2.innerText = "";
//             fadedBG = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const BAZAARInfoContainer = document.getElementById('BAZAAR-info');
// const BAZAARspacer1f = document.getElementById('spacer-1f-BAZAAR');
// const BAZAARspacer1r = document.getElementById('spacer-1r-BAZAAR');
// const BAZAARspacer2f = document.getElementById('spacer-2f-BAZAAR');
// const BAZAARspacer2r = document.getElementById('spacer-2r-BAZAAR');

// const BAZAARLine1 = document.getElementById('BAZAAR-1');
// const BAZAARLine2 = document.getElementById('BAZAAR-2');

// const BAZAARText1 = "Experimental";
// const BAZAARText2 = "2019";

// var runningBAZAAR = false;
// var hoveringBAZAAR = false;
// var waitingBAZAAR = false;
// var fadedBAZAAR = true;

// var f = false;



// bazaarText.addEventListener('mouseover', () => {
//     hoveringBAZAAR = true;
//     if (runningBAZAAR || waitingBAZAAR) {
//         return;
//     }

//     runningBAZAAR = true;
//     fadedBAZAAR = false;
    

//     BAZAARInfoContainer.classList.remove('hide-image-fast');
//     BAZAARInfoContainer.classList.add('reveal-image-fast');
//     BAZAARLine1.classList.remove('hide-image-fast');
//     BAZAARLine1.classList.add('reveal-image-fast');

//     BAZAARspacer1f.classList.remove('hide-image-fast');
//     BAZAARspacer1f.classList.add('reveal-image-fast');
//     BAZAARspacer1r.classList.remove('hide-image-fast');
//     BAZAARspacer1r.classList.add('reveal-image-fast');

//     type(BAZAARLine1, BAZAARLine1, BAZAARText1, emptyText, 40);

//     setTimeout(() => {
//         BAZAARLine2.classList.remove('hide-image-fast');
//         BAZAARLine2.classList.add('reveal-image-fast');

//         BAZAARspacer2f.classList.remove('hide-image-fast');
//         BAZAARspacer2f.classList.add('reveal-image-fast');
//         BAZAARspacer2r.classList.remove('hide-image-fast');
//         BAZAARspacer2r.classList.add('reveal-image-fast');


//         type(BAZAARLine2, BAZAARLine2, BAZAARText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningBAZAAR = false;
//         waitingBAZAAR = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedBAZAAR) {
//             waitingBAZAAR = false;
//             return;
//         }
//         if (!hoveringBAZAAR) {
//             fadeBAZAAR();
//         }
//         waitingBAZAAR = false;
//     }, 2000);
// });



// bazaarText.addEventListener('mouseleave', () => {
//         hoveringBAZAAR = false;
//         if (fadedBAZAAR) {
//             return;
//         }
//         if (!runningBAZAAR) {
//             fadeBAZAAR();
//         }
// });

// function fadeBAZAAR() {
//         BAZAARInfoContainer.classList.remove('reveal-image-fast');
//         BAZAARInfoContainer.classList.add('hide-image-fast');
//         BAZAARspacer1f.classList.remove('reveal-image-fast');
//         BAZAARspacer1f.classList.add('hide-image-fast');
//         BAZAARspacer1r.classList.remove('reveal-image-fast');
//         BAZAARspacer1r.classList.add('hide-image-fast');
    
//         BAZAARspacer2f.classList.remove('reveal-image-fast');
//         BAZAARspacer2f.classList.add('hide-image-fast');
//         BAZAARspacer2r.classList.remove('reveal-image-fast');
//         BAZAARspacer2r.classList.add('hide-image-fast');
    
//         BAZAARLine1.classList.remove('reveal-image-fast');
//         BAZAARLine1.classList.add('hide-image-fast');
//         BAZAARLine2.classList.remove('reveal-image-fast');
//         BAZAARLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             BAZAARLine1.innerText = "";
//             BAZAARLine2.innerText = "";
//             fadedBAZAAR = true;
//         }, 500);
// }

// // ***************************************************************************************** //

// const REELInfoContainer = document.getElementById('REEL-info');
// const REELspacer1f = document.getElementById('spacer-1f-REEL');
// const REELspacer1r = document.getElementById('spacer-1r-REEL');
// const REELspacer2f = document.getElementById('spacer-2f-REEL');
// const REELspacer2r = document.getElementById('spacer-2r-REEL');

// const REELLine1 = document.getElementById('REEL-1');
// const REELLine2 = document.getElementById('REEL-2');

// const REELText1 = "Editor/Colorist";
// const REELText2 = "Kostadin Kolev";

// var runningREEL = false;
// var hoveringREEL = false;
// var waitingREEL = false;
// var fadedREEL = true;

// var f = false;



// reelText.addEventListener('mouseover', () => {
//     hoveringREEL = true;
//     if (runningREEL || waitingREEL) {
//         return;
//     }

//     runningREEL = true;
//     fadedREEL = false;
    

//     REELInfoContainer.classList.remove('hide-image-fast');
//     REELInfoContainer.classList.add('reveal-image-fast');
//     REELLine1.classList.remove('hide-image-fast');
//     REELLine1.classList.add('reveal-image-fast');

//     REELspacer1f.classList.remove('hide-image-fast');
//     REELspacer1f.classList.add('reveal-image-fast');
//     REELspacer1r.classList.remove('hide-image-fast');
//     REELspacer1r.classList.add('reveal-image-fast');

//     type(REELLine1, REELLine1, REELText1, emptyText, 40);

//     setTimeout(() => {
//         REELLine2.classList.remove('hide-image-fast');
//         REELLine2.classList.add('reveal-image-fast');

//         REELspacer2f.classList.remove('hide-image-fast');
//         REELspacer2f.classList.add('reveal-image-fast');
//         REELspacer2r.classList.remove('hide-image-fast');
//         REELspacer2r.classList.add('reveal-image-fast');


//         type(REELLine2, REELLine2, REELText2, emptyText, 40)
//     }, 500);

//     setTimeout(() => {
//         runningREEL = false;
//         waitingREEL = true;
//     }, 1000);
//     setTimeout(() => {
//         if (fadedREEL) {
//             waitingREEL = false;
//             return;
//         }
//         if (!hoveringREEL) {
//             fadeREEL();
//         }
//         waitingREEL = false;
//     }, 2000);
// });



// reelText.addEventListener('mouseleave', () => {
//         hoveringREEL = false;
//         if (fadedREEL) {
//             return;
//         }
//         if (!runningREEL) {
//             fadeREEL();
//         }
// });

// function fadeREEL() {
//         REELInfoContainer.classList.remove('reveal-image-fast');
//         REELInfoContainer.classList.add('hide-image-fast');
//         REELspacer1f.classList.remove('reveal-image-fast');
//         REELspacer1f.classList.add('hide-image-fast');
//         REELspacer1r.classList.remove('reveal-image-fast');
//         REELspacer1r.classList.add('hide-image-fast');
    
//         REELspacer2f.classList.remove('reveal-image-fast');
//         REELspacer2f.classList.add('hide-image-fast');
//         REELspacer2r.classList.remove('reveal-image-fast');
//         REELspacer2r.classList.add('hide-image-fast');
    
//         REELLine1.classList.remove('reveal-image-fast');
//         REELLine1.classList.add('hide-image-fast');
//         REELLine2.classList.remove('reveal-image-fast');
//         REELLine2.classList.add('hide-image-fast');
    
//         setTimeout(() => {
//             REELLine1.innerText = "";
//             REELLine2.innerText = "";
//             fadedREEL = true;
//         }, 500);
// }

// ***************************************************************************************** //

const emailLine = document.getElementById('email');
// const phoneLine = document.getElementById('phone');

const EMAILspacerF = document.getElementById('spacer-1f-email');
const EMAILspacerR = document.getElementById('spacer-1r-email');
// const PHONEspacerF = document.getElementById('spacer-2f-phone');
// const PHONEspacerR = document.getElementById('spacer-2r-phone');

const emailText = "E: KOSTADINKOLEV9595@GMAIL.COM";
// const phoneText = "P: (929) 531-1487";

var typed = false;

function contactTypeOut() {
        emailLine.classList.remove('hide-image-fast');
        emailLine.classList.add('reveal-image-fast');

        EMAILspacerF.classList.remove('hide-image-fast');
        EMAILspacerF.classList.add('reveal-image-fast');
        EMAILspacerR.classList.remove('hide-image-fast');
        EMAILspacerR.classList.add('reveal-image-fast');

        type(emailLine, emailLine, emailText, emptyText, 60);

        // setTimeout(() => {
        //         phoneLine.classList.remove('hide-image-fast');
        //         phoneLine.classList.add('reveal-image-fast');
        
        //         PHONEspacerF.classList.remove('hide-image-fast');
        //         PHONEspacerF.classList.add('reveal-image-fast');
        //         PHONEspacerR.classList.remove('hide-image-fast');
        //         PHONEspacerR.classList.add('reveal-image-fast');
        
        
        //         type(phoneLine, phoneLine, phoneText, emptyText, 50)
        // }, 1700);
        typed = true;
}



////// MOBILE TYPE ////////////////


const emailLineMobile = document.getElementById('email-m');
const phoneLineMobile = document.getElementById('phone-m');

const EMAILspacerFMobile = document.getElementById('spacer-1f-email-m');
const EMAILspacerRMobile = document.getElementById('spacer-1r-email-m');
const PHONEspacerFMobile = document.getElementById('spacer-2f-phone-m');
const PHONEspacerRMobile = document.getElementById('spacer-2r-phone-m');

var typedMobile = false;

function contactTypeOutMobile() {
        emailLineMobile.classList.remove('hide-image-fast');
        emailLineMobile.classList.add('reveal-image-fast');

        EMAILspacerFMobile.classList.remove('hide-image-fast');
        EMAILspacerFMobile.classList.add('reveal-image-fast');
        EMAILspacerRMobile.classList.remove('hide-image-fast');
        EMAILspacerRMobile.classList.add('reveal-image-fast');

        type(emailLineMobile, emailLineMobile, emailText, emptyText, 60);

        // setTimeout(() => {
        //         phoneLineMobile.classList.remove('hide-image-fast');
        //         phoneLineMobile.classList.add('reveal-image-fast');
        
        //         PHONEspacerFMobile.classList.remove('hide-image-fast');
        //         PHONEspacerFMobile.classList.add('reveal-image-fast');
        //         PHONEspacerRMobile.classList.remove('hide-image-fast');
        //         PHONEspacerRMobile.classList.add('reveal-image-fast');
        
        
        //         type(phoneLineMobile, phoneLineMobile, phoneText, emptyText, 50)
        // }, 1700);
        typedMobile = true;
}


// function hoverType(ifHovering, ifRunning, ifWaiting, ifFaded, container, line1, line2, spacer1f, spacer2f, spacer1r, spacer2r, text1, text2) {
//         ifHovering = true;
//         if (ifRunning || ifWaiting) {
//                 return;
//         }

//         ifRunning = true;
//         ifFaded = false;

//         container.classList.remove('hide-image-fast');
//         container.classList.add('reveal-image-fast');
//         line1.classList.remove('hide-image-fast');
//         line1.classList.add('reveal-image-fast');

//         spacer1f.classList.remove('hide-image-fast');
//         spacer1f.classList.add('reveal-image-fast');
//         spacer1r.classList.remove('hide-image-fast');
//         spacer1r.classList.add('reveal-image-fast');

//         type(line1, line1, text1, emptyText, 40);

//         setTimeout(() => {
//                 line2.classList.remove('hide-image-fast');
//                 line2.classList.add('reveal-image-fast');

//                 spacer2f.classList.remove('hide-image-fast');
//                 spacer2f.classList.add('reveal-image-fast');
//                 spacer2r.classList.remove('hide-image-fast');
//                 spacer2r.classList.add('reveal-image-fast');


//                 type(line2, line2, text2, emptyText, 40)
//         }, 500);

//         setTimeout(() => {
//                 ifRunning = false;
//                 ifWaiting = true;
//         }, 1000);
//         setTimeout(() => {
//                 if (ifFaded) {
//                         ifWaiting = false;
//                         return;
//                 }
//                 if (!ifHovering) {
//                         fadeType(container, spacer1f, spacer1r, spacer2f, spacer2r, line1, line2, ifFaded);
//                 }
//                 ifWaiting = false;
//         }, 2000);
// }

// var doHoverAD = () => hoverType(hoveringad, runningad, waitingad, fadead, adInfoContainer, adLine1, adLine2, adspacer1f, adspacer2f, adspacer2f, adspacer2r, adText1, adText2);
// var doUnHoverAD = () => unHoverType(hoveringad, fadead, runningad);

// function unHoverType(ifHovering, ifFaded, ifRunning) {
//         ifHovering = false;
//         if (ifFaded) {
//             return;
//         }
//         if (!ifRunning) {
//             fadeType(adInfoContainer, adspacer1f, adspacer1r, adspacer2f, adspacer2r, adLine1, adLine2, ifFaded);
//         }
// };

// function fadeType(container, spacer1f, spacer1r, spacer2f, spacer2r, line1, line2, ifFaded) {
//         container.classList.remove('reveal-image-fast');
//         container.classList.add('hide-image-fast');

//         spacer1f.classList.remove('reveal-image-fast');
//         spacer1f.classList.add('hide-image-fast');
//         spacer1r.classList.remove('reveal-image-fast');
//         spacer1r.classList.add('hide-image-fast');

//         spacer2f.classList.remove('reveal-image-fast');
//         spacer2f.classList.add('hide-image-fast');
//         spacer2r.classList.remove('reveal-image-fast');
//         spacer2r.classList.add('hide-image-fast');
    
//         line1.classList.remove('reveal-image-fast');
//         line1.classList.add('hide-image-fast');
//         line2.classList.remove('reveal-image-fast');
//         line2.classList.add('hide-image-fast');

//         setTimeout(() => {
//                 line1.innerText = "";
//                 line2.innerText = "";
//                 ifFaded = true;
//         }, 500);
// }

// adidasText.addEventListener('mouseover', doHoverAD, false);
// adidasText.addEventListener('mouseleave', doUnHoverAD, false);