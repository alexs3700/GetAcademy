function removeBar() {
    let numbers2 = Array.from(numbers);         

  
   
    if (chosenBar != '') {                
        numbers2.splice(myIndex, 1);
}      

        
       
return numbers2;

}



function changeBar(){
if (inputValue != ''){
    numbers3 = Array.from(numbers);
   
    numbers3[myIndex] = inputValue;
    // show();  
}
return numbers3[myIndex];
        
}

function showId(that) { 
let index1 = idNum.indexOf(chosenBar); 
 

if (counterArray[index1] == 0) {
counterArray[index1]++;
chosenBar = that;
// show();

} else if (counterArray[index1] == 1) {
counterArray[index1]--;
chosenBar = '';
// show();
}


// if (chosenBar != '') {
//     addBorder(chosenBar);
//     buttonEnable();
// }         
return chosenBar;
}



function addBar(value) {                    
// max++;
// Must use a copy array of numbers.
// If we push an element to the original numbers array.
// Unit testing involving numbers array can be broken. 
let numbers4 = Array.from(numbers);        

numbers4.push(value);
//     len = numbers.length;
//     let temp4 = 'id';
//     let temp5 = max
//     let temp6 = temp4 + temp5;
//     idNum.push(temp6);
//    console.log(idNum);

// show(); 

return numbers4;
} 