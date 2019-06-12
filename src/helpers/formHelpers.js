const checkCyrillic = str => {
  return /[а-яА-ЯЁё]/.test(str);
};

const translit = char => {
  const letterAssociations = {
    а: "a",
    А: "A",
    б: "b",
    Б: "B",
    в: "v",
    В: "V",
    Г: "G",
    г: "g",
    д: "d",
    е: "e",
    Е: "E",
    ё: "e",
    Ё: "E",
    ж: "zh",
    Ж: "Zh",
    з: "z",
    З: "Z",
    и: "i",
    И: "I",
    й: "i",
    Й: "I",
    к: "k",
    К: "K",
    л: "l",
    Л: "L",
    м: "m",
    М: "M",
    н: "n",
    Н: "N",
    о: "o",
    О: "O",
    п: "p",
    П: "P",
    р: "r",
    Р: "R",
    с: "s",
    С: "S",
    т: "t",
    Т: "T",
    у: "u",
    У: "U",
    ф: "f",
    Ф: "F",
    х: "h",
    Х: "H",
    ц: "c",
    Ц: "C",
    ч: "ch",
    Ч: "Ch",
    ш: "sh",
    Ш: "Sh",
    щ: "sh'",
    Щ: "Sh",
    ъ: "",
    Ъ: "",
    ы: "i",
    Ы: "i",
    ь: "",
    Ь: "",
    э: "e",
    Э: "E",
    ю: "yu",
    Ю: "Yu",
    я: "ya",
    Я: "Ya",
    "-": "-"
  };

  return letterAssociations[char];
};

const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export { checkCyrillic, translit, validateEmail, phoneRegExp };
