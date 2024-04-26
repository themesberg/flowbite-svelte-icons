export function convertToKebabCase(str) {
  // Use replace() method with a regular expression to match all whitespace characters (\s) globally (g flag)
  // and replace them with '-'
  return str.replace(/\s/g, '-').toLowerCase();
}
