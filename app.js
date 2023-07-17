let number = 0;


document.getElementById("increase").onclick = function(){
number = number + 1;
document.getElementById("counter").innerHTML=number;
        
if(number==10){
    alert("I'm so happy")
}}


document.getElementById("neutral").onclick = function(){
number = 0;
document.getElementById("counter").innerHTML=number;
}
    


document.getElementById("decrease").onclick = function(){
number = number - 1;
document.getElementById("counter").innerHTML=number;
                
if(number== -10){
    alert("I'm so sad")
}}
        
        