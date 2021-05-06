function repeat(arr){
  const REPEAT_TIME = 3;
  const result = [];
  for (let i = 0; i < REPEAT_TIME; i++){
    result.push(...arr);
  }
  return result;
}

function test() {
  const input = [1, 2, 3];
  const expectation = [1, 2, 3, 1, 2, 3, 1, 2, 3];
  const result = repeat(input);
  const evaluation = (expectation.length === result.length) && (result.every((item, index) => item === expectation[index] ))
  console.log(`TEST ${evaluation ? 'PASSED' : 'FAIL'}, input = ${input}, expectation = ${expectation}, result = ${result}`)
}

test();
