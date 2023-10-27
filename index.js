const dailySelector = document.querySelector(".frequency__selector--daily");
const monthlySelector = document.querySelector(".frequency__selector--monthly");
const weeklySelector = document.querySelector(".frequency__selector--weekly");
const dailyDisplay = document.querySelectorAll(".activity__display--daily");
const monthlyDisplay = document.querySelectorAll(".activity__display--monthly");
const weeklyDisplay = document.querySelectorAll(".activity__display--weekly");


document.addEventListener("DOMContentLoaded", function() { 
      weeklySelector.focus();
    }
  );

  
dailySelector.addEventListener("click", () =>{
    dailyDisplay.forEach(display => {
        display.style.display = "block";
    });
    monthlyDisplay.forEach(display => {
        display.style.display = "none";
    });
    weeklyDisplay.forEach(display => {
        display.style.display = "none";
    });
});

monthlySelector.addEventListener("click", () =>{
    dailyDisplay.forEach(display => {
        display.style.display = "none";
    });
    monthlyDisplay.forEach(display => {
        display.style.display = "block";
    });
    weeklyDisplay.forEach(display => {
        display.style.display = "none";
    });
});

weeklySelector.addEventListener("click", () =>{

    dailyDisplay.forEach(display => {
        display.style.display = "none";
    });
    monthlyDisplay.forEach(display => {
        display.style.display = "none";
    });
    weeklyDisplay.forEach(display => {
        display.style.display = "block";
    });
});

let lastSelectedSelector = null;

function setLastSelected(selector) {
  lastSelectedSelector = selector;
}

function handleFocusChange(event) {
  if (!event.target.matches('.frequency__selector')) {
    event.preventDefault();
    lastSelectedSelector?.focus();
  }
}

[dailySelector, monthlySelector, weeklySelector].forEach(selector => {
  selector.addEventListener('focus', () => setLastSelected(selector));
});

document.addEventListener('click', handleFocusChange);



