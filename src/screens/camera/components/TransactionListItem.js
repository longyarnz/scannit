import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const TransactionListItem = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>{props.address}</Text>
        <Text style={styles.text}>{props.date}</Text>
      </View>
    </View>
  );
};

export const TransactionListSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 80,
    backgroundColor: '#D9D9D9',
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 5,
    marginBottom: 15,
  },
  top: {},
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Inter-Bold',
  },
  separator: {
    height: 10,
    backgroundColor: 'transparent',
  },
});
