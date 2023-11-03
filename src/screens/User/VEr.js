/** @format */

const ProfilStack = createStackNavigator();
export const ProfilStackScreen = () => {
 return (
  <ProfilStack.Navigator>
   <ProfilStack.Screen
    name='Profil'
    component={UserProfil}
    options={{ headerShown: false }}
   />
   <ProfilStack.Screen
    name='SettingPage'
    component={SettingPage}
    options={{ headerShown: false }}
   />
   <ProfilStack.Screen
    name='modifier mon compte'
    component={UserModificationPage}
    options={{ headerShown: false }}
   />

   <ProfilStack.Screen
    name='Mes Tags'
    component={MyTags}
    options={{ headerShown: false }}
   />
   <ProfilStack.Screen
    name='modifier centre interets'
    component={CategoriesTags}
    options={{ headerShown: false }}
   />
   <ProfilStack.Screen
    name='change tes tags'
    component={ChooseTags}
    options={{ headerShown: false }}
   />
  </ProfilStack.Navigator>
 );
};

const Tab = createBottomTabNavigator();

export default function Navigator() {
 // render() {

 return (
  <Tab.Navigator
   initialRouteName='Feed'
   tabBarOptions={{
    activeTintColor: '#e91e63',
    activeBackgroundColor: CAMPOO.secondary
   }}>
   <Tab.Screen
    name='accueil'
    component={HomeStackScreen}
    options={{
     tabBarLabel: () => {
      return null;
     },

     tabBarIcon: () => {
      return <HomeIcon />;
     }
    }}
   />
   <Tab.Screen
    name='Evenement'
    component={EventStackScreen}
    options={{
     tabBarLabel: () => {
      return null;
     },
     tabBarIcon: () => {
      return <EventIcon />;
     }
    }}
   />

   <Tab.Screen
    name='mon profil'
    component={ProfilStackScreen}
    options={{
     tabBarLabel: () => {
      return null;
     },

     tabBarIcon: () => {
      return <ProfileIcon />;
     }
    }}
   />
  </Tab.Navigator>
 );
 // }
}
