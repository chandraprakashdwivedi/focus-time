import React ,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What things you want to focus on ? </Text>
      </View>

      <View style={styles.inputContainer}>

        <TextInput style={{flex:1 , marginRight: spacing.md}} 


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
    flex: 1
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: "center"
  },
});
