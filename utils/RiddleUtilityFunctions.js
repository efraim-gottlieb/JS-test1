import input from 'analiza-sync'
import riddles from '../riddles/riddles.js'
const enterAnswerPrint = () => {console.log('Enter the answer ')}

const askMultipleChoiceRiddle = (riddleObj) => {
  console.log('\noptions:\n')
  let choiceIndex = 1
  riddleObj.choices.forEach((choice) => {
    console.log(`${choiceIndex}. ${choice}`)
    choiceIndex ++
  })
  let answer = input('Enter the answer ')
  while(answer -1 != riddleObj.correctAnswer) {
    answer = input('Enter the answer ')
  }
  console.log('beautiful')
}

const askRegularRiddle = (riddleObj) => {
  
}

const askRiddle = (riddleObj) => {
  console.log(riddleObj.name)
  console.log(`riddle type: ${riddleObj.riddleType}`)
  console.log(riddleObj.taskDescription)

  if(riddleObj.riddleType == 'multiple choice') {
    askMultipleChoiceRiddle(riddleObj)
  }
  else if(riddleObj.riddleType == 'regular riddle') {
    askRegularRiddle(riddleObj)
  }
}
// askRiddle(riddles[0])
askRiddle(riddles[1])
