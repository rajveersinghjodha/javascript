// // use in react & this is use of "map"

// let str =
// [
// 	{
// 		color: "red",
// 		value: "#f00"
// 	},
// 	{
// 		color: "green",
// 		value: "#0f0"
// 	},
// 	{
// 		color: "blue",
// 		value: "#00f"
// 	},
// 	{
// 		color: "cyan",
// 		value: "#0ff"
// 	},
// 	{
// 		color: "magenta",
// 		value: "#f0f"
// 	},
// 	{
// 		color: "yellow",
// 		value: "#ff0"
// 	},
// 	{
// 		color: "black",
// 		value: "#000"
// 	}
// ]

// const result = str.map((item,index)=>{
//     console.log(item["color"] || null)
//     console.log(item["value"])
// })




// let str = [
//     { "id": "1001", "type": "Regular" },
//     { "id": "1002", "type": "Chocolate" },
//     { "id": "1003", "type": "Blueberry" },
//     { "id": "1004", "type": "Devil's Food" }
// ]
// const result = str.map((item,index)=>{
//     if(item.id==1001 || item.id == 1002){
//         console.log(item.id);
//     }
//      })

// let arr = [[1,2,3],[4,5,6]]
// const result = arr.map((item,index)=>{
//     item.map((i)=>{
//         console.log(i);
//     })
// })


// very importent concept


// let arr = [[[1,2,3] , [4,5,6]]]
// const result = arr.map((item)=>{
//          item.map((i)=>{
//             i.map((j)=>{
//                 console.log(j);
//             }) 
//          })
//      })


    // let arr = [[[1,2,3,4,5,6]],[[7,8,9,10]]]
    // arr.map((item)=>{
    //     item.map((i)=>{
    //                     i.map((j)=>{
    //                         console.log(j);
    //                     }) 
    //                 })
    // })


let arr = [[[1,2,3,4,5,6]],[[7,8,9,10]] , [11,12,13,14]]
const result = arr.map(item=>{
    item.map(i=>{
        i.map(j=>{
            console.log(j);
            })   
        )
    )