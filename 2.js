// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

var date = new Date();
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = ''; // Переменная для значения

switch (month){
	case 0:
	monthName = "Junuary";
	break;
	case 1:
	monthName = "February";
	break;
	case 2:
	monthName = "March";
	break;
	case 3:
	monthName = "April";
	break;
	case 4:
	monthName = "May";
	break;
	case 5:
	monthName = "June";
	break;
	case 6:
	monthName = "Jule";
	break;
	case 7:
	monthName = "August";
	break;
	case 8:
	monthName = "September";
	break;
	case 9:
	monthName = "October";
	break;
	case 10:
	monthName = "November";
	break;
	case 11:
	monthName = "December";
	break;
}
document.getElementById("text").innerHTML = day + monthName + year;