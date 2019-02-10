export const set = (state, value) => {
  return {
    type: 'SET',
    state: state,
    value: value
  }
}

export const upsert = (state, value) => {
  return {
    type: 'UPSERT',
    state: state,
    value: value
  }
}

export const append = (state, value) => {
  return {
    type: 'PUSH',
    state: state,
    value: value
  }
}

export const removeByKey = (state, key, value) => {
  return {
    type: 'REMOVE_BY_KEY',
    state: state,
    key: key,
    value: value
  }
}

export const reset = (state) => {
  return {
    type: 'RESET',
    state: state
  }
}