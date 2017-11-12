console.log("list-info.js has run");

// Find out what game this is
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var gameNumber = getQueryVariable('g');

console.log(gameNumber);

// Fill the page with information
var gameName = document.querySelector("#gameName");
gameName.innerHTML = gameListAllAges[gameNumber].name;

var gameInfo = document.querySelector("#gameInfo");
gameInfo.innerHTML = gameListAllAges[gameNumber].desc;
