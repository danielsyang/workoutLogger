import React from "react"
import { View } from "react-native"
import { Menu } from "react-native-paper"
import { useDeleteExerciseMutation } from "../../../generated/graphql"

interface ActionMenuProps {
  isVisible: boolean
  onDismiss: () => void
  exerciseId: string
  openUpdateModal: (exerciseId: string) => () => void
}

export const ActionMenu = ({
  isVisible,
  onDismiss,
  exerciseId,
  openUpdateModal,
}: ActionMenuProps) => {
  const [_, deleteExerciseMutation] = useDeleteExerciseMutation()
  const onHandleDelete = async () => {
    await deleteExerciseMutation({ where: { id: exerciseId } })
    onDismiss()
  }
  const onHandleUpdate = () => {
    openUpdateModal(exerciseId)()
    onDismiss()
  }
  return (
    <View style={{ flex: 1 }}>
      <Menu visible={isVisible} onDismiss={onDismiss} anchor={{ x: 50, y: 50 }}>
        <Menu.Item title="Update" onPress={onHandleUpdate} />
        <Menu.Item title="Delete" onPress={onHandleDelete} />
      </Menu>
    </View>
  )
}
