var count = localStorage.getItem("count") || 0;
var countElement = document.getElementById("count");

function incrementCount() {
    count++;
    countElement.textContent = count;
    localStorage.setItem("count", count);
}

window.onload = function() {
    countElement.textContent = count;
};