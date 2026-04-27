// VARIABLES
let count = 0;

// DOM ELEMENTS
let countDisplay = document.getElementById("count");
let increBtn = document.getElementById("incre");
let decreBtn = document.getElementById("decre");
let resetBtn = document.getElementById("reset");

// BUTTON STYLING (JS)
function styleButton(btn) {
    btn.style.fontSize = "22px";
    btn.style.padding = "15px 40px";
    btn.style.fontWeight = "bold";
    btn.style.borderRadius = "20px";
    btn.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
    btn.style.cursor = "pointer";
    btn.style.margin = "10px";
}

styleButton(increBtn);
styleButton(decreBtn);
styleButton(resetBtn);


// UPDATE FUNCTION
function updateCounter() {
    countDisplay.innerText = count;

    if (count > 30) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

// EVENTS
increBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

decreBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

// INITIAL CALL
updateCounter();

console.log("Counter App Loaded Successfully");







