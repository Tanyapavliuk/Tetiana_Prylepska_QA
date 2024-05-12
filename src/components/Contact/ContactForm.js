"use client";
import { useState } from "react";
import { Input } from "../base/Input";
import { Textarea } from "../base/Textarea";
import emailjs from '@emailjs/browser';

import { notify } from "@/utils/toast";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY || "";

const defaultFormData = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInput = (inputName, value) => {
    setFormData((state) => ({
      ...state,
      [inputName]: value,
    }));
  };

  const handleTextarea = (name, value) => {
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      formData.name === "" || formData.name.trim() ==='' ||
      formData.email === "" ||
      formData.message === "" || formData.message.trim() === ""
    ) {
      setIsError((state) => ({
        ...state,
        email: true,
        name: true,
        message: true,
      }));
      notify("error", "Fill in the required fields");
      return;
    }
    if (formData.name === "" || formData.name.trim() ===''|| !/^[a-zA-Zа-яА-Я\s]+$/.test(formData.name)) {
      setIsError((state) => ({ ...state, name: true }));
      notify("error","Fill in the required fields");
      return;
    } else {
      setIsError((state) => ({ ...state, name: false }));
    }
    if (formData.message==='' || formData.message.trim() === "") {
      setIsError((state) => ({ ...state, message: true }));
      notify("error","Fill in the required fields");
      return;
    } else {
      setIsError((state) => ({ ...state, message: false }));
    }
    if (
      formData.email === "" || 
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(?!\.ru)\.[a-zA-Z]{2,}$/.test(
        formData.email
      )
    ) {
      setIsError((state) => ({ ...state, email: true }));
      notify("error", "Fill in the required fields");
      return;
    } else {
      setIsError((state) => ({ ...state, email: false }));
    }

    const templateParams = {...formData};
    try {
      await emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
          publicKey: PUBLIC_KEY,
        })
        .then(() => {
          notify("success", "Message sent");
        });
    } catch (error) {
      notify("error", "An error occurred");
    } 
    setFormData(defaultFormData);
  };

  return (
    <div className="w-full">
    <div className="flex flex-col gap-6">
      <Input
        name='name'
        value={formData.name}
        onInput={handleInput}
        isError={isError.name}
        required
      />
      <Input
        name='email'
        type='email'
        value={formData.email}
        isError={isError.email}
        onInput={handleInput}
        required
        label="Email"
      />
      <Textarea
        name='message'
        value={formData.message}
        onInput={handleTextarea}
        isError={isError.message}
      />
    </div>
    <div className="flex justify-end mt-8">
        <button onClick={handleSubmit} className='place-self-end px-8 py-4 text-dark-dark text-base font-semibold bg-green rounded hover:bg-green-dark transition-colors uppercase'>
       send message
      </button>
    </div>
    </div>
  );
};
