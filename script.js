//DOM variables
let playBtn = document.getElementById("play-btn");
let content = document.getElementById("content");
let buttons = document.querySelector(".bottom");
let playerInputImg = document.getElementById("display-input");
let computerInputImg = document.getElementById("computer-input");
let declare = document.getElementById("declare-text");
let desciption = document.getElementById("description");
let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");

//images variables
let img = document.createElement("img");
let source = ["rock-png.png", "paper-png.png", "scissors-png.png"];
let compImg = document.createElement("img");

//player variables
let playerInput = "";
let comp = "";
let pScore = 0;
let cScore = 0;

playBtn.onclick = () => {
  playBtn.style.display = "none";
  content.style.display = "contents";
  document.body.appendChild(img);
};

buttons.addEventListener("click", getInput, false);

function getInput(e) {
  if (e.target != e) {
    playerInput = e.target.id;
    console.log("\n" + playerInput);
    desciption.textContent = "";
    getCompInput();

    getWinner();
  }

  displayInput();
  displayCompInput();
  countScore();
}

function displayInput() {
  if (playerInput !== "" && playerInput == "rock") {
    img.src = "rock-png.png";
    playerInputImg.appendChild(img);
  } else if (playerInput !== "" && playerInput == "paper") {
    img.src = "paper-png.png";
    playerInputImg.appendChild(img);
  } else if (playerInput !== "" && playerInput == "scissors") {
    img.src = "scissors-png.png";
    playerInputImg.appendChild(img);
  }
}

function getCompInput() {
  let options = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);

  comp = options[random];
  console.log("computer:" + comp);
}

function displayCompInput() {
  if (comp == "rock" && comp != "") {
    compImg.src = "rock-png.png";
    computerInputImg.appendChild(compImg);
  } else if (comp == "paper" && comp != "") {
    compImg.src = "paper-png.png";
    computerInputImg.appendChild(compImg);
  } else if (comp == "scissors" && comp != "") {
    compImg.src = "scissors-png.png";
    computerInputImg.appendChild(compImg);
  }
}

function getWinner() {
  if (playerInput == comp) {
    declare.textContent = "DRAW";
    declare.style.color = "orange";
    desciption.textContent = "";
  }
  //rock beat scissors
  else if (playerInput == "rock" && comp == "scissors") {
    declare.textContent = "You Win";
    desciption.textContent = "rock beats scissors";
    declare.style.color = "green";
    pScore++;
  } else if (playerInput == "scissors" && comp == "paper") {
    declare.textContent = "You Win";
    desciption.textContent = "scissors beats paper";
    declare.style.color = "green";
    pScore++;
  } else if (playerInput == "paper" && comp == "rock") {
    declare.textContent = "You Win";
    desciption.textContent = "paper beats rock";
    declare.style.color = "green";
    pScore++;
  } else {
    declare.textContent = "You lose";
    desciption.textContent = `${comp} beats ${playerInput}`;
    declare.style.color = "red";
    cScore++;
  }
}

function countScore() {
  playerScore.textContent = pScore.toString();
  compScore.textContent = cScore.toString();
  console.log(pScore);
  console.log(cScore);
  playerScore.style.color = "blue";
  compScore.style.color = "blue";
}
