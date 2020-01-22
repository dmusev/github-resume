import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HistoryContainerItem from './HistoryContainerItem'

const HistoryContainer = props => {
  const onHistoryItemPress = (name) => {
    const { createResume } = props
    createResume(name)
  }

  return (
    <View>
      <View style={styles.historyContainer}>
        <Text style={styles.historyContainerLabel}>Popular GitHub Usernames: </Text>
          <View style={styles.lineElements}>
            <TouchableOpacity onPress={() => onHistoryItemPress('mxcl')}>
              <Text style={styles.itemContent}>
                MXCL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onHistoryItemPress('IVAYLOKENOV')}>
              <Text style={styles.itemContent}>
              IVAYLOKENOV
              </Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.historyContainer}>
          <Text style={styles.historyContainerLabel}>Entered GitHub Usernames: </Text>
          {
            props.usedUsernames.length > 0 &&
            <FlatList
              keyExtractor={(item, index) => `list-item-${index}`}
              contentContainerStyle={styles.historyScroll} 
              data={props.usedUsernames} 
              renderItem={itemData => (
                <HistoryContainerItem  onHistoryItemPress={onHistoryItemPress} item={itemData.item}/>
              )}
            />
          }
          {
            props.usedUsernames.length < 1 &&
            <Text style={styles.emptyListStylings}>
              No usernames were checked so far!
            </Text>
          }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  historyContainer: {
    paddingTop: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 250
  },
  historyScroll: {
    padding: 5,
    width: 250,
    borderColor: 'gainsboro',
    borderBottomColor: 'gainsboro',
    borderWidth: 0
  },
  historyContainerLabel: {
    width: 250,
    paddingBottom: 10,
    color: 'dimgrey',
    fontSize: 20
  },
  emptyListStylings: {
    color: 'gray',
    fontSize: 20,
    fontStyle: 'italic'
  },
  lineElements: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  itemContent: {
    padding: 10,
    fontStyle: 'italic'
  }
})

export default HistoryContainer