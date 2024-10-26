const getMonthName = (date: Date) => {
  switch (date.getMonth()) {
    case 0:
      return 'Jan';
    case 1:
      return 'Feb';
    case 2:
      return 'Mar';
    case 3:
      return 'Apr';
    case 4:
      return 'May';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Aug';
    case 8:
      return 'Sep';
    case 9:
      return 'Oct';
    case 10:
      return 'Nov';
    case 11:
      return 'Dec';
  }
};

const offsetDate = (timestamp: string | number | Date, offset: number) => {
  const date = new Date(timestamp);
  date.setMinutes(date.getMinutes() + offset);
  return date;
};

const getPrettyDate = (
  timestamp: string | number | Date,
  clockOffset: number,
) => {
  const date = offsetDate(timestamp, clockOffset);
  return `${getMonthName(date)} ${date.getDate()}, ${date.getFullYear()}`;
};

export { getPrettyDate };
