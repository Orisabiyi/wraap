import { Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#166534' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Octicons name="home" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
