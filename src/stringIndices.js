export default function stringIndices(phrase, index) {
  const phraseArr = phrase.replace(/\W/g, " ").split(" ")
  return phraseArr[index - 1]
}
