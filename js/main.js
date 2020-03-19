const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userPoints_span= document.getElementById("userPoints");
const cpuPoints_span = document.getElementById("cpuPoints");
const winner_h2= document.getElementById('winner');
const creator_h2= document.getElementById('creator');
const won_span= document.getElementById('won');
const userChoice_span= document.getElementById('userChoice');
const cpuChoice_span=document.getElementById('cpuChoice');
let userPoints=0;
let cpuPoints=0;
const updateData =(userElection,cpuElection,finalWinner)=>{
 userChoice_span.textContent=userElection;
 cpuChoice_span.textContent=cpuElection;
 won_span.textContent=finalWinner;
}


const winnerShow=()=>{
creator_h2.style.display='none';
winner_h2.style.display='block';
}

const getCpuChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  let cpuChoice = choices[randomNumber];
  return cpuChoice;
};

const won =()=>{
    userPoints++
    userPoints_span.textContent = userPoints;
}

const lost =()=>{
    cpuPoints++
    cpuPoints_span.textContent= cpuPoints;
}

const checkWin = (userChoice, cpuChoice) => {
  switch (userChoice + cpuChoice) {
    case "rr":
        updateData('Rock','Rock', 'Nobody')
      break;
    case "rp":
        lost();
        updateData('Rock','Paper','You Lost!')
      break;
    case "rs":
        won();
        updateData('Rock','Scissors','You Win!')
      break;
    case "pr":
        won();
        updateData('Paper','Rock','You win!')
      break;
    case "pp":
        updateData('Paper','Paper', 'Nobody')
      break;
    case "ps":
        lost();
        updateData('Paper','Scissors','You Lost!')
      break;
    case "sr":
        lost()
        updateData('Scissors','Rock', 'You Lost!')
      break;
    case "sp":
        won();
        updateData('Scissors','Paper','You Win!')
      break;
    case "ss":
        updateData('Scissors','Scissors','Nobody')
      break;
    default:
      break;
  }
};

let userChoice;

rock.addEventListener("click", () => {
  userChoice = "r";
  let cpuChoice = getCpuChoice();
  checkWin(userChoice,cpuChoice);
  winnerShow()
});

paper.addEventListener("click", () => {
  userChoice = "p";
  let cpuChoice = getCpuChoice();
  checkWin(userChoice,cpuChoice);
  winnerShow()
});

scissors.addEventListener("click", () => {
  userChoice = "s";
  let cpuChoice = getCpuChoice();
  checkWin(userChoice,cpuChoice);
  winnerShow()
});
