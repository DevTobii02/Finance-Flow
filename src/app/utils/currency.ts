export const CURRENCY_STORAGE_KEY = "finance-flow-currency";

export const currencyOptions = [
  { code: "NGN", symbol: "₦", label: "Nigerian Naira" },
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "GBP", symbol: "£", label: "British Pound" },
  { code: "EUR", symbol: "€", label: "Euro" },
];

export const getCurrencySymbol = (code: string) => {
  return currencyOptions.find((option) => option.code === code)?.symbol ?? "₦";
};

export const getCurrencyLabel = (code: string) => {
  return currencyOptions.find((option) => option.code === code)?.label ?? code;
};

export const getStoredCurrency = () => {
  if (typeof window === "undefined") return "NGN";
  const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY);
  return stored && currencyOptions.some((option) => option.code === stored) ? stored : "NGN";
};

export const setStoredCurrency = (code: string) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CURRENCY_STORAGE_KEY, code);
};
