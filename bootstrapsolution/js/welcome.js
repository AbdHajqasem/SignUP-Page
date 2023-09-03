function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const firstName = getQueryParam("firstname");
if (firstName) {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Hello, ${firstName}!`;
}
let colors = document.getElementsByClassName("colors");

Array.from(colors).forEach(radio => {
    radio.addEventListener('click', function() {   
            const color = radio.value;
            document.getElementById("welcome").style.color = color;
            welcomeMessage.style.color=color;

    });
});



