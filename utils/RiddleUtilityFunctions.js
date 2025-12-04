import input from 'analiza-sync'

const askMultipleChoiceRiddle = (riddleObj) => {
  console.log('\noptions:\n')
  let choiceIndex = 1
  riddleObj.choices.forEach((choice) => {
    console.log(`${choiceIndex}. ${choice}`)
    choiceIndex ++
  })
  let answer = input('Enter the answer ')
  while(answer -1 != riddleObj.correctAnswer) {
    console.log('Wrong answer, try again.')
    answer = input('Enter the answer ')
  }
  console.log('beautiful')
}

const askRegularRiddle = (riddleObj) => {
  let answer = input('Enter the answer ')
  while (answer != riddleObj.correctAnswer) {
    console.log('Wrong answer, try again.')
    answer = input('Enter the answer ')
  }
  console.log('beautiful')
}

const askRiddle = (riddleObj) => {
  console.log('\n______'+ riddleObj.name +'______')
  console.log(`riddle type: ${riddleObj.riddleType}`)
  console.log(riddleObj.taskDescription)

  if(riddleObj.riddleType == 'multiple choice') {
    askMultipleChoiceRiddle(riddleObj)
  }
  else if(riddleObj.riddleType == 'regular riddle') {
    askRegularRiddle(riddleObj)
  }
}

const measureSolveTime = (fn, arg) => {
  const start = new Date()
  fn(arg)
  const end = new Date()
  let seconds = Math.abs(start.getTime() - end.getTime())/1000
  return seconds
}

export default {askRiddle, measureSolveTime}