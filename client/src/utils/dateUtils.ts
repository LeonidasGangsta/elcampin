export const getLogDateInSpanish = (date: string | Date) => new Date(date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });

export const getBarnDateInSpanish = (dateInIsoString: string | Date) => {
  const date = new Date(dateInIsoString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  };
  return date.toLocaleDateString('es-ES', options);
};

export const isAPastDate = (leftDate: Date | string, rightDate: Date | string = new Date()) => {
  const [firstDate, lastDate] = [leftDate, rightDate].map((date) => new Date(date));
  return firstDate.getTime() <= lastDate.getTime();
};
