import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen'
import OverviewScreen from './screens/OverviewScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import { StackNavigatorParamList } from './types'
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavContextProvider from './store/context/fav-context'
import { Provider } from 'react-redux'

import store from './store/redux/store'

const Stack = createNativeStackNavigator<StackNavigatorParamList>()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3f2f25',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#ea9b6d',
        drawerActiveBackgroundColor: '#351401',
      }}
    >
      <Drawer.Screen
        name='All Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        {/* <FavContextProvider> */}
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#351401',
                },
                headerTintColor: '#fff',
                contentStyle: {
                  backgroundColor: '#3f2f25',
                },
              }}
            >
              <Stack.Screen
                name='MealCategories'
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name='Overview' component={OverviewScreen} />
              <Stack.Screen
                name='MealDetails'
                component={MealDetailsScreen}
                options={{
                  title: 'About the Meal',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        {/* </FavContextProvider> */}
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
