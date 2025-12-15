import { getRandomNumber } from './utils.js'
import game from './game.js'

export default function gameProgression() {
  return game(
    'What number is missing in the progression?',
    () => {
      const progressionLength = 10
      const start = getRandomNumber(1, 20)
      const step = getRandomNumber(1, 20)
      const operation = getRandomNumber(0, progressionLength - 1)

      const progression = []

      for (let index = 0; index < progressionLength; index += 1) {
        const currentElement = start + index * step
        if (index === operation) {
          progression.push('..')
        }
        else {
          progression.push(String(currentElement))
        }
      }

      const correctAnswer = String(start + operation * step)
      const question = progression.join(' ')

      return [question, correctAnswer]
    },
  )
}
