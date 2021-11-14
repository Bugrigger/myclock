function getTime() {
    const nowTime = new Date();

    const hours = nowTime.getHours(),
        minuts = nowTime.getMinutes(),
        seconds = nowTime.getSeconds();

    return {
        hours,
        minuts,
        seconds
    }
}

function getZero(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setTime(selector) {
    const clock = document.querySelector(selector);

    hours = clock.querySelector('.hours');
    minuts = clock.querySelector('.minutes');
    seconds = clock.querySelector('.seconds');
    title = document.querySelector('title');

    const clockInterval = setInterval(updateClock, 1000);
    updateClock();


    function updateClock() {
        const t = getTime();

        hours.textContent = getZero(t.hours);
        minuts.textContent = getZero(t.minuts);
        seconds.textContent = getZero(t.seconds);
        title.innerHTML = `${getZero(GTMHours)} ч ${getZero(t.minuts)} мин ${getZero(t.seconds)} сек`;
    }
}

setTime('.clock__body')
