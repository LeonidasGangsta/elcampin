export const getPercentageOfOcupation = (maximumCapacity: number, usage: number, decimals = 2) => (
  ((usage / maximumCapacity) * 100).toFixed(decimals)
);

export const getDateInSpanish = (dateInIsoString: string) => {
  const date = new Date(dateInIsoString);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
};
