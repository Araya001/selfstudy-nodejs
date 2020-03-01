console.log(process.argv)
const processArr = process.argv
var total = 0;
for (let index = 2; index < processArr.length; index++) {
   total += Number(processArr[index])
    
}
console.log(total);