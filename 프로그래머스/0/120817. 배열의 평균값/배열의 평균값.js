function solution(numbers) {
    let answer = 0;
    numbers.map((item,index) => {
        answer += item;
    })
    answer /= numbers.length;
    return answer;
}