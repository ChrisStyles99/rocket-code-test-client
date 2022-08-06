import { useState } from "react";
import { toast } from "react-toastify";
import ChatConfirmation from "../components/ChatConfirmation";
import ChatFormBirthday from "../components/ChatFormBirthday";
import ChatFormContact from "../components/ChatFormContact";
import ChatFormName from "../components/ChatFormName";
import ChatResponse from "../components/ChatResponse";
import { useForm } from "./useForm";

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export const useMessages = () => {
  const [messages, setMessages] = useState([<ChatFormName />]);
  const { formData, handleInputChange } = useForm({firstName: '', middleName: '', fatherLastName: '', motherLastName: '', 
        day: '', month: '', year: '', email: '', phone: ''});

  const nextForm = () => {
    console.log(formData);
    if(messages.length === 1) {
      setMessages([...messages, 
      <ChatResponse message={`${formData.firstName} ${formData.middleName} ${formData.fatherLastName} ${formData.motherLastName}`} />,
      <ChatFormBirthday />
    ])
    } else if(messages.length === 3) {
      setMessages([...messages,
      <ChatResponse message={`${formData.day} ${months[parseInt(formData.month) - 1]} ${formData.year}`} />,
      <ChatFormContact />])
    } else if(messages.length === 5) {
      setMessages([...messages,
        <ChatResponse message={`Correo electronico ${formData.email}
        Telefono celular: ${formData.phone}`} />,
        <ChatConfirmation />
      ])
    }
  }

  const start = () => {
    if(messages.length >= 8 || messages.length <= 6) return;
    setMessages([...messages,
      <ChatResponse message={`Fecha de nacimiento: ${formData.day} ${months[parseInt(formData.month) - 1]} ${formData.year}
      Correo electronico: ${formData.email}
      Telefono celular: ${formData.phone}
      Nombre: ${formData.firstName} ${formData.middleName} ${formData.fatherLastName} ${formData.motherLastName}
    `} />]);

    fetch('http://localhost:5000/newUser', {
      body: JSON.stringify(formData),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
      toast(data.message, {
        autoClose: true,
        type: "success",
        position: "bottom-center"
      });
    });
  }

  return {
    messages, handleInputChange, nextForm, start
  }
}