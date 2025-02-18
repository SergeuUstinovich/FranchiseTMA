export function declensionMonths(count: number) {
  const months = ["месяц", "месяца", "месяцев"];

  const cases = [2, 0, 1, 1, 1, 2];
  const key =
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5];

  return `${count} ${months[key]}`;
}

// export function declensionDays(num: number) {
//   const cases = [2, 0, 1, 1, 1, 2];
//   const titles = ['день', 'дня', 'дней'];

//   return titles[
//     (num % 100 > 4 && num % 100 < 20) 
//       ? 2 
//       : cases[(num % 10 < 5) ? num % 10 : 5]
//   ];
// }
