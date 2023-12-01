function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumbers(){
    let nums = [];
    for (let i = 0; i < 5; i++) nums.push(randomNumber(1, 100));
    return nums;
}

function printNumbers(nums) {
    let divNumbers = document.getElementById("numbers");
    divNumbers.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const numElement = document.createElement("h1");
        numElement.id = "num-" + (i + 1);

        numElement.innerHTML = nums[i];

        divNumbers.appendChild(numElement);
    }
}

function game(nums) {

    let playerNumber = [];

    console.log("Il timer è partito!");
    setTimeout(function() {

        playerNumber = askNumbers();

        check(playerNumber, nums);
    }, 10000);
}

function askNumbers(){
    let divNumbers = document.getElementById("numbers");
    divNumbers.innerHTML = "";

    let playerNumber = [];

    for(let i = 0; i < 5; i++){
        playerNumber.push(prompt("Inserisci il numero alla posizione numero " + (i+1)));
    }

    console.log(playerNumber);

    return playerNumber;
}

function check(playerNumber, nums){

    printNumbers(nums);

    let divsNumbers = [];

    for(i = 0; i < 5; i++){
        divsNumbers[i] = document.getElementById("num-" + (i+1));
    }

    for(i = 0; i < 5; i++){
        if(playerNumber[i] == nums[i]) divsNumbers[i].classList.add("green");

        else divsNumbers[i].classList.add("red");

    }

}

let numbers = generateNumbers();
printNumbers(numbers);
game(numbers);



