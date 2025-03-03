"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [aboutText, setAboutText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutText = async () => {
      try {
        const response = await axios.get('/api/about');
        setAboutText(response.data.text);
      } catch (error) {
        console.log("something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutText();
  }, []);

  return (
    <div className="bg-[#19191a] mt-20 rounded-lg py-5">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl lg:text-4xl tracking-wide uppercase text-primary mb-5">
          Hakkımızda
        </div>
      </div>
      <div className="bgimage flex w-full">
        <div className="txt-stroke-primary text-xs lg:text-lg text-justify px-8 lg:px-4 py-2 font-semibold">
          {isLoading ? (
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: aboutText }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
