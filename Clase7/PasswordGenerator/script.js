//https://colorhunt.co/palette/212125239d60a3de83f7f39a

const rangeInput = document.querySelector('.custom-range');
rangeInput.addEventListener('input', () => {
    const value = rangeInput.value;
    const percentage = (value / 20) * 100; 
    rangeInput.style.background = `linear-gradient(to right, #239D60 0%, #239D60 ${percentage}%, #222 ${percentage}%, #222 100%)`;
    document.getElementById("num-caracteres").textContent=value;
});

function generatePassword(){
    const length = rangeInput.value;
    const includeUppercase = document.getElementById("doUpper").checked;
    const includeLowercase = document.getElementById("doLower").checked;
    const includeNumbers = document.getElementById("doNumber").checked;
    const includeSymbols = document.getElementById("doSymbol").checked;

    const LOWERCASE = "abcdefghijklmnñopqrstuvwxyz";
    const UPERCASE = LOWERCASE.toUpperCase();
    const NUMBERS = "1234567890";
    const SYMBOL = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

    let allowedChars = "";
    let password = "";

    if (includeUppercase) allowedChars += UPERCASE;
    if (includeLowercase) allowedChars += LOWERCASE;
    if (includeNumbers) allowedChars += NUMBERS;
    if (includeSymbols) allowedChars += SYMBOL;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
function updatePassword() {
    document.getElementById("generated-pass").textContent = generatePassword();
}

// Event listeners para los elementos de la interfaz




