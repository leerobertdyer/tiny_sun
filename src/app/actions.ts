function sendEmail() {
    if (window) {
        const mailLink = document.createElement("a");
        mailLink.href = `mailto:leerobertdyer@gmail.com?subject=${encodeURIComponent('Hello Tiny Sun')}`
        mailLink.click();
    }
}

function scheduleACall() {
    if (window) {
        const phoneLink = document.createElement("a");
        phoneLink.href = "https://tidycal.com/tinysun/30-minute-call-zoom";
        phoneLink.target = "_blank";
        phoneLink.click();
    }
}

export { sendEmail, scheduleACall }