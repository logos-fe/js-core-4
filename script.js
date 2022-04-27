// Масив - це об`єкт (array)

// const arr = new Array() // конструктор
// const arr2 = []  // літерал

// const filledArray = new Array(5)
// [5, 5, 67, 3, 'ss']

// const arr = [1, 2, 3, 4, 5, false, { name: "Khrystyna" }, [ 2, 3], 'sss']
// Array length
// console.log(arr.length)

// Last element
// console.log(arr[arr.length - 1])
// console.log(arr.at(-1))

// Methods array
// const arr = [1,2,3,4]

// arr[2] = 'hello'
// arr[4] = 'new element'

// arr.length = 2
// arr.length = 4
// console.log(arr)

// Push - добавляє елемент в кінець масиву
// arr.push(8)
// arr.push(12)

// Pop - видаляє елемент вкінці масиву
// const lastElement = arr.pop()
// console.log(lastElement)
// console.log(arr)

// Shift - видаляє перший елемент масиву
// const firstElement = arr.shift()
// console.log(arr)
// console.log(firstElement)

// Unshift - добавляє на початок елемент
// arr.unshift(0)
// console.log(arr)

// Array is object
// const arr = ['s', '2', 3]
// const obj = {
//   0: 's',
//   1: '2',
//   2: 3
// }
// obj[2]
// arr[2]

// const copyArr = arr // копіюєм силку

// copyArr.push('new')
// console.log(arr)

// DON'T DO THAT
// 1. Add new value by key to array
// arr.test = '24'
// 2. Add too much empty elements to array
// arr[999] = 'last element'
// 3. Add elements from end
// arr[1000] = '1'
// arr[998] = '3'

// console.log(arr)
// const arr = ['I', 'love', 'programming']

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// const matrix = [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// console.log(matrix[1][2])


// console.log([] + 1) // '1'
// console.log([1] + 1) // '11'
// console.log([1, 2] + 1) // '1,21'

// Slice(start, end) - повертає новий масив
// const arr = ['I', 'love', 'programming']

// const newArray = arr.slice(1, 2)
// console.log(newArray)

// Splice(index, deleteCount, item1, item2, .....)
// const arr = ['I', 'love', 'programming', '!']

// arr.splice(1, 1) // починаючи з першого індекса, видалимо 1 елемент
// arr.splice(1, 2, 'dont', 'like', 'javaScript') // починаючи з 1 індекса, видалили 2 елементи і добавили 3 нові значення на їх місце
// arr.splice(2, 0, 'Java') // починаючи з 2 індекса, не видаляємо нічого, добавляємо новий елемент на 2 індекс
// arr.splice(-3, 2, 'last') // приймає мінусові індекси
// console.log(arr)

// Concat(array1, array2, ....) - з`єднює
// const arr1 = [1,2,5]
// const arr2 = ['3s', 4, 9]

// const joinedArray = arr1.concat(arr2, [33, 2])
// console.log(joinedArray)

// Reverse - змінює порядок в протилежному
// const arr = [10, 7, 9, 8, 7, 6]
// arr.reverse()
// console.log(arr)

// Пошук по масиву
// indexOf(item, from)
// console.log(arr.indexOf(9, 2))

// lastIndexOf(item, from) - пошук справа наліво
// console.log(arr.lastIndexOf(7)) // 4
// console.log(arr.indexOf(7)) // 1

// includes(item, from) - повертає true/false
// console.log(arr.includes(9, 4))

// Split() - розбиває рядок
// const names = 'Khrystyna; Andrii; Nazar'
// const namesArray = names.split('; ')
//
// for (let i = 0; i < namesArray.length; i++) {
//   alert('I have invited ' + namesArray[i])
// }
// console.log(namesArray)

// Join() - з`єднює в рядок
// const helloWord = ['I', 'love', 'JavaScript', '!']
// const helloWordString = helloWord.join()
// console.log(helloWordString)


// console.log(typeof {}) // object
// console.log(typeof []) // object

// Array.isArray - провірити чи це масив
// console.log(Array.isArray({})) // false
// console.log(Array.isArray([])) // true






