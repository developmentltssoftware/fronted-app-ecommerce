// 00.000.000/0000-000
export const cnpjMask = (value: string | number) => {
  const stringValue = value.toString();
  return stringValue
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{2})/, "$1-$2");
};

// 000.000.000-00
const cpfMask = (value: string | number) => {
  const stringValue = value.toString();
  return stringValue
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

// 000.000.000-00 or 00.000.000/0000-000
export const cpfOrCnpjMask = (value: string | number) => {
  const stringValue = value.toString();
  if (stringValue.length >= 15) {
    return cnpjMask(value);
  }
  return cpfMask(value);
};
// 00000-000
export const cepMask = (value: string | number) => {
  const stringValue = value.toString();
  return stringValue.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

// 00/00/0000
export const dateMask = (value: string | number) => {
  const stringValue = value.toString();
  return stringValue
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};
export const onlyLettersMask = (value: string | number) => {
  const stringValue = value.toString();
  return stringValue.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

export const onlyNumbersMask = (value: string | number) => {
  const stringValue = value.toString();
  return stringValue.replace(/\D/g, "");
};

// passada para onChange do controller
export const format = (inputValue: string, key: KeyboardEvent) => {
  const numbersOnly = inputValue.replace(/\D/g, "");
  let modifiedString = "";
  if (key.code !== "Backspace") {
    modifiedString =
      numbersOnly.substring(0, 0) +
      "(" +
      numbersOnly.substring(0, 2) +
      ")" +
      numbersOnly.substring(2, 7) +
      "-" +
      numbersOnly.substring(7);
  } else if (key.code === "Backspace") {
    console.log("Backspace");
    modifiedString =
      numbersOnly.substring(0, 0) +
      "(" +
      numbersOnly.substring(0, 2) +
      ")" +
      numbersOnly.slice(2, numbersOnly.length - 2);
  }
  return modifiedString;
};
/* onChange: (e) => {
            console.log(e);
            //const inputValue = e;
            //const formattedValue = format(inputValue, e);
            //console.log(formattedValue);
            //setValue("phone", e.code);
            maskInput(e);
          }, */
