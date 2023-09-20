import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccueilScreen } from './views/AccueilScreen';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './views/LoginScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Accueil" component={AccueilScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}