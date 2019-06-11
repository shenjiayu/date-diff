const regexps = require('./formats');

const daysInMonths = {
  1: {
    common: 31,
    leap: 31
  },
  2: {
    common: 28,
    leap: 29
  },
  3: {
    common: 31,
    leap: 31
  },
  4: {
    common: 30,
    leap: 30
  },
  5: {
    common: 31,
    leap: 31
  },
  6: {
    common: 30,
    leap: 30
  },
  7: {
    common: 31,
    leap: 31
  },
  8: {
    common: 31,
    leap: 31
  },
  9: {
    common: 30,
    leap: 30
  },
  10: {
    common: 31,
    leap: 31
  },
  11: {
    common: 30,
    leap: 30
  },
  12: {
    common: 31,
    leap: 31
  }
};

function SyphtDate(date, format = 'd/m/y') {
  // get the correct regular expression
  const regexp = regexps[format];
  
  const elems = format.split(regexp.separator);

  if (! regexp.expression.test(date)) throw new Error(`Date ${date} is not matched with the format ${format}.`);
  const e = date.split(regexp.separator);

  // get the year, month, day from the date
  // based on the separator
  // and will output a date following 'y-m-d' date
  // to create a new date
  const d = [];
  const indexOfYear = elems.indexOf('y', elems);
  if (indexOfYear != -1) d.push(e[indexOfYear]);
  else throw new Error(`Year not found in ${format}`);
  const indexOfMonth = elems.indexOf('m', elems);
  if (indexOfMonth != -1) d.push(e[indexOfMonth]);
  else throw new Error(`Month not found in ${format}`);
  const indexOfDay = elems.indexOf('d', elems);
  if (indexOfDay != -1) d.push(e[indexOfDay]);
  else throw new Error(`Day not found in ${format}`);

  this.date = d.join('-');

  this.getTime = function() {
    let [year, month, day] = this.date.split('-');
    if (year < 1970) throw new Error('You cannot get a unix timestamp for a year less than 1970.');
    let days = parseInt(day);
    let key;
    // calcualte days for the current year
    if (year % 4 === 0) {
      key = 'leap';
    } else {
      key = 'common';
    }
    for (let m = month - 1; m > 0; m--) {
      days += daysInMonths[m][key];
    }

    // calculate days for the rest of the years
    for (let y = year - 1; y >= 1970; y--) {
      if (y % 4 === 0) {
        key = 'leap';
      } else {
        key = 'common';
      }
      for (let m = 12; m > 0; m--) {
        days += daysInMonths[m][key];
      }
    }
    
    return days * 24 * 3600 * 1000;
  };
}

module.exports = SyphtDate;