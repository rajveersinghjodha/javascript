// /****************** if - else ******/
// let num = 10;
// if(num>12){
//     console.log("yes")
// }
// else {
//     console.log("no")
// }
// console.log("hello")

// let num1 = 12;
// if(num1>12){
//     console.log("yes larger")
// }
// else if(num1 == 12)
//     console.log("yes equal")
// else {
//     console.log("not larger")
// }
// let num2 = 100;
// let num3 = 20;
// let num4 = 30;
// if(num2>num3 && num2 > num4)
//     console.log("num2 is greater")
// else if(num3>num4)
//     console.log("num3 is greater")
// else{
//     console.log("num4 is greater")
// }

// let num5 = 100;
// let num6 = 20;
// let num7 = 30;
// if(num5<num6 && num5 < num7)
//     console.log("num5 is smaller")
// else if(num6<num7)
//     console.log("num6 is smaller")
// else{
//     console.log("num7 is smaller")
// }

// let age =18;
// if(age>18 && age==18)
//     console.log("you can give vote")
// else
// console.log("you cannot give vote")

            // // ************* work on this to chek date of birth ***********
// let Dyear=2002;
// let Dmonth = 7;
// let Ddate = 29;
// let birth = new Date(Ddate , Dmonth , Dyear)


// let date = new Date()
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())

// let age = date.getFullYear - birth.getFullYear;

// if(age>18)
//     console.log("you can give vote")
// else
// console.log("you cannot give vote")

// /******************************************Switch case  */
// let num8 = "4"
// switch(num8){
//     default:
//         console.log("default");
//         break;
//     case 1 :
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
// }

// /*********************Loop  */

// let num9 = 300;
// let i=1;
// while(i<=10){
//     //console.log(`${num9}*${i}=${num9*i}`);    // remember this condition
//     console.log(num9+"*"+i+"="+num9*i);
//     i +=1;
// }


//           // reverse code


// let str = "rajveer singh"
// let rev="";
// console.log(str.length)
// for(let i=str.length;i>=0;i--){
//     //console.log(str[i]);
//     rev += str[i];
// }
// console.log(rev);



//   // very usefull in web dev => react


// let str =[1,2,3,4,5,6]
// const result = str.map((index,item)=>{
//     console.log(index,item)
// })

let str = [{"name":"hello" , "age":20} , {"name":"rajveer"}]

const result = str.map((item,index)=>{
    console.log(item["age"] || null)
    console.log(item["name"])
})


