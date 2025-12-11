import { getRandomNumber } from './utils.js'
import game from './game.js'

const isEven = number => number % 2 === 0

function getEvenAnswer(number) {
  if (isEven(number)) {
    return 'yes'
  }
  return 'no'
}

export default function gameEven() {
  return game(
    'Answer "yes" if the number is even, otherwise answer "no".',
    () => {
      const question = getRandomNumber()
      const correctAnswer = getEvenAnswer(question)
      return [question, correctAnswer]
    },
  )
}
