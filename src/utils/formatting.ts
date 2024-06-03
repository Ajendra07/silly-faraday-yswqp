export const numberWithCommas = (input: number, locale: string = "sg") => {
  const lang = locale === "in" ? "en-IN" : "en-US";
  return Number(input).toLocaleString(lang, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
