import React, { useState, useRef, useEffect } from "react";
import CustomHeader from "../components/Header";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { getContent, postComment, postLike } from "../api/api";
import { useLocation } from "react-router";
import Loader from "../components/Loader";

const InfoScreen: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<any[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [content, setContent] = useState<any>(null); // Store fetched content
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentId = queryParams.get("id"); // Correct query parameter retrieval
  const [loader,setLoader] = useState(false);
  // Fetch content based on the `id` query parameter
  useEffect(() => {
    const fetchData = async () => {
      if (contentId) {
        setLoader(true)
        try {
          const data = await getContent(contentId);

          
          setLikes(data.like ? 1:0)
          setComments(data?.comments);
          setContent(data.media);
        } catch (err) {
          console.error("Error fetching content:", err);
        }
        finally{
          setLoader(false)
        }
      }
    };

    fetchData();
  }, [contentId]);

  // Ref for the input element
  const commentInputRef = useRef<HTMLInputElement | null>(null);

  const handleLike = async(): Promise<void> => {    
    try{
      setLoader(true)
      if(likes >= 1){
        return 
      }
      await postLike(contentId)
      setLikes(1)
  }catch(err){
    console.log(err);
  }
  finally{
    setLoader(false)
  }
  };

  const handleUnlike = (): void => {
    if (likes > 0) {
      setLikes((prevLikes) => prevLikes - 1);
    }
  };

  const handleAddComment = async(): Promise<void> => {
    try{
      setLoader(true)
      if (commentInput.trim()) {
        const data = await postComment(contentId,commentInput.trim())
        setComments(data.comments);
        setCommentInput("");
      }
    }catch(err){
      console.log(err);
    }finally{
      setLoader(false)
    }
     
  };

  const handleDeleteComment = (index: number): void => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const focusOnCommentInput = (): void => {
    commentInputRef.current?.focus();
  };

  if(loader){
    return <Loader />
  }

  return (
    <>
      <CustomHeader />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <img
            src={content?.media_file || "https://via.placeholder.com/800x400"}
            alt={content?.name || "Info"}
            className="w-full h-64 object-cover"
          />

          {/* Content Section */}
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{content?.name || "Beautiful Sunset"}</h1>
            <p className="text-gray-700 mb-6">
              {content?.description ||
                "Witness the mesmerizing beauty of the sunset, where the sky dances with hues of orange, pink, and purple. A moment of peace and tranquility that connects you with nature."}
            </p>

            {/* Like and Unlike Buttons */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={handleLike}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <AiFillLike />
                <p className="ml-2">{likes > 0 && `(${likes})`}</p>
              </button>
              <button
                onClick={handleUnlike}
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                <AiFillDislike />
              </button>
            </div>

            {/* Comment Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Comments</h2>
              {/* Comment Input */}
              <div className="flex items-center space-x-4 mb-4">
                <input
                  ref={commentInputRef}
                  type="text"
                  placeholder="Write a comment..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  onClick={handleAddComment}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Post
                </button>
              </div>

              {/* Comment List */}
              <ul className="space-y-4">
                {comments.map((comment, index) =>{
                  console.log(comment?.comment.toString());
                  
                  return(
                  <li
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow-sm flex justify-between items-center"
                  >
                  
                    <span>{comment.comment.toString()}</span>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <MdDelete />
                    </button>
                  </li>
                )})}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoScreen;
