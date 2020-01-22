import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import useHistoryState from '../hooks/useHistoryState'

const UsernameInput = props => {
  const [username, setUsername] = useState('')
  const { addUsedUsername } = useHistoryState()
  
  const usernameInputHandler = (enteredText) => {
    setUsername(enteredText)
  }

  const addUsedUsernameHandler = () => {
    if (username) {
      addUsedUsername(username)
      props.onCreateResume(username)
      setUsername('')
    }
  } 

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        onChangeText={usernameInputHandler}
        placeholder='Enter a Github username' 
        style={styles.usernameInput}
        value={username}
        autoCapitalize={'none'}
      />
      <Button title="Create" onPress={() => addUsedUsernameHandler()}/>
   </View>
  )
}

const styles = StyleSheet.create({ 
  inputContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  usernameInput: {
    flex: 1,
    borderColor: 'white',
    borderBottomColor: 'gainsboro',
    borderWidth: 0.5,
    fontSize: 18
  }
})

export default UsernameInput