function solution(numbers) {
    let multiple = [];
    for (let i=0; i<numbers.length; i++) {
        multiple.push(numbers[i]*2);
    }
    return multiple;
}