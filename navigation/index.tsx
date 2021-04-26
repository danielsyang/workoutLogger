import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { RootNavigator } from "./rootNavigation"

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
