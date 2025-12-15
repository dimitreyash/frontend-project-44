import { getRandomNumber } from './utils.js'
import game from './game.js'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false
    }
  }
  return true
}

function getPrimeAnswer(number) {
  if (isPrime(number)) {
    return 'yes'
  }
  return 'no'
}

export default function gamePrime() {
  return game(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    () => {
      const question = getRandomNumber()
      const correctAnswer = String(getPrimeAnswer(question))
      return [question, correctAnswer]
    },
  )
}
