// Получаем данные от пользователя
const расходТоплива = parseFloat(prompt("Введите расход топлива на 100 км (в литрах):"));
const дистанция = parseFloat(prompt("Введите планируемую дистанцию поездки (в км):"));
const ценаТоплива = parseFloat(prompt("Введите текущую цену топлива за литр:"));

// Рассчитываем стоимость поездки
const стоимость = (дистанция / 100) * расходТоплива * ценаТоплива;

// Выводим результат
console.log(`Стоимость поездки составит: $${стоимость.toFixed(2)}`);
