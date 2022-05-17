const selector = (selector) => {
    return document.querySelector(selector);
};

const hour = selector('#hour');
const minute = selector('#minute');
const second = selector('#second');
const progress = selector('#progress');

function time() {
    const time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    progress.style.width = (sec / 60) * 100 + '%';
}

time();

setInterval(time, 1000);
