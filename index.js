const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");
let numCharacters = 15;
let random = 0;
let password = [];
let individualCharacter="";

function generatePasswords(){
    pass1El.textContent = "";
    randomPassword();
    for(let i=0 ; i<numCharacters ; i++){
        pass1El.textContent += password[i];
    }
    pass2El.textContent = "";
    randomPassword();
    for(let i=0 ; i<numCharacters ; i++){
        pass2El.textContent += password[i];
    }
}

function randomPassword(){
    password = [];
    for(let i=0 ; i<numCharacters ; i++){
        random = Math.floor(Math.random()*characters.length);
        individualCharacter = characters[random];
        password.push(individualCharacter);
    }
}


