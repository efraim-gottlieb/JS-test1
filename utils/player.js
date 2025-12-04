import mathTools from '../utils/math_tools.js'


const createPlayer = (name) => {
  return {
  name,
  times : []
  }
}

const addSolveTime = (player, seconds) => {
  player.times.push(seconds)
}

const showStats = (player) => {
  const totalTime = mathTools.sun(player.times)
  const avgRiddleTime = mathTools.avg(player.times)

  console.log(`total time: ${totalTime}\naverage riddle time: ${avgRiddleTime}`)
}

export default {createPlayer, addSolveTime, showStats};