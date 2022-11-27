const d = new Date();
const dow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const moy = ['january', 'february', 'march', 'april', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const day = (dow[d.getDay()]);
const date = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();

const todayDate = (`${date}  ${moy[month]}  ${year}`);

const h = document.getElementById('demo');
h.innerHTML = `Today is : ${todayDate}`;


