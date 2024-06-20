
import { useTheme } from "styled-components/native";
import { AllMovies, FavoriteMovies } from "@screens";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Screens } from "./types";
import { TabBarLabel, Typography } from "@components";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator();

export function TabNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => (
          <TabBarLabel
            routeName={route.name as Screens}
            focused={focused}
            color={color}
          />
        ),

        tabBarActiveTintColor: colors['primary-01'],
        tabBarInactiveTintColor: colors['grayScale-05'],
        tabBarIndicatorStyle: { backgroundColor: colors['primary-01'] },
        tabBarStyle: { backgroundColor: colors["neutral-01"], justifyContent: 'center', height: 75 },
        tabBarTestID: `TAB-LABEL-${route.name}-BTN`

      })}>
      <Tab.Screen name={Screens.AllMovies} component={AllMovies} />
      <Tab.Screen name={Screens.FavoriteMovies} component={FavoriteMovies} />
    </Tab.Navigator >
  );
}

export function AppRoutesStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors["neutral-01"],
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerLeftContainerStyle: { marginLeft: 20 },
        headerRightContainerStyle: { marginRight: 20 },
      }}
    >
      <Stack.Screen
        name="Tabs"
        options={{
          title: '',
          headerLeft: () => (
            <Typography variant="title-02">
              BRQ Movies
            </Typography>
          )

        }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}
