import lodashGet from "lodash/get";

const englishMessages = {
  ra: {
    notification: {
      http_error: "Network error. Please retry",
    },
    action: {
      save: "Save",
      delete: "Delete",
    },
  },
};
const frenchMessages = {
  ra: {
    notification: {
      http_error: "Erreur réseau, veuillez réessayer",
    },
    action: {
      save: "Enregistrer",
      delete: "Supprimer",
    },
  },
};
let messages = englishMessages;

let locale = "v";

export const i18nProvider = {
  translate: (key) => lodashGet(messages, key),
  changeLocale: (newLocale) => {
    messages = newLocale === "fr" ? frenchMessages : englishMessages;
    locale = newLocale;
    return Promise.resolve();
  },
  getLocale: () => locale,
};
