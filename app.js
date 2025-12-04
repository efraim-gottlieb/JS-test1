import riddles from './utils/riddles.js';
import playerTools from './utils/player.js';
import input from 'analiza-sync';
import game from './utils/RiddleUtilityFunctions.js'

console.log('------ Welcomt to the riddle game ------')
const playerName = input('Enter your name ')
let player = playerTools.createPlayer(playerName)

riddles.forEach((riddle) => {
  let roundSeconds = game.measureSolveTime(game.askRiddle,riddle)
  playerTools.addSolveTime(player, roundSeconds)
})

console.log('\n==== Game Over ====')
playerTools.showStats(player)