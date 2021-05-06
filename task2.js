function reformat(input) {
  if (input === '') return '';
  let result = input.toLowerCase().replace(/[aaeiou]/g, '');
  return result.length > 0 ? result[0].toUpperCase() + result.substring(1) : '';
}


function test() {
  testData = [
    {
      input: 'liMeSHArp DeveLoper TEST',
      expectation: 'Lmshrp dvlpr tst',
    },
    {
      input: '',
      expectation: '',
    },
    {
      input: '  ',
      expectation: '  ',
    },
    {
      input: 'x',
      expectation: 'X',
    },
    {
      input: 'a',
      expectation: '',
    },
  ];
  testData.forEach((t, step) => {
    const result = reformat(t.input);
    const evaluation = result === t.expectation;
    console.log(`${step+1} TEST ${evaluation ? 'PASSED' : 'FAIL'}, input = ${t.input}, expectation = ${t.expectation}, result = ${result}`);
  });
}

test();
