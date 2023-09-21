import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccueilScreen } from './views/AccueilScreen';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './views/LoginScreen';
import {StatScreen} from './views/StatScreen';
import {DocScreen} from './views/DocScreen';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


export default function App() {
  let user = {
    isConnected: true
  }

  if(user.isConnected){
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route})=>({ 
          headerShown: false,
          tabBarIcon: () => {
  
            let iconName
  
            if (route.name == "Accueil") {
                iconName = "home-outline"
            }
            if (route.name == "Statistiques") {
                iconName = "stats-chart-outline"
            }
            if (route.name == "Documents") {
                iconName = "folder-open-outline"
            }
            if (route.name == "Calendrier") {
                iconName = "calendar-outline"
            }
            if (route.name == "Profil") {
                iconName = "person-outline"
            }
  
            return <Icon name={iconName} type='ionicon' size={25} color={'black'} />
        }
        })}>
          <Tab.Screen name="Accueil" component={AccueilScreen} />
          <Tab.Screen name="Statistiques" component={StatScreen} />
          <Tab.Screen name="Documents" component={DocScreen} />
          <Tab.Screen name="Calendrier" component={StatScreen} />
          <Tab.Screen name="Profil" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
  if(!user.isConnected){
    return(
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    )
  }
}