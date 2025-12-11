import { getRandomNumber } from './utils.js'
import game from './game.js'

function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export default function gameGcd() {
  return game(
    'Find the greatest common divisor of given numbers.',
    () => {
      const a = getRandomNumber(1, 100)
      const b = getRandomNumber(1, 100)
      const question = `${a} ${b}`
      const correctAnswer = String(gcd(a, b))

      return [question, correctAnswer]
    },
  )
}
