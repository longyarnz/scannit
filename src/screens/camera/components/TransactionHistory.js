import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import {
  TransactionListItem,
  TransactionListSeparator,
} from './TransactionListItem';

export const TransactionHistory = ({ initialSnapPoint }) => {
  const counter = useRef(0);
  const bottomSheet = useRef(null);
  const snapPoints = useMemo(
    () => [initialSnapPoint, '50%', '90%'],
    [initialSnapPoint],
  );

  const data = useMemo(
    () => [
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
      {
        name: 'Type (package signed)',
        address: 'Address',
        date: 'Date',
        index: ++counter.current,
      },
    ],
    [],
  );

  const renderItem = useCallback(
    ({ item }) => <TransactionListItem {...item} />,
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheet}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={styles.bottomSheetBackgorundStyle}
      handleIndicatorStyle={styles.bottomSheetHandleIndicatorStyle}>
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetHeader}>
          <Text style={styles.captionTitle}>Transaction History</Text>
        </View>
        <BottomSheetFlatList
          data={data}
          keyExtractor={i => i.index}
          renderItem={renderItem}
          contentContainerStyle={styles.bottomSheetList}
          ItemSeparatorComponent={TransactionListSeparator}
          ListFooterComponent={TransactionListSeparator}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
  },
  bottomSheetBackgorundStyle: {
    borderRadius: 0,
    backgroundColor: '#BCBCBC',
  },
  bottomSheetList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  bottomSheetHeader: {
    paddingHorizontal: 20,
  },
  bottomSheetHandleIndicatorStyle: {
    backgroundColor: '#D9D9D9',
    width: 55,
    marginBottom: 10,
  },
  button: {
    width: 320,
    height: 70,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
  },
  captionTitle: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 20,
    fontFamily: 'Inter-Bold',
  },
});
