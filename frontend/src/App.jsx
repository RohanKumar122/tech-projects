import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import calender from "./assets/images/calender.png";
import "./App.css";
import Crauser from "./components/Crauser";

// require('dotenv').config();
// const backend_API=process.env.BACKEND_API;

function App() {
  const [users, setUsers] = useState([]);
  const [imageIndexes, setImageIndexes] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/getUsers/`)
      .then((res) => {
        setUsers(res.data);
        // Initialize image index for each user
        const initialIndexes = {};
        res.data.forEach((user) => {
          initialIndexes[user.id] = 0;
        });
        setImageIndexes(initialIndexes);
      })
      .catch((err) => console.log(err));
  }, []);

const prevImage = (id, imagesLength) => {
  setImageIndexes((prev) => ({
    ...prev,
    [id]: prev[id] === 0 ? imagesLength - 1 : prev[id] - 1,
  }));
};

const nextImage = (id, imagesLength) => {
  setImageIndexes((prev) => ({
    ...prev,
    [id]: prev[id] === imagesLength - 1 ? 0 : prev[id] + 1,
  }));
};


  return (
    <div className="w-full min-h-screen bg-[#0f172a] font-mono px-4 py-6">
      <div className="flex flex-wrap justify-center gap-6">
      <Crauser/>
        {users.map((user) => {
          const index = imageIndexes[user.id] || 0;
          return (
            <div
              key={user.id}
              className="bg-[#1e293b] text-white rounded-2xl shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/4 p-4"
            >
              <div className="flex flex-col items-center">
                {user.images && user.images.length > 0 && (
                  <>
                    <img
                      src={user.images[index]}
                      alt={`img-${index}`}
                      className="rounded-xl w-full h-52 object-cover mb-3 border-2 border-gray-700 hover:border-green-500 transition-all"
                    />
                    <div className="flex gap-4">
                      <button
                        onClick={() => prevImage(user.id, user.images.length)}
                        className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => nextImage(user.id, user.images.length)}
                        className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                      >
                        →
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4">
                <h2 className="font-bold text-xl mb-2">{user.heading}</h2>
                <p className="text-gray-300 mb-3">
                  {user.para.length > 110
                    ? `${user.para.substring(0, 110)}...`
                    : user.para}
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <img src={calender} className="w-4 h-4 mr-2" alt="calendar" />
                  {new Date(user.publishedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).replace(/ /g, "-")}
                </div>
                <hr className="border-gray-600 mb-3" />
                <div className="flex justify-end">
                  <Link to="/pending">
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
