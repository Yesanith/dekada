"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AboutAdmin() {
  const [aboutText, setAboutText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutText = async () => {
      try {
        const response = await axios.get('/api/about');
        setAboutText(response.data.text);
      } catch (error) {
        toast.error('Yazı verisi çekilemedi!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutText();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.post('/api/about', { aboutText });
      toast.success('Hakkımızda yazısı başarı ile güncellendi!');
    } catch (error) {
      toast.error('Yazı güncellenirken hata oluştu!');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <ToastContainer />
      <h1 className='uppercase text-xl font-bold'>Hakkımızda yazısı</h1>
      <div className='text-sm p-2 text-lightBlue-300'>Bu kısım HTML desteklemektedir.</div>
      <textarea
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
        rows={20}
        cols={70}
        className='text-black p-2 rounded'
      />
      <button onClick={handleUpdate} className="p-2 mt-2 rounded bg-blue-500 hover:bg-blue-400">
        Güncelle
      </button>
    </div>
  );
}

export default AboutAdmin;
