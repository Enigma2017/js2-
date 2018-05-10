// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt

var summetNumber = prompt('Please enter number', 0);
var sum = 0;
	for (var i = 0; i < summetNumber; i++){
		sum = sum + i;
	};
alert(sum);