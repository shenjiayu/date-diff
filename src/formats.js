// the regular expression
// can be easily extended
// to support more date formats
const regexps = {
  'y-m-d': {
    expression: /^(\w){4}-((0*)[1-9]|[1][0-2])-((0*)[1-9]|[12][0-9]|3[01])$/,
    separator: '-'
  },
  'd-m-y': {
    expression: /^((0*)[1-9]|[12][0-9]|3[01])-((0*)[1-9]|[1][0-2])-(\w){4}$/,
    separator: '-'
  },
  'd/m/y': {
    expression: /^((0*)[1-9]|[12][0-9]|3[01])\/((0*)[1-9]|[1][0-2])\/(\w){4}$/,
    separator: '/'
  }
};

module.exports = regexps;