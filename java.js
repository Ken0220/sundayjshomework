var name = prompt('Введите своё имя')
var surname = prompt('Введите свою фамилию')
console.log('Сдавал тест:' + name +' '+ surname);
var age = prompt('Введите свой возраст')
console.log(age + '  лет');
var first = prompt('6 + 2 =')
console.log('6 + 2 = 8 ' + ' Ваш ответ:' + first)
var second = prompt('45 / 20 =')
console.log('45 / 20 = 2.25 ' + ' Ваш ответ:' + second)
var third = prompt('678 - 278 =')
console.log('678 - 278 = 400 ' + ' Ваш ответ:' + third)
var fourth = prompt('10 * 78 =')
console.log('10 * 78 = 780 ' + ' Ваш ответ:' + fourth)
alert('Откройте консоль и проверьте')

var X = +prompt('Введите X')
var Y = +prompt('Введите Y')
var Z = +prompt('Введите Z')
var res = ((X + Y + Z)/3)
alert('Среднее арифметическое X, Y, Z = ' + res)