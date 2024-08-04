function navigatePage(loc){
  if(loc === "landing" ||
     loc === "form" ||
     loc === "offering"){
    window.location.href = "#"+loc; 
  }
}

// Toggles the "SHOW MORE"/"SHOW LESS" button
function toggleExtra(btn) {
  const extra = btn.previousElementSibling;
  if (extra.style.display === "none" ||
      extra.style.display === "") {
    extra.style.display = "block";
    btn.innerText = "SHOW LESS";
  } else {
    extra.style.display = "none";
    btn.innerText = "SHOW MORE";
  }
}