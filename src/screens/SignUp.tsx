import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import fonts from '../utils/fonts';
import colors from '../utils/colors';
import FormBtn from '../components/FormBtn';

function SignUp() {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.goBack();
  }

  function handleInfo() {
    navigation.navigate('info');
  }

  return (
    <ScrollView
      contentContainerStyle={{maxHeight: height}}
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.background}>
        <HeaderText title="SignUp" subtitle="create an account!" />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Example01@gmail.com"
            label="Enter phone number/email id!"
          />
          <Input placeholder="Example#123" label="Enter a password" />
        </View>
        <View style={styles.rememberContent}>
          <TouchableOpacity style={styles.rememberButton}>
            <View style={styles.rememberButtonFill} />
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember-Me</Text>
        </View>

        <FormBtn onPress={handleInfo} text="SignUp" />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signupButtonText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: 24,
  },
  inputContainer: {
    gap: 20,
  },
  rememberContent: {
    marginTop: 17,
    marginBottom: 50,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  rememberButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberButtonFill: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.purple,
  },
  rememberText: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: colors.gray,
  },
  signupContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signupText: {
    color: colors.gray,
    fontSize: 16,
  },
  signupButtonText: {
    color: colors.purple,
    fontSize: 16,
    fontFamily: fonts.description,
  },
});

export default SignUp;
