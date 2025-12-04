import riddles from './riddles/riddles.js';
import player from './utils/player.js';
import mathTools from './utils/math_tools.js'


let a= player.createPlayer('efraim')
player.addSolveTime(a, 8)
// console.log(riddles)


player.showStats(a)