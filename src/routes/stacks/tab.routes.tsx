import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabBarLabel } from "@components";
import { Screens } from "@routes/types";
import { useTheme } from "styled-components";
import { AllMovies, FavoriteMovies } from "@modules/movies";

const Tab = createMaterialTopTabNavigator()

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
