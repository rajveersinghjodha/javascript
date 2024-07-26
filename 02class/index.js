// console.log("Rajveer")
// var name ="hello"
// name ="world"
// console.log(name)

// let name1='raj'
// name1='rajveer'
// console.log(name1)

// const name2='raj1'
// console.log(name2)
// we cannot make changes in const

//var name ="hello"
//var name ="world"
//console.log(name)

// let name1='raj'      //we cannot declare different only in "var"
// let name1='rajveer'
// console.log(name1)

// const name2='raj1'
// console.log(name2)

// const obj = {"name":"Rajveer","age":20,"isLive":true}
// console.log(obj)
// console.log(obj["name"])
// console.log(obj["age"])
// console.log(obj["isLive"])

//  string not work with const more then one time :- fixed
//but const work with object more then one :- not fixed
// because it is non premitive are:- object,array only
// and string is premitive so these are:- string ,number ,boolean,undefine,symbol,null,etc.


// const obj1 = {"first name":"Rajveer","last name":"Singh","address":"jaipur"}
// obj1["address"]="Nagure"
// console.log(obj1)

// const arr = ["Rajveer",20,"jaipur",true]
// arr[0]="hello"
// arr[1]=21
// arr[2]="Nagure"
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

let num1 = 10
let num2 = 20
console.log(num1+num2)
console.log(num2-num1)
console.log(num1*num2)
console.log(num2/num1)

let num3 = {"age":20 , "age1":40}
let num4 = {"age":30,"age1":60}
console.log(num3["age"] + num4["age1"])
console.log(num4["age1"] - num3["age"])
console.log(num3["age1"] * num4["age1"])
console.log(num4["age"] / num3["age"])

let num5=[10,20,30]
let num6=[15,25,35]
console.log(num5[0]+num6[1])
console.log(num6[0]-num5[2])
console.log(num5[1]*num6[2])
console.log(num6[1]/num5[0])

