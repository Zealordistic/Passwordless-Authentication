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