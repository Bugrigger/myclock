function getTime() {
    const nowTime = Date.parse(new Date());

    const hours = Math.floor((nowTime / (1000 * 60 * 60) % 24)),
        minuts = Math.floor((nowTime / 1000 / 60) % 60),
        seconds = Math.floor((nowTime / 1000) % 60);

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

        let GTMHours = t.hours + 7;
        hours.textContent = getZero(GTMHours);
        minuts.textContent = getZero(t.minuts);
        seconds.textContent = getZero(t.seconds);
        title.innerHTML = `${getZero(GTMHours)} ч ${getZero(t.minuts)} мин ${getZero(t.seconds)} сек`;
    }
}

setTime('.clock__body')
