export const getLogDateInSpanish = (date: string | Date) => new Date(date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });

export const getBarnDateInSpanish = (dateInIsoString: string | Date) => {
  const date = new Date(dateInIsoString);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
};
