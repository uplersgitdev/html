// Tabs
let tabMain = document.querySelectorAll(".tabs-main");

tabMain.forEach(function(tabs, index){

    let tabLabels = tabs.querySelectorAll(".tab-item");
    let tabPanels = tabs.querySelectorAll(".tab-content");

    tabLabels.forEach(function(labels, i){
        labels.addEventListener('click', function(e) {
            e.preventDefault();
            

            tabLabels.forEach(function(siblings){
                siblings.classList.remove('active');
            })
            labels.classList.add("active");

            e.target.parentNode.classList.add("active");
            let clickedTab = e.target.getAttribute("href");
            let showContent = document.querySelector(clickedTab);

            tabPanels.forEach(function(siblings){
                siblings.classList.remove('active');
            })

            showContent.classList.add("active");
        })
    })
});


// Editor
function textareaUpdate(){
    let resetCssCode=document.getElementById("resetCssCode").value;
    let cssCode=document.getElementById("cssCode").value;
    let cssText="<style>"+ resetCssCode + cssCode +"</style>";
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

// copy to clipboard

let textCopy = document.querySelectorAll(".copy");

textCopy.forEach(function(ele){
    
    let parentEle = ele.closest(".editor-utility-nav");
    let textarea = parentEle.nextElementSibling;

    ele.addEventListener('click', function(e){
        document.execCommand('copy');
    })

    ele.addEventListener('copy', function(ee){
        ee.preventDefault();

        if(ee.clipboardData){
            ee.clipboardData.setData("text/plain", textarea.value);
        }
    })

})

// clear editor

let clearEditor = document.querySelectorAll(".clear");

clearEditor.forEach(function(ele){
    let parentEle = ele.closest(".editor-utility-nav");
    let textarea = parentEle.nextElementSibling;

    ele.addEventListener('click', function(e){
        textarea.value = "";
    })
});