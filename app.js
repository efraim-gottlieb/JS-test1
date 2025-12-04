import riddles from './riddles/riddles.js';
import player from './utils/player.js';
import mathTools from './utils/mathTools.js'
import input from 'analiza-sync';


let a= player.createPlayer('efraim')
player.addSolveTime(a, 8)
player.addSolveTime(a, 5)
// console.log(riddles)


player.showStats(a)