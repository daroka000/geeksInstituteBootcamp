//Q1
let allBoldItems ;
//Q2
function getBoldItems(){
    allBoldItems=document.querySelectorAll("p strong");
    
};
//Q3
function highlight(){
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue";
      }
    
};
//Q4
function returnItemsToDefault() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
      }
};
//Q5
window.onload = function () {
    getBoldItems(); 
    const paragraph = document.getElementById("myParagraph");
    paragraph.addEventListener("mouseover", highlight);
    paragraph.addEventListener("mouseout", returnItemsToDefault);
  };