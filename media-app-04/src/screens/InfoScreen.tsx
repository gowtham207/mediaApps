import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import FullPageLoader from "../components/Loader";
import { useLocation } from "react-router";
import { getContent, postComment, postLike } from "../api/api";
import AnimatedHeader from "../components/Header";

type MediaData = {
  media_id: string;
  description: string;
  name: string;
  media_file: string;
};

const InfoScreen: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]); // State to store multiple comments
  const [Loader, setLoader] = useState<boolean>(false);
  const [content,setContent] = useState<MediaData>()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); 

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const data = await getContent(id);
        setContent(data.media)
        setComments(data.comments.map((item:{comment:string})=>item.comment))
        setIsLiked(data.like?true:false)
        // You can set the fetched content here (e.g., title, description)
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    })();
  }, [id]);

  const handleLike = async() => {
    try {
      setLoader(true)
      const data = await postLike(id)
      setIsLiked(!isLiked); 
    } catch (error) {
      console.log(error);
    }finally{
      setLoader(false)
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = async() => {
   try {
    setLoader(true)
    if (comment.trim()) {
      const data = await postComment(id,comment.trim())
      setComments(data.comments.map((item:{comment:string})=>item.comment))
      setComment(""); 
    }
   } catch (error) {
    console.log(error);
   }finally{
    setLoader(false)
   }
  };

  if (Loader) {
    return <FullPageLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-pink-300">
     <AnimatedHeader />

      <main className="container mx-auto px-6 py-12">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6">
          <img
            src={content?.media_file}
            alt="Info"
            className="w-full h-64 object-cover mb-6"
          />
          <h2 className="text-3xl font-bold text-pink-500 mb-4">{content?.name}</h2>
          <p className="text-gray-300 mb-6">
            <strong>Description: </strong>
            {content?.description}
          </p>

          <div className="flex items-center justify-start space-x-6">
            <button
              onClick={handleLike}
              className="flex items-center text-pink-500 hover:text-pink-600 transition"
            >
              {isLiked ? (
                <FaThumbsUp className="w-6 h-6 mr-2" />
              ) : (
                <FaRegThumbsUp className="w-6 h-6 mr-2" />
              )}
              <span>{isLiked ? "DisLike" : "Like"}</span>
            </button>
          </div>

          {/* Comment input field */}
          <div className="mt-6">
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              className="w-full p-2 rounded bg-gray-700 text-pink-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Write a comment..."
            />
            <button
              onClick={handleAddComment}
              className="mt-2 w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition"
            >
              Add Comment
            </button>
          </div>

          {/* Display comments */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-pink-500">Comments:</h3>
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="text-gray-300">
                  <p>{comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoScreen;
