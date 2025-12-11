import { getRandomNumber } from './utils.js'
import game from './game.js'

const operations = ['+', '-', '*']

function getCalcAnswer(a, b, operation) {
  switch (operation) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: null
  }
}

export default function gameCalc() {
  return game(
    'What is the result of the expression?.',
    () => {
      const a = getRandomNumber(1, 100)
      const b = getRandomNumber(1, 100)
      const operation = operations[getRandomNumber(0, 2)]
      const question = `${a} ${operation} ${b}`
      const correctAnswer = String(getCalcAnswer(a, b, operation))

      return [question, correctAnswer]
    },
  )
}
