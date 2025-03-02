import React from "react";
import { Button, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

export default function Auth() {
  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          // initiate sign in
        }}
        // disabled={isInProgress}
      />
      ;
    </View>
  );
}
