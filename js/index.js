var i = 10
var str = 'test'

var arr = ['zhan', 'zhai', 'xu']

var obj = {
    name: 'zhan',
    age: 23,
    getAge () {
        return this.age
    }
}

console.group('array')
// 数组
var arr = ['zhan', 'zhai', 'xu'] 
//            0       1      2     3
console.log(arr[1]) // 取数组数据
arr[3] = 'add name'
arr[0] = 'new name'
arr[100] = '小明'
console.log(arr)
console.log(arr.length)
for(k in arr) {
    console.log(k, arr[k])
}
console.groupEnd()

// 对象
var dog = {
    name: 'xiaohuang',
    age: 1
}
console.log(dog.name, dog.age)

// for in
for(i in dog) {
    console.log(i, dog[i])
}

// 数组和对象
var arr = [
    {
        name: 'zhan'
    },
    10,
    'test'
]
console.log(arr)

var obj = {
    arr: ['zhan', 'xu', 'zhai'],
    obj2: {name: 'zhan'}
}
console.log(obj)

// 字符串的遍历
var str = 'hello world'
for(k in str) {
    console.log(k, str[k])
}

var str = 'test'
var num = 10
var num2 = '10'
console.log(str + num)
console.log(num + num2)
console.log(num + parseInt(num2))