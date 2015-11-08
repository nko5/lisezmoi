export const START_BET = 'START_BET'
export const END_BET = 'END_BET'
export const ADD_LINE = 'ADD_LINE'
export const REPLACE_LINES = 'REPLACE_LINES'

export const startBet = letter => ({
  type: START_BET,
  letter,
})
export const endBet = letter => ({
  type: END_BET,
  letter,
})
export const addLine = line => ({
  type: ADD_LINE,
  line,
})
export const replaceLines = lines => ({
  type: REPLACE_LINES,
  lines,
})
