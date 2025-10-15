// 3x3 Arrays for testing
const testMatrices = [
    [   // ascending numbers
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [   // all even numbers
        [-2, 4, -6],
        [8, -10, 12],
        [14, -16, 18]
    ],
    [   // all odd numbers
        [1, 3, 5],
        [-7, -9, 11],
        [13, 15, -17]
    ],
    [   // digits of pi pattern
        [3, -1, 4],
        [1, 5, -9],
        [2, 6, -5]
    ],
    [   // includes undefined values
        [0, 1, undefined],
        [13, 17, 19],
        [5, undefined, 8]
    ],
    [   // includes null values
        [0, 1, null],
        [13, null, 7],
        [9, 2, null]
    ],
    [   // identity matrix
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],
    [   // mixed large integers
        [500, 100, 200],
        [300, 1000, 400],
        [700, 200, 600]
    ],
    [   // negative to positive range
        [-3, -2, -1],
        [0, 1, 2],
        [3, 4, 5]
    ],
    [   // uniform values
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ]
];




// Example completed function
function sumMatrix(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            total += val;
        }
    }
    console.log("The sum total is:", total);
    return total;
}

function rowSum(matrix) {
    const rowsum = [];
    for (i = 0; i < matrix.length; i++) {
        let rowtotal = 0;
        for (const val of matrix[i]) {
            rowtotal += val;
        }
        rowsum.push(rowtotal)
    }
    console.log(rowsum);
    return rowsum;
}

function colSum(matrix) {
    const columnsum = [];
    for (j = 0; j < matrix.length; j++) {
        let columntotal = 0;
        for (i = 0; i < matrix.length; i ++) {
            columntotal += matrix[i][j];
        }
        columnsum.push(columntotal)
    }
    console.log(columnsum);
    return columnsum;
}

function countZeros(matrix) {
    let zeros = 0;
    for (i = 0; i < matrix.length; i++) {
        for ( j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                zeros++;
            }
        }
    }
    console.log(zeros);
    return zeros;
}

function minValue2D(matrix) {
    let minnum = Infinity;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix.length; j++) {
            if (matrix[i][j] < minnum) {
                minnum = matrix[i][j];
            }
        }
    }
    console.log(minnum);
    return minnum;
}

function maxValue2D(matrix) {
    let maxnum = null;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > maxnum) {
                maxnum = matrix[i][j];
            }
        }
    }
    console.log(maxnum);
    return maxnum;
}

function doubleMatrix(matrix) {
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix.length; j++) {
            matrix[i][j] *= 2;
        }
    }
    console.log(matrix);
    return matrix;
}

function positiveMap(matrix) {
    const value = [];
    for (i = 0; i < matrix.length; i++) {
        let pos = true;
        let neg = false;
        const yesno = []
        for (const val of matrix[i]){
             if (val > 0) {
                yesno.push(pos);
            }
            else {
                yesno.push(neg);
            }
        } 
        value.push(yesno);
    }
    console.log(value);
    return value;
}

function diagonalSum(matrix) {
   let disum = 0;
   for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
        if (i === j) {
            disum += matrix[i][j];
        }
    }
   }
   console.log(disum);
   return disum;
}

function transposeMatrix(matrix) {
    const newrow = [];
    for (j = 0; j < matrix.length; j++) {
        const setup = [];
        for (i = 0; i < matrix.length; i++) {
           setup.push(matrix[i][j]);
        }
        newrow.push(setup);
    }
    console.log(newrow);
    return newrow;
}