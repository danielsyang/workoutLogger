import React from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { StyleSheet, View } from "react-native"
import {
  Modal,
  Portal,
  Title,
  TextInput,
  Button,
  Text,
  Colors,
} from "react-native-paper"
import { schema, exerciseCreationForm } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useCreateExerciseMutation } from "../../../generated/graphql"

interface ExerciseModalProps {
  isVisible: boolean
  onDismiss: () => void
  workoutId: string
}

export const ExerciseModal = ({
  isVisible,
  onDismiss,
  workoutId,
}: ExerciseModalProps) => {
  const {
    containerStyle,
    title,
    buttonStyle,
    errorMessageStyle,
    halfInputStyle,
    setsContainer,
  } = styles
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<exerciseCreationForm>({ resolver: yupResolver(schema) })
  const [_, mutate] = useCreateExerciseMutation()

  const onSubmit: SubmitHandler<exerciseCreationForm> = async (data) => {
    const { name, reps, sets } = data
    await mutate({
      data: {
        name,
        suggestion: `${sets}x${reps}`,
        workout: { connect: { id: workoutId } },
      },
    })
    onDismiss()
  }

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={onDismiss}
        contentContainerStyle={containerStyle}
      >
        <Title style={title}>Add an exercise</Title>
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
        <View style={setsContainer}>
          <View style={halfInputStyle}>
            <Controller
              name="sets"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Sets*"
                  mode="outlined"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value?.toString()}
                  error={!!errors.sets}
                  keyboardType="decimal-pad"
                />
              )}
            />
            {errors.sets && (
              <Text style={errorMessageStyle}>This is required</Text>
            )}
          </View>
          <View style={halfInputStyle}>
            <Controller
              name="reps"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Reps*"
                  mode="outlined"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value?.toString()}
                  error={!!errors.reps}
                  keyboardType="decimal-pad"
                />
              )}
            />
            {errors.reps && (
              <Text style={errorMessageStyle}>This is required</Text>
            )}
          </View>
        </View>

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
  setsContainer: { flexDirection: "row", justifyContent: "space-between" },
  halfInputStyle: {
    width: "45%",
  },
})
