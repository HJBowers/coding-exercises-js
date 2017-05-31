export default function disemvowling(phrase) {
  const consonants = phrase.replace(/[aeiou]*\s*/g, "")
  return consonants
}
