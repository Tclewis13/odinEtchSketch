const container = document.getElementById("container");
const newGridBtn = document.getElementById("newGridBtn");
newGridBtn.addEventListener('click', 
    function() {
        gridPrompt();
    });
newGrid(16);

function newGrid(gridSize){
    for (let y = 0; y<gridSize; y++){
        const rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";
        rowContainer.style.justifyContent = "center";
        rowContainer.style.alignItems = "center";
        rowContainer.style.flex = "1 1 0";
        rowContainer.style.minWidth = "0";
        container.appendChild(rowContainer);
        for(let x=0; x<gridSize; x++){
            let newButton = document.createElement("button");
            newButton.style.alignSelf = "stretch";
            newButton.style.flex = "1 1 0";
            newButton.style.minWidth = "0";
            newButton.style.opacity = "0";
            newButton.style.borderWidth = "1px";
            newButton.addEventListener("mouseover", function (e) {
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
                e.target.style.background = "rgb(" + getRandomInt(1,255) +"," + getRandomInt(1,255) + "," + getRandomInt(1,255) + ")";
            });
            rowContainer.appendChild(newButton);
        }
    }
}


function gridPrompt(){
    let gridSize = prompt("How many cells per side in new grid?");
    document.getElementById("container").innerHTML = "";
    newGrid(gridSize);
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}