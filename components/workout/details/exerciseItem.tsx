import React, { useState } from "react"
import { View } from "react-native"
import { IconButton, List, Menu } from "react-native-paper"
import { Exercise, useDeleteExerciseMutation } from "../../../generated/graphql"

interface ExerciseItemProps {
  exercise: Pick<Exercise, "id" | "name" | "reps" | "sets">
  openUpdateModal: (exerciseId: string) => () => void
}

export const ExerciseItem = ({
  exercise,
  openUpdateModal,
}: ExerciseItemProps) => {
  const [menuVisible, setMenuVisiblity] = useState(false)
  const { reps, id, name, sets } = exercise
  const [_, deleteExerciseMutation] = useDeleteExerciseMutation()

  const onHandleDelete = async () => {
    await deleteExerciseMutation({ where: { id } })
    setMenuVisiblity(false)
  }

  const onHandleUpdate = async () => {
    openUpdateModal(id)()
    setMenuVisiblity(false)
  }

  return (
    <>
      <List.Item
        title={name}
        key={id}
        description={`${sets} sets of ${reps}`}
        left={() => <List.Icon icon="dumbbell" />}
        right={() => (
          <View style={{ flex: 1 }}>
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisiblity(false)}
              anchor={
                <IconButton
                  style={{ marginLeft: "auto" }}
                  icon="dots-horizontal"
                  onPress={() => setMenuVisiblity(true)}
                />
              }
            >
              <Menu.Item title="Update" onPress={onHandleUpdate} />
              <Menu.Item title="Delete" onPress={onHandleDelete} />
            </Menu>
          </View>
        )}
      />
    </>
  )
}
