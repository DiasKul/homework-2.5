// // Домашняя работа
// // 1
// function testing(){
// 	let arr = []
// 	for(let j=0; j<1; j++){
// 		let i = prompt('Какая наука изучает космос?')
// 		if(i == 'Астрономия'){
// 			arr.push(i)
// 		}
// 		i = prompt('Спутник Земли?')
// 		if(i == 'Луна'){
// 			arr.push(i)
// 		}
// 		i = prompt('Ближайшая звезда солнечной системы?')
// 		if(i == 'Проксима'){
// 			arr.push(i)
// 		}
// 		i = prompt('Третья планета от Солнца?')
// 		if(i == 'Земля'){
// 			arr.push(i)
// 		}
// 		i = prompt('Самая большая планета солнечной системы?')
// 		if(i == 'Юпитер'){
// 			arr.push(i)
// 		}
// 	}
// 	console.log(arr)
// }

// testing()

// // 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// let temp = arr[2]
// function del(){
// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i] === temp){
// 			arr.splice(i, 1)
// 			temp += 3
// 		}
// 	}
// }
// del()
// console.log(arr)

// // 3
// const arr = [
//     "Иван",
//     "Игнат",
//     "Александр",
//     "Ира",
//     "Света",
//     "Настя",
// 	]
// function sizeOfName(){
// 	let minName = arr[0], maxName = arr[0]
// 	for(let i = 0; i<arr.length; i++){
// 		if(minName.length > arr[i].length){
// 			minName = arr[i]
// 		}
// 		if(maxName.length < arr[i].length){
// 			maxName = arr[i]
// 		}
// 	}
// 	console.log('Самое короткое имя: ' + minName + ', самое длинное имя: ' +maxName)
// }

// sizeOfName()

// // Самостоятельная работа
// // 1
// function getNumbers(){
// 	let first = prompt("Введите первое число: "), second = prompt("Введите второе число: "), prod
// 	prod = first * second
// 	console.log(prod)
// }

// getNumbers()

// // 2
// function sumOfHundredNum(){
// 	let sum = 0
// 	for(let i = 0; i<=100; i++){
// 		sum += i
// 	}
// 	console.log(sum);
// }

// sumOfHundredNum()

// // 3
// const arr = ['html', 'css', 'js']
// function myShift(){
// 	console.log(arr[0])
// }
// myShift()
// function myPop(){
// 	temp = arr.length - 1
// 	console.log(arr[temp])
// }
// myPop()
