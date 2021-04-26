import React from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { StyleSheet } from "react-native"
import {
  Modal,
  Portal,
  Title,
  TextInput,
  Button,
  Text,
  Colors,
} from "react-native-paper"
import { schema, workoutForm } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useCreateWorkoutMutation } from "../../generated/graphql"

interface WorkoutModalProps {
  isVisible: boolean
  onDismiss: () => void
}

export const WorkoutModal = ({ isVisible, onDismiss }: WorkoutModalProps) => {
  const { containerStyle, title, buttonStyle, errorMessageStyle } = styles
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<workoutForm>({ resolver: yupResolver(schema) })
  const [data, mutate] = useCreateWorkoutMutation()

  const onSubmit: SubmitHandler<workoutForm> = async (data) => {
    await mutate({ data })
    onDismiss()
  }

  console.log("aa")

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={onDismiss}
        contentContainerStyle={containerStyle}
      >
        <Title style={title}>Create a new workout</Title>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Name*"
              mode="outlined"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.name}
            />
          )}
        />
        {errors.name && <Text style={errorMessageStyle}>This is required</Text>}

        <Button
          style={buttonStyle}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          Create
        </Button>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginBottom: 20,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: "auto",
  },
  errorMessageStyle: {
    marginTop: 5,
    color: Colors.red900,
  },
})
