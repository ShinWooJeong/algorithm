// section 1 - 1
function solution(a, b, c){
  let answer;
  if(a >= b){
    answer = a
  } else answer = b;
  if(answer <= c){
    answer = c
  };

  return answer;
}

console.log(solution(2, 5, 1));
console.log(solution(20, 5, 10));
