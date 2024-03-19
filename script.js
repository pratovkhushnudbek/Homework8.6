// // // // // https://adventjs.dev

// // 1. =========================================================================================================================================
// const giftIds = [2, 5, 7, 9, 1, 4, 5, 8, 10]
// function findFirstRepeated(arr){
//     let testArr={};
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] in testArr){
//             return arr[i];
//         }else{
//             testArr[arr[i]]=true
//         }
//     }
//     return -1
// }
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId)  // 5

// // 2.==========================================================================================================================================
// function manufacture(gifts, materials) {
//     let res=[]
//     for (let i of gifts){
//         let isYes=false;
//         for (let j of i){
//             if(materials.includes(j)==false){
//                 isYes=true
//                 break
//             }
//         }
//         if(!isYes){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'));

// // 3.==========================================================================================================================================
// function findNaughtyStep(original, modified) {
//     let len=original.length>modified.length?original.length:modified.length;
//     if (len==original.length){
//         for (let i=0; i<len;i++){
//             if (original[i]!==modified[i]){
//                 return original.slice(i)[0]
//             }
//         }
//     }else{
//         for (let i=0; i<len;i++){
//             if (original[i]!==modified[i]){
//                 return modified.slice(i)[0]
//             }
//         }
//     }
//     return ""
// }
// console.log(findNaughtyStep('xxxx', 'xxoxx')); // o

// // 4.==========================================================================================================================================
// function decode(message){
//     const qavslar = [];
//     for (let i=0; i<message.length; i++) {
//         if (message[i]=='(') {
//             qavslar.push(i);
//         } else if (message[i]==')') {
//             const start=qavslar.pop();
//             const teskQism=message.substring(start+1, i).split('').reverse().join('');
//             message=message.substring(0, start)+teskQism+message.substring(i+1);
//             i-=2;
//         }
//     }
//     return message.replace("(",")", '');
// }
// console.log(decode('(olleh) (dlrow)!'));

// // 5.===========================================================================================================================================
function maxDistance(movements) {
    let res=0;
    let steps=[];
    for (let i of movements){
        if (i==">"){
            if(steps.indexOf("<")!==-1){
                steps.splice(steps.indexOf("<"), 1)
                res--
            }else{
                steps.push(">")
                res++
            }
        }else if(i=="<"){
            if(steps.indexOf(">")!==-1){
                steps.splice(steps.indexOf(">"),1)
                res--
            }else{
                steps.push("<")
                res++
            }
        }
    }
    let stars=movements.split("*").length-1
    return res+stars
}
console.log(maxDistance(">>**<<<<<")); // 5
