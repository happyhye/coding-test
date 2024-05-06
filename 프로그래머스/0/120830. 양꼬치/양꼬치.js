function solution(n, k) {
    n *= 12000; //양꼬치
    k *= 2000; //음료수
    let service = parseInt((n/120000)) * 2000; //서비스
    return n + k - service;
}