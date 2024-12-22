const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        result.textContent="You selected to Fahrenheit";
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent = temp.toFixed(1) +"°F";


    }
    else if(tocelsius.checked){
        result.textContent="You selected to Celsius";
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent = temp.toFixed(1) +"°C";

    }
    else{
        result.textContent="select a unit";
    }



}