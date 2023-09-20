import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccueilScreen } from './views/AccueilScreen';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './views/LoginScreen';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({ 
        headerShown: false,
        tabBarIcon: () => {

          let iconName

          if (route.name == "Accueil") {
              iconName = "home"
          }
          if (route.name == "Login") {
              iconName = "user"
          }

          return <Icon name={iconName} type='font-awesome' size={25} color={'black'} />
      }
      })}>
        <Tab.Screen name="Accueil" component={AccueilScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}