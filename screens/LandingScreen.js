import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import UsernameInput from '../components/UsernameInput'
import HistoryContainer from '../components/HistoryContainer'
import useHistoryState from '../hooks/useHistoryState'
import useFetchingState from '../hooks/useFetchingState'
import { fetchGithubAccountInfo, fetchGithubAccountRepos, fetchGithubAccountOrgs } from '../actions/githubActions'

const LandingScreen = props => {
  const { navigation } = props

  const { usedUsernames } = useHistoryState()
  const { fetchingData, setFetchingData } = useFetchingState()

  const createResume = async (username) => {
    setFetchingData(true)

    const accountInfo = await fetchGithubAccountInfo(username)
    const accountRepos = await fetchGithubAccountRepos(username)
    const accountOrgs = await fetchGithubAccountOrgs(username)

    navigation.navigate('Resume', {
      githubInfo: {
        accountInfo,
        accountRepos,
        accountOrgs
      }
    })

    setFetchingData(false)
  }

  if (fetchingData) {
    return (
      <View style={[styles.loadingIndicator]}>
        <ActivityIndicator size="large" color="#20b2aa" />
      </View>
    )
  }

  return (
    <LinearGradient colors={['#f8f8ff', '#f0ffff', '#add8e6']} style={styles.linearGradient}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>GITHUB RÉSUMÉ</Text>
        </View>
        <UsernameInput onCreateResume={createResume}/>
        <HistoryContainer createResume={createResume} usedUsernames={usedUsernames}/>
      </View>
    </LinearGradient>
  )
}

LandingScreen.navigationOptions = {
  headerTitle: '',
  headerShown: false
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 80,
    height: '100%',
    width:  '80%'
  },
  linearGradient: { 
    alignItems: 'center', 
    borderRadius: 5
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  header: {
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  headerLabel: {
    fontSize: 30,
    color: 'dimgray'
  }
})

export default LandingScreen