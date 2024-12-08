import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { getMedia } from '../api/api';
import { useNavigate } from 'react-router';

interface CardData {
  media_id: string;
  description: string;
  name: string;
  media_file: string;
}

const Home: React.FC = () => {
  const [loader,setLoader] = useState(false)
  const nav = useNavigate()
  // State for the card data
  const [cardData, setCardData] = useState<CardData[]>([
    {
      media_id: "27dacdbb-e699-4197-9242-7c7fbb1c7d42",
      description: "test desc",
      name: "test name",
      media_file: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      media_id: "42c3b8b7-59ff-4597-b09e-6068de5fd938",
      description: "Another test desc",
      name: "Another test name",
      media_file: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
    }
    // You can add more items here
  ]);

  useEffect(()=>{
    setLoader(true)
    getMedia().then(res=>{
      setCardData(res.data)
      setLoader(false)
    })

  },[])

  const viewButton = (id:string) =>{
    nav(`/info?id=${id}`)
  }

  if(loader){
    return <Loader />
  }

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.media_id}
              onClick={()=>{
                viewButton(card.media_id)
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fade-in"
            >
              <img
                src={card.media_file}
                alt={card.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">{card.name}</h3>
                <p className="text-gray-500 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
