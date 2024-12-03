// Home.tsx
import React from 'react';
import Header from '../components/CustomHeader';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router';


const Home: React.FC = () => {
  // Dummy data for movies
  const nav = useNavigate()
  const movies = [
    {
        id:1,
      name: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      duration: '148 min',
      imageUrl: 'https://image.tmdb.org/t/p/w500/4sDBY94rW9HYO9PzOS42g36gqgI.jpg', // Example image
    },
    {id:2,
      name: 'The Dark Knight',
      description: 'Batman faces off against the Joker in Gotham.',
      duration: '152 min',
      imageUrl: 'https://image.tmdb.org/t/p/w500/qJr71Wm66zWMC0DPvC5d0uIK7pP.jpg', // Example image
    },
    {id:3,
      name: 'Interstellar',
      description: 'A group of explorers venture beyond our galaxy.',
      duration: '169 min',
      imageUrl: 'https://image.tmdb.org/t/p/w500/xXdrQCB82a9lBpePvscxTosxW5O.jpg', // Example image
    },
    {id:4,
      name: 'The Matrix',
      description: 'A hacker discovers a simulated reality.',
      duration: '136 min',
      imageUrl: 'https://image.tmdb.org/t/p/w500/xECduFlOH7Hhpew7ls3aAH48lOp.jpg', // Example image
    },
    // Add more movies as needed
  ];

  const clickMoveCard = (id:string) =>{
    nav(`/info?id=${id}`)
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard
          onclick={()=>{
            clickMoveCard(movie.id.toString())            
          }}
            key={index}
            name={movie.name}
            description={movie.description}
            duration={movie.duration}
            imageUrl={movie.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
