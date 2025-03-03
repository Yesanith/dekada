"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

type Slider = {
  id: number;
  order: number;
  path: string;
  name: string;
  active: boolean;
};

function Uploadslider() {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // State for form inputs
  const [file, setFile] = useState<File | null>(null);
  const [order, setOrder] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  // State for editing inputs
  const [editOrder, setEditOrder] = useState<string>('');
  const [editName, setEditName] = useState<string>('');
  const [editActive, setEditActive] = useState<boolean>(false);

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const response = await axios.get<Slider[]>('/api/sliders');
      setSliders(response.data);
    } catch (error) {
      console.error('Failed to fetch sliders', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('order', order);
    formData.append('name', name);
    formData.append('active', active.toString());

    try {
      await axios.post('/api/sliders/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchSliders();
      resetForm();
    } catch (error) {
      console.error('Failed to upload file', error);
    }
  };

  const handleEdit = (slider: Slider) => {
    setEditingId(slider.id);
    setEditOrder(slider.order.toString());
    setEditName(slider.name);
    setEditActive(slider.active);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;

    try {
      await axios.put(`/api/sliders/${editingId}`, {
        order: editOrder,
        name: editName,
        active: editActive,
      });
      setEditingId(null);
      fetchSliders();
    } catch (error) {
      console.error('Failed to update slider', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/sliders/${id}`);
      fetchSliders();
    } catch (error) {
      console.error('Failed to delete slider', error);
    }
  };

  const resetForm = () => {
    setFile(null);
    setOrder('');
    setName('');
    setActive(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>Resim Yükle</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-10 text-black">
        <input
          className="flex flex-row items-center justify-center rounded text-black bg-gray-300"
          type="file"
          onChange={handleFileChange}
          disabled={editingId !== null}
        />
        <input
          className='p-2 rounded'
          type="text"
          placeholder="Sıralama"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          required
        />
        <input
          className='p-2 rounded'
          type="text"
          placeholder="Dosya ismi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className='text-white'>
          <input
            type="checkbox"
            checked
            onChange={(e) => setActive(e.target.checked)}
          /> Aktif
        </div>
        <button type="submit" className="p-2 mt-2 rounded bg-blue-500 hover:bg-blue-400">
          Yükle
        </button>
      </form>

      <h2 className='text-4xl font-bold text-center m-20'>Resimler</h2>
      <table className="min-w-full divide-y divide-gray-200 text-center">
        <thead>
          <tr>
            <th>Resim</th>
            <th>Sıra</th>
            <th>İsim</th>
            <th>Dosya Yolu</th>
            <th>Aktif Mi?</th>
            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200 text-center" >
          {sliders.map((slider) => (
            <tr key={slider.id}>
              {editingId === slider.id ? (
                <td colSpan={6}>
                  <form onSubmit={handleUpdate} className="grid grid-cols-5 gap-4 text-black">
                    <div>
                      <Image
                        src={`/${slider.path}`}
                        alt={slider.name}
                        width={190}
                        height={100}
                      />
                    </div>
                    <input
                      type="text"
                      value={editOrder}
                      onChange={(e) => setEditOrder(e.target.value)}
                      className="p-2 rounded text-black"
                    />
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="p-2 rounded text-black"
                    />
                    <div className='text-white'>
                      <input
                        type="checkbox"
                        checked={editActive}
                        onChange={(e) => setEditActive(e.target.checked)}
                      /> Aktif
                    </div>
                    <div className="flex space-x-2 justify-center items-center">
                      <button
                        type="submit"
                        className="p-2 rounded bg-green-400 text-black hover:bg-green-100"
                      >
                        Kaydet
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-2 rounded bg-red-400 text-black hover:bg-red-600"
                      >
                        İptal
                      </button>
                    </div>
                  </form>
                </td>
              ) : (
                <>
                  <td><Image src={`/${slider.path}`} alt={slider.name} width={190} height={100} /></td>
                  <td>{slider.order}</td>
                  <td>{slider.name}</td>
                  <td>{slider.path}</td>
                  <td>{slider.active ? 'Evet' : 'Hayır'}</td>
                  <td>
                    <button onClick={() => handleEdit(slider)} className="p-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-600">Düzenle</button>
                    <button onClick={() => handleDelete(slider.id)} className="p-2 rounded-full bg-red-400 text-black ml-5 hover:bg-red-600">Sil</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Uploadslider;
