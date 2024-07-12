const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generatePasswords(){
    let passwordLengthEl = document.getElementById("password-length");
    let passwordLength = Number( passwordLengthEl.value );
    let uppercaseEl = document.getElementById("include-uppercase");
    let hasUppercase = uppercaseEl.checked;
    let lowercaseEl = document.getElementById("include-lowercase");
    let hasLowercase = lowercaseEl.checked;
    let numbersEl = document.getElementById("include-numbers");
    let hasNumbers = numbersEl.checked;
    let symbolsEl = document.getElementById("include-symbols");
    let hasSymbols = symbolsEl.checked;

    if(!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols){
        alert("Please select at least one option");
        return;
    }
    if(passwordLength < 5 || passwordLength > 19){
        alert("Password length must be between 5 and 19 characters");
        return;
    }
    let firstPassword = randomPassword(hasUppercase, hasLowercase, hasNumbers, hasSymbols, passwordLength);
    let secondPassword = randomPassword(hasUppercase, hasLowercase, hasNumbers, hasSymbols, passwordLength);
    let firstPasswordEl = document.getElementById("first-password");
    let secondPasswordEl = document.getElementById("second-password");
    firstPasswordEl.value = firstPassword;
    secondPasswordEl.value = secondPassword;
    console.log(firstPassword);
    console.log(secondPassword);

}

function getRandomCharacter(optn){
    if(optn == 0)
        return uppercase[Math.floor(Math.random() * uppercase.length)];
    if(optn == 1)
        return lowercase[Math.floor(Math.random() * lowercase.length)];
    if(optn == 2)
        return numbers[Math.floor(Math.random() * numbers.length)];
    if(optn == 3)
        return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomPassword(hasUppercase, hasLowercase, hasNumbers, hasSymbols, N){
    let options = [];
    let psw = "";
    let tam_act = 0;

    if(hasUppercase){
        options.push(0);
    }
    if(hasLowercase){
        options.push(1);
    }
    if(hasNumbers){
        options.push(2);
    }
    if(hasSymbols){
        options.push(3);
    }
    for (let i = 0; i < options.length; i++){
        psw = psw + getRandomCharacter(options[i]);
        tam_act++;
    }
    for (let i = tam_act; i < N; i++){
        let optn = options[Math.floor(Math.random() * options.length)];
        psw = psw + getRandomCharacter(optn);
    }
    return psw;
}

function copyPassword(option){
    let passwordEl;
    if(option === 'first'){
        passwordEl = document.getElementById("first-password");
    }else{
        passwordEl = document.getElementById("second-password");
    }
    console.log(passwordEl.value);
    passwordEl.select();
    //PasswordEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordEl.value);
}
