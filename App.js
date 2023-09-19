import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccueilScreen } from './views/AccueilScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Accueil" component={AccueilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}