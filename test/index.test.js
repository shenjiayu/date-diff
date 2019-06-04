// import { format, diff } from '../src';
// import assert from 'assert';
var { format } = require('../src');
var assert = require('assert');

describe('Format Function', () => {
  it('should format a correct date string and return the date object', () => {
    assert(format('2019-06-04', 'y-m-d') instanceof Date);
  });

  it('should not format a wrong date string', () => {
    assert.throws(() => {
      format('2019-06-', 'y-m-d');
    });
  });

  it('should format a date with a correct date format passed', () => {
    format('2019-06-04', 'y-m-d');
  });

  it('should not format a date with a non-existent date format passed', () => {
    assert.throws(() => {
      format('2019-06-04', 'y-m-');
    });
  });

  it('should not format a date with non-matching date format passed', () => {
    assert.throws(() => {
      format('2019-06-04', 'd/m/y');
    })
  });
});