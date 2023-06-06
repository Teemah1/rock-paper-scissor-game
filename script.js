/**create a variable that holds the computer's choice
 * generate a random number and ensure the range is from 1 and 3 and assign it to the computer's choice
 * if the number is 1 the computer returns rock;
 * else if the number is 2 then the computer return paper
 * else the computer return scrissors;
 * console.log to ensure the function behaves well.
 */

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if(computerChoice === 1){
        return ("Rock");
    }

    else if(computerChoice === 2){
        return ("Paper");
    }

    else {
        return ("Scissors")
    }
}

console.log(getComputerChoice());