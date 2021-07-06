//Sum of diagonal elements of matrix
const readLine = require('readline-sync')


const addDiagonalElements = (matrixArr) => {
    let sum = 0, i = 0;
    matrixArr.forEach(rowArr => {
        sum += Number(rowArr[i])
        if (i != colCount - 1 - i)
            sum += Number(rowArr[colCount - 1 - i])
        i++;
    });
    console.log(sum)
}

const inputOrder = readLine.question()
const rowCount = inputOrder[0]
const colCount = inputOrder[2]
const matrixArr = []
for (let i = 0; i < rowCount; i++) {
    const rowString = readLine.question()
    matrixArr.push(rowString.split(" "))
}
addDiagonalElements(matrixArr)
console.log(matrixArr)



// 1 2 3       1 2         1 2 3
// 4 5 6       3 4         4 5 6
// 7 8 9       5 6

// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8