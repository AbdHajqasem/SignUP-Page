function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const firstName = getQueryParam("firstname");
if (firstName) {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Hello, ${firstName}!`;
}