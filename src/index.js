const SyphtDate = require('./SyphtDate');

function diff(date_1, date_2, f) {
  const d_1 = new SyphtDate(date_1, f);
  const d_2 = new SyphtDate(date_2, f);
  const timeDiff = Math.abs(d_2.getTime() - d_1.getTime());
  const diffDays = Math.ceil(timeDiff);
  const secondsOfADay = (1000 * 3600 * 24);

  if (diffDays == 0) {
    return 0;
  }
  return diffDays / secondsOfADay - 1;
}

module.exports = {
  diff
};