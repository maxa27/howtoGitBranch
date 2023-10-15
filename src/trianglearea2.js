// Получаем данные от пользователя
const a = parseFloat(prompt("Введите длину стороны a:"));
const b = parseFloat(prompt("Введите длину стороны b:"));
const c = parseFloat(prompt("Введите длину стороны c:"));
// Рассчитываем полупериметр 
const p = (a + b + c) / 2.0;
// Рассчитываем площадь треуголника по формуле Генода
console.log(`S = ` + Math.sqrt(p * (p - a) * (p - b) * (p - c)));
