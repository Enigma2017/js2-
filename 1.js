// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11
var phoneNumber = prompt('Input your number');
function validate(phoneNumber){
	if (phoneNumber.length >= 9 && phoneNumber.length <= 11){
		alert('Correct');
	} else{
		alert('Not correct');
	}
}
validate(phoneNumber);