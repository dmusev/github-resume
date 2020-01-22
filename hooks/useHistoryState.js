import { createStore, useStore } from 'react-hookstore'

const defaultState = []

createStore('usernamesHistory', defaultState)

export default useHistoryState = () => {
  const [usedUsernames, addUsedUsername] = useStore('usernamesHistory')

  /**
   * Everytime a new value arrives as a parameter
   * it will be merged in the global state
   */
  const onStateChange = username => {
    let newNames = [...usedUsernames, { username, index: usedUsernames.length + 1 }]

    addUsedUsername(newNames)
  }

  return {
    usedUsernames,
    addUsedUsername: onStateChange
  }
}
