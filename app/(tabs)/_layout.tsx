import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          header: () => null,
        }}
      />
      <Tabs.Screen name="import" />
    </Tabs>
  );
}
