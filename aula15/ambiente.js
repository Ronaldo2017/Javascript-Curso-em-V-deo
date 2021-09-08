let num = [2,6,8,4,5]
/*num.sort()
num.push(15)
num.pop()
console.log(num)
console.log(num[0])
console.log(num.length)*/
/*for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
