// Задание 1
function printOwnProperties(obj) {
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Задание 2
function checkProperty(str, obj) {
    return obj.hasOwnProperty(str);
}

// Задание 3
function createEmptyObject() {
    return Object.create(null);
}

// Пример использования функций
let obj = {
    name: 'John',
    age: 30
};

printOwnProperties(obj); // Выводит только собственные свойства объекта obj
let hasProperty = checkProperty('name', obj); // Проверяет наличие свойства 'name' в объекте obj
console.log(hasProperty); // Выводит true или false
let emptyObj = createEmptyObject(); // Создает пустой объект без прототипа

