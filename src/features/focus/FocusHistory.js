import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  console.log(index);
  return (
    <Text style={styles.historyItem(item.status)}>
      {JSON.stringify(item.subject)}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex:0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}> Things we've focussed on: </Text>
            <FlatList
              style={{ flex: 0.5 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center'}}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                title="clear"
                size={75}
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
    paddingTop: spacing.xxxxl,
  },
  clearContainer: {
    flex: 1,
    alignItems: 'center',
    padding: spacing.exsm,
    width: '100%',
    height: 0,
    position: 'absolute',
    bottom: 0
  },
});
