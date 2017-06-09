// Take a duration in secondes (Number), return it in format hh:mm:ss or mm:ss (String)
const hhmmss = function hhmmss(duration, separator = ':') {
  if (isNaN(duration)) return new Error('duration must be a number');

  const formatMS = (val) => {
    if (val < 10) return '0' + String(val);
    return String(val);
  };

  const d = Math.ceil(duration);

  if (d < 60) return '00' + separator + formatMS(d);

  let min = Math.floor(d / 60);
  const sec = d % 60;

  if (min < 60) return formatMS(min) + separator + formatMS(sec);

  const hours = Math.floor(min / 60);
  min %= 60;
  return String(hours) + separator + formatMS(min) + separator + formatMS(sec);
};

// Take a duration in Youtube format (Example: PT12M17S)
// return it in format hh:mm:ss or mm:ss (String)
hhmmss.yt = (duration, separator = ':') => {
  if (!/PT(\d+H)?(\d+M)?(\d+S)?/.test(duration)) return new Error('duration must be a valid Youtube duration');

  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (parseInt(match[1], 10) || 0);
  const minutes = (parseInt(match[2], 10) || 0);
  const seconds = (parseInt(match[3], 10) || 0);
  const totalInSecondes = (hours * 3600) + (minutes * 60) + seconds;

  return hhmmss(totalInSecondes, separator);
};

module.exports = hhmmss;
