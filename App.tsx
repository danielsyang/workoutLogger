import { Provider } from "urql"
import { createClient } from "@urql/core"
import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { FAB, Provider as PaperProvider } from "react-native-paper"
import { WorkoutModal } from "./components/workout/workoutForm"
import { WorkoutHeader } from "./components/workoutHeader"
import { WorkoutList } from "./components/workout/list"

const client = createClient({ url: "http://localhost:3000/graphql" })

const App = () => {
  const { fab } = styles
  const [isModalOpen, setModal] = useState(false)
  return (
    <Provider value={client}>
      <PaperProvider>
        <WorkoutHeader />
        <WorkoutList />
        <WorkoutModal
          isVisible={isModalOpen}
          onDismiss={() => setModal(false)}
        />
        <FAB
          style={fab}
          icon="plus"
          onPress={() => {
            setModal(true)
          }}
        />
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default App
