"use client";
import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  async function handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await axios.post("/api/sendmail", data);

      if (response.status === 200) {
        toast.success("Mesajınız iletildi!");
        form.reset();
      } else {
        toast.error("Mail gönderilirken hata oluştu!");
      }
    } catch (error) {
      toast.error("Mail gönderilirken hata oluştu.");
      console.error("Mail gönderilirken hata oluştu:", error);
    }
  }

  return (
    <div>
      <div className="bg-[#313131] mt-20 rounded-lg py-5">
        <div className="flex flex-col justify-center items-center ">
          <div className="font-bold text-2xl lg:text-4xl tracking-wide uppercase text-primary mb-5">
            İLETİŞİM
          </div>
        </div>
        <form
          className="flex flex-col items-center gap-3 text-black w-full"
          onSubmit={handleClick}
        >
          <div className="flex flex-col gap-5 w-[50%]">
            <label className="text-white text-lg text-left">Ad</label>
            <input
              type="text"
              name="name"
              className="border-2 border-gray-600 rounded-lg px-5 py-2"
            />
            <label className="text-white text-lg">Soyad</label>
            <input
              name="surname"
              type="text"
              className="border-2 border-gray-600 rounded-lg px-5 py-2"
            />
            <label className="text-white text-lg">E-posta</label>
            <input
              type="text"
              name="email"
              className="border-2 border-gray-600 rounded-lg px-5 py-2"
            />
            <label className="text-white text-lg">Konu</label>
            <input
              type="text"
              name="subject"
              className="border-2 border-gray-600 rounded-lg px-5 py-2"
            />
            <label className="text-white text-lg">Açıklama</label>
            <textarea name="message" className="w-full rounded-lg px-5 py-2"></textarea>

            <button type="submit" className="text-white bg-primary rounded-lg px-5 py-2 hover:bg-secondary">
              Gönder
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
