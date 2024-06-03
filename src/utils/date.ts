export function generateRandomDate(): string {
  const currentDate: Date = new Date();
  const minYear: number = currentDate.getFullYear() + 5;
  const maxYear: number = currentDate.getFullYear() + 10;

  const randomYear: number =
    Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const randomMonth: number = Math.floor(Math.random() * 12);
  const randomDay: number = Math.floor(Math.random() * 28) + 1;

  const randomDate: Date = new Date(randomYear, randomMonth, randomDay);
  const month =
    String(randomDate.getMonth() + 1).length === 1
      ? "0" + (randomDate.getMonth() + 1)
      : String(randomDate.getMonth() + 1);
  const year = String(randomDate.getFullYear()).slice(-2);
  return `${month}/${year}`;
}
