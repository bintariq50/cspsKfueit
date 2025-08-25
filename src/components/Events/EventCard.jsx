import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/events/${event.id}`)}
      className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors"></div>
      </div>

      {/* Event Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{event.date}</p>
        <p className="text-gray-700 text-sm line-clamp-2">
          {event.description}
        </p>
      </div>
    </div>
  );
}
