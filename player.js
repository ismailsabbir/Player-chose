function selectPlayerPush(player) {
  const playerelement = document.getElementById(player);
  const playername = playerelement.innerText;

  const playerposition = document.getElementById("order-list");
  const li = document.createElement("li");
  li.innerText = playername;

  li.classList.add("player-add");
  const lilength = document
    .getElementById("order-list")
    .getElementsByClassName("player-add").length;

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
function calculation(price) {
  const playerDemandelement = document.getElementById(price);
  const playerDemandstring = playerDemandelement.value;
  const playerDemandTaka = parseFloat(playerDemandstring);
  if (isNaN(playerDemandTaka)) {
    alert("PLEASE ENTER AMOUNT");
    return;
  } else {
    const playerTotlaAmount = 5 * playerDemandTaka;

    const previceAmountElement = document.getElementById("previce-amount");
    previceAmountElement.innerText = playerTotlaAmount;
    return playerTotlaAmount;
  }

  // const playerTotlaAmount = 5 * playerDemandTaka;

  // const previceAmountElement = document.getElementById("previce-amount");
  // previceAmountElement.innerText = playerTotlaAmount;
  // return playerTotlaAmount;
}

document.getElementById("calculate").addEventListener("click", function () {
  calculation("player-price");
});

document.getElementById("totl-btn").addEventListener("click", function () {
  const mangeraElement = document.getElementById("manager-amount");
  const managerstring = mangeraElement.value;
  const managerAmount = parseFloat(managerstring);

  const coachelement = document.getElementById("coach-amount");
  const coachstr = coachelement.value;
  const coachAmount = parseFloat(coachstr);

  const previesTotalAmount = calculation("player-price");
  const totlAmountCO = previesTotalAmount + managerAmount + coachAmount;

  if (isNaN(managerAmount) || isNaN(coachAmount)) {
    alert("PLEASE ENTER AMOUNT");
  } else {
    const totalAmountPlace = document.getElementById("total-amount-place");
    totalAmountPlace.innerText = totlAmountCO;
  }

  // const totalAmountPlace = document.getElementById("total-amount-place");
  // totalAmountPlace.innerText = totlAmountCO;
});
