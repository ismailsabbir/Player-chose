// document.getElementById("select1").addEventListener("click", function () {
//   const player1element = document.getElementById("player1");
//   const player1name = player1element.innerText;
//   console.log(player1name);

//   const playerposition = document.getElementById("order-list");
//   const li = document.createElement("li");
//   li.innerText = player1name;
//   playerposition.appendChild(li);

// });

function selectPlayerPush(player) {
  const playerelement = document.getElementById(player);
  const playername = playerelement.innerText;
  console.log(playername);

  const playerposition = document.getElementById("order-list");
  const li = document.createElement("li");
  li.innerText = playername;

  li.classList.add("player-add");
  const lilength = document
    .getElementById("order-list")
    .getElementsByClassName("player-add").length;
  console.log(lilength);
  if (lilength <= 4) {
    playerposition.appendChild(li);
  } else {
    alert("You can not add more than five player");
    playerposition.appendChild();
  }
}
function disble(select) {
  //const buttons = document.getElementById(select);
  select.setAttribute("disabled", true);
}
document.getElementById("select1").addEventListener("click", function () {
  selectPlayerPush("player1");
  const button = document.getElementById("select1");
  disble(button);
});
document.getElementById("select2").addEventListener("click", function () {
  selectPlayerPush("player2");
  const button = document.getElementById("select2");
  disble(button);
});
document.getElementById("select3").addEventListener("click", function () {
  selectPlayerPush("player3");
  const button = document.getElementById("select3");
  disble(button);
});

document.getElementById("select4").addEventListener("click", function () {
  selectPlayerPush("player4");
  const button = document.getElementById("select4");
  disble(button);
});
document.getElementById("select5").addEventListener("click", function () {
  selectPlayerPush("player5");
  const button = document.getElementById("select5");
  disble(button);
});
document.getElementById("select6").addEventListener("click", function () {
  selectPlayerPush("player6");
  const button = document.getElementById("select6");
  disble(button);
});

document.getElementById("select7").addEventListener("click", function () {
  selectPlayerPush("player7");
  const button = document.getElementById("select7");
  disble(button);
});
document.getElementById("select8").addEventListener("click", function () {
  selectPlayerPush("player8");
  const button = document.getElementById("select8");
  disble(button);
});
document.getElementById("select9").addEventListener("click", function () {
  selectPlayerPush("player9");
  const button = document.getElementById("select9");
  disble(button);
});

document.getElementById("select10").addEventListener("click", function () {
  selectPlayerPush("player10");
  const button = document.getElementById("select10");
  disble(button);
});
document.getElementById("select11").addEventListener("click", function () {
  selectPlayerPush("player11");
  const button = document.getElementById("select11");
  disble(button);
});
document.getElementById("select12").addEventListener("click", function () {
  selectPlayerPush("player12");
  const button = document.getElementById("select12");
  disble(button);
});

document.getElementById("calculate").addEventListener("click", function () {
  const playerDemandelement = document.getElementById("player-price");
  const playerDemandstring = playerDemandelement.value;
  const playerDemandTaka = parseFloat(playerDemandstring);
  const playerTotlaAmount = 5 * playerDemandTaka;

  const previceAmountElement = document.getElementById("previce-amount");
  // const previceAmountStr=previceAmountElement.innerText;
  // const previceAmountValue=parseFloat(previceAmountStr);
  previceAmountElement.innerText = playerTotlaAmount;
});
