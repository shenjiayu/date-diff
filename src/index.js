const regexps = require('./formats');

function format(date, format = 'd/m/y') {
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

  return new Date(d.join('-'));
}

function diff(date_1, date_2, f) {
  const d_1 = format(date_1, f);
  const d_2 = format(date_2, f);
  const timeDiff = Math.abs(d_2.getTime() - d_1.getTime());
  const diffDays = Math.ceil(timeDiff);
  const secondsOfADay = (1000 * 3600 * 24);

  if (diffDays == 0) {
    return 0;
  }
  return diffDays / secondsOfADay - 1;
}

module.exports = {
  format,
  diff
};