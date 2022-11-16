export const jsToCss = (js: any) => {
  let cssString = '';
  for (let objectKey in js) {
    cssString +=
      objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
      ': ' +
      js[objectKey] +
      ';\n';
  }
  return cssString;
};
