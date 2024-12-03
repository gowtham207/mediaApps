import React, { useState, useRef } from "react";
import CustomHeader from "../components/Header";
import { AiFillLike,AiFillDislike  } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


const InfoScreen: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  // Ref for the input element
  const commentInputRef = useRef<HTMLInputElement | null>(null);

  const handleLike = (): void => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = (): void => {
    if (likes > 0) {
      setLikes((prevLikes) => prevLikes - 1);
    }
  };

  const handleAddComment = (): void => {
    if (commentInput.trim()) {
      setComments((prevComments) => [...prevComments, commentInput.trim()]);
      setCommentInput("");
    }
  };

  const handleDeleteComment = (index: number): void => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const focusOnCommentInput = (): void => {
    commentInputRef.current?.focus();
  };

  return (
    <>
      <CustomHeader />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <img
            src="https://via.placeholder.com/800x400"
            alt="Info"
            className="w-full h-64 object-cover"
          />

          {/* Content Section */}
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Beautiful Sunset</h1>
            <p className="text-gray-700 mb-6">
              Witness the mesmerizing beauty of the sunset, where the sky dances
              with hues of orange, pink, and purple. A moment of peace and
              tranquility that connects you with nature.
            </p>

            {/* Like and Unlike Buttons */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={handleLike}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <AiFillLike />
               <p className="text-sm">  {likes > 0 && `(${likes})`}</p>
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
                {comments.map((comment, index) => (
                  <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <span>{comment}</span>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      {/* <span className="material-icons">delete</span> */}
                      <MdDelete color="#dc2626" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoScreen;
