import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

import { ErrorMessage } from "@hookform/error-message";

const AuthScreen = () => {
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.label}>Email :</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          }}
          defaultValue=""
        />
        {errors.email && <Text>email This is required.</Text>}

        <Text style={styles.label}>Password :</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          rules={{ required: true, minLength: 6 }}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text>Password This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

AuthScreen.navigationOptions = () => {
  return {
    headerTitle: "Authentification",
  };
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
  },
});

export default AuthScreen;
