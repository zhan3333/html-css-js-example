// 数组对象
console.group('Array Object')
var arr = ['zhan', 'xu', 'zhai']
var arr2 = ['guang', 'yun', 'tao']

// for in
for(k in arr) {
    console.log(k, arr[k])
}

// concat
arr3 = arr.concat(arr2)
console.log(arr3)

// join
console.log(arr.join(','))

// push
arr.push('add name')
console.log(arr)

// pop
arr.pop()
console.log(arr)

// shift
arr.shift()
console.log(arr)

// unshift
arr.unshift('shift name')
console.log(arr)

console.groupEnd()

// 日期对象
console.group('Date Object')
var date = new Date()
console.log(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
date.setMonth(7 - 1)
date.setDate(7)
date.setHours(7)
date.setMinutes(7)
date.setSeconds(7)
console.log(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())


console.groupEnd()

