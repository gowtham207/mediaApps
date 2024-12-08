import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { getContent, postComment, postLike } from "../api/api";

const InfoScreen: React.FC = () => {
  const [content, setContent] = useState({
    image: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Amazing Scenery",
    description: "This is a beautiful landscape with a clear blue sky and mountains in the background.",
  });

  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const params = new URLSearchParams(window.location.search);
  const value = params.get("id");
  const [loader, setLoader] = useState<boolean>(false);

  const handleLike = async() => {
    try{
    setLoader(true)
      if (!liked) {
        const data = await postLike(value)
        setLiked(true);
        setShowHeart(true);
        setShowToast(true);
        setTimeout(() => setShowHeart(false), 1000);
        setTimeout(() => setShowToast(false), 2000);
      }
    }catch(err){
      console.log(err)
    }finally{
      setLoader(false)
    }
  };

  const handleUnlike = async() => {
   try{
    setLoader(true)
    if (liked) {
      const data = await postLike(value)
      setLiked(false);
    }
   }catch(err){
    console.log(err);
   }finally{
    setLoader(false)
   }
  };

  const handleAddComment =async() => {
    try{
      setLoader(true)
      if (newComment.trim() !== "") {
        const data = await postComment(value,newComment.trim())
        setComments(data.comments.map((item: { comment: string; })=>item.comment))
        setNewComment(""); // Reset the input field
      }
    }catch(err){
      console.log(err);
    }finally{
      setLoader(false)
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const data = await getContent(value);
        if (data) {
          setContent({
            image: data?.media.media_file,
            title: data.media.name,
            description: data.media.description,
          });
          setLiked(data.like ? true : false);
          setComments(data.comments.map((item: { comment: string; })=>item.comment))
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoader(false);
      }
    })();
  }, [value]);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-50 relative">
      <Header />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="mb-6">
            <img
              src={content.image}
              alt="Info Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700">{content.title}</h3>
            <p className="text-gray-600 mt-2">{content.description}</p>
          </div>

          <div className="flex items-center mb-6">
            <button
              onClick={handleLike}
              className={`p-3 rounded-lg text-white font-medium transform transition-transform ${
                liked ? "bg-red-500 hover:bg-red-600 scale-110" : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              {liked ? "Liked" : "Like"}
            </button>
            <button
              onClick={handleUnlike}
              className={`ml-4 p-3 rounded-lg text-white font-medium ${
                !liked ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Unlike
            </button>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Comments</h4>

            <div className="flex items-center mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none border-gray-300"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddComment();
                  }
                }}
              />
              <button
                onClick={handleAddComment}
                className="ml-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                Add Comment
              </button>
            </div>

            <div>
              {comments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
              ) : (
                comments.map((comment, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-700">{comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {showHeart && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-red-500 text-6xl animate-ping">❤️</div>
        </div>
      )}

      {showToast && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Post Liked!
        </div>
      )}
    </div>
  );
};

export default InfoScreen;
