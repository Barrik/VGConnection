console.log("list-script.js has run");
console.log(gameListAllAges);
// console.log("The All Ages game list is " + gameListAllAges.length + " games long");

// Populate the game list
for (var i = 0; i < gameListAllAges.length; i++) {
  var name = gameListAllAges[i].name;
  // console.log(name);
  var element1 = "<li class='nav-item'><a class='nav-link' href='game-info.html?g="
  var fullElement = element1 + i + "'>" + name + "</a></li>"
  // console.log(fullElement);
  $("#gameList").append(fullElement);
};
