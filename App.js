import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './views/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import { InfosModule } from './views/InfosModule';
import { Main } from './components/MainNavigation';
import { ChangePassword } from './views/ChangePassword';
import QrCodeScreen from './views/QrCodeScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  let user = {
    isConnected: false
  }

  if(user.isConnected){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false}}>
          <Stack.Screen name="Main" component={Main}/>
          <Stack.Screen name="InfosModule" component={InfosModule}/>
          <Stack.Screen name="ChangePassword" component={ChangePassword}/>
          <Stack.Screen name="QrCodeScreen" component={QrCodeScreen}/>
        </Stack.Navigator>
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