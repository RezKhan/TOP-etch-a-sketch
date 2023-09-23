"use strict"

// console.log(window.innerWidth);

let tileNumber = 10;

function tileArea(tileColumns) {
    let dimensions = (790 / (tileColumns+0.25) - 5);
    let dRoot = document.querySelector(":root");
    let mainContainer = document.querySelector("div.main-container");

    dRoot.style.setProperty("--pboxSides", (dimensions + "px"));

    console.log("before for loop");
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

function clickHandler(e) {
    // console.log(click);
    // if (!click.target.classList.contains('pixelbox')) return;
    // let cTarget = click.target.id;
    console.log(e);
}

// window.addEventListener("click", clickHandler);
// window.addEventListener("mousemove", clickHandler);