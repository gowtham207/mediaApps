import React, { useCallback, useEffect, useState } from "react";
import AnimatedHeader from "../components/Header";
import { cardType } from "../types/cardType";
import FullPageLoader from "../components/Loader";
import { getMedia } from "../api/api";
import { useNavigate } from "react-router";

const cards = [
  {
    media_id: 1,
    name: "Card 1",
    description: "This is the description for card 1.",
    media_file: "https://via.placeholder.com/300x200.png?text=media_file+1",
  },
  {
    media_id: 2,
    name: "Card 2",
    description: "This is the description for card 2.",
    media_file: "https://via.placeholder.com/300x200.png?text=media_file+2",
  },
  {
    media_id: 3,
    name: "Card 3",
    description: "This is the description for card 3.",
    media_file: "https://via.placeholder.com/300x200.png?text=media_file+3",
  },
  {
    media_id: 4,
    name: "Card 4",
    description: "This is the description for card 4.",
    media_file: "https://via.placeholder.com/300x200.png?text=media_file+4",
  },
];

const HomePage: React.FC = () => {
  const [data,setData] = useState<cardType[]>(cards)
  const [Loader,setLoader] = useState<boolean>(false)
  const nav = useNavigate()
  useEffect(()=>{
    (async()=>{
      try {
        setLoader(true)
        const data =await getMedia()
        setData(data.data)
      } catch (error) {
        console.log(error);
      }finally{
        setLoader(false)
      }
    })()
  },[])

  const cardPress = useCallback((media_id:string|number)=>{
      nav(`/info?id=${media_id}`)
  },[])

  if(Loader){
    return <FullPageLoader />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-pink-300">
   <AnimatedHeader />

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-10">
          Welcome to the Home Page
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((card) => (
            <div
            onClick={()=>{
              cardPress(card.media_id)
            }}
              key={card.media_id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={card.media_file}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-500 mb-2">{card.name}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
