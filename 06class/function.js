// /**************** Function :- two types -> 1. user define & 2. pre define */

// function raj(){
//     console.log("my first function lecture");
// }
// raj()

// function rajveer(a,b=0){  // it work as parameter
//     console.log(a,b);
// }
// rajveer("hello",24)        // it work as argument
// rajveer("hello1")
// rajveer("-",24)


// function raj1(...a){
//     console.log(a[0])
//     console.log(a[1])
//     console.log(a[2])
// }
// raj1("hello",20,true)

// function raj2(b,...a){
//     console.log(b,a)
// }
// raj2("hello" , 20 , true)

// function raj3(...a){
//     console.log(a[1]["name"])
//     console.log(a[1]["age"])
//     console.log(a[0][0])
//     console.log(a[0][1])
// }
// let age=20;
// let name="hello";
// let obj ={name,age};
// let arr = [name , age]
// raj3(arr, obj)
// // raj3(arr)


// function raj4(){
//     console.log("hello");   
//     let arr1 = ["hello1" , 20 , true] 
//     let arr2 =["hello2" , 21 , false]  
//     return {arr1 , arr2}   //return work with arr & obj not for other if use then last value is return
// }
// let fun = raj4()                 // very importent concept
// console.log("fun" , fun)

function raj5(){
    try{
         return "hello"                      // use of try & catch
    }
    catch(error){
         return {"error message" : error.message}
    }
}

let fun1 = raj5()
if(fun1["error message"]){
    console.log("code mistake")
}
else{
    console.log(fun1)
}