import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccueilScreen } from '../views/AccueilScreen';
import {StatScreen} from '../views/StatScreen';
import {DocScreen} from '../views/DocScreen';
import { Icon } from '@rneui/themed';
import { CalendrierScreen } from '../views/CalendrierScreen';
import { ProfilScreen } from '../views/ProfileScreen';

export function Main(){
    const Tab = createBottomTabNavigator()
    return(
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
            <Tab.Screen name="Calendrier" component={CalendrierScreen} />
            <Tab.Screen name="Profil" component={ProfilScreen} />
          </Tab.Navigator>
    )
}