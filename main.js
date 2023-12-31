"use strict"

// console.log(window.innerWidth);

let tileNumber = 2;

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

function toggleSelected(box) {
    if (box.classList.contains("unselected")) {
        box.classList.remove("unselected");
        box.classList.add("selected");
    }
}

function mouseHandler(e) {
    if (e.buttons !== 1) return;
    if (e.target.classList.contains("pixelbox")) {
        toggleSelected(e.target);
    }
}

tileArea(tileNumber);
const rSlider = document.querySelector("#rangeslider")
rSlider.setAttribute("value", 2);


window.addEventListener("mousemove", mouseHandler);