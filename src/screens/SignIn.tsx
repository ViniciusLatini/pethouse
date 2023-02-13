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

import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import fonts from '../utils/fonts';
import colors from '../utils/colors';
import FormBtn from '../components/FormBtn';

function SignIn() {
  const {height} = useWindowDimensions();

  return (
    <ScrollView
      contentContainerStyle={{maxHeight: height}}
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.background}>
        <HeaderText
          title="SignIn"
          subtitle="SignIn to your existing account!"
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Example01@gmail.com"
            label="Enter phone number/email id!"
          />
          <Input placeholder="Example#123" label="Enter a password" />
        </View>
        <Text style={styles.forgetPass}>Forget Password?</Text>

        <FormBtn />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupButtonText}>SingUp</Text>
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
  forgetPass: {
    textAlign: 'right',
    fontFamily: fonts.text,
    color: colors.gray,
    marginTop: 10,
    marginBottom: 50,
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

export default SignIn;
