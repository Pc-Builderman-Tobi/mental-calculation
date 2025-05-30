//const TheCalculation = document.getElementById("Calculation");
//TheCalculation.innerHTML = "10 + 10 = ";

const TheCalculation = document.getElementById("Calculation");
const Winstreak = document.getElementById("winstreak");
const SettingsPressed = document.getElementById("OpenSettings")

let result = 0;
let winstreak = 0;

let AllowedOperations={
    plus: true,
    minus: true,
    mult: true,
    divide: true
};

function Addition(){
    Numb1 = randomNumber(1, 100);
    Numb2 = randomNumber(1, 100);

    OperationChar = '+';
    result = Numb1 + Numb2;
}

function Calculationop(){
    return Math.floor(Math.random() * 4);
}

function Calculating() {
    const allowed=[];

    if(AllowedOperations.plus) allowed.push('plus');
    if(AllowedOperations.minus) allowed.push('minus');
    if(AllowedOperations.mult) allowed.push('mult');
    if(AllowedOperations.divide) allowed.push('divide');
    
    if (allowed.length === 0) {
        TheCalculation.innerHTML = 'Keine Rechenarten aktiviert!';
        return;
    }

    const op = allowed[Math.floor(Math.random() * allowed.length)];

    let OperationChar;
    let Numb1 = 0;
    let Numb2 = 0;
    
    if(op === 'plus') {
        Numb1 = randomNumber(1, 100);
        Numb2 = randomNumber(1, 100);

        OperationChar = '+';
        result = Numb1 + Numb2;
    }
    else if(op === 'minus') {
        Numb1 = randomNumber(1, 100);
        Numb2 = randomNumber(1, 100);
        OperationChar = '-';

        result = Math.abs(Numb1-Numb2);
    }
    else if(op == 'mult') {   
        Numb1 = randomNumber(1, 10);
        Numb2 = randomNumber(1, 10);
        OperationChar = '*';
        
        result = Numb1 * Numb2;
    }
    else if(op == 'divide') {
        do {
            Numb1 = randomNumber(1, 100);
            Numb2 = randomNumber(2, 10);
        }   while(Numb1 % Numb2 != 0);
        
        OperationChar = '/';
        result = Numb1 / Numb2;
    }

    if(Numb1 < Numb2) {
        [Numb1, Numb2] = [Numb2, Numb1];
    }
    
    TheCalculation.innerHTML = `${Numb1} ${OperationChar} ${Numb2} = `;
    
    Winstreak.innerHTML = `${winstreak}`;
    updateImage();
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
    else if(UserInput == ''){
        console.log("No Input");
        winstreak+=0;
    }
    else{
        console.log("False");
        winstreak = 0;
        Calculating();
    }
    document.getElementById("UserInput").value = '';
}

function handle(e, UserInput){ // e = event in HTML
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        Input(UserInput);
    }
}

function updateImage() {
    myImage = document.getElementById("WinstreakImage");

    if (winstreak == 0){
        myImage.src = "Images/fire(1).png";
    }
    else if(winstreak >=0){
        myImage.src = "Images/fire.png";
    }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function OnAndOff(Form) {
    if(Form == '+'){
        if(AllowedOperations.plus == false)
            AllowedOperations.plus = true;
        else
            AllowedOperations.plus = false;
        console.log("Pressed1");
    }
    else if(Form == '-'){
        if(AllowedOperations.minus == false)
            AllowedOperations.minus = true;
        else
            AllowedOperations.minus = false;
        console.log("Pressed2");
    }
    else if(Form == '*'){
        if(AllowedOperations.mult == false)
            AllowedOperations.mult = true;
        else
            AllowedOperations.mult = false;
        console.log("Pressed3");
    }
    else if(Form == '/'){
        if(AllowedOperations.divide == false)
            AllowedOperations.divide = true;
        else
            AllowedOperations.divide = false;
        console.log("Pressed4");
    }
}


// Cookie Functions

Calculating();