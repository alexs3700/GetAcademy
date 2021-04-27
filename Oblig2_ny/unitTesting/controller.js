function chooseBar(barNumber) {
    chosenBar = (chosenBar == barNumber) ? chosenBar = '': chosenBar = barNumber;
    // buttonState = (chosenBar != '') ? '' : 'disabled'; 
    // // show();
    // (barNumber != chosenBar) ? removeBorder(barNumber) : addBorder(chosenBar);             
}

function checkFunction(val) {
    let boolFlag;
    if (!isNaN(val)) 
        if ( (val < 11) && (val > 0) )  {
            boolFlag = true;  
            return boolFlag;
    } 
    else {
        boolFlag = false;
        return boolFlag;
    }
}

function addBar(val) {
    if (checkFunction(val) == true) {
                numbers.push(val);
                // show();
                } else {
                    alert('Not a valid input');
                }
            }

function removeBar(chosen) {
    let int1 = parseInt(chosen);
    let index1 = int1 - 1;
    numbers.splice(index1, 1);
    // show();
}

function changeBar(chosen) {
    let int1 = parseInt(chosen);
    let index1 = int1 - 1
    if (checkFunction(inputValue)) {
        numbers[index1] = inputValue;
        // show();
        } else {
            alert('Not a valid input');
        }   
    // show();
}

