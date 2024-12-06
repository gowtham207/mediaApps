import React, { useState } from "react";
import Header from "../components/Header";

const InfoScreen: React.FC = () => {
  // State contains everything in a single JSON object
  const [data, setData] = useState({
    image: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Amazing Scenery",
    description: "This is a beautiful landscape with a clear blue sky and mountains in the background.",
    liked: false,
    likeCount: 0,  // Track the like count
    comments: [] as string[], // Initially empty array for comments
  });

  // Handle Like functionality (Only increases like count)
  const handleLike = () => {
    if (!data.liked) {  // If not already liked, increase like count
      setData((prevData) => ({
        ...prevData,
        liked: true,  // Mark as liked
        likeCount: prevData.likeCount + 1,  // Increase like count
      }));
    }
  };

  // Handle Unlike functionality (Just toggles liked state, no decrease in count)
  const handleUnlike = () => {
    if (data.liked) {  // If already liked, toggle to unliked
      setData((prevData) => ({
        ...prevData,
        liked: false,  // Mark as unliked
      }));
    }
  };

  // Handle Add Comment functionality
  const handleAddComment = (newComment: string) => {
    if (newComment.trim() !== "") {
      setData((prevData) => ({
        ...prevData,
        comments: [...prevData.comments, newComment],
      }));
    }
  };

  // Handle Delete Comment functionality
  const handleDeleteComment = (index: number) => {
    setData((prevData) => ({
      ...prevData,
      comments: prevData.comments.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Info Screen</h2>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
          {/* Image, Title, and Description */}
          <div className="mb-6">
            <img
              src={data.image}
              alt="Info Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700">{data.title}</h3>
            <p className="text-gray-600 mt-2">{data.description}</p>
          </div>

          {/* Like/Unlike Button */}
          <div className="flex items-center mb-6">
            <button
              onClick={handleLike}
              className={`p-3 rounded-lg text-white font-medium ${
                data.liked ? "bg-red-500 hover:bg-red-600" : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              Like
            </button>
            <button
              onClick={handleUnlike}
              className={`ml-4 p-3 rounded-lg text-white font-medium ${
                !data.liked ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Unlike
            </button>
            <span className="ml-4 text-gray-600">{data.likeCount} Likes</span>
          </div>

          {/* Comments Section */}
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Comments</h4>

            {/* Add Comment */}
            <div className="flex items-center mb-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none border-gray-300"
                placeholder="Add a comment..."
                onChange={(e) => handleAddComment(e.target.value)}
              />
              <button
                onClick={() => handleAddComment("")} // Trigger adding comment on button click
                className="ml-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                Add Comment
              </button>
            </div>

            {/* Display Comments */}
            <div>
              {data.comments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
              ) : (
                data.comments.map((comment, index) => (
                  <div key={index} className="flex justify-between items-center mb-4">
                    <p className="text-gray-700">{comment}</p>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoScreen;
