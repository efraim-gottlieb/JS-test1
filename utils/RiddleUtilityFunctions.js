import riddles from '../riddles/riddles.js'
const askMultipleChoiceRiddle = (riddleObj) => {
  console.log('mc')
}

const askRegularRiddle = (riddleObj) => {
  console.log('re')
}

const askRiddle = (riddleObj) => {
  if(riddleObj.riddleType == 'multiple choice') {
    askMultipleChoiceRiddle(riddleObj)
  }
  else if(riddleObj.riddleType == 'regular riddle') {
    askRegularRiddle(riddleObj)
  }
}
