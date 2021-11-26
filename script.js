const calculate=()=>{
let amount=document.getElementById("amount").value;

let percentage=document.getElementById("per").value;



let final_result=amount*(percentage/100);
document.getElementById("result").innerHTML = final_result;

}