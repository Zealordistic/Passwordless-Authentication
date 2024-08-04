// - Cache -
var selectval = [];
var preferredmethods = [];
var preferredvendors = [];
var formdata = [0,0,0]; // [cost, usability, security]

// Scrolling animation of webpage transitions
function navigatePage(loc) {
  if (loc === "landing" || loc === "form" || loc === "offering") {
    const element = document.getElementById(loc);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}

// Display options for dropdown multi-select
function toggleCheckbox(select){
  const checkboxes = select.nextElementSibling;
  if(checkboxes.style.display === "" ||
     checkboxes.style.display === "none"){
      checkboxes.style.display = "flex";
  }
  else{
    checkboxes.style.display = "none";
  }
}

// Toggles the "SHOW MORE"/"SHOW LESS" button
function toggleDetails(btn) {
  const card = btn.parentNode.parentNode.parentNode;
  const classname = card.getAttribute('class').replace('card', ' ').trim();
  if(classname === "best"){
    card.className = 'minibest card';
    card.getElementsByClassName('delimiter').item(0).style.display = 'none'; 
    card.getElementsByClassName('descriptiondetail').item(0).style.display = 'none';
    card.getElementsByClassName('ratingsdummy').item(0).style.display = 'none';
    card.getElementsByClassName('ratings').item(0).style.display = 'flex';
    btn.innerText = 'SHOW MORE';
  }
  else if(classname === "normal"){
    card.className = 'mininormal card';
    card.getElementsByClassName('delimiter').item(0).style.display = 'none'; 
    card.getElementsByClassName('descriptiondetail').item(0).style.display = 'none';
    card.getElementsByClassName('ratingsdummy').item(0).style.display = 'none';
    card.getElementsByClassName('ratings').item(0).style.display = 'flex';
    btn.innerText = 'SHOW MORE';
  }
  else if(classname === "minibest"){
    card.className = 'best card';
    card.getElementsByClassName('delimiter').item(0).style.display = 'flex'; 
    card.getElementsByClassName('descriptiondetail').item(0).style.display = 'flex';
    card.getElementsByClassName('ratingsdummy').item(0).style.display = 'flex';
    card.getElementsByClassName('ratings').item(0).style.display = 'none';
    btn.innerText = 'SHOW LESS';
  }
  else if(classname === "mininormal"){
    card.className = 'normal card';
    card.getElementsByClassName('delimiter').item(0).style.display = 'flex'; 
    card.getElementsByClassName('descriptiondetail').item(0).style.display = 'flex';
    card.getElementsByClassName('ratingsdummy').item(0).style.display = 'flex';
    card.getElementsByClassName('ratings').item(0).style.display = 'none';
    btn.innerText = 'SHOW LESS';
  }
}

// Read info from forms and store into cache
function readFormInfo() {
  var form = document.getElementById("form").getElementsByClassName("container").item(0);
  var sectionselects = form.getElementsByTagName("select");
  for (var j = 0; j < 7; j++) {
    var selectinput = sectionselects.item((j < 4) ? j : j+1).value;
    selectval.push(selectinput);
  }
  const prefer = form.getElementsByTagName("div");
  const vendors = prefer.item(3).getElementsByTagName("input");
  const methods = prefer.item(1).getElementsByTagName("input");
  for(var i = 0; i < vendors.length; i++){
    if(vendors.item(i).checked === true){
      preferredvendors.push(vendors.item(i).parentNode.innerText);
    }
  }
  for(var k = 0; k < methods.length; k++){
    if(methods.item(k).checked === true){
      preferredmethods.push(methods.item(k).parentNode.innerText);
    }
  }
}

// Intepret raw form data to quantitative values
function computeFormAttrs(){
  for(var i = 0; i < selectval.length; i++){
    var formindex = selectopts.indexOf(selectval[i].slice(0,selectval[i].indexOf("-")));
    var levelindex = parseInt(selectval[i].slice(selectval[i].indexOf("-")+1));
    for(var j = 0; j < 3; j++){
      formdata[j] += selecthelper[formindex][j] * selectlevels[formindex][levelindex];
    }
  }
  for(var k = 0; k < 3; k++){
    formdata[k] += formoffset[k];
    formdata[k] /= formsum[k];
  }
  for(var x = 0; x < 3; x++){
    formdata[x] *= 10;
    formdata[x].toFixed(1);
  }
}

// Sort offerings with respect to form input
function sortByFormVals(){
  offers.sort(function(offering1, offering2){
    var sum1 = 0;
    var sum2 = 0;
    var vendor1 = 0;
    var vendor2 = 0;
    var method1 = 0;
    var method2 = 0;

    sum1 += Math.abs(formdata[0]-offering1["cost"]);
    sum1 += Math.abs(formdata[1]-offering1["usability"]);
    sum1 += Math.abs(formdata[2]-offering1["security"]);
    vendor1 += (preferredvendors.indexOf(offering1["name"]) != -1) ? vendorweight : 0;
    method1 += (preferredmethods.indexOf(offering1["method"]) != -1) ? methodweight : 0;

    sum2 += Math.abs(formdata[0]-offering2["cost"]);
    sum2 += Math.abs(formdata[1]-offering2["usability"]);
    sum2 += Math.abs(formdata[2]-offering2["security"]);
    vendor2 += (preferredvendors.indexOf(offering2["name"]) != -1) ? vendorweight : 0;
    method2 += (preferredmethods.indexOf(offering2["method"]) != -1) ? methodweight : 0;

    if(vendor1-vendor2 === 0 && method1-method2 === 0) return sum1 - sum2;
    else if(vendor1-vendor2 === 0) return method2-method1;
    else if(method1-method2 === 0) return vendor2-vendor1;
    else return (vendor1-vendor2)-(method1-method2);
  });
}

// Dynamically generate offerings upon user request
function createOfferingBlock(data, index) {
  const container = document.createElement('div');
  container.className = (index === 0)
  ? 'best card' : 'mininormal card';



  const ratingdetail = document.createElement('section');
  ratingdetail.className = 'ratingdetail';

  const logo = document.createElement('div');
  logo.className = 'logo';
  const logolink = document.createElement('a');
  logolink.href = data.link;
  logolink.target = '_blank';
  const logoimg = document.createElement('img');
  logoimg.src = 'offerings/'+data.logo;
  logolink.appendChild(logoimg);
  logo.appendChild(logolink);

  const vendormethod = document.createElement('div');
  vendormethod.className = 'vendormethod';
  const vendorlink = document.createElement('a');
  vendorlink.className = 'link';
  vendorlink.href = data.link;
  vendorlink.target = '_blank';
  const vendorname = document.createElement('p');
  vendorname.className = 'vendor';
  vendorname.innerText = data.name;
  vendorlink.appendChild(vendorname);
  const vendormethodinfo = document.createElement('p');
  vendormethodinfo.className = 'method';
  vendormethodinfo.innerText = ": "+data.method;
  vendormethod.appendChild(vendorlink);
  vendormethod.appendChild(vendormethodinfo);

  const ratings = document.createElement('div');
  ratings.className = 'ratings';
  const ratingrow = document.createElement('section');
  ratingrow.className = 'ratingrow';
  const costrate = document.createElement('p');
  costrate.innerText = "Cost: "+data.cost+"/10";
  const userate = document.createElement('p');
  userate.innerText = "Usability: "+data.usability+"/10";
  const secrate = document.createElement('p');
  secrate.innerText = "Security: "+data.security+"/10";
  ratingrow.appendChild(costrate);
  ratingrow.appendChild(userate);
  ratingrow.appendChild(secrate);
  ratings.appendChild(ratingrow);
  ratings.style.display = (index === 0)
  ? 'none' : 'flex';

  const ratingsdummy = document.createElement('div');
  ratingsdummy.className = 'ratingsdummy';
  ratingsdummy.style.display = (index === 0)
  ? 'flex' : 'none';

  const interactive = document.createElement('div');
  interactive.className = 'interactive';
  const favorite = document.createElement('p');
  favorite.className = 'favorite';
  favorite.innerText = 'Most Recommended!';
  favorite.style.display = (index === 0)
  ? 'flex' : 'none';
  const interactivebutton = document.createElement('button');
  interactivebutton.className = 'toggledetail';
  interactivebutton.innerText = (index === 0)
  ? 'SHOW LESS' : 'SHOW MORE';
  interactivebutton.onclick = function(){toggleDetails(interactivebutton);};
  interactive.appendChild(favorite);
  interactive.appendChild(interactivebutton);

  ratingdetail.appendChild(logo);
  ratingdetail.appendChild(vendormethod);
  ratingdetail.appendChild(ratings);
  ratingdetail.appendChild(ratingsdummy);
  ratingdetail.appendChild(interactive);



  const delimiter = document.createElement('section');
  delimiter.className = 'delimiter';
  const hr = document.createElement('hr');
  delimiter.appendChild(hr);
  delimiter.style.display = (index === 0)
  ? 'flex' : 'none';
  


  const descriptiondetail = document.createElement('section');
  descriptiondetail.className = 'descriptiondetail';

  const bottomratings = document.createElement('div');
  bottomratings.className = 'bottomratings';

  const ratingleftcolumn = document.createElement('section');
  ratingleftcolumn.className = 'ratingleftcolumn';
  const costname = document.createElement('p');
  costname.innerText = 'Cost';
  const usename = document.createElement('p');
  usename.innerText = 'Usability';
  const secname = document.createElement('p');
  secname.innerText = 'Security';
  ratingleftcolumn.appendChild(costname);
  ratingleftcolumn.appendChild(usename);
  ratingleftcolumn.appendChild(secname);

  const ratingrightcolumn = document.createElement('section');
  ratingrightcolumn.className = 'ratingrightcolumn';
  const costinfo = document.createElement('p');
  const costinfoimg = document.createElement('img');
  costinfoimg.className = 'imginfo';
  costinfoimg.src = 'Infobox_info_icon.svg';
  costinfoimg.title = data.costReason;
  costinfo.innerText = data.cost+'/10';
  costinfo.appendChild(costinfoimg);
  const useinfo = document.createElement('p');
  const useinfoimg = document.createElement('img');
  useinfoimg.className = 'imginfo';
  useinfoimg.src = 'Infobox_info_icon.svg';
  useinfoimg.title = data.usabilityReason;
  useinfo.innerText = data.usability+'/10';
  useinfo.appendChild(useinfoimg);
  const secinfo = document.createElement('p');
  const secinfoimg = document.createElement('img');
  secinfoimg.className = 'imginfo';
  secinfoimg.src = 'Infobox_info_icon.svg';
  secinfoimg.title = data.securityReason;
  secinfo.innerText = data.security+'/10';
  secinfo.appendChild(secinfoimg);
  ratingrightcolumn.appendChild(costinfo);
  ratingrightcolumn.appendChild(useinfo);
  ratingrightcolumn.appendChild(secinfo);

  bottomratings.appendChild(ratingleftcolumn);
  bottomratings.appendChild(ratingrightcolumn);

  const description = document.createElement('div');
  description.className = 'description';

  const benefits = document.createElement('section');
  benefits.className = 'benefits';
  const benefititle = document.createElement('p');
  benefititle.className = 'desctitle';
  benefititle.innerText = 'Benefits:';
  benefits.appendChild(benefititle);
  data.benefits.forEach(benefit => {
    var ben = document.createElement('p');
    ben.className = 'desc';
    ben.innerText = benefit;
    benefits.appendChild(ben);
  });
  
  const drawbacks = document.createElement('section');
  drawbacks.className = 'drawbacks';
  const drawbacktitle = document.createElement('p');
  drawbacktitle.className = 'desctitle';
  drawbacktitle.innerText = 'Drawbacks:';
  drawbacks.appendChild(drawbacktitle);
  data.drawbacks.forEach(drawback => {
    var draw = document.createElement('p');
    draw.className = 'desc';
    draw.innerText = drawback;
    drawbacks.appendChild(draw);
  });

  description.appendChild(benefits);
  description.appendChild(drawbacks);

  descriptiondetail.appendChild(bottomratings);
  descriptiondetail.appendChild(description);
  descriptiondetail.style.display = (index === 0)
  ? 'flex' : 'none';


  container.appendChild(ratingdetail);
  container.appendChild(delimiter);
  container.appendChild(descriptiondetail);

  
 
  document.getElementById('offeringsContainer').appendChild(container);
}

// Randomize offerings display order
function randomizeOffers(){
  offers.sort(function(){ return 0.5-Math.random(); });
}

// Clears all data populated from form values
function resetFormCache(){
  var offerings = document.getElementById('offeringsContainer');
  while(offerings.firstChild){
    offerings.removeChild(offerings.firstChild);
  } 
  selectval = [];
  preferredmethods = [];
  preferredvendors = [];
  formdata = [0,0,0];
}

// Driver function for form processing
function processFormData(){
  resetFormCache();
  readFormInfo();
  computeFormAttrs();
  sortByFormVals();
  for(var i = 0; i < offers.length; i++){
    createOfferingBlock(offers[i], i);
  }
}

// Driver function to load Vendor list
function loadVendors(){
  const vendors = document.getElementById('vendors');
  vendoropts.sort();
  for (var i = 0; i < vendoropts.length; i++){
    const label = document.createElement('label');
    label.htmlFor = 'vendor'+(i+1);
    const input = document.createElement('input');
    input.id = 'vendor'+(i+1);
    input.type = 'checkbox';
    input.value = 'vendor-'+i;
    label.appendChild(input);
    label.innerHTML += vendoropts[i];
    vendors.appendChild(label);
  }
}

// Driver function to load Method list
function loadMethods(){
  const methods = document.getElementById('methods');
  methodopts.sort();
  for (var i = 0; i < methodopts.length; i++){
    const label = document.createElement('label');
    label.htmlFor = 'method'+(i+1);
    const input = document.createElement('input');
    input.id = 'method'+(i+1);
    input.type = 'checkbox';
    input.value = 'method-'+i;
    label.appendChild(input);
    label.innerHTML += methodopts[i];
    methods.appendChild(label);
  }
}

// Execution Window (executed upon website loading)
window.addEventListener("load", (event) => {
  document.getElementById('vendor').addEventListener('mousedown', function(event){event.preventDefault()});
  document.getElementById('method').addEventListener('mousedown', function(event){event.preventDefault()});
  loadVendors();
  loadMethods();
  resetFormCache();
  randomizeOffers();
  // force load all offerings as normal ones
  for(var i = 1; i <= offers.length; i++){
    createOfferingBlock(offers[i-1], i);
  }
});