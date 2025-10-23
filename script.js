const month = document.querySelector("#month");
const day = document.querySelector("#day");
const date = document.querySelector("#date");
const year = document.querySelector("#year");
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const now = new Date();
const realDate = now.getDate();
const realYear = now.getFullYear();
const realDay = days[now.getDay()];
const realMonth = months[now.getMonth()];
setInterval(() => {
    date.innerText = `${realDate}`;
    year.innerText = `${realYear}`;
    day.innerText = `${realDay}`;
    month.innerText = `${realMonth}`;
}, 100);