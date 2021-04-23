import React ,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import { useKeepAwake } from 'expo-keep-awake';

export const Focus = ({ addSubject }) => {
  useKeepAwake();
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What things you want to focus on ? {'\n'}{'\n'} Press "Done" after adding new task. </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={{flex:0.8, marginRight: spacing.lg, marginLeft: spacing.xxxxl}} 

        onSubmitEditing={
          ({ nativeEvent }) => {
            setSubject(nativeEvent.text)
          }}
        />

        <RoundedButton size={50} title="+"  onPress={() => {
           addSubject(subject)
        }}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    padding: spacing.md,
    justifyContent: 'center',
    flex: 1,
    paddingBottom: spacing.xl,
    paddingTop: spacing.xxxxl,
    alignContent:'center'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  inputContainer: {
    paddingTop: spacing.xxl,
    flexDirection: 'row',
    alignItems: "center",
    paddingBottom: spacing.xl
  },
});
