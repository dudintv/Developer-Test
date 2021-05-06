function next_binary_number(inputArr) {
  // without using any built in functions, only a "for" loop
  const result = [...inputArr];
  let shiftUp = false;
  for (let i = result.length - 1; i >= 0; i-- ){
    if (result[i] === 0) {
      result[i] = 1;
      shiftUp = false;
      break;
    } else {
      result[i] = 0;
      shiftUp = true;
    }
  }
  if (shiftUp) result.unshift(1);
  return result;
}

function test() {
  testData = [
    {
      input: [1,0],
      expectation: [1,1],
    },
    {
      input: [1,1],
      expectation: [1,0,0],
    },
    {
      input: [1,1,0],
      expectation: [1,1,1],
    },
    {
      input: [1,0,0,0,0,0,0,0,0,1],
      expectation: [1,0,0,0,0,0,0,0,1,0],
    },
  ];
  testData.forEach((t, step) => {
    const result = next_binary_number(t.input);
    const evaluation = (result.length === t.expectation.length) && (result.every((item, index) => item === t.expectation[index] ));
    console.log(`${step+1} TEST ${evaluation ? 'PASSED' : 'FAIL'}, input = ${t.input}, expectation = ${t.expectation}, result = ${result}`);
  });
}

test();
