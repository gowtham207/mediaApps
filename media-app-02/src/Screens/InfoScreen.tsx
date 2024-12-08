import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Importing icons from react-icons
import Header from '../components/CustomHeader';
import Loader from '../components/Loader';
import { useLocation } from 'react-router';
import { getContent, postComment, postLike } from '../api/api';

export type data ={
  "media_id": string
  "description": string
  "name": string
  "media_file":string
}


const InfoScreen: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<{ comment: string, id: string }[]>([]);
  const [loader,setLoader] = useState(false)
  const [content,setContent] = useState<data | null>(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentId = queryParams.get("id"); // Correct query parameter retrieval

  useEffect(()=>{
    (async()=>{
      setLoader(true)
      try{
        const data = await getContent(contentId)
        console.log(data);
        setContent(data.media)
        setLikes(data.like ? 1:0)
        setComments(data.comments)
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

  const handleAddComment = async(e: React.FormEvent) => {
   try{
    setLoader(true)
     e.preventDefault();
    if(comment.trim()){
      const data = await postComment(contentId,comment.trim())
      setComment("")
      setComments(data.comments)
    }
   }catch(err){
    console.log(err);
   }finally{
    setLoader(false)
   }
  };

  const handleLike = async():Promise<void>  => {
    try{
      if(likes ==0){
        setLoader(true)
        const data = await postLike(contentId)
        setLikes(1)
      }
    }catch(err){
      console.log(err);
    }finally{
      setLoader(false)
    }
  };

  const handleDislike = async():Promise<void> => {
    // Dislike decreases likes if there are any, but not below 0
   try{
    if (likes > 0) {
      setLoader(true)
      const data = await postLike(contentId)
      setLikes(likes - 1);
    }
   }catch(err){
    console.log(err);
   }finally{
    setLoader(false)
   }
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
              src={content?.media_file?content.media_file:""} // Replace with actual movie image URL
              alt="Movie Poster"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="sm:w-2/3 sm:pl-6">
            <h1 className="text-3xl font-bold mb-4">{content?.name}</h1>
            <p className="text-lg mb-6">
             {content?.description}
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
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
                    <p>{comment.comment}</p>
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
