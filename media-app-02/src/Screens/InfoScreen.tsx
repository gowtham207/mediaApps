import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Importing icons from react-icons
import Header from '../components/CustomHeader';
import Loader from '../components/Loader';
import { useLocation } from 'react-router';
import { getContent } from '../api/api';

const InfoScreen: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<{ id: number, text: string }[]>([]);
  const [loader,setLoader] = useState(false)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentId = queryParams.get("id"); // Correct query parameter retrieval
  const [content,setContent] = useState();
  useEffect(()=>{
    (async()=>{
      setLoader(true)
      try{
        const data = await getContent(contentId)
        console.log(data);
        
      }catch(err){
        console.log(err)
      }finally{
        setLoader(false)
      }
    })()
  },[])

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { id: Date.now(), text: comment }]);
      setComment('');
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    // Dislike decreases likes if there are any, but not below 0
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id)); // Remove comment by ID
  };

  if(loader){
    return <Loader />
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header /> {/* Include the Header component */}

      <div className="max-w-screen-xl mx-auto p-6">
        {/* Movie Info Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-white">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <img
              src="https://via.placeholder.com/400"  // Replace with actual movie image URL
              alt="Movie Poster"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="sm:w-2/3 sm:pl-6">
            <h1 className="text-3xl font-bold mb-4">Movie Title</h1>
            <p className="text-lg mb-6">
              This is a brief description of the movie. It gives an overview of the plot and main points.
              The description will give users a better understanding of what the movie is about.
            </p>

            {/* Like/Dislike Buttons */}
            <div className="flex items-center mb-6">
              <button
                onClick={handleLike}
                className="bg-green-500 text-white py-2 px-6 rounded-lg mr-4 hover:bg-green-600 transition duration-300 flex items-center"
              >
                <FaThumbsUp className="mr-2" /> Like ({likes})
              </button>
              <button
                onClick={handleDislike}
                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 flex items-center"
              >
                <FaThumbsDown className="mr-2" /> Dislike
              </button>
            </div>

            {/* Comment Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              <form onSubmit={handleAddComment} className="mb-6">
                <textarea
                  value={comment}
                  onChange={handleCommentChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Leave a comment..."
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105 mt-4"
                >
                  Add Comment
                </button>
              </form>

              {/* Display Comments */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
                    <p>{comment.text}</p>
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoScreen;
