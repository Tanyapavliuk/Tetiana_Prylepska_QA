import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Name is too loong")
      .required("Name is required"),
    email: Yup.string().nullable().email("Email must be valid").required("Email is required"),
    message:Yup.string().min(10, "Message is too short").max(500, "Message is too loong").required("Message is required"), 
  })

