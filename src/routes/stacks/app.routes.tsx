
import { useTheme } from "styled-components/native";
import { HeaderTitle } from "@components";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./tab.routes";
import { Logout } from "@components";

const Stack = createStackNavigator();

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
      }}
    >
      <Stack.Screen
        name="Tabs"
        options={{
          title: '',
          headerLeft: () => <HeaderTitle />,
          headerRight: () => <Logout />
        }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}
