"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image"; 
import foodImage from "@images/foods/t.jpeg"

interface food {
  id: number;
  name: string;
  img: StaticImageData;
  description: string;
  type: string;
  price: string;
  tags: string[];
}

function Menu() {
  const [active, setActive] = useState(0);
  // const [tempData, setTempData] = useState<food[]>([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Etli Burrito",
      img: foodImage,
      description:
        "Tortilla Ekmeği İçinde Meksika Pilavı , Fasülye püresi , Cheddar sos , Ekşi Krema, Marul , Salsa Sos , Guacamole Sos , Mısır Salsa ve Barbequa et konularak servis edilir",
      type: "Burrito",
      price: "200₺",
      tags: ["Etli", "Soslu", "Yeşillik"],
    },
    {
      id: 2,
      name: "Etli Burrito Bowl",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Burrito Bowl",
      price: "200₺",
      tags: ["Etli", "Pilav", "Yeşillik", "Salsa Sos"],
    },
    {
      id: 3,
      name: "Etli Taco",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Taco",
      price: "200₺",
      tags: ["Etli", "Pilav", "Yeşillik", "Salsa Sos"],
    },
    {
      id: 4,
      name: "Nachos 1",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Nachos",
      price: "200₺",
      tags: ["Tavuk", "Yeşillik"],
    },
    {
      id: 5,
      name: "Nachos 2",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Nachos",
      price: "200₺",
      tags: ["Tavuk", "Yeşillik"],
    },
    {
      id: 6,
      name: "Nachos 3",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Nachos",
      price: "200₺",
      tags: ["Tavuk", "Yeşillik"],
    },
    {
      id: 7,
      name: "Taco 1",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Taco",
      price: "200₺",
      tags: ["Tavuk", "Yeşillik"],
    },
    {
      id: 8,
      name: "Quesadillas 1",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Quesadillas",
      price: "200₺",
      tags: ["Tavuk", "Yeşillik"],
    },
    {
      id: 9,
      name: "Burrito Bowl 1",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Burrito Bowl",
      price: "200₺",
      tags: ["Tavuk", "Yeşillik"],
    },
    {
      id: 10,
      name: "Chimichangas 1",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Chimichangas",
      price: "200₺",
      tags: ["Etli", "Yeşillik"],
    },
    {
      id: 11,
      name: "BURGERS 1",
      img: foodImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem quasi aliquam fugit mollitia earum minus. Necessitatibus expedita voluptas sed nostrum",
      type: "Burgers",
      price: "200₺",
      tags: ["Etli", "Yeşillik"],
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);


  const filterData = () => {
    switch (active) {
      case 0:
        setFilteredData(data); // Return all data
        break;
      case 1:
        setFilteredData(data.filter((item) => item.type === "Taco"));
        break;
      case 2:
        setFilteredData(data.filter((item) => item.type === "Nachos"));
        break;
      case 3:
        setFilteredData(data.filter((item) => item.type === "Quesadillas"));
        break;
      case 4:
        setFilteredData(data.filter((item) => item.type === "Burrito Bowl"));
        break;
      case 5:
        setFilteredData(data.filter((item) => item.type === "Burrito"));
        break;
      case 6:
        setFilteredData(data.filter((item) => item.type === "Chimichangas"));
        break;
      case 7:
        setFilteredData(data.filter((item) => item.type === "Burgers"));
        break;
      default:
        setFilteredData(data);
    }
  };

  useEffect(() => {
    filterData(); // Call filterData when active changes
  }, [active]);

  return (
    <div className="mt-20  bg-[#19191a] p-5 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl lg:text-4xl tracking-wide uppercase text-primary mb-5">
          Menü
        </div>
        <div className="w-full flex flex-row flex-wrap gap-2 lg:gap-5 justify-center">
          <div
            onClick={() => setActive(0)}
            className={
              active === 0
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Hepsi
          </div>
          <div
            onClick={() => setActive(1)}
            className={
              active === 1
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Tacos
          </div>
          <div
            onClick={() => setActive(2)}
            className={
              active === 2
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Nachos
          </div>
          <div
            onClick={() => setActive(3)}
            className={
              active === 3
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Quesadillas
          </div>
          <div
            onClick={() => setActive(4)}
            className={
              active === 4
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Burrito Bowls
          </div>
          <div
            onClick={() => setActive(5)}
            className={
              active === 5
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Burritos
          </div>
          <div
            onClick={() => setActive(6)}
            className={
              active === 6
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Chimichangas
          </div>
          <div
            onClick={() => setActive(7)}
            className={
              active === 7
                ? "flex items-center rounded-lg p-3 uppercase border-2 bg-secondary text-sm"
                : "flex items-center rounded-lg p-3 uppercase border-2 hover:bg-secondary cursor-pointer text-sm"
            }
          >
            Burgers
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
          {filteredData.map((item, index) => {
            return (
              <div className="flex flex-col gap-5 border-2 p-5 rounded-lg border-secondary justify-center items-center  lg:w-full" key={index}>
                <div className="text-xl uppercase text-center font-black">
                  {item.name}
                </div>
                <div className="flex object-cover w-full">
                  <Image
                    src={item.img} 
                    alt={item.name}
                    className="rounded-lg w-full h-full"
                  />
                </div>
                <div className="text-sm text-justify w-full">{item.description}</div>
                <div className="flex flex-row flex-wrap gap-2 w-full h-full"> 
                  <div className="flex items-center rounded-lg p-2 border-2 bg-red-800 font-bold">
                    {item.type}
                  </div>
                  {item.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex items-center rounded-lg p-2 border-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
