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

  console.log(`\nplayer: ${player.name}`)
  console.log(`\ntotal time: ${totalTime.toFixed(2)} seconds\naverage riddle time: ${avgRiddleTime.toFixed(2)} seconds`)
}

export default {createPlayer, addSolveTime, showStats};