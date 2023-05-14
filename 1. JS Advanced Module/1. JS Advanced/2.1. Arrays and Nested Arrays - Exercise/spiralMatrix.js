function spiralMatrix(x, y) {

    let matrix = [];
    let maxNum = x * y;
    let currentNum = 1;

    for(let i = 0; i < x; i++) {
        let tempArr = []
        for(let j = 0; j < x; j++) {
            tempArr.push('*');
        }
        matrix.push(tempArr);
    }

    let top = 0;
    let bottom = x - 1;
    let left = 0;
    let right = x - 1;
    let direction = 1; // 1 - right; 2 - down; 3 - left; 4 = up;

    while(currentNum <= maxNum) {

        if (direction == 1) {
            for(let i = top; i <= right; i++) {
                matrix[top][i] = currentNum;
                currentNum++;
            }
            top++;
        }

        if (direction == 2) {
            for(let i = top; i <= right; i++) {
                matrix[i][right] = currentNum;
                currentNum++;
            }
            right--;
        }

        if (direction == 3) {
            for(let i = right; i >= left; i--) {
                matrix[bottom][i] = currentNum;
                currentNum++;
            }
            bottom--;
        }
        
        if (direction == 4) {
            for(let i = bottom; i >= top; i--) {
                matrix[i][left] = currentNum;
                currentNum++;
            }
            left++;
            direction = 0;
        }

        direction++;
    }
    
    for(let el of matrix) {
        console.log(el.join(' '));
    } 
}

spiralMatrix(4,4);