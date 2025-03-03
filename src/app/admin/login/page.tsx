"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['token']);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      // console.log(response)
      setCookie('token', response.data.token, { path: '/' });
      toast.success(response.data.message);
      router.push('/admin/dashboard');
    } catch (error: any) {
      toast.error('Giriş hatalı: ' + error.message);
    }
  };

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/protected');
        if (response.status === 200) {
          router.push('/admin/dashboard');
        }
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          toast.error('Oturum güvenli şekilde kapatıldı.');
        } else if (error.response && error.response.status === 403) {
          toast.error('Zaten giriş yapmış durumdasın.');
          router.push('/admin/dashboard');
        }
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded-md">
        <h2 className="mb-4 text-2xl font-bold text-center text-black">Admin Giriş</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Kullanıcı Adı</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
