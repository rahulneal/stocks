const form = document.forms[0];
const inputs = document.querySelectorAll(".input");
const output = document.querySelector(".output");
const contentDiv = document.querySelector(".displayFlex");
const cols=document.querySelectorAll(".col");


form.addEventListener("submit", checkHandler);

function checkHandler(e){
    e.preventDefault();
    cols[0].classList.remove("transperantBg");
    cols[1].classList.remove("transperantBg");
    contentDiv.classList.remove("sadTheme");
    contentDiv.classList.remove("happyTheme");

    let CP = inputs[0].value;
    let Qty = inputs[1].value;
    let SP = inputs[2].value;
    if( !isNaN(CP) && !isNaN(Qty) && !isNaN(SP)){
        CP = Number(CP);
        Qty = Number(Qty);
        SP = Number(SP);
        if(CP>0 && Qty>0 && SP>0){
            //loss
            if(CP>SP){
                const loss = ((CP-SP)*Qty).toFixed(2);
                const lossPer=(((CP-SP)*100)/CP).toFixed(2) ;
                output.innerHTML=  `<div style="background-color: rgb(255, 255,255,0.2); padding: 1rem">You lost ${lossPer}%. Your total loss is ₹${loss}</div>`;

                if(lossPer>50){
                    cols[0].classList.add("transperantBg");
                    cols[1].classList.add("transperantBg");
                    contentDiv.classList.add("sadTheme");
                }

            }
            //profit
            else{
                const profit = ((SP-CP)*Qty).toFixed(2)
                const profitPer=(((SP-CP)*100)/CP).toFixed(2) ;
                output.innerHTML=  `<div style="background-color: rgb(255, 255,255,0.2); padding: 1rem">You gained ${profitPer}%. Your total profit is ₹${profit}</div>`;
                // output.style.backgroundImage = "url('./Images/money.gif')";
                if(profitPer>50){
                cols[0].classList.add("transperantBg");
                cols[1].classList.add("transperantBg");
                contentDiv.classList.add("happyTheme");
                }
            }
        }else{
            //error
            output.innerHTML=`Please enter values greater than 0 (only numbers are allowed in above fields)`
        }
    }else{
        //error
        output.innerHTML="Please enter values greater than 0 (only numbers are allowed in above fields)"
    }
}