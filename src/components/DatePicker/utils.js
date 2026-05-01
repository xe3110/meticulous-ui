export const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

export const isSameDay = (a, b) =>
  a &&
  b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const isToday = (date) => isSameDay(date, new Date());

export const isInRange = (date, start, end) => {
  if (!start || !end) return false;
  const [from, to] = start <= end ? [start, end] : [end, start];
  return date > from && date < to;
};

export const isRangeStart = (date, start, end) => {
  if (!start || !end) return false;
  return isSameDay(date, start <= end ? start : end);
};

export const isRangeEnd = (date, start, end) => {
  if (!start || !end) return false;
  return isSameDay(date, start <= end ? end : start);
};

export const formatDate = (date) => {
  if (!date) return '—';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const formatMonthYear = (year, month) => {
  const d = new Date(year, month, 1);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export const buildCalendarGrid = (year, month) => {
  const totalDays = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const grid = [];

  for (let i = 0; i < firstDay; i++) grid.push(null);
  for (let d = 1; d <= totalDays; d++) grid.push(new Date(year, month, d));

  return grid;
};
