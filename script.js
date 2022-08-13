setInterval(setTime, 1000);

const hourHand = document.querySelector('[hour_hand]');
const minuteHand = document.querySelector('[minute_hand]');
const secondHand = document.querySelector('[second_hand]');

function setTime() {
    const myDate = new Date();
    const secondsNo = myDate.getSeconds() / 60;
    const minutesNo = (secondsNo + myDate.getMinutes()) / 60;
    const hoursNo = (minutesNo + myDate.getHours()) / 12;
    rotateHands(secondHand, secondsNo);
    rotateHands(minuteHand, minutesNo);
    rotateHands(hourHand, hoursNo);
}

function rotateHands(element, rotationNo) {
    element.style.setProperty('--rotation', rotationNo * 360);
}

setTime();