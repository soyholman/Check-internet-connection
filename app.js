
let random = document.getElementById("random");
if (navigator.onLine) {
    
    random.textContent = "We are online";
    random.style.color = "green";
}

window.addEventListener("online", function () {
    

    random.textContent = "We are onine!";
    random.style.color = "green";

});

window.addEventListener("offline", function () {
    random.textContent = "we are offline!";
    random.style.color = "red";
    vibratePattern();

});