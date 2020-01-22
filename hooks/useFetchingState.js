import { createStore, useStore } from 'react-hookstore'

const defaultState = false

createStore('fetching', defaultState)

export default useHistoryState = () => {
  const [fetchingData, setFetchingData]  = useStore('fetching')

  const onStateChange = value => {
    setFetchingData(!!value)
  }

  return {
    fetchingData,
    setFetchingData: onStateChange
  }
}
