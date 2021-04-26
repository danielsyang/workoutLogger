import * as yup from "yup"

export const schema = yup.object().shape({
  name: yup.string().required(),
  reps: yup.number().required(),
  sets: yup.number().required(),
})

export interface exerciseCreationForm {
  name: string
  sets: number
  reps: number
}
