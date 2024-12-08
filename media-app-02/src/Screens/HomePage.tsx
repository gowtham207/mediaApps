// Home.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/CustomHeader';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router';
import Loader from '../components/Loader';
import { getMedia } from '../api/api';


const Home: React.FC = () => {
  // Dummy data for movies
  const [loading,setLoading] = useState(false)

  const nav = useNavigate()

  useEffect(()=>{
    setLoading(true)
    getMedia().then(res=>{
      setLoading(false)
      setMovies(res.data)
    })
  },[])
  const [movies,setMovies] =useState ([
    {
        media_id:1,
      name: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      duration: '148 min',
      media_file: 'https://image.tmdb.org/t/p/w500/4sDBY94rW9HYO9PzOS42g36gqgI.jpg', // Example image
    },
    {media_id:2,
      name: 'The Dark Knight',
      description: 'Batman faces off against the Joker in Gotham.',
      duration: '152 min',
      media_file: 'https://image.tmdb.org/t/p/w500/qJr71Wm66zWMC0DPvC5d0uIK7pP.jpg', // Example image
    },
    {media_id:3,
      name: 'Interstellar',
      description: 'A group of explorers venture beyond our galaxy.',
      duration: '169 min',
      media_file: 'https://image.tmdb.org/t/p/w500/xXdrQCB82a9lBpePvscxTosxW5O.jpg', // Example image
    },
    {media_id:4,
      name: 'The Matrix',
      description: 'A hacker discovers a simulated reality.',
      duration: '136 min',
      media_file: 'https://image.tmdb.org/t/p/w500/xECduFlOH7Hhpew7ls3aAH48lOp.jpg', // Example image
    },
  ]);

  const clickMoveCard = (media_id:string) =>{
    nav(`/info?id=${media_id}`)
  }


  if(loading){
    return <Loader />
  }


  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto p-6 grmedia_id grmedia_id-cols-1 sm:grmedia_id-cols-2 md:grmedia_id-cols-3 lg:grmedia_id-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard
          onclick={()=>{
            clickMoveCard(movie.media_id.toString())            
          }}
            key={index}
            name={movie.name}
            description={movie.description}
            duration={movie.duration}
            imageUrl={movie.media_file}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
