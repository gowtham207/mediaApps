// MovieCard.tsx
import React from 'react';

interface MovieCardProps {
  name: string;
  description: string;
  duration: string;
  imageUrl: string;
  onclick:()=>void
}

const MovieCard: React.FC<MovieCardProps> = ({ name, description, duration, imageUrl,onclick }) => {
  return (
    <button className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64" onClick={onclick}>
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Movie Details */}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-sm text-gray-400">{duration}</p>
    </button>
  );
};

export default MovieCard;
