// src/components/Member.jsx
import { Link } from "react-router-dom";
import { Linkedin, Github } from "lucide-react";

export default function Member({ member }) {
  const img = "members/avatar.jpg"
  return (
    <Link to={`/members/${member.id}`}>
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer text-center">
        <img
          src={member.image ? member.image : img}
          alt={member.name}
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold">{`${member.prefix}. ${member.firstName} ${member.lastName}`}</h3>
        <p className="text-gray-600">{member.designation}</p>
        <div className="flex justify-center gap-4 mt-3">
          
          
        </div>
      </div>
    </Link>
  );
}
