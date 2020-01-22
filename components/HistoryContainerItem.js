import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HistoryContainerItem = props => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemContent}>
        {props.item.index}
      </Text>
      <TouchableOpacity onPress={() => props.onHistoryItemPress(props.item.username)}>
        <View style={styles.itemContent}>
          <Text style={styles.itemContent}>
            {props.item.username || ''}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  itemContent: {
    paddingRight: 10,
    color: 'dimgrey',
    fontSize: 20,
    borderColor: 'white',
    borderBottomColor: 'dimgray',
    borderWidth: 0.2
  }
})

export default HistoryContainerItem