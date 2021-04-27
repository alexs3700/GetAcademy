function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${chosenBar}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="addBar(inputValue)">Legg til stolpe</button>
        <button ${buttonState} onclick="changeBar(chosenBar)">Endre valgt stolpe</button><br />
        <button ${buttonState} onclick="removeBar(chosenBar)">Fjerne valgt stolpe</button>
        `;
    }

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect id="${barNo}" width="${width}" onclick="chooseBar(this.id)" height="${height}"
                        x="${x}" y="${y}" fill="${color}"></rect>`;
}


function addBorder(barNumber) {
    barNumber = String(barNumber);
    document.getElementById(barNumber).classList.add('strokeOnOff');        
}

function removeBorder(barNumber) {
    barNumber = String(barNumber);
    document.getElementById(barNumber).classList.remove('strokeOnOff');
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}
