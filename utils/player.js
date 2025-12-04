const createPlayer = (name) => {
  return {
  name,
  times : []
  }
}

const addSolveTime = (player, seconds) => {
  player.times.push(seconds)
}


export default {createPlayer, addSolveTime};