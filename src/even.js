import readlineSync from 'readline-sync'
import { getRandomNumber } from './utils.js'

const roundCount = 3

const isEven = number => number % 2 === 0

function getEvenAnswer(number) {
  if (isEven(number)) {
    return 'yes'
  }
  return 'no'
}

export default function gameEven() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomNumber()
    const correctAnswer = getEvenAnswer(question)

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
