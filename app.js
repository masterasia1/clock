const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');


function getTime () {

    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const timeInterval = 6

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval +seconds / 10) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';
}