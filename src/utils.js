export const toTitleCase = text =>
  text.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

export const formatUnicorn = (str, ...args) => {
  let inputtedStr = str.toString();
  const totalArgs = args.length;

  if (totalArgs) {
    for (let i = 0; i < totalArgs; i++) {
      try {
        inputtedStr = inputtedStr.replace(
          new RegExp(`\\{${i}\\}`, 'gi'),
          args[i]
        );
      } catch (e) {
        console.error(`Error: ${e}`);
      }
    }
  }

  return inputtedStr;
};

export const snakeCaseToTitle = text => {
  if (typeof text !== 'string') return '';
  const words = text.split('_');
  words.forEach((word, idx, words) => {
    words[idx] = toTitleCase(word);
  });
  return words.join(' ');
};
