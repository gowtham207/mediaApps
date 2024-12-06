import React, { useCallback, useEffect, useState } from "react";
import CustomHeader from "../components/Header";
import { useNavigate } from "react-router";
import { getMedia } from "../api/api";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const navigate = useNavigate()
  const [Loading,setLoading] = useState(false)
  const [cards,setCards] = useState([
    {
      media_id: 1,
      media_file: "https://via.placeholder.com/300",
      title: "Card Title 1",
      description: "This is a short description for card 1.",
      time: "2h 30m",
    },
    {
      media_id: 2,
      media_file: "https://via.placeholder.com/300",
      title: "Card Title 2",
      description: "This is a short description for card 2.",
      time: "1h 45m",
    },
    {
      media_id: 3,
      media_file: "https://via.placeholder.com/300",
      title: "Card Title 3",
      description: "This is a short description for card 3.",
      time: "3h 10m",
    },
    {
      media_id: 4,
      media_file: "https://via.placeholder.com/300",
      title: "Card Title 4",
      description: "This is a short description for card 4.",
      time: "2h 15m",
    },
  ])
  useEffect(()=>{
    setLoading(true)
    getMedia().then(res=>{
      setLoading(false)
      setCards(res.data)
    }).catch(err=>{
      console.error(err);
      setLoading(false)
      
    })
  },[])

  const onPress = useCallback((id:string)=>{
    navigate(`/info?id=${id}`)
  },[navigate])

  if(Loading){
    return  <Loader />
  }
  return (
    <>
    <CustomHeader />
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Welcome to Our Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <button
            type="button"
            onClick={()=>{
              onPress(card.media_id.toString());
            }}
            key={card.media_id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.media_file}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="text-gray-500 text-sm flex items-center">
                <span className="material-icons mr-2">schedule</span>
                {card.time}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomeScreen;
