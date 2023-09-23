"use strict"

// console.log(window.innerWidth);

let tileNumber = 2;
let previousTime = 0;


function tileArea(tileColumns) {
    let dimensions = (790 / (tileColumns) - 5);
    let dRoot = document.querySelector(":root");
    let mainContainer = document.querySelector("div.main-container");

    mainContainer.innerHTML = "";
    dRoot.style.setProperty("--pboxSides", (dimensions + "px"));

    for (let i = 0; i < tileColumns; ++i) { 
        mainContainer.innerHTML += `<div class="pixelrow">`

        for (let j = 0; j < tileColumns; ++j) {
            let pixelRow = document.querySelectorAll("div.pixelrow");
            let pixelBox = `<div id="box${i}${j}" class="pixelbox unselected"></div>`;
            pixelRow[i].innerHTML += pixelBox;

        }
        mainContainer.innerHTML += "</div>"
    }
}

tileArea(tileNumber);

function toggleSelected(box, currentTime) {
    if (currentTime < (previousTime+250)) return;
    if (box.classList.contains("unselected")) {
        box.classList.remove("unselected");
        box.classList.add("selected");
    } else if (box.classList.contains("selected")) {
        box.classList.remove("selected");
        box.classList.add("unselected");
    }
}

function mouseHandler(e) {
    // console.log(click);
    if (e.buttons !== 1) return;
    if (e.target.classList.contains("pixelbox")) {
        toggleSelected(e.target, e.timeStammp);
    }
}

// window.addEventListener("click", clickHandler);
window.addEventListener("mousemove", mouseHandler);