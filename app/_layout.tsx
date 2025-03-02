import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { View, Text } from "react-native";
import Auth from "./auth";

export default function RootLayout() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Auth />;
  }

  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );

  // return (
  //   <Stack>
  //     <Stack.Screen
  //       name="(tabs)"
  //       options={{
  //         header: () => null,
  //       }}
  //     />
  //   </Stack>
  // );
}
