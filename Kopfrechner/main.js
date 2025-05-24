//const TheCalculation = document.getElementById("Calculation");
//TheCalculation.innerHTML = "10 + 10 = ";
const TheCalculation = document.getElementById("Calculation");
const Winstreak = document.getElementById("winstreak");

let result = 0;
let winstreak = 0;


function CalculationOperator() {
    /*
        0 ... +
        1 ... -
        2 ... *
        3 ... /
    */
    return Math.floor(Math.random() * 4);
}

function Calculating() {
    

    let Operator = CalculationOperator();
    let OperationChar;
    let Numb1 = 0;
    let Numb2 = 0;

    if(Operator <= 1) {
        Numb1 = randomNumber(1, 100);
        Numb2 = randomNumber(1, 100);
        if(Operator == 1) {
            OperationChar = '-';
            if(Numb1 > Numb2) {
                result = Numb1 - Numb2;
            }
            else{
                result = Numb2 - Numb1;
            }
        }
        else {
            OperationChar = '+';
            result = Numb1 + Numb2;
        }
    }
    else if(Operator == 2) {
        Numb1 = randomNumber(1, 10);
        Numb2 = randomNumber(1, 10);
        OperationChar = '*';
        
        result = Numb1 * Numb2;
    }
    else {
        Numb1 = randomNumber(1, 100);
        Numb2 = randomNumber(1, 10);
        OperationChar = '/';

        while(Numb1 % Numb2 != 0) {
            Numb1 = randomNumber(1, 100);
            Numb2 = randomNumber(1, 10);
        }
        
        result = Numb1 / Numb2;
    }

    
    if(Numb1 > Numb2 && OperationChar != '+')
        TheCalculation.innerHTML = `${Numb1} ${OperationChar} ${Numb2} = `;
    
    else
        TheCalculation.innerHTML = `${Numb2} ${OperationChar} ${Numb1} = `;
    Winstreak.innerHTML = `${winstreak}`;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function Input(UserInput) {
    if(UserInput == result){
        console.log("True");
        winstreak++;
        Calculating();
    }
    else{
        console.log("False");
        winstreak = 0;
        Calculating();
    }
    document.getElementById("UserInput").value = '';
}


Calculating();