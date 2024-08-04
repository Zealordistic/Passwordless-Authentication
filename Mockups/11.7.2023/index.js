// Global Variables
var sectioninputs;
var inputarr = ["Company Name","Cloud Computing Model","Description"]
var inputval = [];
var sectionselects;
var selectarr = ["Company Budget","Business Size","Risk Tolerance","Work Environment","Physical Servers Employed"]
var selectval = [];


function navigatePage(loc){
  if(loc === "landing" ||
     loc === "form" ||
     loc === "offering"){
    window.location.href = "#"+loc; 
  }
}


// Toggles the "SHOW MORE"/"SHOW LESS" button
function toggleExtra(btn) {
  const extra = btn.nextElementSibling;
  const card = btn.parentNode;
  var best = card.getAttribute("class").includes("best");
  if(extra.style.display === ""){
    console.log(extra.style.display);
    console.log(btn.innerText);
    if(btn.innerText === "SHOW LESS"){
      extra.style.display = "none";
      card.style.height = "12vh";
      btn.innerText = "SHOW MORE";
    }
    else if(btn.innerText === "SHOW MORE"){
      extra.style.display = "block";
      if(best === true){
        card.style.height = "45vh";
      } else {
        card.style.height = "32vh";
      }
      btn.innerText = "SHOW LESS";
    }
  } else if (extra.style.display === "none") {
    extra.style.display = "block";
    if(best === true){
      card.style.height = "45vh";
    } else {
      card.style.height = "32vh";
    }
    btn.innerText = "SHOW LESS";
  } else {
    extra.style.display = "none";
    card.style.height = "12vh";
    btn.innerText = "SHOW MORE";
  }
}

function readFormInfo(){
  var form = document.getElementById("form").getElementsByClassName("container").item(0);
  sectioninputs = form.getElementsByTagName("input");
  sectionselects = form.getElementsByTagName("select");
  for(var i = 0; i < sectioninputs.length-1; i++){
    console.log(inputarr[i]+": "+sectioninputs.item(i).value);
    inputval.push(sectioninputs.item(i).value);
  }    
  for(var j = 0; j < sectionselects.length; j++){
    console.log(selectarr[j]+": "+sectionselects.item(j).value);
    var selectinput = sectionselects.item(j).value;
    var hasparenthesis = selectinput.indexOf("(");
    selectval.push(selectinput.substring(0,
      hasparenthesis === -1 ? selectinput.length : hasparenthesis));
  }
  console.log(inputval);
  console.log(selectval);
  // all values of the form should be available from now
}