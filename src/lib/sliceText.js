const sliceText = (text, maxChar = 50) => {
  if (text.length > maxChar) {
    return `${text.slice(0, maxChar)}...`
  }
  return text
}
export default sliceText
