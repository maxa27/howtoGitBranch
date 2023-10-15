// пользователь вводит данные
const friendsNumber = parseFloat(prompt("Количество друзей:"));
const totalAccount = parseFloat(prompt("Общий счёт:"));
// чаевые
const tips = 500; 
const totalAccountAndTips = totalAccount + tips;
// делим счёт по ровну
const result = (totalAccount + tips) / friendsNumber;
// Выводим результаты
console.log(`Общий счёт:${totalAccount}руб.\nЧаевые:${tips}руб.\nИтог:${totalAccountAndTips}руб.\nС каждого: ${result}руб.`);
