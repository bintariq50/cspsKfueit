import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import eventsData from "./eventData";

export default function EventDetail() {
    const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!event) return <p className="text-center text-red-500">Event not found</p>;

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );

  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-500 mb-4">{event.date}</p>
      <p className="mb-6">{event.description}</p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {event.images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`${event.title} ${idx + 1}`}
            loading="lazy"
            className="rounded-lg shadow-md object-cover cursor-pointer hover:opacity-80 transition"
            onClick={() => openModal(idx)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          />
        ))}
      </div>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={event.images[selectedIndex]}
              alt="Gallery"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
