import { useEffect, useState } from "react";
import axios from "axios";

function Crauser() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/getUsers/`)
      .then((res) => {
        const user1 = res.data.find((user) => user.id === 1);
        if (user1?.images?.length > 0) {
          setImages(user1.images);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <div className="w-full bg-[#0f172a] py-10 px-4 flex justify-center">
      <div className="relative max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-72 sm:h-80 md:h-96 object-cover transition-all duration-500"
        />

        {/* Left button */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-lg px-3 py-2 rounded-full shadow-md transition"
        >
          ←
        </button>

        {/* Right button */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-lg px-3 py-2 rounded-full shadow-md transition"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crauser;
