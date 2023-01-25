// Visual tabs
// Define variables
var tabLabels = document.querySelectorAll(".visual--tabs > div");
var tabPanes = document.getElementsByClassName("tab-content");

function activateTab(e) {
  e.preventDefault();
  
  // Deactivate all tabs
  tabLabels.forEach(function(label, index){
    label.classList.remove("active");
  });
  [].forEach.call(tabPanes, function(pane, index){
    pane.classList.remove("active");
  });
  
  // Activate current tab
  e.target.parentNode.classList.add("active");
  var clickedTab = e.target.getAttribute("href");
  document.querySelector(clickedTab).classList.add("active");
}

// Apply event listeners
tabLabels.forEach(function(label, index){
  label.addEventListener("click", activateTab);
});



// Editor
function textareaUpdate(){
    let cssCode=document.getElementById("cssCode").value;
    let cssText="<style>"+cssCode+"</style>";
    let viewer=document.getElementById('viewer');
    viewer.innerHTML = cssText;
}

window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById("viewer").value != ''){
        textareaUpdate();
    };
});

var j=0;
function update(i) {
    if(i==0){
        textareaUpdate();
    } else if(i==1){
        j=1;
    }
}