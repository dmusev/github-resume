import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { transformRepos } from '../utils/utils'

const ResumeScreen = props => {
  const { navigation } = props
  const { accountInfo, accountRepos, accountOrgs = [] } = navigation.getParam('githubInfo') 
  const { languages, sorted } = transformRepos(accountRepos)
  const { message } = accountInfo
  const userFound = (message !== 'Not Found')

  // Languages to be displayed
  const displayLanguages = languages.map((language, index) => (
    <Text key={`${language.name}-${index}`}>{index + 1}. {language.name}</Text>
  ))

  // Repositories to be displayed
  const popularRepositories = sorted.map((repo, index) => {
    if (index < 3) {
      return (
        <View key={`${repo.info.name}-${index}`} style={styles.repoInfo}>
          <Text style={styles.rightColumnFirstText}>{repo.info.name}</Text>
          <Text style={styles.rightColumnSecondText}>{repo.info.description}</Text>
        </View>
      )
    }
  })

  // Organizations to be displayed
  const organizations = Array.isArray(accountOrgs) && accountOrgs.map((org, index) => {
    if (index < 3) {
      return (
        <View key={`${org.login}-${index}`} style={styles.repoInfo}>
          <Text style={styles.rightColumnFirstText}>{org.login}</Text>
          <Text style={styles.rightColumnSecondText}>{org.description}</Text>
        </View>
      )
    }
  })

  return (
    <ScrollView style={styles.resumeContainer}>
      {
        userFound && 
        <View>
          <View style={styles.heading}>
            <Text style={styles.bigFont}>{accountInfo.name}</Text>
            <Text>{accountInfo.bio}</Text>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.leftColumn}>GitHub Profile</Text>
            <Text style={styles.rightColumn}>
              {accountInfo.name} is developer based in {accountInfo.location} with {accountInfo['public_repos']} public repos and {accountInfo.followers} followers.
            </Text>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.leftColumn}>Website</Text>
            <Text style={styles.rightColumn}>
              {accountInfo.blog}
            </Text>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.leftColumn}>Languages</Text>
            <View style={styles.languages}>
              {displayLanguages}
            </View>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.leftColumn}>Popular repositories</Text>
            <View style={styles.rightColumn}>
              {popularRepositories}
            </View>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.leftColumn}>Organizations</Text>
            <View style={styles.rightColumn}>
              {organizations}
            </View>
          </View>
        </View>
      }
      {
        !userFound && 
        <View style={styles.notFoundMessageContainer}>
          <Text style={styles.bigFont}>USER NOT FOUND!</Text>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  resumeContainer: {
    backgroundColor: 'white',
    padding: 20,
    height: '100%',
    width:  '100%'
  },
  bigFont: {
    fontSize: 20,
    paddingBottom: 5
  },
  heading: {
    borderColor: 'white',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  rowInfo: {
    borderColor: 'white',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftColumn: {
    flex: 1
  },
  rightColumn: {
    flex: 2
  },
  languages: {
    flex: 2
  },
  repoInfo: {
    borderColor: 'white',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  rightColumnFirstText: {
    fontSize: 18
  },
  rightColumnSecondText: {
    fontSize: 10
  },
  notFoundMessageContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
 })

export default ResumeScreen
