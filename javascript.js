const container = document.getElementById("container");

for (let y = 0; y<16; y++){
    const rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    rowContainer.style.justifyContent = "center";
    rowContainer.style.alignItems = "center";
    container.appendChild(rowContainer);
    for(let x=0; x<16; x++){
        let newButton = document.createElement("button");
        newButton.style.height = '30px';
        newButton.style.width = '30px';
        rowContainer.appendChild(newButton);
    }
}