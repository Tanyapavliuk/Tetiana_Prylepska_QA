"use client";
import { Input } from "../base/Input";
import { Textarea } from "../base/Textarea";
import { useFormik } from "formik";
import { contactFormSchema } from "./validation";
import { notify } from "@/utils/toast";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY || "";

const defaultFormData = {
  name: "",
  email: "",
  message: "",
};

export const ContactFormFormic = () => {
  const formik = useFormik({
    initialValues: defaultFormData,
    validationSchema: contactFormSchema,
    onSubmit: async (values, { resetForm }) => {
      const templateParams = { ...values };
      try {
        await emailjs
          .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
            publicKey: PUBLIC_KEY,
          })
          .then(() => {
            notify("success", "The letter sent successfully");
            resetForm();
          });
      } catch (error) {
        notify("error", "An error occurred");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='w-full'>
      <div className='flex flex-col gap-6'>
        <Input
          label='Name'
          type='text'
          id='name'
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
        />
        <Input
          label='Email'
          type='email'
          id='email'
          error={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps("email")}
        />
        <Textarea
          name='message'
          id='message'
          error={formik.touched.message && formik.errors.message}
          {...formik.getFieldProps("message")}
        />
      </div>
      <div className='flex justify-end mt-8'>
        <button
          disabled={formik.isSubmitting}
          type='submit'
          className='place-self-end px-8 py-4 text-dark-dark text-base font-semibold bg-green rounded hover:bg-green-dark transition-colors uppercase'
        >
          {formik.isSubmitting ? "Loading..." : "Send message"}
        </button>
      </div>
    </form>
  );
};
