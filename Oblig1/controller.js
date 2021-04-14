
function getMinValue(array) {
    var minVal = array[0];
    for (var i = 1; i<array.length; i++) {
        if (array[i] < minVal) {
            var minVal = array[i];
        }
    }  
    return minVal;
}

function getMaxValue(array) {
    var maxVal = array[0];
    for (var i = 1; i<array.length; i++) {
        if (array[i] > maxVal) {
            maxVal = array[i];
        }
    }  
    return maxVal
}

function sumArrayElements(array) {
    var len = array.length;
    var sum = null;
    for (var i = 0; i<len; i++) {
        sum += array[i];
    }
   return sum;
}

function compareArrays(array1, array2) {
    var sum1 = sumArrayElements(array1);
    var sum2 = sumArrayElements(array2);

    textEqual = '';
   
    if (sum1 > sum2) {
        textSmallest1 = "No";
        textLargest1 = "Yes";

        textSmallest2 = "Yes";
        textLargest2 = "No";
    }

    else if (sum1 < sum2) {
        textSmallest1 = "Yes";
        textLargest1 = "No";

        textSmallest2 = "No";
        textLargest2 = "Yes"; 
    } 

    else {
        textSmallest1 = '';
        textLargest1 = '';

        textSmallest2 = '';
        textLargest2 = ''; 

     
        textEqual = "Yes";
    }
    textArray = [textSmallest1,textLargest1,textSmallest2,textLargest2, textEqual]
    return textArray;
}


    function sortArray(array) {   
        let len = array.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (array[j] > array[j + 1]) {
                        let tmp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = tmp;
                        }
                      }
            }
            return array;                
        }