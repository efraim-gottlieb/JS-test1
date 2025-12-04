import mathTools from './mathTools.js'


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
  const totalTime = mathTools.sum(player.times)
  const avgRiddleTime = mathTools.avg(player.times)

  console.log(`total time: ${totalTime} seconds\naverage riddle time: ${avgRiddleTime} seconds`)
}

export default {createPlayer, addSolveTime, showStats};