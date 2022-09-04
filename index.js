let count = 0

//Functions definition & Modification
//Home 
function plus1H() {
    document.getElementById("countH").textContent = count += 1
}
function plus2H() {
    document.getElementById("countH").textContent = count += 2
}
function plus3H() {
    document.getElementById("countH").textContent = count += 3
}

//Guest
function plus1G() {
    document.getElementById("countG").textContent = count += 1
}
function plus2G() {
    document.getElementById("countG").textContent = count += 2
}
function plus3G() {
    document.getElementById("countG").textContent = count += 3
}

//New Game Reset
function reset() {
    count = 0
    document.getElementById("countH").textContent = count
    document.getElementById("countG").textContent = count
}
