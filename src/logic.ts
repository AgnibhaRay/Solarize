// give a percentage between two dates like 1 to 30

export function getPercentage(startDate: Date, endDate: Date, currentDate: Date) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const current = currentDate.getTime();
  return ((current - start) / (end - start)) * 100;
}

export default { getPercentage }