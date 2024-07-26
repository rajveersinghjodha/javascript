// const arr = [{"name":"rajveer"}, 24 , {"address":"jaipur"}]
// console.log(arr[0]["name"])
// // for print name only

// const arr1 = [123, {"age":20,"address":"jaipur"} , true]
// console.log(arr1[1]["address"])

// const arr2 = [true, 123 , {"first name":"rajveer" , age:[1,2,3]}]
// console.log(arr2[2]["age"][1])

// const arr3 = [true , 0 , "hello"]
// arr3[0]={"name":"raj"}
// console.log(arr3)
// console.log(arr3.length)

// const arr4 = [true , {"age":20 ,name:[{data:"hello"}, true]}]
// console.log(arr4[1]["name"][1]) 

// const obj = {name:[hello]}  //error hello is not define
// let arr5 = ['hello' , True , 123.00]    //error True is not define
// console.log(arr5)

// let arr6 = ['hello' ,undefined , true]    // here undefined is a key but it work also
// console.log(arr6)

// let arr7 = [true , false , undefined , null]   // here null also work
// console.log(arr7)
 
// // to print image url in this code at end wala url
// const arr8 = [
//     {
//         "label_id": 1,
//         "label_name": "Category",
//         "label": "Category",
//         "type": "list",
//         "search_enabled": false,
//         "values": [
//             {
//                 "label_value_id": 332,
//                 "display_name": "Sarees",
//                 "payload": "eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiMzMyIn0=",
//                 "image_url": "https://images.meesho.com/images/marketing/70de1d83-b84c-41ba-98e6-dfcf9a818959.png",
//                 "selected": false
//             }
//         ]
//     },
//     {
//         "label_id": 9,
//         "label_name": "Gender",
//         "label": "Gender",
//         "type": "pill",
//         "search_enabled": false,
//         "values": [
//             {
//                 "label_value_id": 443,
//                 "display_name": "Women",
//                 "payload": "eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0=",
//                 "image_url": "https://images.meesho.com/images/marketing/1598808287970.png",
//                 "selected": false
//             }
//         ]
//     },
//     {
//         "label_id": 4,
//         "label_name": "Color",
//         "label": "Color",
//         "type": "pill",
//         "search_enabled": false,
//         "values": [
//             {
//                 "label_value_id": 2322,
//                 "display_name": "Beige",
//                 "payload": "eyJmaWVsZCI6ImxhYmVscy40Iiwib3AiOiJpbiIsInZhbHVlIjoiMjMyMiJ9",
//                 "selected": false
//             },
//             {
//                 "label_value_id": 29,
//                 "display_name": "Black",
//                 "payload": "eyJmaWVsZCI6ImxhYmVscy40Iiwib3AiOiJpbiIsInZhbHVlIjoiMjkifQ==",
//                 "image_url": "https://images.meesho.com/images/marketing/c39647e6-d742-4e4e-bee8-f53c4fe3cad0.png",
//                 "selected": false
//             },
//         ]
//     }
// ]

// console.log(arr8[2]["values"][1]["image_url"]);