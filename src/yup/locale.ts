import { setLocale } from "yup";
import { LocaleObject } from "yup/lib/locale";

const yupLocale = (customConfig?: LocaleObject) => {
  setLocale({
    mixed: {
      required: "To pole jest wymagane",
      notType: function notType(_ref) {
        switch (_ref.type) {
          case "number":
            return "Wartość musi być liczbą";
          case "string":
            return "To nie jest tekst";
          default:
            return "Nieprawidłowy typ";
        }
      },
      ...customConfig?.mixed,
    },
    string: {
      max: (params) => `To pole nie może być dłuższe niż ${params.max} znaków`,
      url: () => `To nie jest link`,
      ...customConfig?.string,
    },
    number: {
      min: (params) => `Wartość musi być nie mniejsza niż ${params.min}`,
      positive: (params) => `Wartość musi być większa od ${params.more}`,
      ...customConfig?.number,
    },
    date: {
      ...customConfig?.date,
    },
    boolean: {
      ...customConfig?.boolean,
    },
    object: {
      ...customConfig?.object,
    },
    array: {
      ...customConfig?.array,
    },
  });
};

export default yupLocale;
