const test = require('tape');
const {check, property} = require('testcheck');
const sample = require('./sample');
const sut = require('./');

test('convert infix expressions to prefix expressions', t => {
  t.plan(1);

  const res = check(property(sample, infix_expr =>
    sut.evaluate(sut.from_infix(infix_expr)) === eval(infix_expr)));

  t.assert(res.result === true,
    ` Test failed with the following infix expression: '${res.fail}'`);
});
