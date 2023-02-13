import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import FormBtn from '../components/FormBtn';

function Info() {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50}}>
      <KeyboardAvoidingView style={styles.background}>
        <HeaderText
          title="Customer info"
          subtitle="please provide some information!"
        />

        <View style={styles.formContainer}>
          <Input label="Name" placeholder="Xyz" />
          <Input label="Address line 1" placeholder="City : Example" />
          <Input
            label="Address line 2"
            placeholder=" , Street : 56 House no : 10kl"
          />
          <Input label="Phone number" placeholder="1234567890" />
        </View>

        <FormBtn text="Submit" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: 24,
  },
  formContainer: {
    gap: 20,
    marginBottom: 50,
  },
});

export default Info;
