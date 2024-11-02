import * as Yup from 'yup'

export const validationSchema = Yup.object({
  name: Yup.string().min(3).required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  subject: Yup.string().min(3).required('The subject is required'),
  message: Yup.string().min(10).required('Message is required'),
})
