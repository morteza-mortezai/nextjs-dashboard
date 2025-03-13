import "server-only";

const dictionaries = {
  "en-US": () => import("./en.json").then((module) => module.default),
  "fa-IR": () => import("./fa.json").then((module) => module.default),
};
export type Locale = "en-US" | "fa-IR";
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
