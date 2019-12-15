const {gen} = require('testcheck');

const operator =
  gen.oneOf(
    [ '*'
    , '/'
    , '+'
    , '-'
    ]);

const operand =
  gen.oneOf(
    [ gen.number
    , gen.array(
        [ gen.number
        , operator
        , gen.number
        ]).then(xs => xs.join(' '))
    ]);

const expression =
  gen.array(
    gen.array(
      [ operand
      , operator
      , operand
      , operator
      ]))
    .notEmpty()
    .then(xs =>
        xs
          .flat(1)
          .slice(0, -1)
          .join(' '));

module.exports = expression;
