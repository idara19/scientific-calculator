let display =document.getElementById("screen")
let buttons = document.querySelectorAll("button")

let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
   if (button.textContent == "=") {
    screenValue = eval(screenValue);
    display.value = screenValue
   } else if(
    button.textContent == "AC"){ 
        screenValue = ''
        display.value = ''  
   }else if(button.textContent == 'DE'){
    screenValue = screenValue.slice(1)
        display.value = screenValue 
    } else if(button.textContent == '√'){
    screenValue = Math.sqrt(screenValue)
    display.value = screenValue
   } else if(button.textContent == '∛'){
    screenValue = Math.cbrt(screenValue)
    display.value = screenValue
   }else if(button.textContent == 'sin'){
    screenValue = Math.sin(screenValue)
    display.value = screenValue
   }else if(button.textContent == 'cos'){
    screenValue = Math.cos(screenValue)
    display.value = screenValue
   }else if(button.textContent == 'tan'){
    screenValue = Math.tan(screenValue)
    display.value = screenValue
   }
else{
    screenValue += button.textContent;
    display.value = screenValue  
   }
    })
})
