const display = document.getElementById("display");

// 4 functions: append, calculate, clear, and backspace

function appendToDisplay(input){
   display.value += input; 
}

function clearDisplay(){
    display.value = ""; 
}

function calculate(){
    try {
        display.value = eval(display.value);
    }catch{
        display.value = "Error"; 
    }
}

function backspace(){
    if (display.value == "Error")
        clearDisplay(); 
    
    try{
        display.value = display.value.slice(0, -1);
    }catch{
        clearDisplay();
    }
}