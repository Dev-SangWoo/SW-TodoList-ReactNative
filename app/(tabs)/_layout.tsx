import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Slot, Tabs } from 'expo-router';
import { Keyboard, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

// TabBar를 수정하여 키보드가 표시될 때 숨기기
function TabBar(props: any) {
  return (
    <View style={styles.container}>
      <BottomTabBar {...props} />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Inter' },
        tabBarActiveTintColor: '#007AFF',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
          borderTopColor: colorScheme === 'dark' ? '#333' : '#eee',
        },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '할 일 목록',
          tabBarIcon: ({ color }) => <MaterialIcons name="check-circle" size={24} color={color} />,
          tabBarLabel: '할 일',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '정보',
          tabBarIcon: ({ color }) => <MaterialIcons name="info" size={24} color={color} />,
          tabBarLabel: '정보',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
