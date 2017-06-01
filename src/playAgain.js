export default function playAgain() {
  let audioCtx = new AudioContext()
  let oscillator = audioCtx.createOscillator()

  let freqArray = [262, 294, 330, 349, 392, 440, 494]

  oscillator.type = 'sin'
  oscillator.connect(audioCtx.destination)

  for (let i = 0; i < freqArray.length; i++) {
    oscillator.frequency.value = freqArray[i]
    oscillator.start()
    setTimeout(function() {
      oscillator.stop()
    }, 1000)
  }
}
